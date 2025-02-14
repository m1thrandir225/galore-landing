import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DetailGrid from "@/components/DetailGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className={"w-full container mx-auto"}>
      <Header />
      <Hero />
      <DetailGrid />
      <Footer />
    </div>
  );
}
