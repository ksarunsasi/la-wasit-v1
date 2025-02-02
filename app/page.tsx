"use client";
import { SearchSection } from "@/components/search-section";
import { ServiceCards } from "@/components/service-cards";
import { FileText, Truck } from "lucide-react";
import { HeroSearch } from "@/components/hero-search";
import { Header } from "@/components/header";
import { BenefitsSection } from "@/components/benefits-section";
import { PropertyCard } from "@/components/property-card";
import { PropertyGrid } from "@/components/property-grid";
import { Footer } from "@/components/footer";
import { FeaturesSection } from "@/components/features-section";
import { LoginModal } from "@/components/login-modal";
import { useState } from "react";

export default function Home() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [searchedItem, setSearchedItem] = useState("");

  const onClickLogin = () => {
    setIsLoginOpen(true);
  };

  const onSearchClick = (searchedItem: string) => {
    console.log("Searched Item:", searchedItem);
  };
  return (
    <>
      <Header onClickLogin={onClickLogin} />
      <HeroSearch onSearchClick={onSearchClick} />
      <main>
        <PropertyGrid searchedLocation={searchedItem} />
        {/* <BenefitsSection /> */}
        <FeaturesSection />

        <LoginModal
          isOpen={isLoginOpen}
          onClose={() => setIsLoginOpen(false)}
        />
        <Footer />
      </main>
    </>
  );
}
