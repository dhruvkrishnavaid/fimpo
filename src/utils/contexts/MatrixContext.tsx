import { createContext, useEffect, useReducer } from "react";
import { reducer } from "../functions";
import { initialMatrixState } from "./State";

const MatrixContext = createContext(initialMatrixState as any);

let persistedMatrixState: any;

switch (window.localStorage["persistedMatrixState"]) {
  case undefined:
    persistedMatrixState = {};
    break;
  default:
    persistedMatrixState = JSON.parse(
      window.localStorage["persistedMatrixState"],
    );
    break;
}

const MatrixContextProvider: React.FC<
  React.PropsWithChildren<{ children: any }>
> = (props: any) => {
  const fullState = {
    ...initialMatrixState,
    ...persistedMatrixState,
  };

  const [state, dispatch] = useReducer(reducer, fullState);
  useEffect(() => {
    window.localStorage["persistedMatrixState"] = JSON.stringify({
      UrgentAndImportant: state.UrgentAndImportant,
      UrgentButNotImportant: state.UrgentButNotImportant,
      NotUrgentButImportant: state.NotUrgentButImportant,
      NotUrgentAndNotImportant: state.NotUrgentAndNotImportant,
      showToast: state.showToast,
      toastMessage: state.toastMessage,
    });
  }, [state]);
  const value = { state, dispatch };
  return (
    <MatrixContext.Provider value={value}>
      {props.children}
    </MatrixContext.Provider>
  );
};

export { MatrixContext, MatrixContextProvider };
