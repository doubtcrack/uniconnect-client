import React, { useEffect, useState } from "react";
import { AiOutlineArrowRight, AiOutlinePlus } from "react-icons/ai";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersOfShop } from "../../redux/actions/order";
import { getAllProductsShop } from "../../redux/actions/product";

import { DataGrid } from '@mui/x-data-grid';

const DashboardHero = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.order);
  const { seller } = useSelector((state) => state.seller);
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllOrdersOfShop(seller._id));
    dispatch(getAllProductsShop(seller._id));
  }, [dispatch]);

  const availableBalance = seller?.availableBalance.toFixed(2);

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      // cellClassName: (params) => {
      //   return params.getValue(params.id, "status") === "Delivered"
      //     ? "greenColor"
      //     : "redColor";
      // },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },

    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/order/${params.id}`}>
              <button>
                <AiOutlineArrowRight size={20} />
              </button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];

  orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.cart.reduce((acc, item) => acc + item.qty, 0),
        total: item.totalPrice + " Rs.",
        status: item.status,
      });
    });
  return (
    <div className="bg-[#f3f4f5] min-h-screen w-full justify-center flex">
      <div className="w-full p-4 800px:p-8">
        <h3 className="text-[22px] leading-6 font-[400] py-4 800px:pl-4">
          Overview
        </h3>
        <div className="w-full block 800px:flex items-center justify-evenly">
          {/* <div className="w-full mb-4 800px:w-[30%] min-h-[20vh] bg-white shadow rounded px-2 py-5">
          <div className="flex items-center">
            <AiOutlineMoneyCollect
              size={25}
              className="mr-2"
              fill="#00000085"
            />
            <h3
              className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
            >
              Account Balance{" "}
              <span className="text-[16px]">(with 10% service charge)</span>
            </h3>
          </div>
          <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">${availableBalance}</h5>
          <Link to="/dashboard-withdraw-money">
            <h5 className="pt-4 pl-[2] text-[#077f9c]">Withdraw Money</h5>
          </Link>
        </div> */}

          <div className="w-full my-4 800px:m-4 800px:w-[50%] min-h-[20vh] bg-white rounded-lg p-5">
            <div className="flex items-center justify-between mr-2">
              <h3
                className={`${styles.productTitle} !text-[18px] leading-6 !font-[400] text-[#4b5563]`}
              >
                All Orders
              </h3>
              <div className="bg-[#fc3b9b0f] p-4 rounded-full">
                <MdShoppingCart size={30} className="mr-2" fill="#ff6d6d" />
              </div>
            </div>
            <h5 className="py-2 pl-[36px] text-[22px] font-[500]">
              {orders && orders.length}
            </h5>
            <Link to="/dashboard-orders" className="flex justify-end">
              <button
                type="button"
                class="text-gray-900 bg-white border mt-4 border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                View Orders
              </button>
            </Link>
          </div>

          <div className="w-full my-4 800px:m-4 800px:w-[50%] min-h-[20vh] bg-white rounded-lg p-5">
            <div className="flex items-center justify-between mr-2">
              <h3
                className={`${styles.productTitle} !text-[18px] leading-6 !font-[400] text-[#4b5563]`}
              >
                All Products
              </h3>
              <div className="bg-[#fca23b0f] p-4 rounded-full">
                <AiOutlinePlus size={30} className="mr-2" fill="orange" />
              </div>
            </div>
            <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">
              {products && products.length}
            </h5>
            <Link to="/dashboard-products" className="flex justify-end">
              <button
                type="button"
                class="text-gray-900 bg-white mt-4 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                View Products
              </button>
            </Link>
          </div>
        </div>
        <br />
        <h3 className="text-[22px] leading-6 font-[400] py-4 800px:pl-4">
          Latest Orders
        </h3>
        <div className="w-full block my-4 800px:m-4 min-h-[45vh] bg-white rounded-lg p-5">
          <DataGrid
            rows={row}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            autoHeight
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardHero;
