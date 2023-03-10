import React from "react";
import { cartActions } from "../../store/reducers/CartSlice";
import { useDispatch } from "react-redux";
import classes from "./CartDetails.module.css";

export default function SingleItemDetails(props) {
  const dispatch = useDispatch();

  //increase Qty of books
  let handleAdd = () => {
    dispatch(cartActions.increaseQty(props.book));
  };
  //decrease Qty of books
  let handleRemove = () => {
    dispatch(cartActions.DecreaseQty(props.book));
  };

  return (
    <>
      <div
        className={`${props.className} ${classes["item-cart-details"]} my-lg-5 row   d-flex  align-items-center`}
      >
        <div className={`col-3 py-lg-0 py-1  ${classes["item-img"]}`}>
          <img src={props.book.imageCover} alt="" />
        </div>

        <div className={`${classes["item-title"]} col-3 `}>
          <div className="fw-semibold">{props.book.title}</div>
          <div className={`${classes.author} text-black-50`}>
            {props.book.author.name}
          </div>
        </div>

        <div
          className={`${classes["item-price"]} col-2 col-md-1  text-end fw-bold text-danger`}
        >
          ${props.book.price}
        </div>
        <div
          className={`${
            props.stoke ? "col-md-3" : "col-lg-5"
          } col-4  align-items-start  text-end  justify-content-md-center justify-content-end    d-flex `}
        >
          <button
            className={`${classes["item-counter"]} ${classes.Btn}`}
            onClick={handleAdd}
          >
            +
          </button>
          <div
            className={`${classes["item-counter"]} text-center fw-bold pt-1 `}
          >
            {props.book.qty}
          </div>
          <button
            className={`${classes["item-counter"]} ${classes.Btn}`}
            onClick={handleRemove}
          >
            -
          </button>
        </div>
        {props.stoke && (
          <div className="col-2 d-md-flex justify-content-center mt-3 d-none">
            <p className={`${classes["text-sm"]} mx-2`}> In Stock :</p>{" "}
            <div className="fw-semibold text-primary text-end m-0 p-0">
              {props.book.StokeQty}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
