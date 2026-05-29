import React from "react";

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import { Toaster } from "react-hot-toast";

// LAYOUT
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// MAIN PAGES
import HomePage from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

// SELL / DISCOVER
import SellAssetsPage from "./pages/SellAssetsPage";
import DiscoverCollectionPage from "./pages/DiscoverCollectionPage";
// product pages
import ProductDetails from "./pages/ProductDetails";
import CheckOut from "./pages/CheckOut";
import CartPage from "./pages/CartPage";
import SellCategoryPage from "./pages/sell/SellCategoryPage";
// ACCOUNT PAGES
import MyOrdersPage from "./pages/account/MyOrders";
import PaymentMethod from "./pages/account/PaymentMethod";
import SavedAddresses from "./pages/account/SavedAddresses";
import Earnings from "./pages/account/Earnings";
import SchedulePickup from "./pages/sell/SchedulePickup";
import Payment from "./pages/sell/Payment";
import ReviewOrder from "./pages/sell/ReviewOrder";
import Success from "./pages/sell/Success";
import OrderDetails from "./pages/account/OrderDetails";
const App = () => {
  return (
    <BrowserRouter>

      {/* TOASTER */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 2500,

          style: {
            background: "#020B2D",
            color: "#fff",
            borderRadius: "16px",
            padding: "14px 18px",
            fontSize: "14px",
            fontWeight: "600",
          },
        }}
      />

      {/* GLOBAL NAVBAR */}
      <Navbar />

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={<HomePage />}
        />

        {/* AUTH */}
        <Route
          path="/login"
          element={<LoginPage />}
        />

        <Route
          path="/signup"
          element={<SignupPage />}
        />

        {/* SELL */}
        <Route
          path="/sell-assets"
          element={<SellAssetsPage />}
        />
        <Route path="/sell/:categoryId" element={<SellCategoryPage />} />
        <Route
  path="/sell/pickup"
  element={<SchedulePickup />}/>
  <Route
  path="/sell/payment"
  element={<Payment />}
/>
<Route
  path="/sell/review"
  element={<ReviewOrder />}
/>
<Route
  path="/sell/success"
  element={<Success />}
/>
<Route
  path="/account/orders/:orderId"
  element={<OrderDetails />}
/>


        {/* DISCOVER */}
        <Route
          path="/discover"
          element={
            <DiscoverCollectionPage />
          }
        />
         <Route
          path="/product/:id"
          element={
            <ProductDetails/>
          }
        />
        <Route
  path="/checkout"
  element={<CheckOut />}
/>
<Route
  path="/cart"
  element={<CartPage />}
/>

        {/* ACCOUNT */}
        <Route
          path="/account/orders"
          element={<MyOrdersPage />}
        />

        <Route
          path="/account/payment-methods"
          element={<PaymentMethod />}
        />

        <Route
          path="/account/addresses"
          element={<SavedAddresses />}
        />
         <Route
          path="/account/earnings"
          element={<Earnings />}
        />

      </Routes>

      {/* GLOBAL FOOTER */}
      <Footer />
    </BrowserRouter>
  );
};

export default App;