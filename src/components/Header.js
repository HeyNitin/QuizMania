import { useNavigate } from "react-router-dom";

const Header = () => {
  let Navigate = useNavigate();
  return (
    <header className="header">
      <div onClick={() => Navigate("/Home")} className="header-logo heading-md">
        QuizMania
      </div>
    </header>
  );
};

export default Header;
