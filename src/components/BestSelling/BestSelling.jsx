import React from "react";
import BookSwiper from "../BookSwiper/BookSwiper";
import SectionTitle from "../SectionTitle/SectionTitle";
import AdContainer from "../UI/AdContainer/AdContainer";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import axios from "axios";
export default function BestSelling(props) {
  // const { books, isLoading } = useSelector((state) => state.books);
  // const [booksData, setBooks] = useState([]);
  // const dispatch = useDispatch();
  // let isIntial = true;

  // useEffect(() => {
  //   if (isIntial) {
  //     isIntial = false;
  //     return;
  //   }
  //   setBooks(
  //     (async function (filters) {
  //       try {
  //         const res = await axios.get(
  //           `${process.env.REACT_APP_BASE_URL}books?${filters || ""}`
  //         );
  //         localStorage.setItem("books", JSON.stringify(res.data.data.book));
  //         console.log(res);
  //         return res.data.data.books;
  //       } catch (error) {
  //         console.log(error);
  //         return null;
  //       }
  //     })(`sort=${props.sort}`)
  //   );
  // }, []);

  return (
    <div className="mt-5">
      {" "}
      <SectionTitle title={props.title} button="true" textSize={true} />
      <div className="row mt-5">
        <div className="col-lg-8 col-12">
          <BookSwiper sort={props.sort} shownBook={4} />
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
