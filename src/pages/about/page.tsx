import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Shield, Users, Star, Droplets } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

const WHY_US = [
  { icon: <Shield className="w-6 h-6" />, title: "Fully Insured", desc: "Complete peace of mind — we're fully licensed and insured for all services." },
  { icon: <Users className="w-6 h-6" />, title: "Experienced Team", desc: "Our trained professionals bring expertise and care to every single project." },
  { icon: <Star className="w-6 h-6" />, title: "5-Star Rated", desc: "Our customers consistently rate us 5 stars for quality, communication, and results." },
  { icon: <Droplets className="w-6 h-6" />, title: "Eco-Friendly", desc: "We use environmentally responsible cleaning solutions safe for your family and landscaping." },
];

const PROCESS = [
  { step: "01", title: "Request a Free Estimate", desc: "Contact us via phone, email, or our online form. We'll gather details about your property and services needed." },
  { step: "02", title: "Schedule Your Service", desc: "We'll work around your schedule to book a convenient appointment — typically available within days." },
  { step: "03", title: "Expert Cleaning", desc: "Our trained team arrives on time with professional equipment to deliver outstanding results." },
  { step: "04", title: "Your Satisfaction", desc: "We do a final walk-through to ensure you're completely happy with the results before we leave." },
];

export default function AboutPage() {
  return (
    <div className="bg-[#0a1628]">
      {/* Hero */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-blue-600/15 border border-blue-500/25 rounded-full px-4 py-1.5 text-blue-400 text-sm font-semibold mb-5">
              About Us
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-black text-white tracking-tight text-balance mb-6">
              Serving Maryville with <span className="text-blue-400">Pride & Precision</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
              RM Exterior Services provides high-quality exterior cleaning solutions designed to improve curb appeal, protect surfaces, and restore properties throughout Maryville and surrounding Tennessee areas.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#080f1e]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1755113717103-eceec858546a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
              alt="Clean home exterior"
              className="rounded-2xl w-full h-96 object-cover"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.h2 variants={fadeUp} className="text-4xl font-black text-white tracking-tight mb-5">
              Our Mission
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/60 leading-relaxed mb-5">
              We believe every property deserves to look its best. Our mission is simple: deliver exceptional exterior cleaning results with unmatched professionalism and customer care.
            </motion.p>
            <motion.p variants={fadeUp} className="text-white/60 leading-relaxed mb-7">
              From residential homes to larger properties, we bring the same level of dedication and attention to detail on every job. We're proud to serve the Maryville community and surrounding Tennessee areas.
            </motion.p>
            {["Quality service commitment on every job", "Transparent pricing — no hidden fees", "Reliable, on-time professionals", "Protecting your surfaces and investment"].map((item) => (
              <motion.div key={item} variants={fadeUp} className="flex items-center gap-3 mb-3">
                <CheckCircle className="text-blue-400 shrink-0" size={17} />
                <span className="text-white/70 text-sm">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.div variants={fadeUp} className="text-center mb-12">
              <h2 className="text-4xl font-black text-white tracking-tight">Why Choose RM Exterior?</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {WHY_US.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="bg-[#0d1b32] border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition-all"
                >
                  <div className="w-11 h-11 bg-blue-600/20 border border-blue-500/25 rounded-xl flex items-center justify-center text-blue-400 mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#080f1e]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div variants={fadeUp} className="text-center mb-12">
              <h2 className="text-4xl font-black text-white tracking-tight">How It Works</h2>
              <p className="text-white/50 mt-3">Simple, seamless, and stress-free from start to finish.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PROCESS.map((step) => (
                <motion.div key={step.step} variants={fadeUp} className="flex gap-5">
                  <div className="text-5xl font-black text-blue-600/30 leading-none shrink-0">{step.step}</div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white tracking-tight mb-4">Ready to Work with Us?</h2>
          <p className="text-white/55 mb-7">Get your free estimate today and see the RM Exterior difference.</p>
          <Link
            to="/estimate"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl transition-all cursor-pointer"
          >
            Get Free Estimate
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </div>
  );
}
