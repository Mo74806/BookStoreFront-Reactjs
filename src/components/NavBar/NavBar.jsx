import React, { useEffect } from "react";
import { useState } from "react";
import "./../../App.css";
import { userActions } from "../../store/reducers/userSlice";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Modal from "../UI/Modal/Modal";
import CartDetails from "../CartDetails/CartDetails";
import classes from "./NavBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import SingleItemDetails from "../CartDetails/SingleItemDetails";
import PageMainTitle from "../PageMainTitle/PageMainTitle";
import { NavLink } from "react-router-dom";
import MainButton from "../UI/MainButton/MainButton";
import { setCookie } from "../../store/reducers/userSlice";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
export default function NavBar() {
  const { cart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state);
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const [qty, SetQty] = useState(0);
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let location = useLocation();
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
  useEffect(() => {
    for (let i = 0; i < cart.length; i++) {
      totalPrice += parseInt(cart[i].price);
      totalDiscount +=
        parseInt(cart[i].priceDiscount) * (parseInt(cart[i].price) / 100);
      Qty += cart[i].qty;
    }
    SetQty(Qty);
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [cart]);

  let handleAppearCart = () => {
    SetCartShown(!cartShown);
  };

  return (
    <>
      {cartShown && (
        <Modal onClose={handleAppearCart}>
          <div className="container">
            <div className="row ">
              <div className={`col-12 `}>
                <div className=" py-3 ">
                  {" "}
                  <NavLink to="/cart" onClick={handleAppearCart}>
                    <MainButton text="Show More" />
                  </NavLink>
                  <PageMainTitle title="Cart" className="" />
                </div>
                <div className={`${classes.slider}`}>
                  {cart.length !== 0 &&
                    cart.map((book, index) => (
                      <div key={index} className={`${classes["line-under"]}`}>
                        <SingleItemDetails
                          className={"mx-5 px-2"}
                          book={book}
                        />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}

      <Navbar
        bg="light"
        className={`${classes["navbar-container"]} sticky-top`}
        expand="lg"
      >
        <Container>
          <Navbar.Brand>
            <a className={`navbar-brand text-black ${classes.brand}`} href="#">
              <Link className={classes.Link} to="/home">
                {" "}
                La Pardaise
              </Link>
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <ul
              className={` col-lg-8 justify-content-end ml-lg-5  d-flex  ${classes["nav-items"]}`}
            >
              <Nav className="mx-lg-auto">
                <Nav.Link>
                  {" "}
                  <li className={`  ${classes["nav-item-link"]} `}>
                    <NavLink
                      className={`nav-link ${
                        location.pathname == "/home" && classes.selected
                      } `}
                      to="/home"
                    >
                      Home
                    </NavLink>
                  </li>
                </Nav.Link>
                <Nav.Link>
                  {" "}
                  <li className={` ${classes["nav-item-link"]}`}>
                    <NavLink
                      className={`nav-link ${
                        location.pathname == "/books" && classes.selected
                      } `}
                      to="/books"
                    >
                      Shop
                    </NavLink>
                  </li>
                </Nav.Link>
                <Nav.Link>
                  {" "}
                  <li className={`${classes["nav-item-link"]}`}>
                    <NavLink
                      className={`nav-link ${
                        location.pathname == "/contact" && classes.selected
                      } `}
                      to="/contact"
                    >
                      Contact
                    </NavLink>
                  </li>
                </Nav.Link>
              </Nav>
            </ul>

            <div className="col-4 text-end justify-content-end align-items-center d-flex">
              <div className=" fs-5">
                {user.isLoggedIn ? (
                  // <i className="fa-light fas fa-user"></i>

                  <p className="fw-bold    my-3 ">
                    {" "}
                    <button
                      className={`${classes.text} border border-0 bg-transparent m-0 p-0`}
                      onClick={handleLogout}
                    >
                      {`${user.user.user.userName}   |  `}{" "}
                      <span className={`${classes["text-sm"]}`}>Logout</span>
                    </button>
                  </p>
                ) : (
                  <p className="fw-bold  my-4 ">
                    {" "}
                    <Link className={`${classes.text}  `} to="/login">
                      Login
                    </Link>{" "}
                  </p>
                )}
              </div>
              <div>
                <button
                  className={` px-3 border border-0 bg-transparent fs-5 position-relative  `}
                  onClick={handleAppearCart}
                >
                  <i className="fa-solid fa-cart-shopping"></i>
                  <div
                    className={`${classes["cart-number"]} ${
                      btnIsHighlighted ? classes.bump : ""
                    } `}
                  >
                    {qty}
                  </div>
                </button>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
