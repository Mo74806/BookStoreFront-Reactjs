import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import "@coreui/coreui/dist/css/coreui.min.css";
import BookSwiper from "./components/BookSwiper/BookSwiper";
import BookCard from "./components/BookCard/BookCard";
import SectionTitle from "./components/SectionTitle/SectionTitle";
import FilterReview from "./components/Filters/FilterReview/FilterReview";
import FilterOption from "./components/Filters/FilterOption/FilterOption";
import FilterRange from "./components/Filters/FilterRange/FilterRange";
import BookDetails from "./components/BookDetails/BookDetails";
import AuthorData from "./components/AuthorData/AuthorData";
import AuthorBook from "./components/AuthorBook/AuthorBook";
import Category from "./components/Category/Category";
import CategorySwiper from "./components/CategorySwiper/CategorySwiper";
import AdContainer from "./components/UI/AdContainer/AdContainer";
import LoadingSpinner from "./components/UI/LoadingSpinner/LoadingSpinner";
import BestSelling from "./components/BestSelling/BestSelling";
import Features from "./components/Features/Features";
import Author from "./Pages/Author/Author";
import Book from "./Pages/Book/Book";
import PageMainTitle from "./components/PageMainTitle/PageMainTitle";
import BookGrid from "./components/BookGrid/BookGrid";
import Shop from "./Pages/Shop/Shop";
import CartDetails from "./components/CartDetails/CartDetails";
import Modal from "./components/UI/Modal/Modal";
import Home from "./Pages/Home/Home";
import { useState } from "react";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { Route, Routes } from "react-router-dom";
import MyFooter from "./components/MyFooter/MyFooter";
import NotFound from "./components/NotFound/NotFound";
function App() {
  return (
    <>
      <NavBar />
      {/* <Login /> */}
      <Routes>
        {/* <Route path="/">
          <Redirect to="/home" />
        </Route> */}

        <Route path="/" exact element={<Home />} />
        <Route path="/loading" element={<LoadingSpinner />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/author/:id" element={<Author />} />
        <Route path="/books" element={<Shop />}></Route>
        <Route path="/books/:id" element={<Book />} />
        <Route path="/cart" element={<CartDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <MyFooter />
      {/* 

      {cartShown && (
        <Modal onClose={handleCloseCart}>
          <div className="container">
            <div className="row">
              <div className="">
                {" "}
                <CartDetails />
              </div>
            </div>
          </div>
        </Modal>
      )}
      <Shop /> */}
      {/* <CartDetails /> */}

      {/* <div className="container">
        <Book />
        <Author />
      </div> */}
    </>
  );
}

export default App;
