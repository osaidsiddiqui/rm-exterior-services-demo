import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Droplets, Home, Sparkles, Trash2, Wind, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

const SERVICES = [
  {
    icon: <Droplets className="w-8 h-8" />,
    title: "Pressure Washing",
    desc: "High-powered cleaning for driveways, sidewalks, patios, concrete surfaces, and more. We remove dirt, oil stains, and grime with professional-grade equipment.",
    path: "/services/pressure-washing",
    image: "https://images.unsplash.com/photo-1613844044163-1ad2f2d0b152?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    items: ["Driveways & sidewalks", "Patios & decks", "Concrete cleaning", "Exterior surfaces"],
  },
  {
    icon: <Home className="w-8 h-8" />,
    title: "Soft Washing",
    desc: "Safe low-pressure cleaning ideal for delicate surfaces like house siding. We eliminate mold, mildew, algae, and stains without damaging your home.",
    path: "/services/soft-washing",
    image: "https://images.unsplash.com/photo-1648344623048-9082fb2feff2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    items: ["House siding", "Mold & mildew removal", "Delicate surface cleaning", "Low-pressure treatment"],
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Roof Cleaning",
    desc: "Extend the life of your roof with professional algae removal, stain treatment, and soft washing. We protect your biggest investment.",
    path: "/services/roof-cleaning",
    image: "https://images.unsplash.com/photo-1755114203680-d39d95efa82c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    items: ["Algae & moss removal", "Stain treatment", "Soft roof wash", "Preventative maintenance"],
  },
  {
    icon: <Trash2 className="w-8 h-8" />,
    title: "Gutter Cleaning",
    desc: "Prevent water damage and overflow with our comprehensive gutter cleaning service. We clear debris, flush downspouts, and ensure proper drainage.",
    path: "/services/gutter-cleaning",
    image: "https://images.unsplash.com/photo-1560233646-a319964ec3f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    items: ["Full debris removal", "Downspout clearing", "Overflow prevention", "Drainage inspection"],
  },
  {
    icon: <Wind className="w-8 h-8" />,
    title: "Window Cleaning",
    desc: "Crystal-clear streak-free windows for your home. Our exterior window cleaning service restores clarity and boosts curb appeal.",
    path: "/services/window-cleaning",
    image: "https://images.unsplash.com/photo-1769861547797-4803b422eae4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    items: ["Exterior glass cleaning", "Streak-free finish", "Residential windows", "Screen cleaning"],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#0a1628]">
      {/* Hero */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent" />
        <div className="max-w-3xl mx-auto relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-blue-600/15 border border-blue-500/25 rounded-full px-4 py-1.5 text-blue-400 text-sm font-semibold mb-5">
              Our Services
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-black text-white tracking-tight mb-5">
              Complete Exterior <span className="text-blue-400">Cleaning Solutions</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/60 text-lg leading-relaxed">
              Professional exterior cleaning services designed to restore, protect, and beautify your property throughout Maryville, TN and surrounding areas.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Service blocks */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-white/10 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <motion.div
                variants={{ hidden: { opacity: 0, x: index % 2 === 0 ? -20 : 20 }, visible: { opacity: 1, x: 0 } }}
                className={index % 2 === 1 ? "lg:order-2" : ""}
              >
                <img src={service.image} alt={service.title} className="w-full h-64 lg:h-full object-cover" />
              </motion.div>
              <motion.div
                variants={fadeUp}
                className={`bg-[#0d1b32] p-8 md:p-10 flex flex-col justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <div className="w-12 h-12 bg-blue-600/20 border border-blue-500/30 rounded-xl flex items-center justify-center text-blue-400 mb-5">
                  {service.icon}
                </div>
                <h2 className="text-3xl font-black text-white tracking-tight mb-3">{service.title}</h2>
                <p className="text-white/55 leading-relaxed mb-6">{service.desc}</p>
                <ul className="grid grid-cols-2 gap-2 mb-7">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-white/60 text-sm">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.path}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-sm transition-all w-fit cursor-pointer"
                >
                  Learn More
                  <ArrowRight size={15} />
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#080f1e]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white tracking-tight mb-4">Not Sure What You Need?</h2>
          <p className="text-white/55 mb-7">Contact us and we'll recommend the right services for your property.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/estimate" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl transition-all cursor-pointer">
              Get Free Estimate <ArrowRight size={17} />
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/8 hover:bg-white/12 border border-white/15 text-white font-bold rounded-xl transition-all cursor-pointer">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
