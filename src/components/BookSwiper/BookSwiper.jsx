import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import classes from "./BookSwiper.module.css";
import BookCard from "../BookCard/BookCard";

export default function BookSwiper(props) {
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
          {props.books &&
            props.books.map((book, index) => (
              <SwiperSlide key={index}>
                <BookCard scale={props.scale} book={book} size={props.size}>
                  {" "}
                </BookCard>
                <div className={`${classes.line} col-1`}></div>
              </SwiperSlide>
            ))}
        </div>
      </Swiper>
    </div>
  );
}
