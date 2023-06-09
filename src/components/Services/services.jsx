import React from "react";
import { brandingData } from "../../static/data";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const Services = () => {
  let scrollValue = document.querySelector("#servicesCard").clientWidth;
  // console.log("HELLLLLOOOoO");
  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= scrollValue;
  };
  const scrollRight = () => {
    document.getElementById("content").scrollLeft += scrollValue;
  };
  return (
    <>
      <div className="border-t border-border-200 bg-light px-6 py-5 h-[30vh] flex justify-center items-center">
        <div className="relative w-full flex justify-center items-center lg:w-[90%] ">
          <div className="prev absolute top-2/4 z-2 -mt-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-border-200 border-opacity-70 bg-light text-heading shadow-xl transition-all duration-200 hover:border-accent hover:bg-accent hover:text-light -left-4 md:-mt-5 md:h-9 md:w-9 md:-left-5 ">
            <button
              onClick={scrollLeft}
              className="p-2 m-2 rounded-full bg-white"
            >
              <FiChevronLeft />
            </button>
          </div>
          <div className="next absolute top-2/4 z-2 -mt-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-border-200 border-opacity-70 bg-light text-heading shadow-xl transition-all duration-200 hover:border-accent hover:bg-accent hover:text-light -right-4 md:-mt-5 md:h-9 md:w-9 md:-right-5">
            <button
              onClick={scrollRight}
              className="p-2 m-2 rounded-full bg-white"
            >
              <FiChevronRight />
            </button>
          </div>
          <div
            id="content"
            className="carousel lg:p-4 w-full overflow-y-hidden flex items-center justify-start overflow-x-auto scroll-smooth scrollbar-hide"
          >
            {brandingData &&
              brandingData.map((i, index) => (
                <div>
                  <Card
                    key={index}
                    title={i.title}
                    description={i.Description}
                    icon={i.icon}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

const Card = ({ key, title, description, icon }) => {
  return (
    <>
      <div
        id="servicesCard"
        className="card bg-white w-[82vw] md:w-[92vw] h-full min-h-[160px] max-h-[240px] md:max-h-[450px] justify-center items-center m-2 rounded-lg shadow-lg flex !flex-row !p-8 lg:w-[40.8vw] xl:w-[27.2vw]"
        key={key}
      >
        {icon}
        <div className="px-3">
          <h3 className="font-bold text-sm md:text-base">{title}</h3>
          <p className="text-xs md:text-sm">{description}</p>
        </div>
      </div>
    </>
  );
};
