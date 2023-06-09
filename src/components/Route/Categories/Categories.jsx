import React from "react";
import { useNavigate } from "react-router-dom";
import { brandingData, categoriesData } from "../../../static/data";
import styles from "../../../styles/styles";
import SectionTitle from "../../Layout/SectionTitle";
import CategoryLgBox from "./CategoryLgBox";
import CategorySmSlider from "./CategorySmSlider";

const Categories = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col items-center my-4 mb-16 mx-2 md:my-8">
        <div className={`${styles.section} hidden sm:block`}>
          <div
            className={`branding my-12 flex justify-between w-full shadow-sm bg-white p-5 rounded-md`}
          >
            {brandingData &&
              brandingData.map((i, index) => (
                <div className="flex items-start" key={index}>
                  {i.icon}
                  <div className="px-3">
                    <h3 className="font-bold text-sm md:text-base">
                      {i.title}
                    </h3>
                    <p className="text-xs md:text-sm">{i.Description}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <SectionTitle title={"Category Of Goods"} />
        <CategorySmSlider categoriesData={categoriesData} />

        <div className="hidden lg:grid  gap-4 grid-rows-9 grid-cols-2 md:grid-cols-9 w-full xl:max-w-[2100px] mx-auto">
          {categoriesData &&
            categoriesData.map(
              ({
                id,
                title,
                description,
                styles,
                image_Url,
                imgWidth,
                imgHeight,
              }) => {
                return (
                  <CategoryLgBox
                    key={id}
                    id={id}
                    title={title}
                    description={description}
                    styles={styles}
                    image_Url={image_Url}
                    imgWidth={imgWidth}
                    imgHeight={imgHeight}
                  />
                );
              }
            )}
        </div>
      </div>
    </>
  );
};

export default Categories;
