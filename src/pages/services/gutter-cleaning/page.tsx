import { Trash2 } from "lucide-react";
import ServicePageTemplate from "../_components/service-page-template.tsx";

export default function GutterCleaningPage() {
  return (
    <ServicePageTemplate
      title="Gutter Cleaning"
      subtitle="Complete debris removal, downspout clearing, and overflow prevention to protect your home."
      heroImage="https://hercules-cdn.com/file_ddqgktAMTeuOP572OvM0C65Y"
      icon={<Trash2 size={14} />}
      description="Clogged gutters lead to water damage, foundation issues, and pest infestations. Our comprehensive gutter cleaning service clears all debris, flushes downspouts, and ensures proper water drainage to protect your home from costly repairs."
      benefits={[
        "Complete leaf & debris removal",
        "Downspout flushing & clearing",
        "Overflow prevention",
        "Fascia board inspection",
        "Gutter flow testing",
        "Prevents foundation water damage",
        "Protects landscaping from overflow",
        "Reduces pest & nesting concerns",
      ]}
      process={[
        { title: "Gutter Inspection", desc: "We inspect gutters and downspouts to assess blockage levels and structural condition." },
        { title: "Debris Removal", desc: "All leaves, twigs, sediment and debris are manually removed from the gutters." },
        { title: "Downspout Flush", desc: "We flush every downspout with water to clear blockages and test for proper flow." },
        { title: "Final Flow Test", desc: "Water is run through the entire system to confirm proper drainage before we finish." },
      ]}
      faqs={[
        { q: "How often should gutters be cleaned?", a: "In Tennessee, we recommend cleaning gutters at least twice a year — once in late spring after pollen season and once in late fall after the leaves drop." },
        { q: "What happens if I don't clean my gutters?", a: "Clogged gutters overflow and direct water against your home's foundation, siding, and fascia boards, causing expensive water damage, mold growth, and structural issues." },
        { q: "Do you clean gutters on all roof heights?", a: "Yes, we have the equipment and experience to safely service single-story and multi-story homes." },
        { q: "Will you clean up the debris you remove?", a: "Absolutely. All debris is bagged and removed from your property as part of our standard service." },
      ]}
      galleryImages={[
        "https://hercules-cdn.com/file_ddqgktAMTeuOP572OvM0C65Y",
        "https://hercules-cdn.com/file_hKgHLfGkL7vApsykg0xvR35p",
        "https://hercules-cdn.com/file_erw4jB9B3ed44jFNscXafkqQ",
        "https://hercules-cdn.com/file_4rp2hu0o2g1VAqwgYaWHU2mJ",
        "https://hercules-cdn.com/file_q3t0tV8IhBtfxurUZg44CzcX",
      ]}
    />
  );
}
