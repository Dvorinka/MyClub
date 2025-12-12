import { InspoHero02 } from "@/components/inspo/hero-02";
import { InspoFeatureGrid01 } from "@/components/inspo/feature-grid-01";
import { InspoPricing01 } from "@/components/inspo/pricing-01";
import { InspoTestimonials01 } from "@/components/inspo/testimonials-01";

export default function BlocksShowcasePage() {
  return (
    <div className="relative">
      <InspoHero02 />
      <InspoFeatureGrid01 />
      <InspoPricing01 />
      <InspoTestimonials01 />
    </div>
  );
}
