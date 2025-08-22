
import FeaturedProducts from "@/components/HomePage/FeaturedProducts/FeaturedProducts";
import Hero from "@/components/HomePage/Hero";


export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero></Hero>
      <FeaturedProducts></FeaturedProducts>
    </div>
  );
}
