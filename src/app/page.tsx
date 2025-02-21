import Header from "@/components/Global/Header";
import Hero from "@/components/Home/Hero";
import Footer from "@/components/Global/Footer";
import DetailGrid from "@/components/Home/DetailGrid";
import ComingSoon from "@/components/Home/ComingSoon";
export default function Home() {
  return (
    <div className={"w-full max-w-[90%] sm:container mx-auto"}>
      <Header />
      <Hero />
      <DetailGrid />
      <ComingSoon />
      <Footer />
    </div>
  );
}
