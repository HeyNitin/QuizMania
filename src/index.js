import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext";
import { AnswerProvider } from "./contexts/answerContext";
import { QuizProvider } from "./contexts/quizContext";
import { RulesProvider } from "./contexts/rulesContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <AnswerProvider>
          <QuizProvider>
            <RulesProvider>
              <App />
            </RulesProvider>
          </QuizProvider>
        </AnswerProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
