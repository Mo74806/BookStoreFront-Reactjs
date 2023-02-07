import React from "react";
import classes from "./BookGrid.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getAllBooks } from "../../store/reducers/bookSlice";
import BookCard from "../BookCard/BookCard";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";

export default function BookGrid(props) {
  const { books, isLoading } = useSelector((state) => state.books);

  const dispatch = useDispatch();
  let isIntial = true;
  useEffect(() => {
    if (isIntial) {
      isIntial = false;
      return;
    }
    dispatch(getAllBooks());
  }, [books]);

  return (
    <div className={`row `}>
      {isLoading ? <LoadingSpinner /> : ""}
      {!isLoading &&
        books &&
        books.length > 0 &&
        books.map((item, index) => {
          return (
            <div
              key={index}
              className={`col-lg-4 col-md-6 ${classes.odd}  col-sm-4 col-6 d-flex   justify-content-between  `}
            >
              <BookCard scale={true} size={props.Size || 250} book={item} />
            </div>
          );
        })}
      {!isLoading && books.length <= 0 && (
        <div
          className={`mx-auto text-center   py-5 fw-semibold fs-1 ${classes.imgNotfound}`}
        >
          <img
            className={`row d-flex justify-self-center text-center mx-auto `}
            src="https://png.pngtree.com/png-clipart/20220709/ourmid/pngtree-book-stack-multiple-books-png-image_5836805.png"
          />
          There is no books match Now.
        </div>
      )}
    </div>
  );
}
