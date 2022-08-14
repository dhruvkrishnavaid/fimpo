import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Main from "./Main";
import { MatrixContextProvider } from "./utils/contexts/MatrixContext";
import { TasksContextProvider } from "./utils/contexts/TasksContext";
import { UserContextProvider } from "./utils/contexts/UserContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UserContextProvider>
      <TasksContextProvider>
        <MatrixContextProvider>
          <Main />
        </MatrixContextProvider>
      </TasksContextProvider>
    </UserContextProvider>
  </React.StrictMode>,
);
