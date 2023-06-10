import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <>
      <div className="flex justify-center items-center mb-4 md:mb-0 md:flex-row flex-col-reverse gap-5 relative z-0 mx-4 md:mx-8">
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
              Button
            </button>
          </Link>
        </div>
        <div className="md:flex-[0.88] flex justify-end items-end w-full h-fit">
          <div className="relative w-full h-full z-0">
            <img
              src="https://pngimg.com/d/student_PNG124.png"
              alt="hero"
              fill
              className="object-contain"
            />
          </div>

          {/* <div className="absolute xl:-top-24 xl:-right-1/2 -right-1/4 bg-[url('https://cars-showcase-ftmk.vercel.app/hero-bg.png')] bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden" /> */}
        </div>
      </div>
      {/* <div
        className={`relative w-[100%] h-[60vh] lg:h-[73vh] bg-cover bg-center bg-no-repeat flex justify-center items-center`}
        style={{
          backgroundImage:
            "url(https://uniconnect-v2.vercel.app/images/slider-img/digital-banner.webp)",
        }}
      >
        <div
          className={`backdrop-filter backdrop-blur-[12px] bg-[rgba(252,251,255,0.6)] p-3 md:p-8 lg:p-10 shadow-lg md:overflow-hidden rounded-md md:w-[60%] lg:w-[50%] md:mt-auto m-2 md:top-[30%] md:right-[25%] md:bottom-auto`}
        >
          <h3 className={`text-lg md:text-2xl lg:text-3xl font-medium`}>
            Academic Resources at Fingertips!
          </h3>
          <p class="text-[13px] md:text-lg mt-2 md:mt-4 lg:mt-8">
            You will be given the access to academic notes, books, previous year
            papers, etc., so finding the perfect study material is now easier
            than ever.
          </p>
          <Link to="/shop-create" className="inline-block">
            <div className={`${styles.button} mt-5`}>
              <span className="text-[#fff] font-[Poppins] text-[18px] p-1 px-2">
                Join the Community
              </span>
            </div>
          </Link>
        </div>
      </div> */}
    </>
  );
};

export default Hero;
