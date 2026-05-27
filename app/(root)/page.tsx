import Navbar from "@/components/home/navbar";
import Hero from "@/components/home/hero";
import Features from "@/components/home/features";
import FeaturedProperties from "@/components/home/properties";
import Stats from "@/components/home/stats";
import PopularServices from "@/components/home/services";
import Testimonials from "@/components/home/testimonials";
import FAQ from "@/components/home/faq";
import CTA from "@/components/home/cta";
import Footer from "@/components/home/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <FeaturedProperties />
        <Stats />
        <PopularServices />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
