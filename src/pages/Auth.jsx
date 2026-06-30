import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";

export default function Auth() {
  const [mode, setMode] = useState("signup");
  const { signUp, user, logout, login } = useContext(AuthContext);
  const { register, handleSubmit, formState = { errors } } = useForm();
  function onSubmit(data) {
    let result;
    if (mode === "signup") {
      result = signUp(data.email, data.password);
    } else {
      result = login(data.email, data.password);
    }
    console.log(result);
  }

  return (
    <div className="page">
      <div className="container">
        <div className="auth-container">
          {user && <p>User Loggedin: {user.email}</p>}
          <h1 className="page-title">
            {mode === "signup" ? "Sing Up" : "Login"}
          </h1>
          <form className="auth-form">
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                className="form-input"
                type="email"
                id="email"
                {...register("email", { required: "Email is required" })}
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="passwords">
                Password
              </label>
              <input
                className="form-input"
                type="password"
                id="passwords"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                  maxLength: {
                    value: 12,
                    message: "Password must be at least 12 characters",
                  },
                })}
              />
            </div>
            <button type="submit" className="btn btn-primary btn-large">
              {mode === "signup" ? "Sing Up" : "Login"}
            </button>
          </form>
          <div className="auth-switch">
            {mode === "signup" ? (
              <p>
                Already have an account ?{""}{" "}
                <span className="auth-link" onClick={() => setMode(Login)}>
                  Login
                </span>
              </p>
            ) : (
              <p>
                Already have an account ?{""}{" "}
                <span className="auth-link" onClick={() => setMode(signup)}>
                  Sign Up
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
