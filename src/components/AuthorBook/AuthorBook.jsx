import React from "react";
import BookSwiper from "../BookSwiper/BookSwiper";
import SectionTitle from "../SectionTitle/SectionTitle";

export default function AuthorBook(props) {
  return (
    <>
      <SectionTitle
        title={`Books By ${props.title}`}
        textSize={"small"}
        button={false}
      />
      <div className="row container">
        <BookSwiper scale={true} books={props.books} shownBook={4} size={300} />
      </div>
    </>
  );
}
