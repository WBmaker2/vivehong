import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProfileSection from "@/components/ProfileSection";
import FeatureSection from "@/components/FeatureSection";
import LectureList from "@/components/LectureList";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 selection:bg-purple-100 selection:text-purple-900">
      <Header />
      <Hero />
      <ProfileSection />
      <FeatureSection />
      <LectureList />
      <Footer />
    </main>
  );
}
