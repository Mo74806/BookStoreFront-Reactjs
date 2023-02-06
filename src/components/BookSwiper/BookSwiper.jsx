import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import classes from "./BookSwiper.module.css";
import BookCard from "../BookCard/BookCard";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import axios from "axios";
export default function BookSwiper(props) {
  const [booksData, setBooks] = useState([]);
  const dispatch = useDispatch();
  let isIntial = true;

  useEffect(() => {
    if (isIntial) {
      isIntial = false;
      return;
    }
    let getBooks = async function (filters) {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BASE_URL}books?${filters || ""}`
        );
        localStorage.setItem("books", JSON.stringify(res.data.data.book));
        console.log(res);
        return res.data.data.books;
      } catch (error) {
        console.log(error);
        return null;
      }
    };
    let books = getBooks(`sort=${props.sort}`);

    books.then((val) => {
      console.log(val);
      setBooks(val);
    });
  }, []);

  useEffect(() => {
    console.log(booksData);
  }, [booksData]);
  return (
    <div className="container">
      <Swiper
        className="py-5 my-3 "
        spaceBetween={0}
        slidesPerView={5}
        autoplay={{
          delay: 10,
          disableOnInteraction: false,
        }}
        onSlideChange={() => {}}
        onSwiper={(swiper) => {}}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          900: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1300: {
            slidesPerView: props.shownBook || 5,
            spaceBetween: 0,
          },
        }}
      >
        {" "}
        <div className="row  m-0 p-0 my-5 position-relative">
          {booksData.length > 0
            ? booksData.map((book, index) => (
                <SwiperSlide key={index}>
                  <BookCard scale={props.scale} book={book} size={props.size}>
                    {" "}
                  </BookCard>
                  <div className={`${classes.line} col-1`}></div>
                </SwiperSlide>
              ))
            : ""}
        </div>
      </Swiper>
    </div>
  );
}
