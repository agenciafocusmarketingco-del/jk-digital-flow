import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import TargetAudience from "@/components/TargetAudience";
import Plans from "@/components/Plans";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="space-y-0">
        <Hero />
        <div className="section-spacing">
          <Benefits />
        </div>
        <div className="section-spacing">
          <HowItWorks />
        </div>
        <div className="section-spacing">
          <TargetAudience />
        </div>
        <div className="section-spacing">
          <Plans />
        </div>
        <div className="section-spacing">
          <Testimonials />
        </div>
        <div className="section-spacing">
          <FAQ />
        </div>
        <div className="section-spacing">
          <ContactForm />
        </div>
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
