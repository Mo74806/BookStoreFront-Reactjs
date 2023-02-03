import React from "react";
import PageSubTitle from "../UI/PageSubTitle/PageSubTitle";
import classes from "./PageMainTitle.module.css";
export default function PageMainTitle(props) {
  return (
    <div
      className={`row d-flex px-md-4 m-0 align-items-center ${classes["page-title-container"]}`}
    >
      <div
        className={`col-md-6   d-md-block d-flex justify-content-center  ${classes.title}`}
      >
        {props.title}
      </div>
      <div
        className={`col-md-6   text-end   d-md-block d-flex ${classes["sub-title"]} `}
      >
        <PageSubTitle title={props.title} />
      </div>
    </div>
  );
}
