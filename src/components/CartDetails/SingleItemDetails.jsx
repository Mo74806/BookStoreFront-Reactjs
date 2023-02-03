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
        className={`${props.className} ${classes["item-cart-details"]} my-4 row   d-flex  align-items-center`}
      >
        <div className={`col-3 ${classes["item-img"]}`}>
          <img src={props.book.imageCover} alt="" />
        </div>
        <div className={`$classes["item-title"]} col-3 `}>
          <div className="fw-semibold">{props.book.title}</div>
          <div className={`${classes.author} text-black-50`}>
            {props.book.author.name}
          </div>
        </div>

        <div className={`${classes["item-price"]} col-2 fw-bold text-danger`}>
          ${props.book.price}
        </div>
        <div className="col-4    d-flex ">
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
      </div>
    </>
  );
}
