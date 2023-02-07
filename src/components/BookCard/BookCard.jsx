import React from "react";
import Rating from "@mui/material/Rating/Rating";
import StarIcon from "@material-ui/icons/Star";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import Eye from "@material-ui/icons/RemoveRedEyeOutlined";
import Remove from "@material-ui/icons/RemoveCircle";

import classes from "./BookCard.module.css";
import { cartActions } from "../../store/reducers/CartSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function BookCard(props) {
  const { cart } = useSelector((state) => state.cart);
  const [isInCart, setIsInCart] = useState(false);
  useEffect(() => {
    cart.map((item) => {
      if (item["_id"] === props.book["_id"]) {
        setIsInCart(true);
      }
    });
  }, []);
  let dispatch = useDispatch();
  //increase Qty of books
  let handleAdd = () => {
    //pass only the needed data
    if (isInCart === true) {
      dispatch(cartActions.removeFromCart(props.book));
      setIsInCart(false);
    } else {
      dispatch(cartActions.addToCart({ ...props.book, qty: 1 }));
      setIsInCart(true);
    }
  };
  //remove book from cart
  let handleDelete = () => {
    dispatch(cartActions.removeFromCart(props.book));
  };

  let handleShowBookDetails = () => {};
  let { name: authorName, id } = { ...props.book.author };

  return (
    <>
      <div className={`${props.scale ? classes.card : classes.card1} mb-5 `}>
        <div
          style={{ width: props.size || 170 }}
          className={` ${classes["card-img"]}  mx-1  row `}
        >
          <div className={classes["action-btns"]}>
            <button className="" onClick={handleAdd}>
              <div className="row">
                <div
                  className={` d-flex justify-content-center mx-auto  ${classes["action-icons"]}`}
                >
                  {" "}
                  {isInCart ? (
                    <Remove className="fs-7 mx-auto" />
                  ) : (
                    <ShoppingCart className="fs-7 mx-auto" />
                  )}
                </div>
              </div>
            </button>
            <Link to={`${props.book["_id"]}`}>
              <button>
                <div
                  className={` d-flex justify-content-center mx-auto  ${classes["action-icons"]}`}
                >
                  <Eye />
                </div>
              </button>
            </Link>{" "}
          </div>
          <div className={classes.content}>
            <div className={classes["content-overlay"]}></div>
            {props.book.priceDiscount !== 0 && (
              <button
                className={`${classes["group-action--btn"]}  ${classes.discount} ${classes["quick-view"]} `}
              >
                {`${props.book.priceDiscount}%
off`}
              </button>
            )}
            <img
              className={classes["content-image"]}
              src={props.book.imageCover}
              alt=""
            />

            <div
              className={`${classes["content-details"]} ${classes["fadeIn-bottom"]} ${classes["fadeIn-right"]}`}
            >
              <h3 className="fw-semibold">{`${
                isInCart ? "Remove from" : "Add To"
              } Cart`}</h3>
              <p>{props.book.title}</p>
            </div>
          </div>
        </div>

        <div className={`details-card px-3 ${classes["card-info"]}  pt-3`}>
          <div className={`col-12 text-black `}>
            <Link
              to={`/books/${props.book["_id"]}`}
              className={classes["card-title"]}
            >
              {props.book.title}
            </Link>
          </div>
          <div className="row m-0 p-0 ">
            <div className="col-6  p-0 m-0  mt-2 ">
              {" "}
              <Rating
                className={classes["card-rating"]}
                name="text-feedback"
                value={props.book.ratingsAverage}
                readOnly
                precision={0.5}
                size="small"
                emptyIcon={
                  <StarIcon style={{ opacity: 1 }} fontSize="inherit" />
                }
              ></Rating>
            </div>
            <div className="col-6 p-0 m-0   mt-2">
              {" "}
              <p
                className={` text-center  text-black ${classes["card-rating-number"]}`}
              >
                | {props.book.ratingsAverage}
              </p>
            </div>
          </div>
          <div className={`col-12 px-1 mb-1  m-0 text-black-50 `}>
            <Link className={classes["card-author"]} to={`/author/${id}`}>
              {" "}
              {authorName}
            </Link>
          </div>
          <div className="row m-0 p-0">
            <div className={`col-7 px-1 ${classes["card-price"]}`}>
              <span className="fw-lighter ">$</span>
              {props.book.price}
            </div>

            {props.book.priceDiscount !== 0 && (
              <div
                className={`col-3 text-start  ${classes["price-before-discount"]} fw-semibold fs-7    text-black-50`}
              >
                ${props.book.price}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
