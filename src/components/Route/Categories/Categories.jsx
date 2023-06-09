import React from "react";
import { categoriesData } from "../../../static/data";
import styles from "../../../styles/styles";
import SectionTitle from "../../Layout/SectionTitle";
import CategoryLgBox from "./CategoryLgBox";
import CategorySmSlider from "./CategorySmSlider";

const Categories = () => {
  return (
    <>
      <div className="flex flex-col items-center my-4 mb-16 mx-2 md:my-8">
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
