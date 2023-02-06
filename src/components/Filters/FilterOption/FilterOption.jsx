import React from "react";
import classes from "../Filters.module.css";

export default function FilterOption(props) {
  return (
    <>
      {props.options ? (
        <div className={`${classes["filter-option"]} bg-white border`}>
          <div className={`${classes["filter-title"]}  px-4 py-3`}>
            {props.name}
          </div>
          <div className="">
            <ul>
              {props.options.map((item, index) => (
                <li key={index}>
                  <input
                    className="mx-2 "
                    type="checkbox"
                    onChange={() => props.handleSelect(item)}
                  />
                  {item.split("_").join(" ")}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
