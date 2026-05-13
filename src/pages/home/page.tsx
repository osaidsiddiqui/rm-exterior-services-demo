import { Link } from "react-router-dom";
import { motion, useInView, AnimatePresence } from "motion/react";
import { useRef, useEffect, useState } from "react";
import {
  Phone,
  Star,
  CheckCircle,
  ArrowRight,
  Shield,
  Clock,
  ThumbsUp,
  Zap,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Droplets,
} from "lucide-react";

// Animated counter hook
function useCounter(end: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);
  return count;
}

function CounterCard({ value, label, suffix = "+" }: { value: number; label: string; suffix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useCounter(value, 1800, inView);
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-black text-white tabular-nums">
        {count}{suffix}
      </div>
      <div className="text-blue-300 text-sm font-semibold mt-1 uppercase tracking-wider">{label}</div>
    </div>
  );
}

const SERVICES = [
  {
    title: "Pressure Washing",
    desc: "High-powered cleaning for driveways, sidewalks, patios, and all exterior concrete surfaces.",
    path: "/services/pressure-washing",
    image: "https://hercules-cdn.com/file_XI9kOIm5XCnIW1c5WYjcChN6",
  },
  {
    title: "Soft Washing",
    desc: "Safe low-pressure cleaning for siding, delicate surfaces, and mold & mildew removal.",
    path: "/services/soft-washing",
    image: "https://hercules-cdn.com/file_T7IUHogwFZaJPGcTY0KR02IF",
  },
  {
    title: "Roof Cleaning",
    desc: "Algae removal, stain treatment, and preventative maintenance to extend roof life.",
    path: "/services/roof-cleaning",
    image: "https://hercules-cdn.com/file_GaKs3RM1PtjDmvU9dc3xExv4",
  },
  {
    title: "Gutter Cleaning",
    desc: "Complete debris removal, downspout clearing, and overflow prevention services.",
    path: "/services/gutter-cleaning",
    image: "https://hercules-cdn.com/file_KUvf37SDbd2w23TVJbxExQyV",
  },
  {
    title: "Window Cleaning",
    desc: "Crystal-clear streak-free exterior window cleaning for residential properties.",
    path: "/services/window-cleaning",
    image: "https://hercules-cdn.com/file_wwTmiz3UOL4k2qmG13HO1zbs",
  },
];

const TRUST_BADGES = [
  { icon: <Shield className="w-5 h-5" />, label: "Professional Service" },
  { icon: <Clock className="w-5 h-5" />, label: "Reliable Scheduling" },
  { icon: <Zap className="w-5 h-5" />, label: "Fast Response" },
  { icon: <ThumbsUp className="w-5 h-5" />, label: "Satisfaction Focused" },
];

const TESTIMONIALS = [
  {
    name: "Sarah M.",
    location: "Maryville, TN",
    text: "Absolutely incredible results! My driveway looks brand new. RM Exterior did a fantastic job and were so professional throughout.",
    stars: 5,
  },
  {
    name: "James T.",
    location: "Knoxville, TN",
    text: "Had my roof and gutters cleaned. The team was on time, thorough, and the results were beyond my expectations. Highly recommend!",
    stars: 5,
  },
  {
    name: "Lisa R.",
    location: "Alcoa, TN",
    text: "The soft washing service completely transformed our home's exterior. No more green algae or stains. Amazing work!",
    stars: 5,
  },
  {
    name: "Mark D.",
    location: "Oak Ridge, TN",
    text: "Phenomenal window cleaning service. They left every window spotless and streak-free. Will definitely use again!",
    stars: 5,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };
  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % TESTIMONIALS.length);
  };

  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="overflow-hidden rounded-2xl">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current}
            initial={{ opacity: 0, x: direction * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -60 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="bg-[#0d1b32] border border-white/10 rounded-2xl p-8"
          >
            <div className="flex items-center gap-1 mb-4">
              {Array.from({ length: TESTIMONIALS[current].stars }).map((_, i) => (
                <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-white/75 text-base leading-relaxed mb-6 italic">{`"${TESTIMONIALS[current].text}"`}</p>
            <div>
              <div className="text-white font-bold">{TESTIMONIALS[current].name}</div>
              <div className="text-white/40 text-sm">{TESTIMONIALS[current].location}</div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white hover:bg-blue-600/40 hover:border-blue-500/50 transition-all cursor-pointer"
        >
          <ChevronLeft size={18} />
        </button>
        <div className="flex gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              className={`w-2 h-2 rounded-full transition-all cursor-pointer ${i === current ? "bg-blue-400 w-5" : "bg-white/25"}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white hover:bg-blue-600/40 hover:border-blue-500/50 transition-all cursor-pointer"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="bg-[#0a1628] overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1648344623048-9082fb2feff2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzIwMTN8MHwxfHNlYXJjaHwzfHxob3VzZSUyMHByZXNzdXJlJTIwd2FzaGluZyUyMGV4dGVyaW9yJTIwY2xlYW5pbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8fHwxNzc4Njk2MDYyfDA&ixlib=rb-4.1.0&q=80&w=1080)`,
          }}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060d1a]/95 via-[#060d1a]/75 to-[#060d1a]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060d1a]/80 via-transparent to-transparent" />

        {/* Animated glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-400/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            className="max-w-3xl"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-1.5 text-blue-300 text-sm font-semibold mb-6"
            >
              <Droplets size={14} />
              Maryville, Tennessee's Premier Exterior Cleaning
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight text-balance"
            >
              Restore Your<br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Property's Beauty
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-lg text-white/70 max-w-2xl leading-relaxed"
            >
              Professional exterior cleaning services in Maryville, Tennessee. From pressure washing to roof cleaning — we make your property shine.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/estimate"
                className="flex items-center gap-2 px-7 py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl text-base transition-all shadow-2xl shadow-blue-900/40 hover:shadow-blue-800/60 hover:-translate-y-0.5 cursor-pointer"
              >
                Get Free Estimate
                <ArrowRight size={18} />
              </Link>
              <a
                href="tel:8653330788"
                className="flex items-center gap-2 px-7 py-4 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold rounded-xl text-base transition-all backdrop-blur-sm cursor-pointer"
              >
                <Phone size={18} />
                Call Now
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-3">
              {TRUST_BADGES.map((b) => (
                <div
                  key={b.label}
                  className="flex items-center gap-2 bg-white/8 border border-white/12 rounded-full px-4 py-2 text-white/70 text-sm font-medium backdrop-blur-sm"
                >
                  <span className="text-blue-400">{b.icon}</span>
                  {b.label}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
        {/* No scroll mouse icon */}
      </section>

      {/* STATS */}
      <section className="py-16 bg-gradient-to-r from-blue-900/40 via-blue-800/30 to-blue-900/40 border-y border-blue-700/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <CounterCard value={500} label="Homes Cleaned" />
            <CounterCard value={450} label="Happy Clients" />
            <CounterCard value={25} label="Service Areas" />
            <CounterCard value={800} label="Projects Completed" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.div variants={fadeUp} className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-blue-600/15 border border-blue-500/25 rounded-full px-4 py-1.5 text-blue-400 text-sm font-semibold mb-4">
                <Sparkles size={13} />
                What We Do
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                Our Services
              </h2>
              <p className="mt-4 text-white/55 text-lg max-w-2xl mx-auto">
                Comprehensive exterior cleaning solutions tailored to protect and beautify your property.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {SERVICES.map((service, i) => (
                <motion.div
                  key={service.title}
                  variants={fadeUp}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className={`group relative bg-[#0d1b32] border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/40 transition-all cursor-pointer ${i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}
                >
                  {/* Service image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b32] via-[#0d1b32]/30 to-transparent" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-white font-bold text-xl mb-2">{service.title}</h3>
                    <p className="text-white/55 text-sm leading-relaxed mb-5">{service.desc}</p>
                    <Link
                      to={service.path}
                      className="inline-flex items-center gap-2 text-blue-400 text-sm font-semibold hover:text-blue-300 transition-colors cursor-pointer"
                    >
                      Learn More
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} className="mt-10 text-center">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-base transition-all shadow-xl shadow-blue-900/30 cursor-pointer"
              >
                View All Services
                <ArrowRight size={17} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#080f1e]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-blue-600/15 border border-blue-500/25 rounded-full px-4 py-1.5 text-blue-400 text-sm font-semibold mb-5">
                <Shield size={13} />
                Why Choose Us
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black text-white tracking-tight mb-5">
                Quality You Can See.<br />
                <span className="text-blue-400">Service You Can Trust.</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-white/55 leading-relaxed mb-8">
                At RM Exterior Services, we bring professional-grade equipment, proven techniques, and a commitment to excellence to every job. We treat your property like our own.
              </motion.p>
              {[
                "Fully insured and professional team",
                "Eco-friendly cleaning solutions",
                "100% satisfaction guarantee",
                "Serving Maryville, Knoxville & surrounding TN areas",
                "Fast scheduling & reliable arrival",
              ].map((item) => (
                <motion.div key={item} variants={fadeUp} className="flex items-start gap-3 mb-4">
                  <CheckCircle className="text-blue-400 mt-0.5 shrink-0" size={18} />
                  <span className="text-white/70 text-sm font-medium">{item}</span>
                </motion.div>
              ))}
              <motion.div variants={fadeUp} className="mt-8">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/15 border border-white/15 text-white font-bold rounded-xl text-sm transition-all cursor-pointer"
                >
                  Learn About Us
                  <ArrowRight size={15} />
                </Link>
              </motion.div>
            </motion.div>

            {/* Image grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
              className="grid grid-cols-2 gap-3"
            >
              <img
                src="https://hercules-cdn.com/file_GaKs3RM1PtjDmvU9dc3xExv4"
                alt="Roof cleaning"
                className="rounded-2xl w-full h-48 object-cover"
              />
              <img
                src="https://hercules-cdn.com/file_T7IUHogwFZaJPGcTY0KR02IF"
                alt="Soft washing"
                className="rounded-2xl w-full h-48 object-cover mt-6"
              />
              <img
                src="https://hercules-cdn.com/file_KUvf37SDbd2w23TVJbxExQyV"
                alt="Gutter cleaning"
                className="rounded-2xl w-full h-48 object-cover -mt-6"
              />
              <img
                src="https://hercules-cdn.com/file_wwTmiz3UOL4k2qmG13HO1zbs"
                alt="Window cleaning"
                className="rounded-2xl w-full h-48 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* REVIEWS CAROUSEL */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div variants={fadeUp} className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-blue-600/15 border border-blue-500/25 rounded-full px-4 py-1.5 text-blue-400 text-sm font-semibold mb-4">
                <Star size={13} className="fill-blue-400" />
                Customer Reviews
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                What Our Clients Say
              </h2>
            </motion.div>

            <motion.div variants={fadeUp}>
              <TestimonialsCarousel />
            </motion.div>

            <motion.div variants={fadeUp} className="text-center mt-10">
              <Link
                to="/reviews"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors cursor-pointer"
              >
                Read More Reviews
                <ArrowRight size={15} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#080f1e]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/55 text-lg mb-8">
              Contact us today for a free estimate. We service Maryville, Knoxville, Alcoa, and all surrounding Tennessee areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/estimate"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl text-base transition-all shadow-2xl shadow-blue-900/40 cursor-pointer"
              >
                Get Free Estimate
                <ArrowRight size={18} />
              </Link>
              <a
                href="tel:8653330788"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white/8 hover:bg-white/12 border border-white/15 text-white font-bold rounded-xl text-base transition-all cursor-pointer"
              >
                <Phone size={18} />
                865-333-0788
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
