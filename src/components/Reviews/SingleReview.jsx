import React from "react";
import classes from "./Reviews.module.css";

import CoverContainer from "../UI/CoverContainer/CoverContainer";
import Rating from "@mui/material/Rating/Rating";
import Remove from "@material-ui/icons/Delete";

import StarIcon from "@material-ui/icons/Star";

import ProfilePicture from "../UI/ProfilePicture/ProfilePicture";
import AddReviewForm from "./AddReviewForm";
import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";
import Modal from "../UI/Modal/Modal";
export default function SingleReview(props) {
  const [deleted, setDeleted] = useState(false);
  let handleRemove = async () => {
    try {
      await axios.delete(
        `https://book-store-api-kappa.vercel.app/api/v1/books/${props.id}/reviews/${props.review.id}`,
        { headers: { authorization: Cookies.get("token") } }
      );
      setDeleted(true);
      props.onRemove(props.review.id);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      {deleted && (
        <Modal onClose={() => setDeleted(false)}>
          <p className="text-danger mt-3 py-3">Your review is Deleted</p>
        </Modal>
      )}
      <div className={`row mt-2  ${classes.description} `}>
        <ProfilePicture />
        <div className="col-10  my-4">
          <div className={`row  mx-2 px-1   fw-bold ${classes["text-sm"]} `}>
            <div className="col-11">{props.review.user.userName}</div>
            {props.hisReview ? (
              <div className="col-1 d-flex-justify-content-end">
                <Remove onClick={handleRemove} />
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="row px-1">
            <Rating
              name="rate"
              value={parseInt(props.review.rating)}
              precision={0.5}
              size="big"
              readOnly
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
