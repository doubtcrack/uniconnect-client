import React from "react";
import styles from "../../styles/styles";
import ShopInfo from "../../components/Shop/ShopInfo";
import ShopProfileData from "../../components/Shop/ShopProfileData";

const ShopPreviewPage = () => {
  return (
    <div className="bg-[#f3f4f5] min-h-screen w-full justify-center flex">
      <div className={`${styles.section}`}>
        <div className="w-full flex flex-wrap py-10 justify-between">
          <div className="w-full 800px:w-[25%] bg-[#fff] 800px:overflow-y-scroll 800px:h-[90vh] 800px:sticky top-10 left-0 z-10 rounded-lg">
            <ShopInfo isOwner={false} />
          </div>
          <div className="w-full 800px:w-[72%] mt-5 800px:mt-['unset'] rounded-lg">
            <ShopProfileData isOwner={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPreviewPage;
