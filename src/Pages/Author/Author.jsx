import React from "react";
import AuthorData from "./../../components/AuthorData/AuthorData";
import AuthorBook from "./../../components/AuthorBook/AuthorBook";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function Author(props) {
  const { id } = useParams();
  const BASE_URL = "https://book-store-api-kappa.vercel.app/api/v1/";
  const [author, setAuthor] = useState({});
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  useEffect(() => {
    let getAuthorData = async () => {
      let res = await axios.get(`${BASE_URL}authors/${id}`);
      setAuthor(res.data.data.data);
      return;
    };
    getAuthorData();
  }, []);

  return (
    <>
      <div className="my-5 px-2 container">
        <AuthorData author={author} />
      </div>
      <div className="container">
        <AuthorBook books={author.books} title={author.name} />
      </div>
    </>
  );
}
