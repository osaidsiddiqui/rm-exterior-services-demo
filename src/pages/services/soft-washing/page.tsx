import { Home } from "lucide-react";
import ServicePageTemplate from "../_components/service-page-template.tsx";

export default function SoftWashingPage() {
  return (
    <ServicePageTemplate
      title="Soft Washing"
      subtitle="Safe, gentle cleaning for house siding, delicate surfaces, and mold & mildew removal."
      heroImage="https://hercules-cdn.com/file_KysmbU5pYoP5WfFjEz5ygbFN"
      icon={<Home size={14} />}
      description="Soft washing uses low-pressure water combined with specialized cleaning solutions to safely remove mold, mildew, algae, bacteria, and stains from your home's exterior without the risk of damage. It's the preferred method for siding, painted surfaces, and other delicate areas."
      benefits={[
        "House siding (vinyl, wood, stucco, fiber cement)",
        "Painted exterior surfaces",
        "Mold & mildew removal",
        "Algae & bacteria treatment",
        "Long-lasting results vs pressure washing",
        "Safe for landscaping and plants",
        "Eco-friendly biodegradable solutions",
        "No surface damage risk",
      ]}
      process={[
        { title: "Surface Assessment", desc: "We inspect your home's exterior to identify the type and extent of contamination." },
        { title: "Solution Application", desc: "Biodegradable cleaning agents are applied at low pressure to penetrate organic growth." },
        { title: "Dwell Time", desc: "We allow the solutions to work, breaking down mold, mildew, and algae at the root." },
        { title: "Low-Pressure Rinse", desc: "A gentle rinse removes all residue, leaving surfaces clean, fresh, and protected." },
      ]}
      faqs={[
        { q: "What's the difference between soft washing and pressure washing?", a: "Soft washing uses low pressure and specialized cleaning agents — ideal for siding, roofs, and painted surfaces. Pressure washing uses high pressure for hard surfaces like concrete." },
        { q: "Is soft washing safe for my landscaping?", a: "Yes! We pre-wet all plants and landscaping before and after treatment and use biodegradable solutions that are safe when properly applied." },
        { q: "How long will soft washing results last?", a: "Soft washing typically lasts 2-4x longer than pressure washing because it treats the source of growth — not just the surface appearance." },
        { q: "Can soft washing remove black streaks on siding?", a: "Absolutely. Those streaks are typically caused by algae or mold, and our soft washing treatment completely eliminates them." },
      ]}
      galleryImages={[
        "https://hercules-cdn.com/file_KysmbU5pYoP5WfFjEz5ygbFN",
        "https://hercules-cdn.com/file_64zuaGRgaLbapAQvpqTjKNcT",
        "https://hercules-cdn.com/file_ABdgWzpDwNt55o0pg8BMAtsh",
        "https://hercules-cdn.com/file_kDfnMbJy8Pen2k0CqZAOgDSc",
        "https://hercules-cdn.com/file_DxLJan0Gcoh8WuMqDubB8J94",
      ]}
    />
  );
}
