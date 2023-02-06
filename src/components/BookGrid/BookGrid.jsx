import React from "react";
import classes from "./BookGrid.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getAllBooks } from "../../store/reducers/bookSlice";
import BookCard from "../BookCard/BookCard";
import { useMemo } from "react";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";

export default function BookGrid(props) {
  const { books, isLoading } = useSelector((state) => state.books);
  // const [booksData, setBooks] = useState([]);
  const data = useMemo(() => {
    return books;
  }, []);
  const dispatch = useDispatch();
  let isIntial = true;
  useEffect(() => {
    if (isIntial) {
      isIntial = false;
      return;
    }
    dispatch(getAllBooks());
  }, [data]);
  let odd = false;
  return (
    <div className={`row `}>
      {isLoading && <LoadingSpinner />}
      {/* //props.book */}
      {books && books.length > 0 ? (
        books.map((item, index) => {
          if (odd === true) {
            odd = false;
            return (
              <div
                key={index}
                className={`col-lg-4 col-md-6 ${classes.odd}  col-sm-4 col-6 d-flex   justify-content-lg-between  `}
              >
                <BookCard scale={true} size={props.Size || 250} book={item} />
              </div>
            );
          }
          if (odd === false) {
            odd = true;
            return (
              <div
                key={index}
                className={`col-lg-4 col-md-6 ${classes.even} col-sm-4 col-6  d-flex  justify-content-lg-between   `}
              >
                <BookCard scale={true} size={props.Size || 250} book={item} />
              </div>
            );
          }
        })
      ) : (
        <div className="mx-auto text-center   py-5 fw-semibold fs-1">
          <img
            className="row d-flex justify-self-center text-center mx-auto"
            src="https://png.pngtree.com/png-clipart/20220709/ourmid/pngtree-book-stack-multiple-books-png-image_5836805.png"
          />
          There is no books match Now.
        </div>
      )}
    </div>
  );
}
