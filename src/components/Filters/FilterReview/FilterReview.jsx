import React from "react";
import Rating from "@mui/material/Rating/Rating";
import StarIcon from "@material-ui/icons/Star";
import classes from "../Filters.module.css";
export default function FilterReview(props) {
  return (
    <>
      <div className={`bg-white ${classes["filter-option"]} border`}>
        <div className={` px-4 py-3 ${classes["filter-title"]}`}>Reviews</div>
        <div className="">
          <ul className="py-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <button key={item} className="bg-transparent border border-0">
                <li
                  onClick={() => {
                    props.handleChange(item);
                  }}
                >
                  <Rating
                    className="rating"
                    name="text-feedback"
                    value={item}
                    readOnly
                    precision={0.5}
                    size="small"
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                    }
                  />
                  <div className=" fw-bold px-2">{`  (${item})  `}</div>
                </li>
              </button>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
