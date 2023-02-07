import React from "react";
import "./Landing.css";
import { useNavigate } from "react-router-dom";
export default function Landing() {
  let navigate = useNavigate();
  let navigateToShop = () => {
    navigate("/books");
  };
  return (
    <>
      <header className="header d-flex justify-content-center m-0 p-0 ">
        <div
          className="mask"
          style={{ height: "668px", backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <div className=" text-header justify-content-cenetr align-items-center">
            <div className="">Find Best Books.</div>
            <div className="">Find Best Prices.</div>
          </div>

          <button className="go-home-btn rounded-pill" onClick={navigateToShop}>
            SHOP NOW
          </button>
        </div>
      </header>
    </>
  );
}
