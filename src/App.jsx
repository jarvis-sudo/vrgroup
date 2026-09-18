import {  Routes, Route } from "react-router-dom";

import ContactPopup from "./components/ContactPopup";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import RealEstateProjects from "./components/RealEstateProjects";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import PropertyDetails from "./components/PropertyDetails";
import RealEstate from "./pages/RealEstate"
import About from "./pages/About";
import CyberHomesTowersPage from "./components/CyberHomesTowersPage";



function App() {
  return (
    <>
      <Navbar />

      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Real Estate Projects */}
        <Route
          path="/real-estate/projects"
          element={<RealEstate/>}
        />
         {/* Property Details */}
        <Route
          path="/real-estate/property/:id"
          element={<PropertyDetails />}
        />

        <Route
        path="/about"
        element={<Home/>}
        />
        <Route
        path="/real-estate/projects/cyber-homes"
        element={<CyberHomesTowersPage/>}
        />

      </Routes>
      <Footer/>
      
</>
    
  );
}

export default App;