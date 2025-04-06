import { Container } from "@/components/Container";
import type { Route } from "./+types/home";
import { Header } from "@/components/section/Header";
import { HeroSection } from "@/components/section/Hero";
import { Brands } from "@/components/section/Brands";
import { Pricing } from "@/components/section/Pricing";
import { Features } from "@/components/section/Features";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <Brands />    
      <Pricing />
      <Features />
    </>
  )
}
