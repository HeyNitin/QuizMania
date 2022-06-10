import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
const RequireAuth = ({ children }) => {
  const { token } = useAuth();
  const res = localStorage.getItem("token");
  const location = useLocation();

  return res || token ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace={true} />
  );
};

export default RequireAuth;
