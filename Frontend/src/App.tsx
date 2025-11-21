// App.tsx
// App.tsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import FridgeMateHome from "./pages/Home";
import ImageUpload from "./pages/ImageUpload"; 
import ContactPage from "./pages/ContactPage"; // if you have one
import FridgeMateAbout from "./pages/About";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* HOME PAGE */}
        <Route path="/" element={<FridgeMateHome />} />

        {/* IMAGE UPLOAD PAGE */}
        <Route path="/imageUpload" element={<ImageUpload />} />

        <Route path="/about" element={<FridgeMateAbout />} />

        {/* CONTACT PAGE (optional) */}
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}
