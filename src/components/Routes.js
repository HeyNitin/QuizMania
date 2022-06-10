import { Routes as R, Route } from "react-router";

import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import Categories from "../pages/Categories";
import Questions from "../pages/Questions";
import Result from "../pages/Result";
import Rules from "../pages/Rules";
import RequireAuth from "./RequireAuth.js";
import RequireNoAuth from "./RequireNoAuth.js";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const Routes = () => {
  return (
    <R>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route
        path="/rules/:quizName"
        element={
          <RequireAuth>
            <Rules />
          </RequireAuth>
        }
      />
      <Route
        path="/questions/:quizName"
        element={
          <RequireAuth>
            <Questions />
          </RequireAuth>
        }
      />
      <Route
        path="/result/:quizName"
        element={
          <RequireAuth>
            <Result />
          </RequireAuth>
        }
      />
      <Route
        path="/login"
        element={
          <RequireNoAuth>
            <Login />
          </RequireNoAuth>
        }
      />
      <Route
        path="/signup"
        element={
          <RequireNoAuth>
            <Signup />
          </RequireNoAuth>
        }
      />
      <Route path="*" element={<Error404 />} />
    </R>
  );
};

export default Routes;
