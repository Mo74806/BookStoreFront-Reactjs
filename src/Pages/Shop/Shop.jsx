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

  let dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [filterModal, setFilterModel] = useState(false);
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    dispatch(
      getAllBooks(
        `${filters.categoryQuery}${filters.priceQuery}&${filters.ratingQuery}&page=${page}&limit=12`
      )
    );
  }, [filters, page]);

  let handlePagination = (e, value) => {
    setPage(value);
  };

  let handleCategoryFilter = (option) => {
    //check the filter option if exist in the old options
    if (!filters.category.includes(option)) {
      dispatch(
        filterActions.setFilters({
          ...filters,
          category: [...filters.category, option],
          categoryQuery: filters.categoryQuery + `category[in]=${option}&`,
          priceQuery: filters.priceQuery,
          ratingQuery: filters.ratingQuery,
        })
      );
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
  useEffect(() => {}, [filters]);

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
                options={[
                  "Genre_Fiction",
                  "Action_Adventure",
                  "Activity_Books",
                  "Animals",
                  "Anthologies",
                  "Arts_Literature",
                  "Cars_Trucks",
                  "Classics",
                  "Contemporary",
                  "Cultural",
                  "European",
                  "Foreign_Language",
                  "Historical",
                ]}
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
              options={[
                "Genre_Fiction",
                "Action_Adventure",
                "Activity_Books",
                "Animals",
                "Anthologies",
                "Arts_Literature",
                "Cars_Trucks",
                "Classics",
                "Contemporary",
                "Cultural",
                "European",
                "Foreign_Language",
                "Historical",
              ]}
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

        <div
          className={`col-md-8 col-lg-9  col-12 mr-lg-4     mx-md-auto mt-md-5   mb-3 `}
        >
          <BookGrid />
          <div className="row d-flex  justify-content-center">
            <div className="col-4 d-flex align-items-end  fw-bold">
              <Stack spacing={2}>
                <Pagination
                  count={5}
                  color="primary"
                  page={page}
                  onChange={(_, page) => handlePagination(_, page)}
                />
              </Stack>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
