import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/styles";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";

const Payment = () => {
  const [orderData, setOrderData] = useState([]);
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    const orderData = JSON.parse(localStorage.getItem("latestOrder"));
    setOrderData(orderData);
  }, []);

  const order = {
    cart: orderData?.cart,
    user: user && user,
    totalPrice: orderData?.totalPrice,
  };

  const cashOnDeliveryHandler = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    order.paymentInfo = {
      type: "Cash On Delivery",
    };

    await axios
      .post(`${server}/order/create-order`, order, config)
      .then((res) => {
        navigate("/order/success");
        toast.success("Order successful!");
        localStorage.setItem("cartItems", JSON.stringify([]));
        localStorage.setItem("latestOrder", JSON.stringify([]));
        window.location.reload();
      });
  };

  return (
    <div className="w-full flex flex-col items-center py-8">
      <div className="w-full 800px:w-[65%]">
        <PaymentInfo cashOnDeliveryHandler={cashOnDeliveryHandler} />
      </div>
    </div>
  );
};

const PaymentInfo = ({ cashOnDeliveryHandler }) => {
  const [select, setSelect] = useState(1);

  return (
    <div className="w-[auto] 800px:w-[95%] bg-white rounded-md m-2 p-5 pb-8">
      {/* cash on delivery */}
      <div>
        <div className="flex w-full pb-5 border-b mb-2">
          <div
            className="w-[25px] h-[25px] rounded-full bg-transparent border-[3px] border-[#1d1a1ab4] relative flex items-center justify-center"
            onClick={() => setSelect(3)}
          >
            {select === 3 ? (
              <div className="w-[13px] h-[13px] bg-[#1d1a1acb] rounded-full" />
            ) : null}
          </div>
          <h4 className="text-[18px] pl-2 font-[600] text-[#000000b1]">
            Cash on Delivery
          </h4>
        </div>

        {/* cash on delivery */}
        {select === 3 ? (
          <div className="w-full flex">
            <form className="w-full" onSubmit={cashOnDeliveryHandler}>
              <input
                type="submit"
                value="Confirm"
                className={`${styles.button} !bg-[#f63b60] text-[#fff] h-[45px] rounded-[5px] cursor-pointer text-[18px] font-[600]`}
              />
            </form>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Payment;
