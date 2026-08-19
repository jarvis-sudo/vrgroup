import {  Routes, Route } from "react-router-dom";

import ContactPopup from "./components/ContactPopup";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import RealEstateProjects from "./pages/RealEstateProjects";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import PropertyDetails from "./pages/PropertyDetails"



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
          element={<RealEstateProjects />}
        />
         {/* Property Details */}
        <Route
          path="/real-estate/property/:id"
          element={<PropertyDetails />}
        />

      </Routes>
      
</>
    
  );
}

export default App;