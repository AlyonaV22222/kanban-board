import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Issue {
  id: number;
  title: string;
  state: "open" | "closed";
  assignee: string | null;
}

interface IssuesState {
  todo: Issue[];
  inProgress: Issue[];
  done: Issue[];
  loading: boolean;
}

const initialState: IssuesState = {
  todo: [],
  inProgress: [],
  done: [],
  loading: false,
};

const issuesSlice = createSlice({
  name: "issues",
  initialState,
  reducers: {
    setIssues: (state, action: PayloadAction<Issue[]>) => {
      state.todo = action.payload.filter((issue) => !issue.assignee && issue.state === "open");
      state.inProgress = action.payload.filter((issue) => issue.assignee && issue.state === "open");
      state.done = action.payload.filter((issue) => issue.state === "closed");
      state.loading = false;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    moveIssue: (
      state,
      action: PayloadAction<{ id: number; from: "todo" | "inProgress" | "done"; to: "todo" | "inProgress" | "done"; index: number }>
    ) => {
      const { id, from, to, index } = action.payload;

      if (!Array.isArray(state[from]) || !Array.isArray(state[to])) {
        console.error("Invalid column names:", from, to);
        return;
      }

      const issueIndex = state[from].findIndex((issue) => issue.id === id);
      if (issueIndex === -1) return;

      const [movedIssue] = state[from].splice(issueIndex, 1);
      state[to].splice(index, 0, movedIssue);
    },
  },
});

export const { setIssues, setLoading, moveIssue } = issuesSlice.actions;
export default issuesSlice.reducer;
