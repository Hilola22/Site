import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/nf.webp"

const NotFound = () => {
  return (
    <div className="flex flex-col items-center text-center mt-[100px]">
      <div className="select-none">
        <img src={img} alt="" />
      </div>
      <div>
        <h1 className="text-[40px]">Not Found</h1>
        <p className="mb-[30px] text-[20px] font-medium">
          Ooops! Page not found ❌
        </p>
        <Link
          className="w-auto h-[30px] px-[20px] py-[10px] rounded-[30px] bg-blue-900 text-white hover:bg-blue-600"
          to={"/"}
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
