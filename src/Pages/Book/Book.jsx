import React from "react";
import BookDetails from "../../components/BookDetails/BookDetails";
import Reviews from "../../components/Reviews/Reviews";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBook } from "../../store/reducers/bookSlice";
import LoadingSpinner from "../../components/UI/LoadingSpinner/LoadingSpinner";

export default function Book() {
  const { id } = useParams();
  const { book, isLoading } = useSelector((state) => state.books);
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  let dispatch = useDispatch();
  let getBookfn = () => {
    dispatch(getBook(id));
  };
  useEffect(() => {
    getBookfn();
  }, []);
  let { reviews } = book;

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <>
      {" "}
      {book ? <BookDetails book={book} /> : ""}
      <div className="my-5">
        <Reviews id={id} reviews={reviews} onRefresh={getBookfn} />
      </div>
    </>
  );
}
