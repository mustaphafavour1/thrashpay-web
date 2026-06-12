import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import ImpactNumbers from "@/components/ImpactNumbers";
import Materials from "@/components/Materials";
import Pricing from "@/components/Pricing";
import ForCompanies from "@/components/ForCompanies";
import SocialProof from "@/components/SocialProof";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <ImpactNumbers />
        <Materials />
        <Pricing />
        <ForCompanies />
        <SocialProof />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
