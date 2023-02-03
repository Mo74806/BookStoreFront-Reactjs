import React from "react";
import classes from "./LoadingSpinner.module.css";
export default function LoadingSpinner() {
  return (
    <div className={classes.body}>
      {" "}
      <div className={classes.loader}></div>
    </div>
  );
}
