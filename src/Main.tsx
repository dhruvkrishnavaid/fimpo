import { useContext } from "react";
import App from "./App";
import Login from "./Login";
import { UserContext } from "./utils/contexts/UserContext";

const Main: React.FC = () => {
  const { state } = useContext(UserContext);
  return !!state.user ? <App /> : <Login />;
};

export default Main;
