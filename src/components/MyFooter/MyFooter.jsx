import React from "react";
import "./MyFooter.css";
import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";
export default function MyFooter() {
  return (
    <>
      <footer className="row m-0  p-5 ">
        <div className=" row footer-first">
          <div className="col-12 col-lg-2 my-5 ">
            <div className=" ">
              <div className="logo text-white h2 fw-bold">La Paradise</div>
              <div className="address my-3 text-sm text-white-50">
                64,Imbaba,Giza,Egypt
              </div>
              <div className="address-map text-sm text-white">SHOW ON MAP</div>
              <SocialMediaIcons className="fs-5" />
            </div>
          </div>
          <div className="col-12 col-lg-3 my-5">
            <div className="text-white h7 fw-bold">Need Help</div>
            <div className="h7 fw-semibold  my-3 phone">+(02) 01148582132</div>
            <div className="address mt-3 text-sm text-white-50">
              Monday – Friday: 9:00-20:00
            </div>
            <div className="address mb-3 text-sm text-white-50">
              Saturday: 11:00 – 15:00
            </div>
            <div className="address-map text-sm text-white">
              M.khaled201774@gmail.com
            </div>
          </div>
          {/* convert it to component */}
          <div className="col-6 col-lg-2 my-5">
            {" "}
            <div className="text-white h7 fw-bold">Explore</div>
            <button className="my-3 text-sm  border border-0 bg-transparent d-block footer-btn">
              About us
            </button>
            <button className="my-3 text-sm  border border-0 bg-transparent d-block footer-btn">
              Sitemap
            </button>
            <button className="my-3 text-sm  border border-0 bg-transparent d-block footer-btn">
              Bookmarks
            </button>
            <button className="my-3 text-sm  border border-0 bg-transparent d-block footer-btn">
              Sign in/Join
            </button>
          </div>
          <div className="col-6 col-lg-2 my-5">
            {" "}
            <div className="text-white h7 fw-bold">Our Service</div>
            <button className="my-3 text-sm  border border-0 bg-transparent d-block footer-btn">
              Help Center
            </button>
            <button className="my-3 text-sm  border border-0 bg-transparent d-block footer-btn">
              Returns
            </button>
            <button className="my-3 text-sm  border border-0 bg-transparent d-block footer-btn">
              Product Recalls
            </button>
            <button className="my-3 text-sm  border border-0 bg-transparent d-block footer-btn">
              Accessibility
            </button>
            <button className="my-3 text-sm  border border-0 bg-transparent d-block footer-btn">
              Contact Us
            </button>
            <button className="my-3 text-sm  border border-0 bg-transparent d-block footer-btn">
              Store Pickup
            </button>
          </div>
          <div className="col-6 col-lg-2 my-5">
            {" "}
            <div className="text-white h7 fw-bold">Categories</div>
            <button className="my-3 text-sm  border border-0 bg-transparent d-block footer-btn">
              Action
            </button>
            <button className="my-3 text-sm  border border-0 bg-transparent d-block footer-btn">
              Comedy
            </button>
            <button className="my-3 text-sm  border border-0 bg-transparent d-block footer-btn">
              Drama
            </button>
            <button className="my-3 text-sm  border border-0 bg-transparent d-block footer-btn">
              Horror
            </button>
            <button className="my-3 text-sm  border border-0 bg-transparent d-block footer-btn">
              Kids
            </button>
          </div>
        </div>
        <div className="row d-md-flex d-none">
          <div className="col-12 text-end  my-4">
            <img
              width="348"
              height="26"
              src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/footer_img.png"
              className="attachment-full size-full"
              alt=""
              loading="lazy"
            />
          </div>
        </div>
      </footer>
    </>
  );
}
