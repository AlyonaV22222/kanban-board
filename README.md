HEADThis project implements a GitHub repo issues viewer as a Kanban board where users can load issues from any GitHub repository, categorize them into different columns, and manage them interactively.

Requirements
Repo URL Input: The user should enter the repository URL in the input field on top of the page (e.g., https://github.com/facebook/react), then press "Load."

Load Issues: The app will load issues from the repository using the GitHub API.

Kanban Columns: The app contains three columns:

ToDo: All new (open) issues.

In Progress: Open issues that have an assignee.

Done: Closed issues.

Drag-and-Drop: Users should be able to drag and drop issues between columns and reorder them.

Persistence: The app should store the current issue position (column and order) between sessions in the browser. When the user loads different repos, changes made to issues in one repo should be retained across sessions.

Links: Users should be able to visit the repository owner's profile and the repository itself via links under the input field.

Technologies Used
React 18 with Hooks (No class components)

TypeScript for static typing

UI Library: Ant Design for a responsive and modern UI.

State Management: Redux Toolkit for managing the app state.

Drag-and-Drop: React DnD with the HTML5 backend for drag-and-drop functionality.

Build Tool: Vite for fast development and building.
