import React from "react";

const Loader = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div class="w-12 h-12 rounded-full animate-spin border-x border-solid border-orange-500 border-t-transparent"></div>
    </div>
  );
};

export default Loader;
