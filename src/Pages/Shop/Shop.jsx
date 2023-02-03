import React from "react";
import classes from "./Shop.module.css";
import PageMainTitle from "../../components/PageMainTitle/PageMainTitle";
import FilterOption from "../../components/Filters/FilterOption/FilterOption";
import FilterRange from "../../components/Filters/FilterRange/FilterRange";
import FilterReview from "../../components/Filters/FilterReview/FilterReview";
import BookGrid from "../../components/BookGrid/BookGrid";
import { useState } from "react";
import { useEffect } from "react";
import { CheckBoxOutlineBlankOutlined, Maximize } from "@material-ui/icons";
import { getAllBooks } from "../../store/reducers/bookSlice";
import { filterActions } from "../../store/reducers/filterslice";
import { useSelector } from "react-redux";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useDispatch } from "react-redux";
import MainButton from "../../components/UI/MainButton/MainButton";
import Modal from "../../components/UI/Modal/Modal";
import Features from "../../components/Features/Features";
export default function Shop() {
  const { filters } = useSelector((state) => state);
  console.log(filters);

  let dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [filterModal, setFilterModel] = useState(false);
  useEffect(() => {
    dispatch(
      getAllBooks(
        `${filters.categoryQuery}${filters.priceQuery}&${filters.ratingQuery}`
      )
    );
  }, [filters]);
  // const [filters, setFilters] = useState({
  //   category: [],
  //   price: 10000,
  //   rating: 0,
  // });
  let handlePagination = (e, value) => {
    console.log(value);
  };

  let handleCategoryFilter = (option) => {
    //check the filter option if exist in the old options
    console.log(filters.category);
    if (!filters.category.includes(option)) {
      console.log("here");

      dispatch(
        filterActions.setFilters({
          ...filters,
          category: [...filters.category, option],
          categoryQuery: filters.categoryQuery + `category[in]=${option}&`,
          priceQuery: filters.priceQuery,
          ratingQuery: filters.ratingQuery,
        })
      );
      console.log(filters);
    } else {
      let tempFilters = filters.category;
      let query = "";
      let newFilters = tempFilters.filter((item) => {
        if (item != option) {
          query += `category[in]=${item}&`;
          return item;
        }
      });

      dispatch(
        filterActions.setFilters({
          ...filters,
          category: newFilters,
          categoryQuery: query,
          priceQuery: filters.priceQuery,
          ratingQuery: filters.ratingQuery,
        })
      );
    }
  };

  let handlePriceFilter = (price) => {
    dispatch(
      filterActions.setFilters({
        ...filters,
        price: price,
        categoryQuery: filters.categoryQuery,
        priceQuery: `price[lte]=${price}`,
        ratingQuery: filters.ratingQuery,
      })
    );
  };

  let handleReviewFilter = (rating) => {
    console.log(rating);
    dispatch(
      filterActions.setFilters({
        ...filters,
        rating: rating,
        categoryQuery: filters.categoryQuery,
        priceQuery: filters.priceQuery,
        ratingQuery: `ratingsAverage[lte]=${rating}`,
      })
    );
  };
  useEffect(() => {
    console.log(filters);
  }, [filters]);

  let showFilterModal = () => {
    setFilterModel(!filterModal);
  };
  return (
    <div className=" row mx-0">
      {filterModal && (
        <Modal onClose={showFilterModal}>
          {" "}
          <div className="col-lg-2 col-md-4   align-items-center col-0  d-md-none d-flex flex-column my-5 px-3  ">
            <div className="mb-2">
              <FilterOption
                name="Category"
                handleSelect={handleCategoryFilter}
                options={["Genre_Fiction", "ss", "option3"]}
              />
            </div>
            <div className="mb-2">
              <FilterRange
                name="price"
                min={10}
                max={200}
                handleChange={handlePriceFilter}
              />
            </div>
            <div className="mb-2">
              <FilterReview handleChange={handleReviewFilter} />
            </div>
          </div>
        </Modal>
      )}
      <PageMainTitle title={"Shop"} />

      <div className="row mx-0">
        <div className="col-lg-2 col-md-4     d-md-block d-none my-5 px-3  ">
          <div className="mb-2">
            <FilterOption
              name="Category"
              handleSelect={handleCategoryFilter}
              options={["Genre_Fiction", "ss", "option3"]}
            />
          </div>
          <div className="mb-2">
            <FilterRange
              name="price"
              min={10}
              max={200}
              handleChange={handlePriceFilter}
            />
          </div>
          <div className="mb-2">
            <FilterReview handleChange={handleReviewFilter} />
          </div>
        </div>
        <div className="row  mx-auto d-md-none d-block   border-gray border-bottom">
          <div className="col-md-6 col-12">
            {" "}
            <MainButton
              text={`Show Filters`}
              color="lightgray"
              filter={true}
              handleClick={showFilterModal}
            />
          </div>
        </div>

        <div className="col-md-8 col-lg-9  col-12 mr-lg-4    d-flex flex-column align-items-center   mx-md-auto mt-md-5   mb-3 ">
          <BookGrid />
          <div className="row d-flex  justify-content-center">
            <div className="col-5 fw-bold">
              <Stack spacing={2}>
                <Pagination
                  count={10}
                  color="secondary"
                  page={page}
                  onChange={handlePagination}
                />
              </Stack>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
