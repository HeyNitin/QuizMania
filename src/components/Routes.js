import { Routes as R, Route } from "react-router";

import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import Categories from "../pages/Categories";
import Questions from "../pages/Questions";
import Result from "../pages/Result";
import Rules from "../pages/Rules";

const Routes = () => {
  return (
    <R>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/rules/:quizName" element={<Rules />} />
      <Route path="/questions/:quizName" element={<Questions />} />
      <Route path="/result/:quizName" element={<Result />} />
      <Route path="*" element={<Error404 />} />
    </R>
  );
};

export default Routes;
