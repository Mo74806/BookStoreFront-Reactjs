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
          `https://book-store-api-kappa.vercel.app/api/v1/books?${
            filters || ""
          }`
        );
        localStorage.setItem("books", JSON.stringify(res.data.data.book));
        return res.data.data.books;
      } catch (error) {
        return error;
      }
    };
    let books = getBooks(`sort=${props.sort}`);

    books.then((val) => {
      setBooks(val);
    });
  }, []);

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
                </SwiperSlide>
              ))
            : ""}
        </div>
      </Swiper>
    </div>
  );
}
