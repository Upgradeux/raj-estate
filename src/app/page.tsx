import ScrollProgressBar from "@/components/ScrollProgressBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Properties from "@/components/Properties";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Reviews from "@/components/Reviews";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <ScrollProgressBar />
      <Header />
      <main id="top">
        <Hero />
        <TrustStrip />
        <Properties />
        <Services />
        <Process />
        <Reviews />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
