import React from "react";
import HeroImg from "../../../assets/hero_img.png";

const HomeHero = () => {
  return (
    <section className="py-16 pt-30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-4xl md:text-[62px] font-semibold">
              There are Fake API Informations
            </h1>
            <p className="text-base md:text-[18px] mt-5 text-gray-700">
              Welcome to our platform! Here you can explore fake API data for
              learning, testing, and experimenting with different projects. Fake
              APIs are very useful for practice when you don't have access to
              real backend data. You can fetch posts, users, comments, and more
              without needing an actual server.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src={HeroImg} alt="Hero" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
