import React, { useEffect, useState } from "react";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { backend_url, server } from "../../../server";
import styles from "../../../styles/styles";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addTocart } from "../../../redux/actions/cart";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../../redux/actions/wishlist";
import axios from "axios";

const ProductDetailsCard = ({ setOpen, data }) => {
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const { cart } = useSelector((state) => state.cart);
  const { wishlist } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  //   const [select, setSelect] = useState(false);

  const handleMessageSubmit = async () => {
    if (isAuthenticated) {
      const groupTitle = data._id + user._id;
      const userId = user._id;
      const sellerId = data.shop._id;
      await axios
        .post(`${server}/conversation/create-new-conversation`, {
          groupTitle,
          userId,
          sellerId,
        })
        .then((res) => {
          navigate(`/inbox?${res.data.conversation._id}`);
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        });
    } else {
      toast.error("Please login to create a conversation");
    }
  };

  // const decrementCount = () => {
  //   if (count > 1) {
  //     setCount(count - 1);
  //   }
  // };

  // const incrementCount = () => {
  //   setCount(count + 1);
  // };

  const addToCartHandler = (id) => {
    const isItemExists = cart && cart.find((i) => i._id === id);
    if (isItemExists) {
      toast.error("Item already in cart!");
    } else {
      if (data.stock < count) {
        toast.error("Product stock limited!");
      } else {
        const cartData = { ...data, qty: count };
        dispatch(addTocart(cartData));
        toast.success("Item added to cart successfully!");
      }
    }
  };

  useEffect(() => {
    if (wishlist && wishlist.find((i) => i._id === data._id)) {
      setClick(true);
    } else {
      setClick(false);
    }
  }, [wishlist]);

  const removeFromWishlistHandler = (data) => {
    setClick(!click);
    dispatch(removeFromWishlist(data));
  };

  const addToWishlistHandler = (data) => {
    setClick(!click);
    dispatch(addToWishlist(data));
  };

  return (
    <>
      <div class="fixed inset-0 bg-black bg-opacity-25 opacity-100 z-[5]"></div>
      {data ? (
        <div className="fixed inset-0 overflow-y-auto z-[6]">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto overflow-x-hidden transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5 opacity-100 scale-100">
              <div className="absolute top-2 right-2 z-10 w-fit p-2 bg-[#f5f8ff] rounded-full">
                <RxCross1
                  size={20}
                  className="z-50"
                  onClick={() => setOpen(false)}
                />
              </div>
              <div className="relative flex justify-center items-center w-full h-40 min-h-[120px] bg-[url('https://img.freepik.com/free-vector/abstract-orange-background-with-lines-halftone-effect_1017-32107.jpg?size=626&ext=jpg&ga=GA1.2.1418543111.1671995851&semt=ais')] bg-cover bg-center rounded-lg">
                <h2 className="text-4xl md:text-5xl  font-[800] text-center text-white">
                  Take a Look
                </h2>
              </div>
              <div className="block w-full">
                <div className="w-full">
                  <img
                    src={`${data.images && data.images[0]}`}
                    alt=""
                    className="rounded-lg max-h-300px"
                  />
                  <div className="flex mt-3 justify-between">
                    <Link
                      to={`/shop/preview/${data.shop._id}`}
                      className="flex"
                    >
                      <div className="flex items-center">
                        <img
                          src={`${data?.shop?.avatar}`}
                          alt=""
                          className="w-[30px] h-[30px] rounded-full object-cover mx-2.5"
                        />
                      </div>
                      <div>
                        <h3 className={`${styles.shop_name}`}>
                          {data.shop.name}
                        </h3>
                      </div>
                    </Link>

                    {click ? (
                      <AiFillHeart
                        size={30}
                        className="cursor-pointer justify-center items-center"
                        onClick={() => removeFromWishlistHandler(data)}
                        color={click ? "red" : "#333"}
                        title="Remove from wishlist"
                      />
                    ) : (
                      <AiOutlineHeart
                        size={30}
                        className="cursor-pointer justify-center items-center"
                        onClick={() => addToWishlistHandler(data)}
                        title="Add to wishlist"
                      />
                    )}
                  </div>
                  <div
                    className={`${styles.button}`}
                    onClick={handleMessageSubmit}
                  >
                    <span className="flex items-center">
                      Send Message <AiOutlineMessage className="ml-1" />
                    </span>
                  </div>
                  {/* <h5 className="text-[16px] text-[red] mt-5">(50) Sold out</h5> */}
                </div>

                <div className="w-full">
                  <div className="text-center">
                    <h1 className={`${styles.productTitle} `}>{data.name}</h1>
                    <p className="mt-4">{data.description}</p>

                    <div className="flex pt-3 my-8 justify-center">
                      <h4 className={`${styles.productDiscountPrice}`}>
                        {data.discountPrice} Rs.
                      </h4>
                      <h3 className={`${styles.price}`}>
                        {data.originalPrice
                          ? data.originalPrice + " Rs."
                          : null}
                      </h3>
                    </div>
                    <div
                      className={`${styles.button}`}
                      onClick={() => addToCartHandler(data._id)}
                    >
                      <span className="flex items-center">
                        Add to cart <AiOutlineShoppingCart className="ml-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ProductDetailsCard;
