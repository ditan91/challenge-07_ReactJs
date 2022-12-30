import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AboutPage from "./pages/AboutPage";
// import NotFoundPage from "./pages/NotFoundPage";
// import CarsPage from "./pages/CarsPage";
import RegistrasiPage from "./pages/RegistrasiPage";
import LoginPage from "./pages/LoginPage";
// import FormSubmit from "./pages/FormSubmit";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/about" element={<AboutPage />} /> */}
      {/* <Route path="/cars" element={<CarsPage />} /> */}
      <Route path="/register" element={<RegistrasiPage />} />
      <Route path="/login" element={<LoginPage />} />
      {/* <Route path="/form-submit" element={<FormSubmit />} /> */}
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  </BrowserRouter>
);
