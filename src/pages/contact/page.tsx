import { motion } from "motion/react";
import { useState } from "react";
import { Phone, Mail, MapPin, CheckCircle, Send } from "lucide-react";
import { toast } from "sonner";

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

type FormData = {
  name: string;
  phone: string;
  email: string;
  service: string;
  address: string;
  message: string;
};

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: "", phone: "", email: "", service: "", address: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="bg-[#0a1628] min-h-screen">
      {/* Hero */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-br from-blue-900/15 to-transparent">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-blue-600/15 border border-blue-500/25 rounded-full px-4 py-1.5 text-blue-400 text-sm font-semibold mb-5">
            Get In Touch
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-black text-white tracking-tight mb-4">
            Contact <span className="text-blue-400">Us</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-white/55 text-lg max-w-xl mx-auto">
            Have questions or ready to schedule? Reach out — we typically respond within a few hours.
          </motion.p>
        </motion.div>
      </section>

      {/* Contact cards + form */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.h2 variants={fadeUp} className="text-2xl font-black text-white tracking-tight mb-6">
              Business Information
            </motion.h2>
            <div className="space-y-4 mb-8">
              {[
                { icon: <Phone size={18} />, label: "Phone", value: "865-333-0788", href: "tel:8653330788" },
                { icon: <Mail size={18} />, label: "Email", value: "rmallexteriorservices@gmail.com", href: "mailto:rmallexteriorservices@gmail.com" },
                { icon: <MapPin size={18} />, label: "Address", value: "502 East Lamar Alexander Parkway, Maryville, TN", href: null },
                { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>, label: "Facebook", value: "RM Exterior Services on Facebook", href: "https://www.facebook.com/people/RM-Exterior-Services/61588734543357/" },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  variants={fadeUp}
                  className="flex items-start gap-4 bg-[#0d1b32] border border-white/10 rounded-xl p-4"
                >
                  <div className="w-10 h-10 bg-blue-600/20 border border-blue-500/25 rounded-lg flex items-center justify-center text-blue-400 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-white/40 text-xs uppercase tracking-wider mb-0.5">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-white/80 hover:text-blue-400 text-sm font-medium transition-colors cursor-pointer break-all">
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-white/80 text-sm font-medium">{item.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map */}
            <motion.div variants={fadeUp} className="rounded-xl overflow-hidden border border-white/10 h-60">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.843!2d-84.0177!3d35.7564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885c0a58e9e8b4c1%3A0x0!2s502+E+Lamar+Alexander+Pkwy%2C+Maryville%2C+TN!5e0!3m2!1sen!2sus!4v1680000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="RM Exterior Services Location"
              />
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#0d1b32] border border-white/10 rounded-2xl p-7 md:p-8"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="w-16 h-16 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="text-green-400 w-8 h-8" />
                </div>
                <h3 className="text-white font-black text-2xl mb-2">Message Sent!</h3>
                <p className="text-white/55 text-sm max-w-xs">Thank you for reaching out. We'll get back to you within a few hours.</p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-black text-white tracking-tight mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/50 text-xs font-semibold uppercase tracking-wider mb-2">Full Name *</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        required
                        className="w-full bg-white/8 border border-white/15 rounded-lg px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-white/50 text-xs font-semibold uppercase tracking-wider mb-2">Phone *</label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(865) 555-0000"
                        required
                        className="w-full bg-white/8 border border-white/15 rounded-lg px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white/50 text-xs font-semibold uppercase tracking-wider mb-2">Email *</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="example@gmail.com"
                      required
                      className="w-full bg-white/8 border border-white/15 rounded-lg px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white/50 text-xs font-semibold uppercase tracking-wider mb-2">Service Needed</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full bg-white/8 border border-white/15 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors cursor-pointer"
                    >
                      <option value="" className="bg-[#0d1b32]">Select a service...</option>
                      <option value="Pressure Washing" className="bg-[#0d1b32]">Pressure Washing</option>
                      <option value="Soft Washing" className="bg-[#0d1b32]">Soft Washing</option>
                      <option value="Roof Cleaning" className="bg-[#0d1b32]">Roof Cleaning</option>
                      <option value="Gutter Cleaning" className="bg-[#0d1b32]">Gutter Cleaning</option>
                      <option value="Window Cleaning" className="bg-[#0d1b32]">Window Cleaning</option>
                      <option value="Multiple Services" className="bg-[#0d1b32]">Multiple Services</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white/50 text-xs font-semibold uppercase tracking-wider mb-2">Property Address</label>
                    <input
                      name="address"
                      value={form.address}
                      onChange={handleChange}
                      placeholder="123 Main St, Maryville, TN"
                      className="w-full bg-white/8 border border-white/15 rounded-lg px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white/50 text-xs font-semibold uppercase tracking-wider mb-2">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us more about what you need..."
                      rows={4}
                      className="w-full bg-white/8 border border-white/15 rounded-lg px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-4 bg-blue-600 hover:bg-blue-500 disabled:opacity-60 text-white font-black rounded-xl transition-all cursor-pointer"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Send Message
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
