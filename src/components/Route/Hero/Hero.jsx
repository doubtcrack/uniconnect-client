import React from "react";
import { Link } from "react-router-dom";
import { hero_image } from "../../../Assests/asssests";

const Hero = () => {
  return (
    <>
      <div className="flex justify-center items-center my-8 md:mb-0 md:flex-row flex-col-reverse gap-5 relative z-0 mx-4 md:mx-8">
        <div className="flex-1 padding-x h-fit">
          <h1 className="2xl:text-[64px] sm:text-[50px] text-[40px] font-semibold">
            Find Academic Resources at Fingertips! —quick and super easy!
          </h1>

          <p className="text-[24px] sm:text-[27px] text-black-100 font-light mt-5">
            Get access to academic resources, so finding the perfect item is now
            easier than ever.
          </p>
          <Link to="/shop-create" className="inline-block">
            <button class="mt-5 bg-transparent hover:bg-orange-500 text-orange-500 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded-full">
              Join the Community
            </button>
          </Link>
        </div>
        <div className="md:flex-[0.88] flex justify-end items-end w-full h-fit">
          <div className="relative w-full h-full z-0">
            <img
              src={hero_image}
              loading="lazy"
              alt="hero"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
