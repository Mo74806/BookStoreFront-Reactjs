import { Link } from "react-router-dom";
import React from "react";
import classes from "./PageSubTitle.module.css";

export default function PageSubTitle(props) {
  return (
    <div className="row d-flex m-lg-4  my-4 ">
      <div className="col-12">
        {" "}
        <span className="col-4">
          <button
            className={`${classes["text-sm"]} px-lg-3 fw-semibold text-black-50 title-btn bg-transparent border border-0`}
          >
            <Link className={classes.text} to="/home">
              HOME
            </Link>
          </button>{" "}
        </span>
        <i className="arrow  fa-solid fa-arrow-right-long"></i>{" "}
        {props.category && (
          <>
            <span className="col-4">
              <button
                className={`${classes["text-sm"]} px-3 fw-semibold text-black-50 title-btn bg-transparent border border-0`}
              >
                {" "}
                <Link className={classes.text} to="/books">
                  {props.category}
                </Link>
              </button>
            </span>
            <i className="arrow fa-solid fa-arrow-right-long"></i>
          </>
        )}
        <span
          className={` col-4 ${classes["text-sm"]} ${classes["main-color"]} px-3 fw-semibold title-btn bg-transparent border border-0`}
        >
          {props.title.toUpperCase()}
        </span>
      </div>
    </div>
  );
}
