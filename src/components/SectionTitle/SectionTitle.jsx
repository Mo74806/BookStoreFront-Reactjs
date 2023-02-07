import React from "react";
import { useNavigate } from "react-router-dom";
import MainButton from "../UI/MainButton/MainButton";
import classes from "./SectionTitle.module.css";
export default function SectionTitle(props) {
  let navigate = useNavigate();
  let goShop = () => {
    navigate("/books");
  };
  return (
    <>
      <div className="row d-flex m-0 ">
        <div
          className={`col-lg-2 d-flex align-items-center  col-4 ${
            props.textSize ? "h6 my-2 " : "h2"
          } fw-bold  `}
        >
          {props.title}
        </div>
        <div
          className={`col-lg-8 ${props.button ? "col-4" : "col-7"}
          d-flex justify-content-center align-items-center  mt-4 ${
            classes["section-herizontal-line"]
          } `}
        ></div>
        {props.button ? (
          <div className="col-lg-2 col-4 m-0">
            <MainButton text="View All" />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
