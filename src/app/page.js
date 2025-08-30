
import Benifits from "@/components/HomePage/Benifits/Benifits";
import FeaturedProducts from "@/components/HomePage/FeaturedProducts/FeaturedProducts";
import Hero from "@/components/HomePage/Hero";


export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero></Hero>
      <Benifits></Benifits>
      <FeaturedProducts></FeaturedProducts>
    </div>
  );
}
