import React from "react";
import styles, { inlineStyle } from "../../styles/styles";

const CheckoutSteps = ({ active }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="flex items-center flex-wrap">
        <div className={`${styles.noramlFlex}`}>
          <div className={`${inlineStyle.checkoutButtons.class} `}>
            <span className={`text-white font-[600] text-sm`}>1.Info</span>
          </div>
          <div
            className={`${
              active > 1
                ? `w-[30px] 800px:w-[70px] h-[4px] `
                : "w-[30px] 800px:w-[70px] h-[4px] !bg-[#feeee2]"
            }`}
          />
        </div>

        <div className={`${styles.noramlFlex}`}>
          <div
            className={`${
              active > 1
                ? `${inlineStyle.checkoutButtons.class} `
                : `${inlineStyle.checkoutButtons.class} !bg-[#feeee2]`
            }`}
          >
            <span
              className={`font-[600] text-sm ${
                active > 1 ? `text-white ` : ` !text-[#ff6f00]`
              }`}
            >
              2.Proceed
            </span>
          </div>
        </div>

        <div className={`${styles.noramlFlex}`}>
          <div
            className={`${
              active > 3
                ? `w-[30px] 800px:w-[70px] h-[4px] `
                : "w-[30px] 800px:w-[70px] h-[4px] !bg-[#feeee2]"
            }`}
          />
          <div
            className={`${
              active > 2
                ? `${inlineStyle.checkoutButtons.class} `
                : `${inlineStyle.checkoutButtons.class} !bg-[#feeee2]`
            }`}
          >
            <span
              className={`font-[600] text-sm ${
                active > 2 ? `text-white` : ` !text-[#ff6f00]`
              }`}
            >
              3.Success
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSteps;
