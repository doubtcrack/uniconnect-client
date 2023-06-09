import React from "react";
import {
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
const ProductCardSkeleton = () => {
  return (
    <div
      role="status"
      class="animate-pulse h-80 w-full rounded-md bg-white shadow-sm p-3 relative"
    >
      <div className="flex mb-4">
        <div className="flex align-center justify-center w-4/5">
          <div class="flex items-center justify-center h-40 w-60 bg-gray-300 rounded-md shadow-xl mt-3 mb-4 dark:bg-gray-700">
            <svg
              class="w-12 h-12 text-gray-200 dark:text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 640 512"
            >
              <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
            </svg>
          </div>
        </div>
        <div className="w-1/5 flex flex-col mt-4 mb-8 items-center justify-evenly">
          <AiOutlineHeart size={22} />
          <AiOutlineEye size={22} />
          <AiOutlineShoppingCart size={22} />
        </div>
      </div>
      <div class="flex items-center">
        <svg
          class="text-gray-200 w-[35px] h-[35px] mx-2.5 dark:text-gray-700 border rounded-full border-border-100 p-1"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <div>
          <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
        </div>
      </div>

      <div class="mt-2 h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
      {/* <span class="sr-only">Loading...</span> */}
    </div>
  );
};

export default ProductCardSkeleton;
