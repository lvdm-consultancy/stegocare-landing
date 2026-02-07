import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureCarousel from "@/components/FeatureCarousel";
import IntegrationLogos from "@/components/IntegrationLogos";
import ScrollRevealText from "@/components/ScrollRevealText";
import Solutions from "@/components/Solutions";
import ImageHero from "@/components/ImageHero";
import Security from "@/components/Security";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        <AnnouncementBar />
        <Navbar />
      </div>
      <main>
        <Hero />
        <FeatureCarousel />
        <IntegrationLogos />
        <ScrollRevealText />
        <Solutions />
        <ImageHero />
        <Security />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
