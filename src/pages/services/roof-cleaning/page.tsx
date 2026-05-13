import { Sparkles } from "lucide-react";
import ServicePageTemplate from "../_components/service-page-template.tsx";

export default function RoofCleaningPage() {
  return (
    <ServicePageTemplate
      title="Roof Cleaning"
      subtitle="Professional algae removal, stain treatment, and preventative maintenance to extend your roof's lifespan."
      heroImage="https://hercules-cdn.com/file_nIFZwEbuyBFr3NSeyM0FtM3q"
      icon={<Sparkles size={14} />}
      description="Your roof is your home's most important protective barrier. Dark streaks, green moss, and lichen growth aren't just ugly — they actively damage roofing materials, shortening roof life significantly. Our professional soft-wash roof cleaning eliminates these threats safely and effectively."
      benefits={[
        "Algae & moss removal",
        "Lichen & black streak treatment",
        "Asphalt shingle cleaning",
        "Metal & tile roof cleaning",
        "Preventative treatment application",
        "Extends roof lifespan by years",
        "Improves home curb appeal dramatically",
        "Safe low-pressure soft wash method",
      ]}
      process={[
        { title: "Roof Inspection", desc: "We evaluate your roof type, pitch, and the extent of biological growth present." },
        { title: "Gentle Pre-Rinse", desc: "The surface is lightly rinsed to remove loose debris before treatment begins." },
        { title: "Treatment Application", desc: "Specialized roof cleaning solutions are applied to kill algae, moss, and lichen at the root." },
        { title: "Soft-Wash Rinse", desc: "Low-pressure rinsing removes all residue without damaging your roofing materials." },
      ]}
      faqs={[
        { q: "Will roof cleaning void my roofing warranty?", a: "Our soft-wash method follows manufacturer-recommended cleaning techniques and does not void most roofing warranties. We can provide documentation if needed." },
        { q: "How often should I have my roof cleaned?", a: "In Tennessee's humid climate, we recommend roof cleaning every 1-2 years to prevent algae and moss from taking hold and causing damage." },
        { q: "Are those black streaks really harmful?", a: "Yes — they're a type of algae called Gloeocapsa magma that feeds on the limestone filler in asphalt shingles, degrading them over time." },
        { q: "Is soft-washing safe for all roof types?", a: "Soft washing is safe for asphalt, metal, tile, and most roofing materials. We always assess the roof type before selecting the appropriate cleaning method." },
      ]}
      galleryImages={[
        "https://hercules-cdn.com/file_nIFZwEbuyBFr3NSeyM0FtM3q",
        "https://hercules-cdn.com/file_E6YLcwtC3fwFIhivldpVKo61",
        "https://hercules-cdn.com/file_iQ54vO5ehMxG0kwqJRPUBbXS",
        "https://hercules-cdn.com/file_TzRxGFBlsy085llALbOP2xjc",
        "https://hercules-cdn.com/file_5ZNZ1ULIlX3zSbYEGLBESGeS",
      ]}
    />
  );
}
