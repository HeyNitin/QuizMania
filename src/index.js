import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { AnswerProvider } from "./contexts/answerContext";
import { QuizProvider } from "./contexts/quizContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AnswerProvider>
        <QuizProvider>
          <App />
        </QuizProvider>
      </AnswerProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
