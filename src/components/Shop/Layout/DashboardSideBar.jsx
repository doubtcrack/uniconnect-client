import React from "react";
import { AiOutlineFolderAdd, AiOutlineGift } from "react-icons/ai";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { MdOutlineLocalOffer } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { VscNewFile } from "react-icons/vsc";
import { CiMoneyBill, CiSettings } from "react-icons/ci";
import { Link } from "react-router-dom";
import { BiMessageSquareDetail } from "react-icons/bi";
import { HiOutlineReceiptRefund } from "react-icons/hi";

const DashboardSideBar = ({ active }) => {
  return (
    <div className="w-[50px] 800px:w-1/5 h-[100vh] bg-white shadow-sm overflow-y-scroll fixed top-20 left-0 z-10 flex flex-col py-6 pl-3 space-y-6">
      {/* single item */}
      <Link
        to="/dashboard"
        className="flex items-center w-full text-base text-body-dark text-start  focus:text-accent leading-6 "
      >
        <RxDashboard
          size={23}
          color={`${active === 1 ? "#9a3412" : "#4b5563"}`}
        />
        <h5
          className={`hidden 800px:block pl-6 text-[16px] font-[300] ${
            active === 1 ? "text-[#9a3412]" : "text-[#4b5563]"
          }`}
        >
          Dashboard
        </h5>
      </Link>

      <Link
        to="/dashboard-orders"
        className="flex items-center w-full text-base text-body-dark text-start  focus:text-accent leading-6"
      >
        <FiShoppingBag
          size={23}
          color={`${active === 2 ? "#9a3412" : "#4b5563"}`}
        />
        <h5
          className={`hidden 800px:block pl-6 text-[16px] font-[300] ${
            active === 2 ? "text-[#9a3412]" : "text-[#4b5563]"
          }`}
        >
          All Orders
        </h5>
      </Link>

      <Link
        to="/dashboard-products"
        className="flex items-center w-full text-base text-body-dark text-start  focus:text-accent leading-6"
      >
        <FiPackage
          size={23}
          color={`${active === 3 ? "#9a3412" : "#4b5563"}`}
        />
        <h5
          className={`hidden 800px:block pl-6 text-[16px] font-[300] ${
            active === 3 ? "text-[#9a3412]" : "text-[#4b5563]"
          }`}
        >
          All Products
        </h5>
      </Link>

      <Link
        to="/dashboard-create-product"
        className="flex items-center w-full text-base text-body-dark text-start  focus:text-accent leading-6"
      >
        <AiOutlineFolderAdd
          size={23}
          color={`${active === 4 ? "#9a3412" : "#4b5563"}`}
        />
        <h5
          className={`hidden 800px:block pl-6 text-[16px] font-[300] ${
            active === 4 ? "text-[#9a3412]" : "text-[#4b5563]"
          }`}
        >
          Create Product
        </h5>
      </Link>

      <Link
        to="/dashboard-events"
        className="flex items-center w-full text-base text-body-dark text-start  focus:text-accent leading-6"
      >
        <MdOutlineLocalOffer
          size={23}
          color={`${active === 5 ? "#9a3412" : "#4b5563"}`}
        />
        <h5
          className={`hidden 800px:block pl-6 text-[16px] font-[300] ${
            active === 5 ? "text-[#9a3412]" : "text-[#4b5563]"
          }`}
        >
          All Events
        </h5>
      </Link>

      {/* <Link
        to="/dashboard-create-event"
        className="flex items-center w-full text-base text-body-dark text-start  focus:text-accent leading-6"
      >
        <VscNewFile
          size={23}
          color={`${active === 6 ? "#9a3412" : "#4b5563"}`}
        />
        <h5
          className={`hidden 800px:block pl-6 text-[16px] font-[300] ${
            active === 6 ? "text-[#9a3412]" : "text-[#4b5563]"
          }`}
        >
          Create Event
        </h5>
      </Link> */}

      {/* <Link
          to="/dashboard-withdraw-money"
          className="flex items-center w-full text-base text-body-dark text-start  focus:text-accent leading-6"
        >
          <CiMoneyBill
            size={23}
            color={`${active === 7 ? "#9a3412" : "#4b5563"}`}
          />
          <h5
            className={`hidden 800px:block pl-6 text-[16px] font-[300] ${
              active === 7 ? "text-[#9a3412]" : "text-[#4b5563]"
            }`}
          >
            Withdraw Money
          </h5>
        </Link> */}

      <Link
        to="/dashboard-messages"
        className="flex items-center w-full text-base text-body-dark text-start  focus:text-accent leading-6"
      >
        <BiMessageSquareDetail
          size={23}
          color={`${active === 8 ? "#9a3412" : "#4b5563"}`}
        />
        <h5
          className={`hidden 800px:block pl-6 text-[16px] font-[300] ${
            active === 8 ? "text-[#9a3412]" : "text-[#4b5563]"
          }`}
        >
          Shop Inbox
        </h5>
      </Link>

      {/* <Link
          to="/dashboard-coupouns"
          className="flex items-center w-full text-base text-body-dark text-start  focus:text-accent leading-6"
        >
          <AiOutlineGift
            size={23}
            color={`${active === 9 ? "#9a3412" : "#4b5563"}`}
          />
          <h5
            className={`hidden 800px:block pl-6 text-[16px] font-[300] ${
              active === 9 ? "text-[#9a3412]" : "text-[#4b5563]"
            }`}
          >
            Discount Codes
          </h5>
        </Link>

        <Link to="/dashboard-refunds" className="flex items-center w-full text-base text-body-dark text-start  focus:text-accent leading-6">
          <HiOutlineReceiptRefund
            size={23}
            color={`${active === 10 ? "#9a3412" : "#4b5563"}`}
          />
          <h5
            className={`hidden 800px:block pl-6 text-[16px] font-[300] ${
              active === 10 ? "text-[#9a3412]" : "text-[#4b5563]"
            }`}
          >
            Refunds
          </h5>
        </Link> */}

      <Link
        to="/settings"
        className="flex items-center w-full text-base text-body-dark text-start  focus:text-accent leading-6"
      >
        <CiSettings
          size={23}
          color={`${active === 11 ? "#9a3412" : "#4b5563"}`}
        />
        <h5
          className={`hidden 800px:block pl-6 text-[16px] font-[300] ${
            active === 11 ? "text-[#9a3412]" : "text-[#4b5563]"
          }`}
        >
          Settings
        </h5>
      </Link>
    </div>
  );
};

export default DashboardSideBar;
