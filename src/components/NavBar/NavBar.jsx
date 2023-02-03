import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./../../App.css";
import { userActions } from "../../store/reducers/userSlice";
import { Link, useNavigate } from "react-router-dom";
import {
  CNavbar,
  CButton,
  CCollapse,
  CContainer,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CForm,
  CFormInput,
  CNavbarToggler,
  CNavbarNav,
  CNavLink,
  CNavbarBrand,
  CNavItem,
} from "@coreui/react";
import Modal from "../UI/Modal/Modal";
import CartDetails from "../CartDetails/CartDetails";
import classes from "./NavBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import SingleItemDetails from "../CartDetails/SingleItemDetails";
import PageMainTitle from "../PageMainTitle/PageMainTitle";
import { NavLink } from "react-router-dom";
import MainButton from "../UI/MainButton/MainButton";
import { setCookie } from "../../store/reducers/userSlice";

export default function NavBar() {
  const { cart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state);
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let handleLogout = () => {
    setCookie("token", null);
    dispatch(userActions.setUser());
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
    navigate("/home");
  };
  const [cartShown, SetCartShown] = useState(false);

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

  let handleAppearCart = () => {
    SetCartShown(!cartShown);
  };

  const [visible, setVisible] = useState(false);
  return (
    <nav
      className={`navbar ${classes["navbar-container"]} navbar-expand-lg sticky-top `}
    >
      {cartShown && (
        <Modal onClose={handleAppearCart}>
          <div className="container">
            <div className="row ">
              <div className="col-12">
                <div className=" py-3 ">
                  {" "}
                  <NavLink to="/cart" onClick={handleAppearCart}>
                    <MainButton text="Show More" />
                  </NavLink>
                  <PageMainTitle title="Cart" className="" />
                </div>
                {cart.length !== 0 &&
                  cart.map((book, index) => (
                    <div key={index} className={classes["line-under"]}>
                      <SingleItemDetails className={"mx-5 px-2"} book={book} />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </Modal>
      )}
      <div className="container">
        <a className={`navbar-brand text-black ${classes.brand}`} href="#">
          La Pardaise
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse row navbar-collapse" id="navbarNavDropdown">
          <ul className={`py-5 col-11 my-5 ${classes["nav-items"]}`}>
            <li className={`  ${classes["nav-item-link"]} `}>
              <NavLink className="nav-link" activeClassName={`selected`} to="/">
                Home
              </NavLink>
            </li>
            <li className={` ${classes["nav-item-link"]}`}>
              <NavLink
                className="nav-link"
                activeClassName={classes.selected}
                to="/books"
              >
                Shop
              </NavLink>
            </li>
            <li className={`${classes["nav-item-link"]}`}>
              <NavLink
                className="nav-link"
                activeClassName={classes.selected}
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="col-1 align-items-center d-flex">
            <div className="px-3 fs-5">
              {user.isLoggedIn ? (
                // <i className="fa-light fas fa-user"></i>
                <p className="fw-bold   my-3 ">
                  {" "}
                  <button
                    className={`${classes.text} border border-0 bg-transparent m-0 p-0`}
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </p>
              ) : (
                <p className="fw-bold  my-4 ">
                  {" "}
                  <Link className={classes.text} to="/login">
                    Login
                  </Link>{" "}
                </p>
              )}
            </div>
            <div>
              <button
                className="px-3 border border-0 bg-transparent fs-5 position-relative"
                onClick={handleAppearCart}
              >
                <i className="fa-solid fa-cart-shopping"></i>
                <div className={classes["cart-number"]}>{Qty}</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
