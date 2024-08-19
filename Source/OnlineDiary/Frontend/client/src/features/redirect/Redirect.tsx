import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getTodayDate } from "common/helpers";
import Loading from "../loading/Loading";
import useCurrentUser from "common/hooks/useCurrentUser";

const Redirect: React.FC = () => {
  const navigate = useNavigate();
  const { username } = useCurrentUser();

  useEffect(() => {
    const url = username === "" ? "/login" : `/journal/${getTodayDate()}`;
    navigate(url);
  }, [username, navigate]);

  return <Loading />;
};

export default Redirect;
