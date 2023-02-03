import React from "react";
import BookSwiper from "../BookSwiper/BookSwiper";
import SectionTitle from "../SectionTitle/SectionTitle";
import AdContainer from "../UI/AdContainer/AdContainer";
export default function BestSelling(props) {
  return (
    <div className="mt-5">
      {" "}
      <SectionTitle title={props.title} button="true" textSize={true} />
      <div className="row mt-5">
        <div className="col-lg-8 col-12">
          <BookSwiper books={props.books} shownBook={4} />
        </div>
        <div className="col-lg-4 col-12">
          {" "}
          <AdContainer
            color="#a9473e"
            title="30% Off"
            subtitle="Buy One, Get One 30% off
                        "
            img="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/h1-img1.png"
          />
        </div>
      </div>
    </div>
  );
}
