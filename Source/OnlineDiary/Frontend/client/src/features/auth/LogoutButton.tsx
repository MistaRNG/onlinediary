import "./LogoutButton.css";
import { Button } from "@blueprintjs/core";
import { logout } from "./authSlice";
import { useDispatch } from "react-redux";
import useCurrentUser from "common/hooks/useCurrentUser";
import { AppDispatch } from "../../app/store";

const LogoutButton: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const clickHandler = () => dispatch(logout());
  const { username } = useCurrentUser();

  return (
    <div className="Logout-Button">
      <Button>Logged in as @{username}</Button>
      <Button icon="log-out" onClick={clickHandler} />
    </div>
  );
};

export default LogoutButton;
