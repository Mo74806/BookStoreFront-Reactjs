import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import BookCard from "../BookCard/BookCard";
// import { useSelector } from "react-redux";
import classes from "./BookSwiper.module.css";
import BookCard from "../BookCard/BookCard";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getAllBooks } from "../../store/reducers/bookSlice";
export default function BookSwiper(props) {
  // const { books } = useSelector((state) => state.books);
  // const [booksData, setBooks] = useState([]);
  // const dispatch = useDispatch();
  // let isIntial = true;
  // useEffect(() => {
  //   if (isIntial) {
  //     isIntial = false;
  //     return;
  //   }
  //   dispatch(getAllBooks());
  // }, [dispatch, books]);

  // useEffect(() => {
  //   // if ((books.isloading = false)) console.log(books[0].author.name);
  //   console.log(booksData);
  // }, [booksData]);

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
