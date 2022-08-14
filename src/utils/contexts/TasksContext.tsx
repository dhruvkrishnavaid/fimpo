import { createContext, useEffect, useReducer } from "react";
import { loggerReducer } from "../functions";
import { initialState } from "./State";

const TasksContext = createContext(initialState as any);

let persistedState: any;

switch (window.localStorage["persistedState"]) {
  case undefined:
    persistedState = {};
    break;
  default:
    persistedState = JSON.parse(window.localStorage["persistedState"]);
    break;
}

const TasksContextProvider: React.FC<
  React.PropsWithChildren<{ children: any }>
> = (props: any) => {
  const fullState = {
    ...initialState,
    ...persistedState,
  };

  const [state, dispatch] = useReducer(loggerReducer, fullState);
  useEffect(() => {
    window.localStorage["persistedState"] = JSON.stringify({
      tasks: state.tasks,
      showToast: state.showToast,
      toastMessage: state.toastMessage,
    });
  }, [state]);
  const value = { state, dispatch };
  return (
    <TasksContext.Provider value={value}>
      {props.children}
    </TasksContext.Provider>
  );
};

export { TasksContext, TasksContextProvider };
