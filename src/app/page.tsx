import FeaturedCourses from "@/components/custom_components/Home/FeaturedCourses";
import FindYourPath from "@/components/custom_components/Home/FindYourPath";
import HeroSection from "@/components/custom_components/Home/HeroSection";
import LearningIntro from "@/components/custom_components/Home/LearningIntro";
import Navbar from "@/components/custom_components/Navbar";
import CuratedTracks from "@/components/custom_components/Home/CuratedTracks";
import GuidanceSection from "@/components/custom_components/Home/GuidanceSection";
import StudentShowcase from "@/components/custom_components/Home/StudentShowcase";

export default function Home() {
  return (
    <div>
      <main>
        <Navbar />
        <HeroSection />
        <LearningIntro />
        <FindYourPath />
        <FeaturedCourses />
        <CuratedTracks />
        <GuidanceSection />
        <StudentShowcase />
      </main>
    </div>
  );
}
