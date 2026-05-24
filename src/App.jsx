import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home";
import LoginPage from "./pages/LoginPage";

// NEW PAGES
import SellAssetsPage from "./pages/SellAssetsPage";
import DiscoverCollectionPage from "./pages/DiscoverCollectionPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* HOME */}
        <Route path="/" element={<HomePage />} />

        {/* LOGIN */}
        <Route path="/login" element={<LoginPage />} />

        {/* SELL FLOW */}
        <Route
          path="/sell-assets"
          element={<SellAssetsPage />}
        />

        {/* DISCOVER FLOW */}
        <Route
          path="/discover"
          element={<DiscoverCollectionPage />}
        />

      </Routes>
    </BrowserRouter>
  );
};

export default App;