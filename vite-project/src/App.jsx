import React from "react";
import ProtectedAdminRoute from "./routes/ProtectedAdminRoute";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import { Toaster } from "react-hot-toast";

// LAYOUT
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// MAIN PAGES
import HomePage from "./pages/Home";
import LoginPage from "./pages/LoginPage";


// SELL / DISCOVER
import SellAssetsPage from "./pages/SellAssetsPage";
import DiscoverCollectionPage from "./pages/DiscoverCollectionPage";

// PRODUCT PAGES
import CustomerProductDetails from "./pages/ProductDetails";
import CheckOut from "./pages/CheckOut";
import CartPage from "./pages/CartPage";

// SELL FLOW
import SellCategoryPage from "./pages/sell/SellCategoryPage";
import SchedulePickup from "./pages/sell/SchedulePickup";
import Payment from "./pages/sell/Payment";
import ReviewOrder from "./pages/sell/ReviewOrder";
import Success from "./pages/sell/Success";

// ACCOUNT
import MyOrdersPage from "./pages/account/MyOrders";
import PaymentMethod from "./pages/account/PaymentMethod";
import SavedAddresses from "./pages/account/SavedAddresses";
import Earnings from "./pages/account/Earnings";
import CustomerOrderDetails from "./pages/account/OrderDetails";

// ADMIN
import Dashboard from "./admin/pages/Dashboard";
import SellRequests from "./admin/pages/SellRequests";
import RequestDetails from "./admin/pages/RequestDetails";
import MarketplaceProducts from "./admin/pages/MarketplaceProducts";
import ProductDetails from "./admin/pages/ProductDetails";
import EditProduct from "./admin/pages/EditProduct";
import Orders from "./admin/pages/Orders";
import OrderDetails from "./admin/pages/OrderDetails";
import Customers from "./admin/pages/Customers";
import CustomerDetails from "./admin/pages/CustomerDetails";
import PickupManagement from "./admin/pages/PickupManagement";
import PickupDetails from "./admin/pages/ProductDetails";
import Settings from "./admin/pages/Settings";
import OfferGeneration from "./admin/pages/OfferGeneration";
import Inventory from "./admin/pages/Inventory";
import InventoryDetails from "./admin/pages/InventoryDetails";
const AppContent = () => {
  const location = useLocation();

  const isAdminRoute =
    location.pathname.startsWith("/admin");

  return (
    <>
      {/* CUSTOMER NAVBAR */}
      {!isAdminRoute && <Navbar />}

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

        
        {/* SELL */}
        <Route
          path="/sell-assets"
          element={<SellAssetsPage />}
        />

        <Route
          path="/sell/:slug"
          element={<SellCategoryPage />}
        />

        <Route
          path="/sell/pickup"
          element={<SchedulePickup />}
        />

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

        {/* ACCOUNT */}
        <Route
          path="/account/orders"
          element={<MyOrdersPage />}
        />

        <Route
          path="/account/orders/:orderId"
          element={<CustomerOrderDetails />}
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

        {/* DISCOVER */}
        <Route
          path="/discover"
          element={<DiscoverCollectionPage />}
        />

        <Route
          path="/product/:id"
          element={<CustomerProductDetails />}
        />

        <Route
          path="/checkout"
          element={<CheckOut />}
        />

        <Route
          path="/cart"
          element={<CartPage />}
        />

{/* ADMIN */}

<Route
  path="/admin"
  element={
    <ProtectedAdminRoute>
      <Dashboard />
    </ProtectedAdminRoute>
  }
/>

<Route
  path="/admin/requests"
  element={
    <ProtectedAdminRoute>
      <SellRequests />
    </ProtectedAdminRoute>
  }
/>

<Route
  path="/admin/requests/:id"
  element={
    <ProtectedAdminRoute>
      <RequestDetails />
    </ProtectedAdminRoute>
  }
/>

<Route
  path="/admin/requests/:id/offer"
  element={
    <ProtectedAdminRoute>
      <OfferGeneration />
    </ProtectedAdminRoute>
  }
/>

<Route
  path="/admin/products"
  element={
    <ProtectedAdminRoute>
      <MarketplaceProducts />
    </ProtectedAdminRoute>
  }
/>

<Route
  path="/admin/products/:id"
  element={
    <ProtectedAdminRoute>
      <ProductDetails />
    </ProtectedAdminRoute>
  }
/>

<Route
  path="/admin/products/:id/edit"
  element={
    <ProtectedAdminRoute>
      <EditProduct />
    </ProtectedAdminRoute>
  }
/>

<Route
  path="/admin/orders"
  element={
    <ProtectedAdminRoute>
      <Orders />
    </ProtectedAdminRoute>
  }
/>

<Route
  path="/admin/orders/:id"
  element={
    <ProtectedAdminRoute>
      <OrderDetails />
    </ProtectedAdminRoute>
  }
/>

<Route
  path="/admin/customers"
  element={
    <ProtectedAdminRoute>
      <Customers />
    </ProtectedAdminRoute>
  }
/>

<Route
  path="/admin/customers/:id"
  element={
    <ProtectedAdminRoute>
      <CustomerDetails />
    </ProtectedAdminRoute>
  }
/>

<Route
  path="/admin/pickups"
  element={
    <ProtectedAdminRoute>
      <PickupManagement />
    </ProtectedAdminRoute>
  }
/>

<Route
  path="/admin/pickups/:id"
  element={
    <ProtectedAdminRoute>
      <PickupDetails />
    </ProtectedAdminRoute>
  }
/>

<Route
  path="/admin/inventory"
  element={
    <ProtectedAdminRoute>
      <Inventory />
    </ProtectedAdminRoute>
  }
/>

<Route
  path="/admin/inventory/:id"
  element={
    <ProtectedAdminRoute>
      <InventoryDetails />
    </ProtectedAdminRoute>
  }
/>

<Route
  path="/admin/settings"
  element={
    <ProtectedAdminRoute>
      <Settings />
    </ProtectedAdminRoute>
  }
/>
      </Routes>


      {/* CUSTOMER FOOTER */}
      {!isAdminRoute && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>

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

      <AppContent />

    </BrowserRouter>
  );
};

export default App;