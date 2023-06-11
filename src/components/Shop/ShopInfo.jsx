import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { backend_url, server } from "../../server";
import styles, { inlineStyle } from "../../styles/styles";
import Loader from "../Layout/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsShop } from "../../redux/actions/product";

const ShopInfo = ({ isOwner }) => {
  const [data, setData] = useState({});
  const { products } = useSelector((state) => state.products);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsShop(id));
    setIsLoading(true);
    axios
      .get(`${server}/shop/get-shop-info/${id}`)
      .then((res) => {
        setData(res.data.shop);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  const logoutHandler = async () => {
    axios.get(`${server}/shop/logout`, {
      withCredentials: true,
    });
    window.location.reload();
  };

  const totalReviewsLength =
    products &&
    products.reduce((acc, product) => acc + product.reviews.length, 0);

  const totalRatings =
    products &&
    products.reduce(
      (acc, product) =>
        acc + product.reviews.reduce((sum, review) => sum + review.rating, 0),
      0
    );

  const averageRating = totalRatings / totalReviewsLength || 0;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div className="w-full py-5">
            <div className="w-full flex item-center justify-center">
              <img
                src={`${data.avatar}`}
                alt=""
                className="bject-cover relative h-40 w-40 cursor-pointer overflow-hidden rounded-full border border-border-100 p-4"
              />
            </div>
            <h3 className="text-center py-2 text-[20px]">{data.name}</h3>
            <p className="text-[16px] text-[#000000a6] p-[10px] flex items-center">
              {data.description}
            </p>
          </div>
          {/* <div className="p-3">
            <h5 className="font-[600]">Address</h5>
            <h4 className="text-[#000000a6]">{data.address}</h4>
          </div> */}
          <div className="p-3 flex">
            <h5 className="font-[600] w-[50%]">Phone Number</h5>
            <h4 className="text-[#000000a6] w-[50%]">{data.phoneNumber}</h4>
          </div>
          <div className="p-3 flex">
            <h5 className="font-[600] w-[50%]">Total Products</h5>
            <h4 className="text-[#000000a6] w-[50%]">
              {products && products.length}
            </h4>
          </div>
          <div className="p-3 flex ">
            <h5 className="font-[600] w-[50%]">Shop Ratings</h5>
            <h4 className="text-[#000000b0] w-[50%]">{averageRating}/5</h4>
          </div>
          <div className="p-3 flex">
            <h5 className="font-[600]  w-[50%]">Joined On</h5>
            <h4 className="text-[#000000b0]  w-[50%]">
              {data?.createdAt?.slice(0, 10)}
            </h4>
          </div>
          {isOwner && (
            <div className="py-3 px-4">
              <Link to="/settings">
                <div className={`${styles.button}`}>
                  <span>Edit Shop</span>
                </div>
              </Link>
              <div
                className={`${inlineStyle.checkoutButtons.class}`}
                onClick={logoutHandler}
              >
                <span className="text-white">Log Out</span>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ShopInfo;
