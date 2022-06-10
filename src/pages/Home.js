import { useNavigate } from "react-router-dom";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const Home = () => {
  let Navigate = useNavigate();
  useDocumentTitle("Home");

  return (
    <div className="homepage-container">
      <div className="item-container">
        <p>
          <span className="heading-sm">Ready to play?</span>Let's get Started
        </p>
        <button onClick={() => Navigate("/categories")} className=" btn-cta">
          Let's Go
        </button>
      </div>
    </div>
  );
};

export default Home;
