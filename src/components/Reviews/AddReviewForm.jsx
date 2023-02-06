import React from "react";
import classes from "./Reviews.module.css";

import CoverContainer from "../UI/CoverContainer/CoverContainer";
import Rating from "@mui/material/Rating/Rating";
import StarIcon from "@material-ui/icons/Star";
import MainButton from "../UI/MainButton/MainButton";

import ProfilePicture from "../UI/ProfilePicture/ProfilePicture";
import { useRef } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Cookies from "js-cookie";

export default function AddReviewForm(props) {
  const { user } = useSelector((state) => state.user);
  const [review, setReview] = useState({ text: "", rate: 4.5 });
  const [warning, setWarning] = useState(false);
  let isTouched;
  let handleSubmit = async (e) => {
    if (isTouched || !warning) {
      let res = await axios.post(
        `http://localhost:3030/api/v1/books/${props.id}/reviews`,
        {
          review: review.text,
          rating: review.rate,
        },
        { headers: { authorization: `${Cookies.get("token")}` } }
      );
      props.onAdd();
    }
  };

  let handleChangeReview = (e) => {
    isTouched = true;
    if (e.target.name === "rate")
      setReview((prev) => ({ ...prev, rate: e.target.value }));
    else if (e.target.value.length <= 0) setWarning(true);
    else {
      setWarning(false);
      setReview((prev) => ({ ...prev, text: e.target.value }));
    }
  };
  return (
    <>
      <div className={`row mt-md-5 mt-2  ${classes.description} `}>
        <ProfilePicture />
        <div className=" col-6 p-0   m-0 py-3 mt-4">
          <div className={`row  mx-2 px-1   fw-bold ${classes["text-sm"]} `}>
            {user.user.userName}
          </div>
          <div className="row px-1">
            <Rating
              name="rate"
              value={review.rate}
              onChange={(e) => handleChangeReview(e)}
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
        className={`row m-lg-0 mx-auto  mt-5  d-flex flex-row-reverse   ${classes["review-text"]}`}
      >
        <div className="col-md-3 col-8 order-2  my-2  my-md-0 mx-md-0 mx-auto ">
          <MainButton handleClick={handleSubmit} text="Add Review"></MainButton>
        </div>
        <div className="col-md-10  my-1 col-12">
          <input
            id="standard-basic"
            value={review?.text}
            onChange={(e) => handleChangeReview(e)}
            name="text"
            className={`rounded-pill px-3 m-0 ${classes["review-input"]}`}
            placeholder="please let us know your opinoin?"
          />
          {warning ? (
            <p className={`text-danger ${classes["text-sm"]}`}>
              {" "}
              please provide your review
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
