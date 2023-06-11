const styles = {
  custom_container: "w-11/12 hidden sm:block",
  heading:
    "text-[27px] text-center md:text-start font-[600] font-Roboto pb-[20px]",
  section: "w-11/12 mx-auto",
  productTitle: "text-[30px] font-[500] font-Roboto text-[#333]",
  productDiscountPrice: "font-bold text-[18px] text-[#333] font-Roboto",
  price: "font-[500] text-[16px] text-orange-500 pl-3 mt-[-4px] line-through",
  shop_name: "pt-3 text-[15px] text-orange-500 pb-3",
  active_indicator: "absolute bottom-[-27%] left-0 h-[3px] w-full bg-[crimson]",
  button:
    "min-w-[150px] h-[50px] my-3 flex items-center justify-center bg-transparent hover:bg-orange-500 text-orange-500 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded-full cursor-pointer",
  cart_button:
    "px-[20px] h-[38px] rounded-[20px] bg-[#f63b60] flex items-center justify-center cursor-pointer",
  cart_button_text: "text-[#fff] text-[16px] font-[600]",
  input: "w-full border p-1 rounded-[5px]",
  activeStatus:
    "w-[10px] h-[10px] rounded-full absolute top-0 right-1 bg-[#40d132]",
  noramlFlex: "flex items-center",
};

const inlineStyle = {
  primaryGradient: {
    background:
      "linear-gradient(90deg, rgba(255, 111, 0, 0.75) 10%, rgba(255, 162, 0, 0.82) 100%)",
  },
  secondaryGradient: {
    background:
      "linear-gradient(90deg, rgba(255,111,0,0.8575805322128851) 10%, rgba(255,0,48,0.7595413165266106) 100%)",
  },
  checkoutButtons: {
    class:
      "min-w-[150px] h-[50px] my-3 flex items-center justify-center font-semibold py-2 px-4 rounded-full bg-[#ff6f00]",
  },
};

export { inlineStyle };

export default styles;
