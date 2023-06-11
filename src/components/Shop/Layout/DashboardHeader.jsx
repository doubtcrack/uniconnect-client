import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { MdOutlineLocalOffer } from "react-icons/md";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BiMessageSquareDetail } from "react-icons/bi";
import { backend_url } from "../../../server";

const DashboardHeader = () => {
  const { seller } = useSelector((state) => state.seller);
  return (
    <div className="w-full h-[80px] bg-white shadow sticky top-0 left-0 z-30 flex items-center justify-between px-4">
      <div>
        <Link
          to="/dashboard"
          className="flex items-center justify-center w-full flex-grow md:flex-grow-0"
        >
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiWrSp15yfq72YesIb4pHCwwIEACQkvqKMA9NHyiYDgZ02-ibPX7XiTMQ_8UBki5jnxYZDNSQSOItkBeD6kd0f55GeyRFYhfgo7XKHb4s_Y8M2DdigMdRfXyXmTtseZ2t83LtKSwmx-qIjHd_rHlFrglsg3z-6oZdwbFWlNRPrv2vKWgfoS1q3BtiMY7A/s80/uniconnect%20(1).png"
            alt="UniConnect"
          />
          <h2 className="text-palette-secondary align-center font-black sm:text-2xl relative right-">
            UniConnect
          </h2>
        </Link>
      </div>
      <div className="flex items-center">
        <div className="flex items-center mr-4">
          <Link to="/dashboard-create-product" className="800px:block hidden">
            <AiFillPlusCircle
              color="#555"
              size={23}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to="/dashboard-events" className="800px:block hidden">
            <MdOutlineLocalOffer
              color="#555"
              size={23}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to="/dashboard-products" className="800px:block hidden">
            <FiShoppingBag
              color="#555"
              size={23}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to="/dashboard-orders" className="800px:block hidden">
            <FiPackage color="#555" size={23} className="mx-5 cursor-pointer" />
          </Link>
          <Link to="/dashboard-messages" className="800px:block hidden">
            <BiMessageSquareDetail
              color="#555"
              size={23}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to={`/shop/${seller._id}`}>
            <img
              src={`${seller.avatar}`}
              alt=""
              className="object-cover relative h-10 w-10 cursor-pointer overflow-hidden rounded-full border border-border-100 p-1"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
