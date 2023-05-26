import React from "react";
import styles from "../../styles/styles";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Checkout = () => {
  const { user } = useSelector((state) => state.user);
  const { cart } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const paymentSubmit = () => {
    const orderData = {
      cart,
      totalPrice,
      user,
    };

    // update local storage with the updated orders array
    localStorage.setItem("latestOrder", JSON.stringify(orderData));
    navigate("/payment");
  };
  const totalPrice = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <div className="w-full flex flex-col items-center py-8">
      <div className="w-full 800px:w-[65%]">
        <ShippingInfo user={user} />
      </div>
      <div
        className={`${styles.button} w-[150px] 800px:w-[280px] mt-10`}
        onClick={paymentSubmit}
      >
        <h5 className="text-white">Go to Payment</h5>
      </div>
    </div>
  );
};

const ShippingInfo = ({ user }) => {
  return (
    <div className="w-[auto] 800px:w-[95%] bg-white rounded-md m-2 p-5 pb-8">
      <h5 className="text-[18px] font-[500]">Contact Info</h5>
      <br />
      <form>
        <div className="w-full 800px:flex pb-5">
          <div className="w-[auto] 800px:w-[50%] pb-5 ">
            <label className="block pb-1">Full Name</label>
            <input
              type="text"
              value={user && user.name}
              required
              className={`${styles.input} !w-[95%]`}
            />
          </div>
          <div className="w-[auto] 800px:w-[50%]">
            <label className="block pb-1">Email Address</label>
            <input
              type="email"
              value={user && user.email}
              required
              className={`${styles.input} !w-[95%]`}
            />
          </div>
        </div>

        <div className="w-full pb-5">
          <div className="w-[auto] 800px:w-[50%]">
            <label className="block pb-1">Phone Number</label>
            <input
              type="number"
              required
              value={user && user.phoneNumber}
              className={`${styles.input} !w-[95%]`}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
