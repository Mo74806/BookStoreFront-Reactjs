import React from "react";
import MainButton from "../UI/MainButton/MainButton";
import "./NotFound.css";
export default function NotFound() {
  return (
    <>
      <main class="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
        <h1 class="text-9xl font-extrabold text-white tracking-widest">404</h1>
        <div class="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
          Page Not Found
        </div>
        <button class="mt-5">
          <a class="relative inline-block  text-white text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
            <span class="absolute inset-0 text-center text-white transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>

            {/* <span class="px-8 py-3  text-black bg-[#1A2238] px-5 text-center ">
              <MainButton text="Go Home" color="lightgreen" />
            </span> */}
          </a>
        </button>
      </main>{" "}
    </>
  );
}
