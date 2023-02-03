import React from "react";
import { Link } from "react-router-dom";
import classes from "./Category.module.css";
export default function Category(props) {
  return (
    <>
      <Link className={classes.link} to="/books">
        <div className={`row ${classes["category-background"]} py-5`}>
          <div className={`row ${classes["category-book"]} `}>
            <img
              src={
                props.img ||
                "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/h6_cat1.png"
              }
              alt=""
            />
          </div>
        </div>
        <p className={`row ${classes["category-label"]}`}>{props.category}</p>
      </Link>
    </>
  );
}
