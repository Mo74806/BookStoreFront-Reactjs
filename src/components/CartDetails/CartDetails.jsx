import React from "react";
import SingleItemDetails from "./SingleItemDetails";
import SingleItemDetailsSide from "./SingleItemDetailsSide";
import TextField from "@mui/material/TextField/TextField";
import { useDispatch, useSelector } from "react-redux";
import classes from "./CartDetails.module.css";
import PageMainTitle from "../PageMainTitle/PageMainTitle";
import { cartActions } from "../../store/reducers/CartSlice";
import { purchaseActions } from "../../store/reducers/PurchaseSlice";
import { createPurchase } from "../../store/reducers/PurchaseSlice";
import { booking } from "../../stripe";
import Cookies from "js-cookie";
import Login from "./../Login/Login";
import { useState } from "react";
import Modal from "./../UI/Modal/Modal";
import LoginForm from "../Login/LoginForm";
import { useEffect } from "react";
export default function CartDetails() {
  const { cart } = useSelector((state) => state.cart);
  const { purchase } = useSelector((state) => state);
  const { user } = useSelector((state) => state.user);
  const [login, setLogin] = useState(false);
  const [error, setError] = useState(null);
  const [btnProceed, setBtnProceed] = useState(false);

  let Qty = 0;
  //calculate the total qty and the total price
  let totalPrice = 0;
  let totalDiscount = 0;
  for (let i = 0; i < cart.length; i++) {
    totalPrice += parseInt(cart[i].price);
    totalDiscount +=
      parseInt(cart[i].priceDiscount) * (parseInt(cart[i].price) / 100);
    Qty += cart[i].qty;
  }

  useEffect(() => {
    setLogin(false);
  }, [user]);
  let dispatch = useDispatch();
  let handleSavePurchase = async () => {
    setBtnProceed(true);
    let itemsQty = cart.map((item) => item.qty);
    if (user) {
      await dispatch(createPurchase({ cart, itemsQty }));
      if (
        purchase.serverError ===
        "the selected books are more than the ones in the stoke "
      ) {
        setError(purchase.serverError);
        setBtnProceed(false);
        return;
      }
      book();
    } else setLogin(true);
  };
  let book = () => {
    booking(purchase.purchase["_id"]);
  };
  return (
    <div className="row m-0">
      {error && (
        <Modal
          onClose={() => {
            setError(false);
          }}
        >
          <p className="text-danger fw-semibold text-center py-3 mt-3">
            {error}
          </p>
        </Modal>
      )}
      {login && (
        <Modal>
          <Login className="col-10" path="/cart" />
        </Modal>
      )}
      <PageMainTitle title="Cart" />{" "}
      <div className="container">
        {cart.length == 0 ? (
          <p className="fw-bold fs-1 text-center py-5">
            You don't have any books in the cart yet
          </p>
        ) : (
          <div className="row m-5 d-flex justify-content-center ">
            <div
              className={`col-lg-7 my-5 my-lg-0 col-12 px-5 ${classes.book1}`}
            >
              <div className={classes.slider}>
                {cart.length !== 0 &&
                  cart.map((book, index) => (
                    <div key={index} className={classes["line-under"]}>
                      <SingleItemDetails book={book} />
                    </div>
                  ))}
              </div>
            </div>
            <div
              className={`col-lg-5 ${classes["side-card"]} col-10 my-lg-0 my-5 px-5 py-3 bg-white rounded`}
            >
              <div className={`${classes.title} fw-semibold fs-3`}>Total</div>
              <div className={`mb-4 ${classes["side-details"]}`}>
                {" "}
                {cart.length !== 0 &&
                  cart.map((book, index) => (
                    <div key={index} className={classes["line-under"]}>
                      <SingleItemDetailsSide book={book} />
                    </div>
                  ))}
              </div>
              <div className={classes["price-summary"]}>
                <div className=" row">
                  <div className="col-7 px-1">
                    {/* <TextField
                      fullWidth={true}
                      id="cupon-code"
                      label="Cupon Code"
                      variant="outlined"
                    /> */}
                  </div>
                  <div className="col-5  px-1 fw-bold fs-7">
                    <button className="bg-gray p-3 fw-semibold btn-outline">
                      ADD CODE
                    </button>
                  </div>
                </div>
                <div className="cupon"></div>
                <div className="row justify-content-between d-flex my-3">
                  <div className="col-3">Subtotal</div>
                  <div className="col-2  text-sm">
                    ${Math.round(totalPrice)}
                  </div>
                </div>
                <div className=" row justify-content-between d-flex my-3">
                  <div className="col-3 text-start ">Discount</div>
                  <div className="col-2  text-sm">
                    ${Math.round(totalDiscount * Qty)}
                  </div>
                </div>
                <div className={classes.cupon}></div>
                <div className=" row my-3">
                  <div className="col-3 text-start fw-bold fs-5">Total</div>
                  <div
                    className={`col-8 text-end fw-semibold ${classes.price}`}
                  >
                    ${Math.round(totalPrice * Qty - totalDiscount * Qty)}
                  </div>
                </div>
              </div>
              <div className="row mt-2 ">
                <div className="col-12   text-end  ">
                  <button
                    onClick={handleSavePurchase}
                    className={` py-2 text-ceneter ${classes["proceed-buy-button"]} fw-semibold ${classes["text-sm"]} px-3 py-3`}
                    disabled={btnProceed}
                  >
                    {!btnProceed ? "Proceed Purchaces" : "Loading....."}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
