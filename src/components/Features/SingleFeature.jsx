import React from "react";
import classes from "./Features.module.css";

export default function SingleFeature(props) {
  return (
    <>
      <div
        className={`row d-flex   align-items-center mx-auto ${classes["contain"]}`}
      >
        <div className="col-2  ">
          <div
            className={`${classes["feature-container"]} d-flex justify-content-center`}
          ></div>
        </div>
        <div className={`col-md-10 ${classes.text} m-0 p-0 mt-3`}>
          <div className="row m-0">
            <p className={`${classes["title"]}`}>{props.title}</p>
          </div>
          <div className="row m-0">
            <p className={`${classes["subtitle"]}`}>{props.subtitle}</p>
          </div>
        </div>
      </div>
    </>
  );
}
