import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Security from "@/components/Security";
import ClosingCta from "@/components/ClosingCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar light />
      <main>
        <Hero />
        <Features />
        <Security />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
