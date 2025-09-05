import React from "react";
import hero_img from "../../../assets/about.png";

const AboutHero = () => {
  return (
    <section className="py-16 pt-30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10">
          <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
            <p className="text-base md:text-lg max-w-2xl mb-6 text-gray-700">
              We are a passionate team dedicated to building modern and creative
              digital solutions. Our mission is to deliver quality and
              innovation.
            </p>
            <button className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-md shadow hover:bg-gray-100 transition">
              Learn More
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src={hero_img} alt="About" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
