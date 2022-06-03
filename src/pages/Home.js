import { useNavigate } from "react-router-dom";

const Home = () => {
  let Navigate = useNavigate();
  return (
    <div className="homepage-container">
      <div className="text">
        <p>
          <span className="heading-sm">Ready to play?</span>Let's get Started
        </p>
        <button onClick={() => Navigate("/categories")} className=" btn-cta">
          Let's Go
        </button>
      </div>
      <div className="img-container">
        <img
          className="img-responsive"
          src="https://i.postimg.cc/vZj3v65z/quiz.png"
          alt="quiz-img"
        />
      </div>
    </div>
  );
};

export default Home;
