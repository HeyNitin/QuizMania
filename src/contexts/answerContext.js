import { createContext, useState, useContext } from "react";

const answerContext = createContext();

const AnswerProvider = ({ children }) => {
  const [answers, setAnswers] = useState([]);

  return (
    <answerContext.Provider value={{ answers, setAnswers }}>
      {children}
    </answerContext.Provider>
  );
};

const useAnswer = () => useContext(answerContext);

export { useAnswer, AnswerProvider };
