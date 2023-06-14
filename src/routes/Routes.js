import React from "react";
const LoginPage = React.lazy(() => import("../pages/Login"));
const SignupPage = React.lazy(() => import("../pages/SignupPage"));
const ActivationPage = React.lazy(() => import("../pages/ActivationPage"));
const HomePage = React.lazy(() => import("../pages/HomePage"));
const ProductsPage = React.lazy(() => import("../pages/ProductsPage"));
const BestSellingPage = React.lazy(() => import("../pages/BestSellingPage"));
const EventsPage = React.lazy(() => import("../pages/EventsPage"));
const FAQPage = React.lazy(() => import("../pages/FAQPage"));
const CheckoutPage = React.lazy(() => import("../pages/CheckoutPage"));
const PaymentPage = React.lazy(() => import("../pages/PaymentPage"));
const OrderSuccessPage = React.lazy(() => import("../pages/OrderSuccessPage"));
const ProductDetailsPage = React.lazy(() =>
  import("../pages/ProductDetailsPage")
);
const ProfilePage = React.lazy(() => import("../pages/ProfilePage"));
const ShopCreatePage = React.lazy(() => import("../pages/ShopCreate"));
const SellerActivationPage = React.lazy(() =>
  import("../pages/SellerActivationPage")
);
const ShopLoginPage = React.lazy(() => import("../pages/ShopLoginPage"));
const OrderDetailsPage = React.lazy(() => import("../pages/OrderDetailsPage"));
const TrackOrderPage = React.lazy(() => import("../pages/TrackOrderPage"));
const UserInbox = React.lazy(() => import("../pages/UserInbox.jsx"));

export {
  LoginPage,
  SignupPage,
  ActivationPage,
  HomePage,
  ProductsPage,
  BestSellingPage,
  EventsPage,
  FAQPage,
  CheckoutPage,
  PaymentPage,
  OrderSuccessPage,
  ProductDetailsPage,
  ProfilePage,
  ShopCreatePage,
  SellerActivationPage,
  ShopLoginPage,
  OrderDetailsPage,
  TrackOrderPage,
  UserInbox,
};
