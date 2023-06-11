import React, { useEffect, useState } from "react";
import { BsFillBagFill } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles, { inlineStyle } from "../styles/styles";
import { getAllOrdersOfUser } from "../redux/actions/order";
import { backend_url, server } from "../server";
import { RxCross1 } from "react-icons/rx";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import axios from "axios";
import { toast } from "react-toastify";

const UserOrderDetails = () => {
  const { orders } = useSelector((state) => state.order);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [comment, setComment] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [rating, setRating] = useState(1);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getAllOrdersOfUser(user._id));
  }, [dispatch]);

  const data = orders && orders.find((item) => item._id === id);

  const reviewHandler = async (e) => {
    await axios
      .put(
        `${server}/product/create-new-review`,
        {
          user,
          rating,
          comment,
          productId: selectedItem?._id,
          orderId: id,
        },
        { withCredentials: true }
      )
      .then((res) => {
        toast.success(res.data.message);
        dispatch(getAllOrdersOfUser(user._id));
        setComment("");
        setRating(null);
        setOpen(false);
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const refundHandler = async () => {
    await axios
      .put(`${server}/order/order-refund/${id}`, {
        status: "Processing refund",
      })
      .then((res) => {
        toast.success(res.data.message);
        dispatch(getAllOrdersOfUser(user._id));
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  return (
    <div className={`py-8 min-h-screen ${styles.section}`}>
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center">
          <BsFillBagFill size={30} color="crimson" />
          <h1 className="pl-4 text-[25px]">Order Details</h1>
        </div>
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
        data?.cart.map((item, index) => {
          return (
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
              {!item.isReviewed && data?.status === "Delivered" ? (
                <div
                  className={`${inlineStyle.checkoutButtons.class} !text-[14px] text-white bg-orange-300 cursor-pointer hover:text-orange-500 hover:bg-transparent hover:border hover:border-orange-500`}
                  onClick={() => setOpen(true) || setSelectedItem(item)}
                >
                  Write a review
                </div>
              ) : null}
            </div>
          );
        })}

      {/* review popup */}
      {open && (
        <>
          <div class="fixed inset-0 bg-black bg-opacity-25 opacity-100"></div>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto overflow-x-hidden transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5 opacity-100 scale-100">
                <div className="absolute top-2 right-2 z-10 w-fit p-2 bg-[#f5f8ff] rounded-full">
                  <RxCross1
                    size={30}
                    onClick={() => setOpen(false)}
                    className="cursor-pointer"
                  />
                </div>
                <div className="relative flex justify-center items-center w-full h-40 bg-[url('https://img.freepik.com/free-vector/abstract-orange-background-with-lines-halftone-effect_1017-32107.jpg?size=626&ext=jpg&ga=GA1.2.1418543111.1671995851&semt=ais')] bg-cover bg-center rounded-lg">
                  <h2 className="text-4xl md:text-5xl  font-[800] text-center text-white">
                    Write a Review
                  </h2>
                </div>

                {/* ratings */}
                <h5 className="pl-3 text-[20px] md:text-[30px] text-center font-[600]">
                  Give a Rating <span className="text-red-500">*</span>
                </h5>
                <div className="flex w-full ml-2 bg-yellow-50 p-2 md:p-4 justify-center items-center rounded-full">
                  {[1, 2, 3, 4, 5].map((i) =>
                    rating >= i ? (
                      <AiFillStar
                        key={i}
                        className="mr-1 cursor-pointer"
                        color="rgb(246,186,0)"
                        size={25}
                        onClick={() => setRating(i)}
                      />
                    ) : (
                      <AiOutlineStar
                        key={i}
                        className="mr-1 cursor-pointer"
                        color="rgb(246,186,0)"
                        size={25}
                        onClick={() => setRating(i)}
                      />
                    )
                  )}
                </div>
                <div className="w-full">
                  <label className="block text-[20px] md:text-[30px] text-center font-[600]">
                    Write your Review
                  </label>
                  <textarea
                    name="comment"
                    id=""
                    rows="4"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Wanna Say Something? write your expresion about it!"
                    className="mt-4 block p-4 w-[100%] h-40 border border-gray-100 resize-none focus:border-orange-500 text-sm outline-none rounded-lg"
                  ></textarea>
                </div>
                <div
                  className={`${styles.button} `}
                  onClick={rating > 1 ? reviewHandler : null}
                >
                  Submit
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <div className="border-t w-full text-right">
        <h5 className="pt-3 text-[18px]">
          Total Price: <strong>{data?.totalPrice}</strong> Rs.
        </h5>
      </div>
      <br />
      <br />
      <div className="w-full 800px:flex items-center">
        <div className="w-full 800px:w-[40%]">
          <h4 className="pt-3 text-[18px]">Payment Info:</h4>
          <h4>
            Status:{" "}
            {data?.paymentInfo?.status ? data?.paymentInfo?.status : "Not Paid"}
          </h4>
          <br />
          {/* {data?.status === "Delivered" && (
            <div className={`${styles.button} `} onClick={refundHandler}>
              Give a Refund
            </div>
          )} */}
        </div>
      </div>
      <br />
      <Link to="/">
        <div className={`${styles.button} hover:bg-orange-300`}>
          Send Message
        </div>
      </Link>
      <br />
      <br />
    </div>
  );
};

export default UserOrderDetails;
