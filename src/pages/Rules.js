import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Rules = () => {
  const [isCheckBoxOn, setIsCheckBoxOn] = useState(false);
  let Navigate = useNavigate();
  let { quizName } = useParams();
  return (
    <div className="quiz-rules">
      <h1 className="heading-sm">Rules</h1>
      <ol>
        <li>For each correct answer gets +1 points.</li>
        <li>For each wrong answer gets 0 points.</li>
        <li>Only one chance for each answer.</li>
      </ol>
      <label>
        <input
          onChange={(e) => setIsCheckBoxOn(e.target.checked)}
          type="checkbox"
        />
        I agree to above mentioned Rules.
      </label>

      <button
        onClick={() => Navigate(`/questions/${quizName}`)}
        disabled={!isCheckBoxOn}
        className="btn-primary"
      >
        Lets go!
      </button>
    </div>
  );
};

export default Rules;
