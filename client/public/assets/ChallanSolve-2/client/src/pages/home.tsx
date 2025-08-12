import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import ProcessSection from "@/components/process-section";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
