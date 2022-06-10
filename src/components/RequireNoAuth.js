import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
const RequireNoAuth = ({ children }) => {
  const { token } = useAuth();
  const res = localStorage.getItem("token");
  const location = useLocation();

  return res || token ? (
    <Navigate
      to={location?.state?.from?.pathname || "/"}
      state={{ from: location }}
      replace={true}
    />
  ) : (
    children
  );
};

export default RequireNoAuth;
