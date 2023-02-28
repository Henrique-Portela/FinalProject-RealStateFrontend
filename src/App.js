import "./App.css";
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom";
import Buy from "./pages/Buy";
import Rent from "./pages/Rent";
import Home from "./pages/Home"; 
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Login from "./pages/Login";


function App() {
  return (
    <div className="">
      <Navbar />
     
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/service" element={<Service/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
        
      </Routes>
     
    </div>
  );
}
export default App;