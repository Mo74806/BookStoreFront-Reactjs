import React from "react";
import classes from "./Reviews.module.css";

import CoverContainer from "../UI/CoverContainer/CoverContainer";

import CoverContainerTitle from "../UI/CoverContainerTitle/CoverContainerTitle";

import AddReviewForm from "./AddReviewForm";
import SingleReview from "./SingleReview";
import axios from "axios";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import Cookies from "js-cookie";
import Login from "../Login/Login";
import Modal from "../UI/Modal/Modal";
import MainButton from "../UI/MainButton/MainButton";

export default function Reviews(props) {
  const [reviews, setReviews] = useState(props.reviews);
  const { user } = useSelector((state) => state.user);
  let [indexOfHisReview, setindex] = useState(null);
  const [isHeReviewIt, setIsHeReviewIt] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  useEffect(() => {
    getHisReview();
  }, []);
  let handleLogin = () => setShowLogin(true);
  let getHisReview = async () => {
    let res = await axios.get(
      `http://localhost:3030/api/v1/books/${props.id}/reviews`,

      { headers: { authorization: Cookies.get("token") } }
    );
    if (user && res) {
      res.data.data.data.map((review, index) => {
        if (review.user["_id"] === user.user["_id"]) {
          setIsHeReviewIt(true);
          setindex(index);
        }
      });
      if (indexOfHisReview == null) {
        indexOfHisReview = -1;
      }
    }
  };
  useEffect(() => {
    getHisReview();
  }, []);

  let handleRemoveReview = (id) => {
    props.onRefresh();
  };
  return (
    <>
      {showLogin && (
        <Modal onClose={() => setShowLogin(false)}>
          <Login className="col-10" path="/cart" />
        </Modal>
      )}
      <div className="row m-0 p-0">
        <CoverContainerTitle title="Reviews" />
        {/* ----------------------------------------- */}

        <CoverContainer classes="col-lg-10 mx-auto   py-3 justify-content-center">
          {user && !isHeReviewIt ? (
            <>
              <AddReviewForm id={props.id} onAdd={handleRemoveReview} />
              <div className={classes["borde-line"]}></div>
            </>
          ) : (
            ""
          )}

          {reviews.length > 0 ? (
            reviews.map((item, index) => {
              return (
                <SingleReview
                  key={index}
                  review={item}
                  onRemove={handleRemoveReview}
                  hisReview={item.user === (user ? user.user["_id"] : "")}
                />
              );
            })
          ) : (
            <div className="mx-auto text-center fw-semibold">
              {" "}
              There is No Reviews for this book yet
              <div className="col-4 mx-auto my-2">
                <MainButton text="Login" handleClick={handleLogin} />
              </div>
            </div>
          )}
          {/* --------------------------------- */}
        </CoverContainer>
      </div>
    </>
  );
}
