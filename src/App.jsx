import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* HOME */}
        <Route path="/" element={<HomePage />} />

        {/* AUTH */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;