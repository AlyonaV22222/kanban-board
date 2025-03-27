import React, { useState } from "react";
import { Input, Button, Layout } from "antd";
import { fetchIssues } from "./utils/githubApi";
import { useDispatch } from "react-redux";
import { setIssues, setLoading } from "./store/issuesSlice";
import Column from "./components/Column";

const { Header, Content } = Layout;

const App: React.FC = () => {
  const [repoUrl, setRepoUrl] = useState("");
  const dispatch = useDispatch();

  const loadIssues = async () => {
    dispatch(setLoading(true));
    const issues = await fetchIssues(repoUrl);
    dispatch(setIssues(issues));
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Header>
        <Input
          value={repoUrl}
          onChange={(e) => setRepoUrl(e.target.value)}
          placeholder="Enter GitHub repo URL"
          style={{ width: "80%", marginRight: "10px" }}
        />
        <Button type="primary" onClick={loadIssues}>Load</Button>
      </Header>
      <Content style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
  <Column title="ToDo" type="todo" />
  <Column title="In Progress" type="inProgress" />
  <Column title="Done" type="done" />
</Content>
    </Layout>
  );
};

export default App;