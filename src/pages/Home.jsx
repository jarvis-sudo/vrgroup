import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs"
import ContactPopup from "../components/ContactPopup";
import TeamSection from "../components/TeamSection";
import MdMessage from "../components/MdMessage";

export default function Home() {
  return (
    <>
    <Hero/>
    <MdMessage/>
   {// <TeamSection/>
}
           <ContactPopup/>
    </>
  );
}