import Hero from "./components/Hero";
import WhatWeDo from "./components/WhatWeDo";
import WhoWeAre from "./components/WhoWeAre";
import HowItWorks from "./components/HowItWorks";
import CTA from "./components/CTA";
import PopularMenu from "./components/PopularMenu";
import CleanFood from "./components/CleanFood";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Voucher from "./components/Voucher";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Hero />
      <WhatWeDo />
      <WhoWeAre />
      <HowItWorks />
      <CTA />
      <PopularMenu />
      <CleanFood />
      <Testimonials />
      <FAQ />
      <Voucher />

    </main>
  );
}
