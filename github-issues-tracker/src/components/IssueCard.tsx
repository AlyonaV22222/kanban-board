import React, { useRef } from "react";
import { useDrag } from "react-dnd";
import "../../src/styles.css";

interface IssueCardProps {
  issue: { id: number; title: string };
  index: number;
  from: "todo" | "inProgress" | "done";
}

const IssueCard: React.FC<IssueCardProps> = ({ issue, index, from }) => {
  const ref = useRef<HTMLDivElement>(null);

  const [{ isDragging }, drag] = useDrag({
    type: "ISSUE",
    item: { id: issue.id, from, index },
    collect: (monitor) => {
      console.log("Drag state updated:", monitor.isDragging());
      return { isDragging: monitor.isDragging() };
    },
  });

  drag(ref);

  return (
    <div ref={ref} className="issue-card" style={{ opacity: isDragging ? 0.5 : 1 }}>
      {issue.title}
    </div>
  );
};

export default IssueCard;
