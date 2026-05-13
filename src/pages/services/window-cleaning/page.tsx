import { Wind } from "lucide-react";
import ServicePageTemplate from "../_components/service-page-template.tsx";

export default function WindowCleaningPage() {
  return (
    <ServicePageTemplate
      title="Window Cleaning"
      subtitle="Crystal-clear, streak-free exterior window cleaning to brighten your home and boost curb appeal."
      heroImage="https://hercules-cdn.com/file_hw6SiVX90993noq2YS7s3DmZ"
      icon={<Wind size={14} />}
      description="Dirty windows make even a beautiful home look neglected. Our professional exterior window cleaning service restores crystal clarity using streak-free professional techniques and solutions. We clean glass, frames, and sills to leave your home sparkling."
      benefits={[
        "Exterior glass cleaning",
        "Window frame & sill cleaning",
        "Screen cleaning (optional add-on)",
        "Streak-free professional finish",
        "Hard water stain removal",
        "Improves natural light in your home",
        "Enhances curb appeal dramatically",
        "Professional squeegee technique",
      ]}
      process={[
        { title: "Pre-Rinse", desc: "We pre-rinse windows to remove loose dirt and debris before detailed cleaning begins." },
        { title: "Cleaning Solution", desc: "Professional-grade window cleaning solution is applied to break down grime and mineral deposits." },
        { title: "Squeegee Technique", desc: "Expert squeegee technique removes all solution, leaving perfectly streak-free glass." },
        { title: "Detail & Polish", desc: "Frames, sills, and edges are detailed and polished for a complete, flawless finish." },
      ]}
      faqs={[
        { q: "Do you clean interior windows too?", a: "We currently specialize in exterior window cleaning for residential properties. Contact us to discuss your specific needs." },
        { q: "How often should windows be professionally cleaned?", a: "We recommend exterior window cleaning 1-2 times per year to maintain clarity and prevent mineral buildup that becomes harder to remove over time." },
        { q: "Can you remove hard water stains from windows?", a: "Yes! We use specialized treatments to remove calcium and mineral deposits from hard water that standard cleaning can't address." },
        { q: "Will window cleaning scratch my glass?", a: "No. Our professional squeegees and soft tools are specifically designed to clean glass without any scratching or damage." },
      ]}
      galleryImages={[
        "https://hercules-cdn.com/file_hw6SiVX90993noq2YS7s3DmZ",
        "https://hercules-cdn.com/file_V49Gq60ld1M8586RznhWPbM9",
        "https://hercules-cdn.com/file_n40rGsmnw0dfUicp6O1m0GMv",
        "https://hercules-cdn.com/file_Pd2OO3MfJ7W7O9EzKp3yk5PO",
        "https://hercules-cdn.com/file_fLGwDMnZgNiemZ133WSIweaw",
      ]}
    />
  );
}
