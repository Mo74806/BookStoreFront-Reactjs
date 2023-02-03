import React from "react";
import classes from "./SocialMediaIcons.module.css";
export default function SocialMediaIcons(props) {
  return (
    <>
      <div className="row ">
        <div
          className={`col-12 my-4 ${
            props.vertical ? "flex-column justify-content-center " : "flex-row"
          }  d-flex ${props.className} `}
        >
          {" "}
          <i
            className={`
            ${props.vertical && "my-2 "}${
              props.color ? classes.color1 : "text-white-50"
            } mx-2 fa-brands ${classes.color11} fa-square-facebook`}
          ></i>
          <i
            className={` ${props.vertical && "my-2 "}${
              props.color ? classes.color2 : "text-white-50"
            } mx-2 fa-brands ${classes.color22} fa-square-twitter`}
          ></i>
          <i
            className={`${props.vertical && "my-2 "}${
              props.color ? classes.color3 : "text-white-50"
            } mx-2 fa-brands ${classes.color33} fa-linkedin`}
          ></i>
          <i
            className={`${props.vertical && "my-2 "}${
              props.color ? classes.color4 : "text-white-50"
            } mx-2 fa-brands ${classes.color44} fa-square-pinterest`}
          ></i>
        </div>
      </div>
    </>
  );
}
