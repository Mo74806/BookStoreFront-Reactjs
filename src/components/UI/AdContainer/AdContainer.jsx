import React from "react";
import classes from "./AdContainer.module.css";
import MainButton from "./../MainButton/MainButton";
import { useNavigate } from "react-router-dom";
export default function AdContainer(props) {
  let navigate = useNavigate();
  let goShop = () => {
    navigate("/books");
  };
  return (
    <>
      <div
        className={`${classes["ad-container"]} `}
        style={{ background: props.color }}
      >
        <p
          style={{ color: props.textColor || "black" }}
          className={classes["ad-title"]}
        >
          {props.title}
        </p>
        <p
          style={{ color: props.textColor || "black" }}
          className={classes["ad-subtitle"]}
        >
          {props.subtitle}{" "}
        </p>
        <div className={`${classes["ad-btn"]}`}>
          <MainButton text="Show More" handleClick={goShop} />
        </div>
        <div className="row m-0">
          <div className="col-6">
            <img
              src={props.img}
              className={classes["ad-img"]}
              style={{ width: 200 }}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
