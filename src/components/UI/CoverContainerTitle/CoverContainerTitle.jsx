import React from "react";
import classes from "./CoverContainerTitle.module.css";
export default function CoverContainerTitle(props) {
  return (
    <div className="row  d-flex justify-content-center">
      <div
        className={`col-lg-2  col-4 ${classes["cover-title"]} fw-bold text-center fs-4`}
      >
        {props.title}
      </div>
    </div>
  );
}
