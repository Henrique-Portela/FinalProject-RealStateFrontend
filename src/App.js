import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Toaster} from "react-hot-toast";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HouseCard from "./components/HouseCard";
import SellHouse from "./pages/SellHouse";
import RentHouse from "./pages/RentHouse";
import BuyHouse from "./pages/BuyHouse";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import HouseDetail from "./components/HouseDetail";
import AdCreate from "./pages/AdCreate"
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <div>
      <AuthProvider>
      <Navbar />
      <Toaster />
     

    

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buyhouse" element={<BuyHouse />} />
        <Route path="/sellhouse" element={<SellHouse />} />
        <Route path="/renthouse" element={<RentHouse />} />
        <Route path="/service" element={<Service />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/housedetails/:id" element={<HouseDetail />} />
        <Route path="/adcreate" element={<AdCreate />} />
        <Route path="/ad/create/sell/house" element={<SellHouse />} />
        <Route path="/ad/create/rent/house" element={<RentHouse />} />



      </Routes>
     
      </AuthProvider> 
      <Footer />
    </div>
     
  );
}
export default App;
