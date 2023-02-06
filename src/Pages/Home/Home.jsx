import React from "react";
import CategorySwiper from "../../components/CategorySwiper/CategorySwiper";
import AdContainer from "../../components/UI/AdContainer/AdContainer";
import BestSelling from "../../components/BestSelling/BestSelling";
import LoadingSpinner from "../../components/UI/LoadingSpinner/LoadingSpinner";
import Landing from "../../components/Landing/Landing";
import { getAllBooks } from "../../store/reducers/bookSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Features from "../../components/Features/Features";

// import dotenv from "dotenv";
// dotenv.config({ path: "../../../config.env" });
export default function Home() {
  // const { books, isLoading } = useSelector((state) => state.books);
  // const [booksData, setBooks] = useState([]);
  useEffect(() => {}, []);
  // const dispatch = useDispatch();
  // // let isIntial = true;
  // useEffect(() => {
  // if (isIntial) {
  //   isIntial = false;
  //   return;
  // }
  //   dispatch(getAllBooks());
  // }, []);

  return (
    <div className="row m-0 ">
      <Landing />
      <div className="py-5 bg-white w-100">
        <CategorySwiper />
      </div>

      <div className="row py-5 bg-light d-flex justify-content-center">
        <div className="col-lg-5 col-12 m-lg-0 my-2">
          {" "}
          <AdContainer
            color="yellow"
            title="Sale 10% Off Until March"
            subtitle="it all begins with a great book ,buy 2 get 1 Free"
            img="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/h1-img1.png"
          />
        </div>
        <div className="col-lg-5 col-12 m-lg-0 my-2">
          {" "}
          <AdContainer
            color="purple"
            textColor="white"
            title="Books Make Great Gifts"
            subtitle="why not sent the gift of a book to family & friends."
            img="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/h1-img1.png"
          />
        </div>
      </div>
      <div className="container px-5 my-5 ">
        {" "}
        <BestSelling title="Trending Now" sort="-ratingsQuantity" ad="" />
        <BestSelling title="Best Selling" sort="-numberOfSeller" ad="" />
        <BestSelling title="Popular Books" ad="" />
      </div>
      <Features />
    </div>
  );
}
