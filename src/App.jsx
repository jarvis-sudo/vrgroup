import {  Routes, Route } from "react-router-dom";

import ContactPopup from "./components/ContactPopup";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import RealEstateProjects from "./pages/RealEstateProjects";
import Home from "./pages/Home";
import Footer from "./components/Footer";



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

      </Routes>
      
</>
    
  );
}

export default App;