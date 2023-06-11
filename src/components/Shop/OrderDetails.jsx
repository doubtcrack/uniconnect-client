import React, { useEffect, useState } from "react";
import styles from "../../styles/styles";
import { BsFillBagFill } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersOfShop } from "../../redux/actions/order";
import { backend_url, server } from "../../server";
import axios from "axios";
import { toast } from "react-toastify";

const OrderDetails = () => {
  const { orders, isLoading } = useSelector((state) => state.order);
  const { seller } = useSelector((state) => state.seller);
  const dispatch = useDispatch();
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getAllOrdersOfShop(seller._id));
  }, [dispatch]);

  const data = orders && orders.find((item) => item._id === id);

  const orderUpdateHandler = async (e) => {
    await axios
      .put(
        `${server}/order/update-order-status/${id}`,
        {
          status,
        },
        { withCredentials: true }
      )
      .then((res) => {
        toast.success("Order updated!");
        navigate("/dashboard-orders");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  return (
    <div className="bg-[#f3f4f5] min-h-screen w-full justify-center flex">
      <div className={`p-8 bg-white my-16 rounded-md  ${styles.section}`}>
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center">
            <BsFillBagFill size={30} color="crimson" />
            <h1 className="pl-2 text-[25px]">Order Details</h1>
          </div>
          <Link to="/dashboard-orders">
            <div
              className={`${styles.button} !bg-orange-100 !rounded-[4px] text-orange-500 font-[600] !h-[45px] text-[18px]`}
            >
              Order List
            </div>
          </Link>
        </div>

        <div className="w-full flex items-center justify-between pt-6">
          <h5 className="text-[#00000084]">
            Order ID: <span>#{data?._id?.slice(0, 8)}</span>
          </h5>
          <h5 className="text-[#00000084]">
            Placed on: <span>{data?.createdAt?.slice(0, 10)}</span>
          </h5>
        </div>

        {/* order items */}
        <br />
        <br />
        {data &&
          data?.cart.map((item, index) => (
            <div className="w-full flex items-start mb-5">
              <img
                src={`${item.images[0]}`}
                alt=""
                className="w-[60px] h-[80px] rounded-md"
              />
              <div className="w-full">
                <h5 className="pl-3 text-[16px]">{item.name}</h5>
                <h5 className="pl-3 text-[14px] text-[#00000091]">
                  {item.discountPrice} x {item.qty} Rs.
                </h5>
              </div>
            </div>
          ))}

        <div className="border-t w-full text-right">
          <h5 className="pt-3 text-[18px]">
            Total Price: <strong> {data?.totalPrice} Rs.</strong>
          </h5>
        </div>
        <br />
        <br />
        <div className="w-full 800px:flex items-center">
          <div className="w-full 800px:w-[60%]">
            <h4 className="pt-3 text-[20px]">Contact Info:</h4>

            <h4 className=" text-[20px]">{data?.user?.phoneNumber}</h4>
          </div>
          <div className="w-full 800px:w-[40%]">
            <h4 className="pt-3 text-[20px]">Payment Info:</h4>
            <h4>
              Status:{" "}
              {data?.paymentInfo?.status
                ? data?.paymentInfo?.status
                : "Not Paid"}
            </h4>
          </div>
        </div>
        <br />
        <br />
        <h4 className="pt-3 text-[20px] font-[600]">Order Status:</h4>
        {data?.status !== "Processing refund" &&
          data?.status !== "Refund Success" && (
            <>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="bg-white m-4 p-4 divide-y divide-gray-100 rounded-lg shadow w-44"
              >
                {["Processing", "Delivered"]
                  .slice(["Processing", "Delivered"].indexOf(data?.status))
                  .map((option, index) => (
                    <option value={option} key={index}>
                      {option}
                    </option>
                  ))}
              </select>
            </>
          )}

        <div
          className={`${styles.button} mt-5 !bg-orange-100 !rounded-[4px] text-orange-500 font-[600] !h-[45px] text-[18px]`}
          onClick={orderUpdateHandler}
        >
          Update Status
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
