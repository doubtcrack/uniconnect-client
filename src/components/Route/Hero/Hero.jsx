import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative w-[100%] h-[50vh] md:h-[70vh] bg-cover bg-center bg-no-repeat flex justify-center items-center`}
      style={{
        backgroundImage:
          "url(https://uniconnect-v2.vercel.app/images/slider-img/digital-banner.webp)",
      }}
    >
      <div
        className={`backdrop-filter backdrop-blur-[12px] bg-[rgba(252,251,255,0.6)] p-3 md:p-8 lg:p-10 shadow-lg md:overflow-hidden rounded-md md:w-[60%] lg:w-[50%] md:mt-auto absolute m-2 md:top-[45%] md:right-[25%] md:bottom-auto`}
      >
        <h3 className={`text-lg md:text-2xl lg:text-3xl font-medium`}>
          Academic Resources at Fingertips!
        </h3>
        <p class="text-[13px] md:text-lg mt-2 md:mt-4 lg:mt-8">
          You will be given the access to academic notes, books, previous year
          papers, etc., so finding the perfect study material is now easier than
          ever.
        </p>
        <Link to="/products" className="inline-block">
          <div className={`${styles.button} mt-5`}>
            <span className="text-[#fff] font-[Poppins] text-[18px]">
              Shop Now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
