import { Home } from "lucide-react";
import ServicePageTemplate from "../_components/service-page-template.tsx";

export default function PressureWashingPage() {
  return (
    <ServicePageTemplate
      title="Pressure Washing"
      subtitle="High-powered cleaning for driveways, sidewalks, patios, and all exterior concrete surfaces."
      heroImage="https://hercules-cdn.com/file_XI9kOIm5XCnIW1c5WYjcChN6"
      icon={<Home size={14} />}
      description="Pressure washing is the most effective way to deep-clean concrete, paved surfaces, and hard exterior areas. Our professional-grade equipment removes dirt, grime, algae, and stains that years of weathering have accumulated."
      benefits={[
        "Concrete driveways & sidewalks",
        "Patio & deck cleaning",
        "Hard surfaces (brick, stone, asphalt)",
        "Fast, dramatic results",
        "Removes stubborn stains",
        "Prevents surface deterioration",
        "Increases curb appeal",
        "Professional equipment & expertise",
      ]}
      process={[
        { title: "Surface Inspection", desc: "We assess the type and condition of your concrete surfaces to determine optimal pressure and technique." },
        { title: "Equipment Setup", desc: "Professional-grade pressure washing equipment is positioned to safely and efficiently clean the area." },
        { title: "High-Pressure Washing", desc: "We apply appropriate pressure to remove dirt, grime, stains, and organic growth from the surface." },
        { title: "Final Rinse & Inspection", desc: "A complete rinse ensures all debris is removed and surfaces are left clean and safe." },
      ]}
      faqs={[
        { q: "Will pressure washing damage my driveway or patio?", a: "No. We use professional equipment and techniques specifically calibrated to clean effectively without damaging concrete, pavers, or other surfaces." },
        { q: "How often should I pressure wash my driveway?", a: "Most homeowners benefit from pressure washing every 1-2 years, depending on traffic and weather exposure." },
        { q: "What types of stains can pressure washing remove?", a: "Pressure washing effectively removes dirt, algae, mildew, rust stains, oil marks, and years of accumulated grime." },
        { q: "Is pressure washing safe for all outdoor areas?", a: "Pressure washing is ideal for concrete, asphalt, brick, and stone. We always use the appropriate technique for delicate surfaces." },
      ]}
      galleryImages={[
        "https://hercules-cdn.com/file_XI9kOIm5XCnIW1c5WYjcChN6",
        "https://hercules-cdn.com/file_64zuaGRgaLbapAQvpqTjKNcT",
        "https://hercules-cdn.com/file_ABdgWzpDwNt55o0pg8BMAtsh",
        "https://hercules-cdn.com/file_kDfnMbJy8Pen2k0CqZAOgDSc",
        "https://hercules-cdn.com/file_DxLJan0Gcoh8WuMqDubB8J94",
      ]}
    />
  );
}
