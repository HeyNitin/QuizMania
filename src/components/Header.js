import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

const Header = () => {
  const Navigate = useNavigate();
  const { token } = useAuth();

  const logoutHandler = () => {
    setToken(false);
    localStorage.removeItem("token");
    Navigate("/");
    showToast("success", "You're successfully logged out");
  };

  return (
    <header className="header">
      <div onClick={() => Navigate("/Home")} className="header-logo heading-md">
        QuizMania
      </div>
      {!token ? (
        <button onClick={() => Navigate("/login")} className="button btn-link">
          Login
        </button>
      ) : (
        <button onClick={() => logoutHandler()} className="button btn-link">
          Logout
        </button>
      )}
    </header>
  );
};

export default Header;
