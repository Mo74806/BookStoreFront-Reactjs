import React from "react";
import { Slider } from "@mui/material";
import classes from "../Filters.module.css";

export default function FilterRange(props) {
  return (
    <>
      <div className={`bg-white ${classes["filter-option"]} border`}>
        <div className={`${classes["filter-title"]}  px-4 py-3`}>
          {props.name}
        </div>
        <div className="">
          <div className="row justify-content-center">
            <div className="col-8 mt-3">
              <Slider
                aria-label="Always visible"
                size="small"
                defaultValue={70}
                valueLabelDisplay="auto"
                max={props.max}
                marks={props.marks}
                color="success"
                onChange={(e) => props.handleChange(e.target.value)}
              />
            </div>
          </div>
          <div className="row px-5 mb-4 mt-2">
            <small className="fw-100 text-black-50">
              {props.name} :{" "}
              <span className="fw-400 text-black">
                {props.min}$ : {props.max}$
              </span>{" "}
            </small>
          </div>
        </div>
      </div>
    </>
  );
}
