import React from "react";
import classes from "./Signup.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { userActions } from "./../../store/reducers/userSlice";
// import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { setCookie } from "./../../store/reducers/userSlice";
import MainButton from "../UI/MainButton/MainButton";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Signup() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const BASE_URL = "https://book-store-api-kappa.vercel.app/api/v1/";
  const navigate = useNavigate();
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    phone: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [loginError, setLoginError] = useState({
    firstName: null,
    lastName: null,
    userName: null,
    phone: null,
    email: null,
    password: null,
    passwordConfirm: null,
  });

  const { user } = useSelector((state) => state.user);
  let dispatch = useDispatch();
  let handleChange = (e) => {
    if (e.target.name === "firstName") {
      if (!(e.target.value.length >= 3)) {
        setLoginError((prev) => ({
          ...prev,
          FirstName: "first name must be greater than 3 char",
        }));
      } else {
        setLoginError((prev) => ({
          ...prev,
          [e.target.name]: null,
        }));
      }
    } else if (e.target.name === "lastName") {
      if (!(e.target.value.length >= 3)) {
        setLoginError((prev) => ({
          ...prev,
          lastName: "last name must be greater than 3 char",
        }));
      } else {
        setLoginError((prev) => ({
          ...prev,
          [e.target.name]: null,
        }));
      }
    } else if (e.target.name === "userName") {
      //cheack user name is uniqe
      if (!(e.target.value.length >= 5)) {
        setLoginError((prev) => ({
          ...prev,
          userName: "user name must be 5 char",
        }));
      } else {
        setLoginError((prev) => ({
          ...prev,
          [e.target.name]: null,
        }));
      }
    } else if (e.target.name === "phone") {
      if (
        !(
          String(e.target.value)
            .toLowerCase()
            .match(`^01[0-1-2-5]{1}[0-9]{8}`) && e.target.value.length === 11
        )
      ) {
        setLoginError((prev) => ({
          ...prev,
          phone: "please provide correct phone number",
        }));
      } else {
        setLoginError((prev) => ({
          ...prev,
          [e.target.name]: null,
        }));
      }
    }

    if (e.target.name === "email") {
      if (
        !String(e.target.value)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
      ) {
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
    } else if (e.target.name === "password") {
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
    } else if (e.target.name === "passwordConfirm") {
      if (
        !(e.target.value.length >= 8 && e.target.value === signupData.password)
      ) {
        setLoginError((prev) => ({
          ...prev,
          passwordConfirm: "please enter coreect password",
        }));
      } else {
        setLoginError((prev) => ({
          ...prev,
          [e.target.name]: null,
        }));
      }
    }

    setSignupData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  let handleSignup = async () => {
    const res = await axios.post(`${BASE_URL}users/signup`, signupData);
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
        <div className={`h1 fw-semibold ${classes["price"]} `}>Sign Up</div>

        <div className="mb-3">
          <label>First Name</label>
          <input
            name="firstName"
            type="text"
            className="form-control rounded-pill"
            placeholder="Enter first name"
            onChange={handleChange}
          />
        </div>
        {loginError.firstName && (
          <p className={classes["text-sm"]}>{loginError.firstName}</p>
        )}

        <div className="mb-3">
          <label>Last Name</label>
          <input
            name="lastName"
            type="text"
            className="form-control rounded-pill"
            placeholder="Enter last name"
            onChange={handleChange}
          />
        </div>
        {loginError.lastName && (
          <p className={classes["text-sm"]}>{loginError.lastName}</p>
        )}

        <div className="mb-3">
          <label>User Name</label>
          <input
            name="userName"
            type="text"
            className="form-control rounded-pill"
            placeholder="Enter user name"
            onChange={handleChange}
          />
        </div>
        {loginError.userName && (
          <p className={classes["text-sm"]}>{loginError.userName}</p>
        )}

        <div className="mb-3">
          <label>phone</label>
          <input
            name="phone"
            type="text"
            className="form-control rounded-pill"
            placeholder="Enter phone"
            onChange={handleChange}
          />
        </div>
        {loginError.phone && (
          <p className={classes["text-sm"]}>{loginError.phone}</p>
        )}

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
          <label>Password Confirm</label>
          <input
            name="passwordConfirm"
            type="passwordConfirm"
            className="form-control rounded-pill"
            placeholder="Enter password confirm"
            onChange={handleChange}
          />
        </div>
        {loginError.passwordConfirm && (
          <p className={classes["text-sm"]}>{loginError.passwordConfirm}</p>
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
          <MainButton handleClick={handleSignup} text="Sign up" />
        </div>
        <p
          className={`${classes["text-sm"]} ${classes["forgot-password"]} text-right`}
        >
          already have an email? <a href="#">Login?</a>
        </p>
      </div>
    </div>
  );
}
