import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import HowItWorkSection from "@/components/UI/HomePage/HowItWorkSection/HowItWorkSection";
import SpecialtiesSection from "@/components/UI/HomePage/SpecialtiesSection/SpecialtiesSection";
import TopRatedDoctors from "@/components/UI/HomePage/TopRatedDoctors/TopRatedDoctors";
import WhyUsSection from "@/components/UI/HomePage/WhyUsSection/WhyUsSection";
import { Button } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <SpecialtiesSection />
      <TopRatedDoctors />
      <WhyUsSection />
      <HowItWorkSection />
    </div>
  );
}
