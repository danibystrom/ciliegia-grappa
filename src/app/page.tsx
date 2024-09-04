import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import HeroBanner from "./components/HeroBanner";
import Navbar from "./components/Navbar";
import RecipeSection from "./components/RecipeSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <RecipeSection />
      <AboutSection />
      <Footer />
    </>
  );
}
