import { motion } from "motion/react";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

const GALLERY_IMAGES = [
  // Pressure Washing (3)
  { src: "https://hercules-cdn.com/file_nsAHT7evtlvtd0LTiVM6ptRZ", alt: "Pressure washing driveway", tag: "Pressure Washing" },
  { src: "https://hercules-cdn.com/file_f2tIFoYND4u9IsdXteaOn4cI", alt: "Pressure washing patio", tag: "Pressure Washing" },
  { src: "https://hercules-cdn.com/file_fPxQCo20MQ70j26SO0auka3D", alt: "Pressure washing brick path", tag: "Pressure Washing" },
  // Soft Washing (3)
  { src: "https://hercules-cdn.com/file_KysmbU5pYoP5WfFjEz5ygbFN", alt: "Soft washing home exterior", tag: "Soft Washing" },
  { src: "https://hercules-cdn.com/file_64zuaGRgaLbapAQvpqTjKNcT", alt: "Soft washing siding", tag: "Soft Washing" },
  { src: "https://hercules-cdn.com/file_ABdgWzpDwNt55o0pg8BMAtsh", alt: "Soft washing treatment", tag: "Soft Washing" },
  // Roof Cleaning (3)
  { src: "https://hercules-cdn.com/file_nIFZwEbuyBFr3NSeyM0FtM3q", alt: "Roof cleaning professional", tag: "Roof Cleaning" },
  { src: "https://hercules-cdn.com/file_E6YLcwtC3fwFIhivldpVKo61", alt: "Roof cleaning tile", tag: "Roof Cleaning" },
  { src: "https://hercules-cdn.com/file_5ZNZ1ULIlX3zSbYEGLBESGeS", alt: "Roof cleaning red tile", tag: "Roof Cleaning" },
  // Gutter Cleaning (3)
  { src: "https://hercules-cdn.com/file_ddqgktAMTeuOP572OvM0C65Y", alt: "Gutter cleaning debris", tag: "Gutter Cleaning" },
  { src: "https://hercules-cdn.com/file_hKgHLfGkL7vApsykg0xvR35p", alt: "Gutter cleaning service", tag: "Gutter Cleaning" },
  { src: "https://hercules-cdn.com/file_erw4jB9B3ed44jFNscXafkqQ", alt: "Gutter cleaning leaves", tag: "Gutter Cleaning" },
  // Window Cleaning (3)
  { src: "https://hercules-cdn.com/file_hw6SiVX90993noq2YS7s3DmZ", alt: "Window cleaning squeegee", tag: "Window Cleaning" },
  { src: "https://hercules-cdn.com/file_V49Gq60ld1M8586RznhWPbM9", alt: "Window cleaning droplets", tag: "Window Cleaning" },
  { src: "https://hercules-cdn.com/file_n40rGsmnw0dfUicp6O1m0GMv", alt: "Window cleaning professional", tag: "Window Cleaning" },
];

const TAGS = ["All", "Pressure Washing", "Soft Washing", "Roof Cleaning", "Gutter Cleaning", "Window Cleaning"];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function GalleryPage() {
  const [activeTag, setActiveTag] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = activeTag === "All" ? GALLERY_IMAGES : GALLERY_IMAGES.filter((img) => img.tag === activeTag);

  return (
    <div className="bg-[#0a1628] min-h-screen">
      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2 cursor-pointer"
            onClick={() => setLightbox(null)}
          >
            <X size={24} />
          </button>
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={lightbox}
            alt=""
            className="max-w-full max-h-[90vh] object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Hero */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-blue-600/15 border border-blue-500/25 rounded-full px-4 py-1.5 text-blue-400 text-sm font-semibold mb-5">
            Our Work
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-black text-white tracking-tight mb-4">
            Project <span className="text-blue-400">Gallery</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-white/55 text-lg max-w-xl mx-auto">
            See the transformations we deliver. Real results from real properties in Maryville and surrounding Tennessee areas.
          </motion.p>
        </motion.div>
      </section>

      {/* Filter */}
      <section className="pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                  activeTag === tag
                    ? "bg-blue-600 text-white"
                    : "bg-white/8 text-white/60 hover:bg-white/12 hover:text-white border border-white/10"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Masonry grid */}
          <motion.div
            layout
            className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
          >
            {filtered.map((img, i) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.04, duration: 0.3 }}
                className="relative group cursor-pointer break-inside-avoid rounded-xl overflow-hidden border border-white/10"
                onClick={() => setLightbox(img.src)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-white text-xs font-semibold bg-blue-600/80 rounded-full px-3 py-1">{img.tag}</span>
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn size={14} className="text-white" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="pb-20" />
    </div>
  );
}
