import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useToast } from "../components/Toast";
import { useEffect } from "react";

const Error404 = () => {
  const { showToast } = useToast();

  useDocumentTitle("Error404");

  useEffect(() => showToast("error", "Page not found"), []);

  return <div className="error-container heading-sub">Page not Found</div>;
};

export default Error404;
