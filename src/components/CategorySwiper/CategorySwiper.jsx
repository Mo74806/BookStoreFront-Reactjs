import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Category from "../Category/Category";
import "swiper/css";
import classes from "./CategorySwiper.module.css";
import Arrow from "@material-ui/icons/ArrowLeftTwoTone";
export default function CategorySwiper(props) {
  let categories = [
    {
      name: "Action & Adventure",
      img: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/h6_cat9.png",
    },
    { name: "Activity Books", img: "" },
    { name: "Animals", img: "" },
    {
      name: "Anthologies",
      img: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/h6_cat7.png",
    },
    {
      name: "Arts & Literature",
      img: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/h6_cat9.png",
    },
    { name: "Cars & Trucks", img: "" },
    {
      name: "Classics",
      img: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/h6_cat8.png",
    },
    {
      name: "Contemporary",
      img: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/h6_cat5.png",
    },
    { name: "Cultural", img: "" },
    {
      name: "European",
      img: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/h6_cat1.png",
    },
    { name: "Foreign Language", img: "" },
    {
      name: "Genre Fiction",
      img: "https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/h6_cat6.png",
    },
    { name: "Historical", img: "" },
  ];
  return (
    <div
      className={` py-5 ${classes["section-background"]}  ${classes["swiper-container"]}`}
    >
      <div className={`container   ${classes["box-shadow"]} `}>
        <Swiper
          className="py-5  "
          spaceBetween={0}
          slidesPerView={5}
          autoplay={{
            delay: 5000,
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
              slidesPerView: 3,
              spaceBetween: 0,
            },
            900: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
            1300: {
              slidesPerView: props.shownBook || 5,
              spaceBetween: 0,
            },
          }}
        >
          <div className={` d-flex  m-0 p-0 `}>
            {categories &&
              categories.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="row m-0 px-md-5 py-5">
                      <div className="col-4  ">
                        {" "}
                        <Category img={item.img} category={item.name} />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
          </div>
        </Swiper>
      </div>
    </div>
  );
}
