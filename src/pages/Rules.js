import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useRules } from "../contexts/rulesContext";

const Rules = () => {
  const [isCheckBoxOn, setIsCheckBoxOn] = useState(false);
  const Navigate = useNavigate();
  const { quizName } = useParams();
  const { setIsRulesAgreed } = useRules();

  useDocumentTitle(`${quizName}'s Rules`);
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
          onChange={(e) => {
            setIsRulesAgreed(true);
            setIsCheckBoxOn(e.target.checked);
          }}
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
