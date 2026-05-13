import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";
import { type ReactNode } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

type ServicePageProps = {
  title: string;
  subtitle: string;
  heroImage: string;
  icon: ReactNode;
  description: string;
  benefits: string[];
  process: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  galleryImages: string[];
};

export default function ServicePageTemplate({
  title,
  subtitle,
  heroImage,
  icon,
  description,
  benefits,
  process,
  faqs,
  galleryImages,
}: ServicePageProps) {
  return (
    <div className="bg-[#0a1628]">
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060d1a] via-[#060d1a]/70 to-[#060d1a]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060d1a]/60 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-1.5 text-blue-300 text-sm font-semibold mb-4">
              {icon}
              Our Services
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-black text-white tracking-tight mb-3">
              {title}
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/65 text-xl max-w-2xl">{subtitle}</motion.p>
          </motion.div>
        </div>
      </section>

      {/* Description + benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-black text-white tracking-tight mb-5">
              What's Included
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/60 leading-relaxed mb-8">{description}</motion.p>
            <div className="space-y-3">
              {benefits.map((b) => (
                <motion.div key={b} variants={fadeUp} className="flex items-start gap-3">
                  <CheckCircle className="text-blue-400 mt-0.5 shrink-0" size={17} />
                  <span className="text-white/70 text-sm">{b}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="grid grid-cols-2 gap-3"
          >
            {galleryImages.map((img, i) => (
              <motion.img
                key={i}
                variants={fadeUp}
                src={img}
                alt=""
                className="rounded-xl w-full h-44 object-cover"
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#080f1e]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-black text-white tracking-tight mb-10 text-center">
              Our Process
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {process.map((step, i) => (
                <motion.div key={step.title} variants={fadeUp} className="bg-[#0d1b32] border border-white/10 rounded-xl p-5">
                  <div className="text-4xl font-black text-blue-600/30 mb-3 leading-none">0{i + 1}</div>
                  <h3 className="text-white font-bold mb-2 text-sm">{step.title}</h3>
                  <p className="text-white/50 text-xs leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-black text-white tracking-tight mb-8 text-center">
              Frequently Asked Questions
            </motion.h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <motion.div
                  key={faq.q}
                  variants={fadeUp}
                  className="bg-[#0d1b32] border border-white/10 rounded-xl p-6"
                >
                  <h3 className="text-white font-bold mb-2">{faq.q}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-800/40 via-blue-700/30 to-blue-800/40 border-y border-blue-600/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white tracking-tight mb-3">
            Ready to Schedule Your {title}?
          </h2>
          <p className="text-white/60 mb-7">Contact us today for a free, no-obligation estimate.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/estimate"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl transition-all cursor-pointer"
            >
              Get Free Estimate <ArrowRight size={17} />
            </Link>
            <a
              href="tel:8653330788"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold rounded-xl transition-all cursor-pointer"
            >
              <Phone size={17} />
              865-333-0788
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
