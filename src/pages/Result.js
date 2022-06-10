import { useAnswer } from "../contexts/answerContext";
import { useQuiz } from "../contexts/quizContext";
import { useState, useEffect } from "react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useParams, useNavigate } from "react-router-dom";
import { useToast } from "../components/Toast";

const Result = () => {
  const { answers } = useAnswer();
  const { quiz } = useQuiz();
  const [finalScore, setFinalScore] = useState(0);
  const { quizName } = useParams();
  const Navigate = useNavigate();
  const { showToast } = useToast();

  useDocumentTitle(`${quizName}'s Result`);

  if (quiz[0]) {
    useEffect(
      () =>
        quiz[0].mcqs.map((ques, index) => {
          if (ques.answer === ques.options[answers[index]]) {
            setFinalScore((prev) => prev + 1);
          }
          return ques;
        }),
      []
    );

    return (
      <div className="result-container">
        {quiz.map((data) => (
          <div key={data._id}>
            <div className="heading-sm text-centered">
              Final Score:{" "}
              <a className="result">
                {finalScore}/{data.totalScore}
              </a>
            </div>
            <div className="questions-container">
              {data.mcqs.map((ques, index) => (
                <div className="result-area" key={ques._id}>
                  <p className="heading-sub">{ques.question}</p>
                  {ques.options.map((option) => (
                    <div key={Math.random()}>
                      <button
                        className={`btn-primary ${
                          ques.answer === option ? "answer" : ""
                        }  ${
                          option === ques.options[answers[index]]
                            ? "selected"
                            : ""
                        }`}
                      >
                        {option}
                      </button>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    useEffect(() => {
      Navigate(`/rules/${quizName}`);
      showToast("info", "Please Agree to the rules first");
    }, []);

    return <div></div>;
  }
};

export default Result;
