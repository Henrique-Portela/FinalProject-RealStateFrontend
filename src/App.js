import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HouseCard from "./components/HouseCard";
import Sell from "./pages/Sell";
import Rent from "./pages/Rent";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import HouseDetail from "./components/HouseDetail";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/service" element={<Service />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/housedetails/:id" element={<HouseDetail />} />
      </Routes>
      <Footer />
    </div>
    
  );
}
export default App;
