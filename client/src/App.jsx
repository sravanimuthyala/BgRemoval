import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BuyCredit from "./pages/BuyCredit";
import Result from "./pages/Result";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
  import { ToastContainer, toast } from 'react-toastify';
const App = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <ToastContainer position='bottom-right'/>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<BuyCredit />} />
        <Route path="/result" element={<Result />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
