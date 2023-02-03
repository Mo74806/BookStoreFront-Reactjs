import React from "react";
import classes from "./Reviews.module.css";

import CoverContainer from "../UI/CoverContainer/CoverContainer";
import Rating from "@mui/material/Rating/Rating";
import StarIcon from "@material-ui/icons/Star";
import MainButton from "../UI/MainButton/MainButton";
import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";
import CoverContainerTitle from "../UI/CoverContainerTitle/CoverContainerTitle";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ProfilePicture from "../UI/ProfilePicture/ProfilePicture";
import AddReviewForm from "./AddReviewForm";
export default function SingleReview(props) {
  return (
    <div>
      <div className={`row mt-2  ${classes.description} `}>
        <ProfilePicture />
        <div className="col-6  my-4">
          <div className={`row  mx-2 px-1   fw-bold ${classes["text-sm"]} `}>
            {props.review.user.userName}
          </div>
          <div className="row px-1">
            <Rating
              name="rate"
              value={parseInt(props.review.rating)}
              precision={0.5}
              size="big"
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
          </div>
        </div>
      </div>

      <div
        className={`row m-0 d-flex flex-row-reverse   ${classes["review-text"]}`}
      >
        <div
          className={`col-lg-10 col-8 text-lg-start text-center ${classes["text-sm"]} `}
        >
          {" "}
          {props.review.review}
        </div>{" "}
      </div>
      <div className={classes["borde-line"]}></div>
    </div>
  );
}
