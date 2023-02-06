import React, { useEffect, useState } from "react";
import classes from "./Login.module.css";
import { useSelector, useDispatch } from "react-redux";
import { userActions, setCookie } from "../../store/reducers/userSlice";
import axios from "axios";
import MainButton from "../UI/MainButton/MainButton";
import { useLocation, useNavigate, Link } from "react-router-dom";

export default function LoginForm(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state);
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loginError, setLoginError] = useState({
    email: null,
    password: null,
    validation: null,
  });
  useEffect(() => {
    user.isLoggedIn && navigate("/home");
  }, []);
  //handle change of login data and track validation
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
          password: "please enter correct password",
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
  //handle login and sending the request to the server and saving the token
  let handleLogin = async () => {
    try {
      if (loginData.email && loginData.password) {
        const res = await axios.post(`${BASE_URL}users/login`, loginData);
        if (res.data.data.user) {
          let token = "Bearer " + res.data.token;
          setCookie("token", token, 1);
          dispatch(
            userActions.setUser({ user: res.data.data.user, isLoggedIn: true })
          );
          navigate(`${props.path || "/home"}`);
        }
      }
    } catch (err) {
      setLoginError((prev) => ({
        ...prev,
        validation: "email or password are not correct",
      }));
    }
  };

  return (
    <div
      className={`${props.className} px-4 text-white ${classes.form} py-5 my-5 `}
    >
      <div className={`h1 fw-semibold ${classes["price"]} `}>Sign In</div>
      {loginError.validation && (
        <div className="text-danger text-center mx-auto">
          {loginError.validation}
        </div>
      )}
      <div className="mb-3">
        <label>Email address</label>
        <input
          name="email"
          type="text"
          className="form-control rounded-pill"
          placeholder="Enter email"
          onChange={handleChange}
        />
      </div>
      {loginError.email && (
        <p className={`${classes["text-sm"]} text-danger`}>
          {loginError.email}
        </p>
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
        <p className={`${classes["text-sm"]} text-danger`}>
          {loginError.password}
        </p>
      )}
      {/* <div className="mb-3">
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
      </div> */}
      <div className="d-grid">
        <MainButton handleClick={handleLogin} text="Log in" />
      </div>
      <p
        className={`${classes["text-sm"]} ${classes["forgot-password"]} text-right`}
      >
        Forgot <a href="#">password?</a>
      </p>

      <p
        className={`${classes["text-sm"]} ${classes["forgot-password"]} text-right`}
      >
        <Link to="/signup">Sign up New account</Link>
      </p>
    </div>
  );
}
