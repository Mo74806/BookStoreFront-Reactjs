import React from "react";
import classes from "./Login.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";
import { userActions } from "../../store/reducers/userSlice";
import axios from "axios";
import { setCookie } from "../../store/reducers/userSlice";
import { useEffect } from "react";
import MainButton from "../UI/MainButton/MainButton";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state);
  useEffect(() => {
    {
      user.isLoggedIn && navigate("/home");
    }
  }, []);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loginError, setLoginError] = useState({
    email: null,
    password: null,
  });
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  // const { user } = useSelector((state) => state.user);
  let handleChange = (e) => {
    if (e.target.name === "email") {
      if (!(e.target.value.length >= 8)) {
        setLoginError((prev) => ({
          ...prev,
          email: "please provide correct email",
        }));
      } else {
        setLoginError((prev) => ({
          ...prev,
          [e.target.name]: null,
        }));
      }
    } else {
      if (!(e.target.value.length >= 8)) {
        setLoginError((prev) => ({
          ...prev,
          password: "please enter coreect password",
        }));
      } else {
        setLoginError((prev) => ({
          ...prev,
          [e.target.name]: null,
        }));
      }
    }

    setLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  let handleLogin = async () => {
    const res = await axios.post(`${BASE_URL}users/login`, loginData);
    console.log(res);
    if (res.data.data.user) {
      let token = "Bearer " + res.data.token;
      setCookie("token", token, 1);
      dispatch(
        userActions.setUser({ user: res.data.data.user, isLoggedIn: true })
      );
      navigate("/home");
    }
  };

  return (
    <div
      className={`row  py-5 m-0 ${classes["login-container"]} justify-content-center`}
    >
      {" "}
      <div
        className={`col-lg-4 col-md-6 col-10 px-4 text-white ${classes.form} py-5 my-5 `}
      >
        <div className={`h1 fw-semibold ${classes["price"]} `}>Sign In</div>
        <div className="mb-3">
          <label>Eemail address</label>
          <input
            name="email"
            type="text"
            className="form-control rounded-pill"
            placeholder="Enter eemail"
            onChange={handleChange}
          />
        </div>
        {loginError.email && (
          <p className={classes["text-sm"]}>{loginError.email}</p>
        )}
        <div className="mb-3">
          <label>Password</label>
          <input
            name="password"
            type="password"
            className="form-control rounded-pill"
            placeholder="Enter password"
            onChange={handleChange}
          />
        </div>
        {loginError.password && (
          <p className={classes["text-sm"]}>{loginError.password}</p>
        )}
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label
              className={classes["custom-control-label"]}
              htmlFor="customCheck1"
            >
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <MainButton handleClick={handleLogin} text="Log in" />
        </div>
        <p
          className={`${classes["text-sm"]} ${classes["forgot-password"]} text-right`}
        >
          Forgot <a href="#">password?</a>
        </p>
      </div>
    </div>
  );
}
