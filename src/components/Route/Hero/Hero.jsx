import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
     <div class="mb-8 flex flex-wrap justify-between md:mb-16">
          <div class="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pt-48 lg:pb-24">
            <h1 class="text-black-800 mb-4 text-4xl font-bold sm:text-5xl md:mb-8 md:text-6xl">
              Find your
              <br />
              style online
            </h1>

            <p class="max-w-md leading-relaxed text-gray-500 xl:text-lg">
              This is a section of some simple filler text, also known as
              placeholder text. It shares characteristics of real text.
            </p>
          </div>

          <div class="mb-12 flex w-full md:mb-16 lg:w-2/3">
            <div class="relative top-12 left-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:top-16 md:left-16 lg:ml-0">
              <img
                src="https://media.istockphoto.com/id/821548604/photo/happy-african-girl-with-shopping-bags.jpg?b=1&s=170667a&w=0&k=20&c=xvbaiZnevpNFXBzhtab84VT3p8K8oPC58R2CpL7Lc4A="
                loading="lazy"
                alt="Photo by Kaung Htet"
                class="h-full w-full object-cover object-center"
              />
            </div>

            <div class="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
              <img
                src="https://media.istockphoto.com/id/821551220/photo/happy-afro-girl-with-shopping-bags.jpg?b=1&s=170667a&w=0&k=20&c=XnTVrFeRa4ty0tAXnd_V2OqqJt0odoM0PJFdCD9D1Z4="
                loading="lazy"
                alt="Photo by Manny Moreno"
                class="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
  );
};

export default Hero;
