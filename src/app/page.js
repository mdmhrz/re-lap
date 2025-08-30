
import Benifits from "@/components/HomePage/Benifits/Benifits";
import ConditionGuide from "@/components/HomePage/ConditionGuide/ConditionGuide";
import FeaturedProducts from "@/components/HomePage/FeaturedProducts/FeaturedProducts";
import Hero from "@/components/HomePage/Hero";
import Process from "@/components/HomePage/Process/Process";
import Stats from "@/components/HomePage/Stats/Stats";
import Subscribe from "@/components/HomePage/Subscribe/Subscribe";
import Testimonials from "@/components/HomePage/Testimonials/Testimonials";
import TrustedBrands from "@/components/HomePage/TrustedBrands/TrustedBrands";
import WhyChooseUs from "@/components/HomePage/WhyChooseUs/WhyChooseUs";


export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero></Hero>
      <Benifits></Benifits>
      <FeaturedProducts></FeaturedProducts>
      <WhyChooseUs></WhyChooseUs>
      <Stats></Stats>
      <ConditionGuide></ConditionGuide>
      <Process></Process>
      <TrustedBrands></TrustedBrands>
      <Testimonials></Testimonials>
      <Subscribe></Subscribe>
    </div>
  );
}
