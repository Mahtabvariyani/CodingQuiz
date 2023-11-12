"use client";
import Lottie from "lottie-react";
import React from "react";
import loading from "./loading.json";

const Loading = () => {
  return (
    <div className=" py-24 sm:py-32 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="h-[40vh] justify-center flex">
          <h2 className="text-bold text-2xl">
            Working On it ...
          </h2>

        </div>
      </div>
    </div>
  );
};

export default Loading;
