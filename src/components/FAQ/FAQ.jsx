import React, { useState } from "react";
import styles from "../../styles/styles";
import SectionTitle from "../Layout/SectionTitle";

const Faq = () => {
  const [activeTab, setActiveTab] = useState(0);

  const toggleTab = (tab) => {
    if (activeTab === tab) {
      setActiveTab(0);
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <div className={` my-8 flex justify-center items-center`}>
      <div>
        <div className="text-center">
          <SectionTitle title={"FAQ"} />
        </div>
        <div className="mx-4 my-4 sm:mx-auto  sm:w-[80vw]">
          {/* single Faq */}

          <div className="bg-white my-4 border border-gray-100 shadow-md shadow-slate-100 p-4 rounded-md">
            <button
              className="flex items-center justify-between w-full"
              onClick={() => toggleTab(2)}
            >
              <span className="text-lg font-medium text-gray-900">
                What is your return policy?
              </span>
              <div
                className={`${
                  activeTab === 2
                    ? "transition-transform duration-1000 rotate-[270deg]"
                    : "transition-transform duration-1000 rotate-90"
                }`}
              >
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </button>
            <div
              className={`mt-4 relative overflow-hidden transition-all duration-1000 ${
                activeTab === 2 ? "max-h-40" : "max-h-0"
              }`}
            >
              <p className="text-base text-gray-500">
                If you're not satisfied with your purchase, we accept returns
                within 30 days of delivery. To initiate a return, please email
                us at support@myecommercestore.com with your order number and a
                brief explanation of why you're returning the item.
              </p>
            </div>
          </div>

          <div className="bg-white my-4 border border-gray-100 shadow-md shadow-slate-100 p-4 rounded-md">
            <button
              className="flex items-center justify-between w-full"
              onClick={() => toggleTab(3)}
            >
              <span className="text-lg font-medium text-gray-900">
                How do I track my order?
              </span>
              <div
                className={`${
                  activeTab === 3
                    ? "transition-transform duration-1000 rotate-[270deg]"
                    : "transition-transform duration-1000 rotate-90"
                }`}
              >
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </button>
            <div
              className={`mt-4 relative overflow-hidden transition-all duration-1000 ${
                activeTab === 3 ? "max-h-40" : "max-h-0"
              }`}
            >
              <p className="text-base text-gray-500">
                You can track your order by clicking the tracking link in your
                shipping confirmation email, or by logging into your account on
                our website and viewing the order details.
              </p>
            </div>
          </div>

          <div className="bg-white my-4 border border-gray-100 shadow-md shadow-slate-100 p-4 rounded-md">
            <button
              className="flex items-center justify-between w-full"
              onClick={() => toggleTab(4)}
            >
              <span className="text-lg font-medium text-gray-900">
                How do I contact customer support?
              </span>
              <div
                className={`${
                  activeTab === 4
                    ? "transition-transform duration-1000 rotate-[270deg]"
                    : "transition-transform duration-1000 rotate-90"
                }`}
              >
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </button>
            <div
              className={`mt-4 relative overflow-hidden transition-all duration-1000 ${
                activeTab === 4 ? "max-h-40" : "max-h-0"
              }`}
            >
              <p className="text-base text-gray-500">
                You can contact our customer support team by emailing us at
                support@myecommercestore.com, or by calling us at (555) 123-4567
                between the hours of 9am and 5pm EST, Monday through Friday.
              </p>
            </div>
          </div>

          <div className="bg-white my-4 border border-gray-100 shadow-md shadow-slate-100 p-4 rounded-md">
            <button
              className="flex items-center justify-between w-full"
              onClick={() => toggleTab(5)}
            >
              <span className="text-lg font-medium text-gray-900">
                Can I change or cancel my order?
              </span>
              <div
                className={`${
                  activeTab === 5
                    ? "transition-transform duration-1000 rotate-[270deg]"
                    : "transition-transform duration-1000 rotate-90"
                }`}
              >
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </button>
            <div
              className={`mt-4 relative overflow-hidden transition-all duration-1000 ${
                activeTab === 5 ? "max-h-40" : "max-h-0"
              }`}
            >
              <p className="text-base text-gray-500">
                Unfortunately, once an order has been placed, we are not able to
                make changes or cancellations. If you no longer want the items
                you've ordered, you can return them for a refund within 30 days
                of delivery.
              </p>
            </div>
          </div>

          <div className="bg-white my-4 border border-gray-100 shadow-md shadow-slate-100 p-4 rounded-md">
            <button
              className="flex items-center justify-between w-full"
              onClick={() => toggleTab(6)}
            >
              <span className="text-lg font-medium text-gray-900">
                Do you offer international shipping?
              </span>
              <div
                className={`${
                  activeTab === 6
                    ? "transition-transform duration-1000 rotate-[270deg]"
                    : "transition-transform duration-1000 rotate-90"
                }`}
              >
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </button>
            <div
              className={`mt-4 relative overflow-hidden transition-all duration-1000 ${
                activeTab === 6 ? "max-h-40" : "max-h-0"
              }`}
            >
              <p className="text-base text-gray-500">
                Currently, we only offer shipping within the United States.
              </p>
            </div>
          </div>

          <div className="bg-white my-4 border border-gray-100 shadow-md shadow-slate-100 p-4 rounded-md">
            <button
              className="flex items-center justify-between w-full"
              onClick={() => toggleTab(7)}
            >
              <span className="text-lg font-medium text-gray-900">
                What payment methods do you accept?
              </span>
              <div
                className={`${
                  activeTab === 7
                    ? "transition-transform duration-1000 rotate-[270deg]"
                    : "transition-transform duration-1000 rotate-90"
                }`}
              >
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </button>
            <div
              className={`mt-4 relative overflow-hidden transition-all duration-1000 ${
                activeTab === 7 ? "max-h-40" : "max-h-0"
              }`}
            >
              <p className="text-base text-gray-500">
                We accept visa,mastercard,paypal payment method also we have
                cash on delivery system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
