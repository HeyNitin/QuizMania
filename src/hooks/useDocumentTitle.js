import { useEffect } from "react";

export const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = `QuizMania || ${title}`;
  }, [title]);
};
