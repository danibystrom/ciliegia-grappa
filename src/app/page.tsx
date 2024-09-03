import AboutSection from "./components/AboutSection";
import HeroBanner from "./components/HeroBanner";
import RecipeSection from "./components/RecipeSection";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <RecipeSection />
      <AboutSection />
    </>
  );
}
