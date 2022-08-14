import { createContext, useEffect, useReducer } from "react";
import { reducer } from "../functions";
import { user } from "./State";

const UserContext = createContext(user);

let persistedUser: any;

switch (window.localStorage["persistedUser"]) {
  case undefined:
    persistedUser = {};
    break;
  default:
    persistedUser = JSON.parse(window.localStorage["persistedUser"]);
    break;
}

const UserContextProvider: React.FC<
  React.PropsWithChildren<{ children: any }>
> = (props: any) => {
  const fullState = {
    ...user,
    ...persistedUser,
  };

  const [state, dispatch] = useReducer(reducer, fullState);

  useEffect(() => {
    window.localStorage["persistedUser"] = JSON.stringify({
      user: state.user,
    });
  }, [state]);

  const value = { state, dispatch };
  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
