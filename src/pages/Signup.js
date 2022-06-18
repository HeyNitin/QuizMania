import axios from "axios";
import { useReducer } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import { useToast } from "../components/Toast.js";
import {
  nameValidator,
  emailValidator,
  passwordValidator,
} from "../services/validatorServices";
import { useDocumentTitle } from "../hooks/useDocumentTitle.js";

const signupRedcuer = (state, action) => {
  switch (action.type) {
    case "Name":
      return { ...state, Name: action.payload };
    case "Email":
      return { ...state, Email: action.payload };
    case "Password":
      return { ...state, Password: action.payload };
    case "ConfirmPassword":
      return { ...state, ConfirmPassword: action.payload };
    case "tnc":
      return { ...state, tnc: action.payload };
    case "Error":
      return {
        ...state,
        Error: true,
        ErrorMsg: action.payload || "Something went wrong",
      };

    default:
      return state;
  }
};

const initialValue = {
  Name: "",
  Email: "",
  Password: "",
  ConfirmPassword: "",
  Error: false,
  ErrorMsg: "",
  tnc: false,
};
const Signup = () => {
  const [state, dispatch] = useReducer(signupRedcuer, initialValue);
  const { setToken } = useAuth();
  const { showToast } = useToast();
  const Navigate = useNavigate();
  const location = useLocation();

  useDocumentTitle("SignUp");

  const signupHandler = async (e) => {
    e.preventDefault();
    if (state.Name === "" || state.Password === "" || state.Email === "") {
      dispatch({
        type: "Error",
        payload: "Please enter all the fields",
      });
    } else if (state.Name.length < 3 || state.Name.length > 26) {
      dispatch({
        type: "Error",
        payload:
          "Name must contain atleast three letters and a maximum of 25 letters",
      });
    } else if (!nameValidator(state.Name)) {
      dispatch({
        type: "Error",
        payload:
          "Name must contain both firstname and surname. Middle name is optional and these must be seperated by one and only one space",
      });
    } else if (!emailValidator(state.Email)) {
      dispatch({
        type: "Error",
        payload: "Please enter a correct Email address",
      });
    } else if (state.Password.length < 6 || state.Password.length > 15) {
      dispatch({
        type: "Error",
        payload:
          "Password must have atleast 6 letters and a maximum of 15 letters",
      });
    } else if (!passwordValidator(state.Password)) {
      dispatch({
        type: "Error",
        payload:
          "Password must containe atleast 1 small character, 1 capital character, 1 number and 1 special character from !@#$%^&*",
      });
    } else if (state.Password !== state.ConfirmPassword) {
      dispatch({ type: "Error", payload: "Passwords don't match" });
    } else if (!state.tnc) {
      dispatch({ type: "Error", payload: "Please tick the checkbox" });
    } else {
      try {
        const res = await axios.post("/api/auth/signup", {
          email: state.Email.toLowerCase(),
          password: state.Password,
          name: state.Name,
        });
        res.status === 201 &&
          (setToken(res.data.encodedToken),
          showToast("success", "You're successfully logged in"));
        res.status === 200 &&
          (showToast("info", "Email already exists"),
          dispatch({
            type: "Error",
            payload: "Email already exists in database",
          }));
      } catch (error) {
        showToast("error", "Something went wrong while tring to sign you in");
      }
    }
  };

  return (
    <div className="signin-container">
      <div className="container">
        <p className="heading-sub text-centered">Signup</p>
        <form onSubmit={(e) => signupHandler(e)}>
          <label htmlFor="name">Enter your Name</label>

          <input
            onChange={(e) =>
              dispatch({ type: "Name", payload: e.target.value })
            }
            value={state.Name}
            type="text"
            id="name"
            placeholder="Enter your Name"
          />
          <label htmlFor="email-address">Email address</label>
          <input
            onChange={(e) =>
              dispatch({ type: "Email", payload: e.target.value })
            }
            value={state.Email}
            type="text"
            id="email-address"
            placeholder="john@cena.com"
          />
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) =>
              dispatch({ type: "Password", payload: e.target.value })
            }
            value={state.Password}
            id="password"
            type="password"
            placeholder="********"
          />
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            onChange={(e) =>
              dispatch({ type: "ConfirmPassword", payload: e.target.value })
            }
            value={state.ConfirmPassword}
            id="confirm-password"
            type="password"
            placeholder="********"
          />
          <div>
            <input
              onClick={(e) =>
                dispatch({ type: "tnc", payload: e.target.checked })
              }
              value={state.tnc}
              id="tnc"
              type="checkbox"
            />
            <label htmlFor="tnc">I accept all terms & conditions</label>
          </div>
          <div className="footer">
            <button className="button">Sign-Up</button>
            <p
              onClick={() =>
                Navigate("/login", {
                  state: {
                    from: { pathname: location?.state?.from?.pathname },
                  },
                })
              }
            >
              Already have an account? Login
            </p>
            {state.Error && (
              <div style={{ color: "red" }}>{state.ErrorMsg}</div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
