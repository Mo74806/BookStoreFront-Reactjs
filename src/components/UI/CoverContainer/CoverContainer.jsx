import React from "react";
import classes from "./CoverContainer.module.css";
export default function CoverContainer(props) {
  return (
    <div
      className={`${props.classes}  d-flex ${classes["cover-container"]} border`}
    >
      <div className={`row d-flex justify-content-center ${classes.children} `}>
        {" "}
        {props.children}
      </div>
    </div>
  );
}
