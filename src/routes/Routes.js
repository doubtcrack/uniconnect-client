import React from "react";
const LoginPage = React.lazy(() => import("../pages/Login.jsx"));
const SignupPage = React.lazy(() => import("../pages/SignupPage.jsx"));
const ActivationPage = React.lazy(() => import("../pages/ActivationPage.jsx"));
const HomePage = React.lazy(() => import("../pages/HomePage.jsx"));
const ProductsPage = React.lazy(() => import("../pages/ProductsPage.jsx"));
const BestSellingPage = React.lazy(() =>
  import("../pages/BestSellingPage.jsx")
);
const EventsPage = React.lazy(() => import("../pages/EventsPage.jsx"));
const FAQPage = React.lazy(() => import("../pages/FAQPage.jsx"));
const CheckoutPage = React.lazy(() => import("../pages/CheckoutPage.jsx"));
const PaymentPage = React.lazy(() => import("../pages/PaymentPage.jsx"));
const OrderSuccessPage = React.lazy(() =>
  import("../pages/OrderSuccessPage.jsx")
);
const ProductDetailsPage = React.lazy(() =>
  import("../pages/ProductDetailsPage.jsx")
);
const ProfilePage = React.lazy(() => import("../pages/ProfilePage.jsx"));
const ShopCreatePage = React.lazy(() => import("../pages/ShopCreate.jsx"));
const SellerActivationPage = React.lazy(() =>
  import("../pages/SellerActivationPage.jsx")
);
const ShopLoginPage = React.lazy(() => import("../pages/ShopLoginPage.jsx"));
const OrderDetailsPage = React.lazy(() =>
  import("../pages/OrderDetailsPage.jsx")
);
const TrackOrderPage = React.lazy(() => import("../pages/TrackOrderPage.jsx"));
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
