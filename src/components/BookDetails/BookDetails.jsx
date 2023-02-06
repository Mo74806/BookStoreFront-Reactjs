import React from "react";
import classes from "./BookDetails.module.css";
import CoverContainer from "../UI/CoverContainer/CoverContainer";
import Rating from "@mui/material/Rating/Rating";
import StarIcon from "@material-ui/icons/Star";
import MainButton from "../UI/MainButton/MainButton";
import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";
import CoverContainerTitle from "../UI/CoverContainerTitle/CoverContainerTitle";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { cartActions } from "../../store/reducers/CartSlice";
import { useDispatch } from "react-redux";
import PageSubTitle from "../UI/PageSubTitle/PageSubTitle";
export default function BookDetails(props) {
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

  const { name: authorName } = { ...props.book.author };
  return (
    <div className=" mx-md-0 mx-2">
      <PageSubTitle
        category={props.book.category[0]}
        title={props.book.title}
      />
      <div className="container">
        <div className="row  d-flex justify-content-lg-between px-4  ">
          <CoverContainer classes="col-lg-5 col-12  ">
            <img className=" my-5" src={props.book.imageCover} alt="" />
          </CoverContainer>
          {/* <div className="tobecomponent mx-4  d-lg-none col-4">
            {" "}
            <div
              className={`mt-5 row ${classes["book-title"]} h2 px-2 fw-semibold`}
            >
              {props.book.title}
            </div>
            <div className="row p-0 m-lg-0 ">
              <div className="col-lg-6 col-12  d-flex">
                <p
                  className={`text-black-50 col-4 fw-semibold text-start ${classes["text-sm"]}`}
                >
                  Author:
                </p>
                <p
                  className={` mx-2 col-8 fw-semibold text-center ${classes["text-sm"]} `}
                >
                  {authorName}
                </p>
              </div>

              <div className="col-lg-6 col-12 my-lg-0  ">
                <Rating
                  name="text-feedback"
                  value={props.book.ratingsAverage}
                  readOnly
                  precision={0.5}
                  size="big"
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
              </div>
            </div>
          </div> */}
          <CoverContainer classes="col-lg-5 col-12 my-lg-0 my-3">
            <div className="tobecomponent d-lg-block ">
              <div
                className={`mt-5 row ${classes["book-title"]} h2 px-2 fw-semibold`}
              >
                {props.book.title}
              </div>

              <div className="row p-0 m-lg-0 ">
                <div className="col-lg-6 col-12  d-flex">
                  <p
                    className={`text-black-50 col-3 fw-semibold text-start ${classes["text-sm"]}`}
                  >
                    Author:
                  </p>
                  <p
                    className={` mx-2 col-7 fw-semibold ${classes["text-sm"]} `}
                  >
                    {authorName}
                  </p>
                  <small className="mx-3 text-black-50 d-lg-block d-none ">
                    |
                  </small>
                </div>

                <div className="col-lg-6 col-12 my-lg-0  ">
                  <Rating
                    name="text-feedback"
                    value={props.book.ratingsAverage}
                    readOnly
                    precision={0.5}
                    size="big"
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                    }
                  />
                </div>
              </div>
            </div>
            <div className={`${classes["borde-line"]} d-lg-block d-none`}></div>
            <p className={`${classes.price}  fw-semibold h6  mt-4`}>
              <span className={`text-black ${classes["text-sm"]} `}>
                {" "}
                Price :
              </span>
              $
              {Math.round(
                props.book.price -
                  props.book.priceDiscount * (props.book.price / 100)
              )}
            </p>
            <p className={classes.description}>{props.book.description}</p>
            <div className={classes["borde-line"]}></div>
            <div className="row m-0 d-flex align-items-center ">
              <div className="col-lg-6  col-12 my-xl-0 my-2">
                <MainButton
                  text={!isInCart ? "Add to cart " : "Remove from cart"}
                  handleClick={isInCart ? handleDelete : handleAdd}
                />
              </div>
              <div className="col-lg-6 col-12 my-xl-0 my-2">
                <MainButton
                  color={"#0077b5"}
                  text="Add to watchlist"
                ></MainButton>
              </div>
            </div>
            <div className={classes["borde-line"]}></div>
            <div className="  d-flex  align-items-center mt-2">
              {" "}
              <p className={`text-black-50 ${classes["text-sm"]} fw-semibold`}>
                Category:
              </p>
              <p
                className={` mx-1 fw-semibold  ${classes["text-sm"]} fw-semibold`}
              >
                {props.book["category"].map((item, index) => (
                  <span key={index} className="px-2">
                    {item}
                  </span>
                ))}
              </p>
            </div>
            <div className={classes["borde-line"]}></div>
            <SocialMediaIcons
              color={true}
              className="fs-3 d-flex justify-content-around"
            />
          </CoverContainer>
        </div>
        {/* description */}
        <div className="row m-0 my-5">
          <CoverContainerTitle title="Description" />
          <CoverContainer classes="col-lg-12  mx-auto  py-3 justify-content-center">
            <div className={`px-lg-5 ${classes.description} mx-5`}>
              {" "}
              {props.book.fullDescription}
            </div>
          </CoverContainer>
        </div>
      </div>
      {/* reviews */}
    </div>
  );
}
