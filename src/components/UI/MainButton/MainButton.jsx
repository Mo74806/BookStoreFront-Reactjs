import React from "react";
import classes from "./MainButton.module.css";
import FilterIcon from "@material-ui/icons/BookOutlined";

export default function MainButton(props) {
  return (
    <button
      style={{ backgroundColor: props.color || "#f65d4e" }}
      className={`rounded-pill ${classes["section-btn"]}`}
      onClick={(e) => props.handleClick(e)}
    >
      <p className="text-black d-inline">{props.filter && <FilterIcon />}</p>
      {props.text}
    </button>
  );
}
