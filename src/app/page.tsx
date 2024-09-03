import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import HeroBanner from "./components/HeroBanner";
import RecipeSection from "./components/RecipeSection";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <RecipeSection />
      <AboutSection />
      <Footer />
    </>
  );
}
