import React from "react";
import classes from "./Features.module.css";
import Offer from "@material-ui/icons/CardGiftcard";
import Delivery from "@material-ui/icons/FastForward";
import Deal from "@material-ui/icons/DoneAll";
import Discount from "@material-ui/icons/ArrowDownwardOutlined";
import Return from "@material-ui/icons/RepeatRounded";
export default function SingleFeature(props) {
  return (
    <>
      <div
        className={` row d-flex align-items-center justify-content-center ${classes["contain"]}`}
      >
        <div className="text-center col-2  ">
          <div
            className={`${classes["feature-container"]}  d-flex align-items-center text-white  justify-content-center`}
          >
            {props.icon === "Offer" && <Offer />}
            {props.icon === "Delivery" && <Delivery />}
            {props.icon === "Deal" && <Deal />}
            {props.icon === "Discount" && <Discount />}
            {props.icon === "Return" && <Return />}
          </div>
        </div>
        <div className={`row  ${classes.text} m-0 p-0 mt-3`}>
          <div className=" text-center m-0">
            <p className={`${classes["title"]}`}>{props.title}</p>
          </div>
          <div className=" text-center m-0">
            <p className={`${classes["subtitle"]}`}>{props.subtitle}</p>
          </div>
        </div>
      </div>
    </>
  );
}
