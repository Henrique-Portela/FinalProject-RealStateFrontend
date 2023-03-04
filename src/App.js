import "./App.css";
import Css from "./Css/Rent.css";
import CSS from "./Css/Login.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar"
import HouseCard from "./components/HouseCard";
import { Routes, Route } from "react-router-dom";
import Sell from "./pages/Sell";
import Rent from "./pages/Rent";
import Home from "./pages/Home"; 
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Login from "./pages/Login";


function App() {
  return (
    <div>
      <Navbar />
     
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/service" element={<Service/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/homedetails/:id/details" element={<homedetails />} />
        
      </Routes>
     
    </div>
  );
}
export default App;