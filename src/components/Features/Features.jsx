import React from "react";
import SingleFeature from "./SingleFeature";

export default function Features() {
  let features = [
    {
      title: "Best Offers ",
      subtitle: "Orders $50 or more",
      icon: "ss",
    },
    { title: "Free Delivery", subtitle: "24/7 amazing service", icon: "" },
    { title: "Greate Daily Deal", subtitle: "when you Signup", icon: "" },
    { title: "Wide Assortment", subtitle: "Mega Discounts", icon: "" },
    { title: "Easy Returns", subtitle: "Within 30 days", icon: "" },
  ];
  return (
    <div
      className={`row px-5 py-5 mb-5 flex-column flex-md-row  align-items-center  d-flex justify-content-around  `}
    >
      {features.map((item, index) => {
        return (
          <div
            className="col-md-2  col-12 d-flex  justify-content-center"
            key={index}
          >
            <SingleFeature title={item.title} subtitle={item.subtitle} />
          </div>
        );
      })}
    </div>
  );
}
