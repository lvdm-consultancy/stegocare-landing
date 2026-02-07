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
      <Navbar />
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
