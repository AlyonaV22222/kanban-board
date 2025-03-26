import React, { useRef } from "react";
import { useDrop } from "react-dnd";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import IssueCard from "./IssueCard";
import { moveIssue } from "../store/issuesSlice";
import "../../src/styles.css";

interface ColumnProps {
  title: string;
  type: "todo" | "inProgress" | "done";
}

interface IssueItem {
  id: number;
  from: "todo" | "inProgress" | "done";
}

const Column: React.FC<ColumnProps> = ({ title, type }) => {
  const issues = useSelector((state: RootState) => {
    if (type === "todo" || type === "inProgress" || type === "done") {
      return state.issues[type];
    }
    return [];
  });
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);

  const [, drop] = useDrop<IssueItem>({
    accept: "ISSUE",
    drop: (item) => {
      dispatch(moveIssue({ id: item.id, from: item.from, to: type, index: 0 }));
    },
  });

  drop(ref);

  return (
    <div ref={ref} className="column">
      <h2>{title}</h2>
      {issues.map((issue, index) => (
        <IssueCard key={issue.id} issue={issue} index={index} from={type} />
      ))}
    </div>
  );
};

export default Column;
