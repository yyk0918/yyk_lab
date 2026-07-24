import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/home/HeroSection";
import { ProductGrid } from "@/components/home/ProductGrid";
import { CollectionShowcase } from "@/components/home/CollectionShowcase";
import { PromoBanner } from "@/components/home/PromoBanner";
import { MarqueeTicker } from "@/components/ui/MarqueeTicker";
import { Footer } from "@/components/layout/Footer";
import { FloatingWidget } from "@/components/layout/FloatingWidget";

export default function HomePage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProductGrid />
        <MarqueeTicker />
        <CollectionShowcase />
        <PromoBanner />
      </main>
      <Footer />
      <FloatingWidget />
    </>
  );
}
