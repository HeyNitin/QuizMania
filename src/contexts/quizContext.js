import { createContext, useState, useContext } from "react";

const quizContext = createContext();

const QuizProvider = ({ children }) => {
  const [quiz, setQuiz] = useState([]);

  return (
    <quizContext.Provider value={{ quiz, setQuiz }}>
      {children}
    </quizContext.Provider>
  );
};

const useQuiz = () => useContext(quizContext);

export { useQuiz, QuizProvider };
