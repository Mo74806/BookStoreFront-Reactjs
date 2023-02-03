import React from "react";
import CoverContainer from "../UI/CoverContainer/CoverContainer";
import classes from "./AuthorData.module.css";
import SocailMediaIcons from "./../SocialMediaIcons/SocialMediaIcons";
export default function AuthorData(props) {
  return (
    <div className={`row m-0 ${classes["author-data"]}`}>
      <div className="col-lg-3 col-12 d-flex justify-content-center align-items-stretch">
        <CoverContainer classes="col-12 p-0 m-0 align-items-center">
          <img src={props.author.photo} />
        </CoverContainer>
      </div>
      <div className={`col-md-7 col-8  py-sm-5 ${classes["autor-details"]} `}>
        <div className={`row mx-5 mb-3 mt-2 ${classes["author-name"]}`}>
          {props.author.name}
        </div>
        <div className={`col-9 mx-5 ${classes["author-summary"]}`}>
          {props.author.summary}
        </div>
      </div>
      <div
        className={`col-md-2 col-1 mt-5 text-end px-5 d-flex justify-content-center ${classes["social-media"]}`}
      >
        <SocailMediaIcons color={true} className="fs-5" vertical={true} />
      </div>
    </div>
  );
}
