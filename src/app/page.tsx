import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DetailGrid from "@/components/DetailGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className={"w-full max-w-[90%] sm:container mx-auto"}>
      <Header />
      <Hero />
      <DetailGrid />
      <Footer />
    </div>
  );
}
