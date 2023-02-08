import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import classes from "./BookSwiper.module.css";
import BookCard from "../BookCard/BookCard";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { getAllBooks } from "../../store/reducers/bookSlice";
import axios from "axios";
export default function BookSwiper(props) {
  const [booksData, setBooks] = useState([]);
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  let isIntial = true;

  useEffect(() => {
    if (isIntial) {
      isIntial = false;
      return;
    }
    if (!props.books) {
      dispatch(getAllBooks(`sort=${props.sort}`));
    }
  }, []);

  useEffect(() => {
    setBooks(props.books || books);
  }, [books]);
  return (
    <div className="">
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
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          820: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          1300: {
            slidesPerView: props.shownBook || 5,
            spaceBetween: 0,
          },
        }}
      >
        {" "}
        <div className=" m-0 p-0 my-5  position-relative">
          {booksData && booksData.length > 0
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
