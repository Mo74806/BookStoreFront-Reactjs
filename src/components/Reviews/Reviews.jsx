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
import SingleReview from "./SingleReview";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Cookies from "js-cookie";

export default function Reviews(props) {
  const [isHeReviewIt, setIsHeReviewIt] = useState(false);
  let getHisReview = async () => {
    let res = await axios.get(
      `http://localhost:3030/api/v1/books/${props.id}/reviews`,

      { headers: { authorization: Cookies.get("token") } }
    );
    if (res.data.data.data.length != 0) {
      setIsHeReviewIt(true);
    }
  };
  useEffect(() => {
    getHisReview();
  }, []);
  return (
    <>
      <div className="row m-0 p-0">
        <CoverContainerTitle title="Reviews" />
        {/* ----------------------------------------- */}

        <CoverContainer classes="col-lg-10 mx-auto   py-3 justify-content-center">
          {!isHeReviewIt && (
            <>
              <AddReviewForm id={props.id} />
              <div className={classes["borde-line"]}></div>
            </>
          )}

          {props.reviews &&
            props.reviews.map((item, index) => (
              <SingleReview key={index} review={item} />
            ))}
          {/* --------------------------------- */}
        </CoverContainer>
      </div>
    </>
  );
}
