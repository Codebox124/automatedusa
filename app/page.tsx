'use client'
import AboutUs from "@/components/About";
import BlogResources from "@/components/Blog";
import ContactSupport from "@/components/Contact";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/How";
import AboutSection from "@/components/Who";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />

      <BlogResources />
      <AboutUs />
      <HowItWorks />
      <ContactSupport />

    </div>
  );
}
