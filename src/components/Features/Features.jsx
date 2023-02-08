import React from "react";
import SingleFeature from "./SingleFeature";

export default function Features() {
  let features = [
    {
      title: "Best Offers ",
      subtitle: "Orders $50 or more",
      icon: "Offer",
    },
    {
      title: "Free Delivery",
      subtitle: "24/7 amazing service",
      icon: "Delivery",
    },
    { title: "Greate Daily Deal", subtitle: "when you Signup", icon: "Deal" },
    { title: "Wide Assortment", subtitle: "Mega Discounts", icon: "Discount" },
    { title: "Easy Returns", subtitle: "Within 30 days", icon: "Return" },
  ];
  return (
    <div
      className={`row m-0 p-0  col-lg-10 col-10   py-5 mb-5 flex-column flex-md-row    d-flex mx-auto  justify-content-center  `}
    >
      {features.map((item, index) => {
        return (
          <div
            className="col-md-2  col-12 d-flex  justify-content-center"
            key={index}
          >
            <SingleFeature
              title={item.title}
              icon={item.icon}
              subtitle={item.subtitle}
            />
          </div>
        );
      })}
    </div>
  );
}
