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
import LoginForm from "./LoginForm";

// import { useNavigate } from "react-router-dom";
export default function Login(props) {
  return (
    <div
      className={`row  py-5 m-0 ${classes["login-container"]} justify-content-center`}
    >
      <LoginForm
        className={`${props.className || "col-lg-4 col-md-6 col-10"}`}
        path={props.path}
      />
    </div>
  );
}
