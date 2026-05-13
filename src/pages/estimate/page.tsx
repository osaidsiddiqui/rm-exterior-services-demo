import { motion } from "motion/react";
import { useState } from "react";
import { CheckCircle, ChevronRight, ChevronLeft, Upload, Calendar, DollarSign, Home } from "lucide-react";
import { toast } from "sonner";

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

const SERVICES = ["Pressure Washing", "Soft Washing", "Roof Cleaning", "Gutter Cleaning", "Window Cleaning"];

const STEPS = ["Services", "Property", "Schedule", "Contact"];

export default function EstimatePage() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    services: [] as string[],
    propertyType: "",
    address: "",
    budget: "",
    preferredDate: "",
    name: "",
    phone: "",
    email: "",
    notes: "",
  });

  const toggleService = (s: string) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(s) ? prev.services.filter((x) => x !== s) : [...prev.services, s],
    }));
  };

  const update = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  const next = () => {
    if (step === 0 && form.services.length === 0) { toast.error("Please select at least one service."); return; }
    if (step === 1 && (!form.address || !form.propertyType)) { toast.error("Please fill in property details."); return; }
    if (step === 3 && (!form.name || !form.phone || !form.email)) { toast.error("Please fill in contact info."); return; }
    if (step === 3) { handleSubmit(); return; }
    setStep((s) => s + 1);
  };

  const handleSubmit = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="bg-[#0a1628] min-h-screen">
      <section className="py-24 px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-blue-600/15 border border-blue-500/25 rounded-full px-4 py-1.5 text-blue-400 text-sm font-semibold mb-5">
            It's Free!
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-black text-white tracking-tight mb-4">
            Get Your <span className="text-blue-400">Free Estimate</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-white/55 text-lg max-w-lg mx-auto">
            Tell us about your property and needs. We'll get back to you with a detailed, no-obligation quote.
          </motion.p>
        </motion.div>
      </section>

      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <div className="w-20 h-20 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-green-400 w-10 h-10" />
              </div>
              <h2 className="text-3xl font-black text-white mb-3">Estimate Request Sent!</h2>
              <p className="text-white/55 text-lg max-w-sm mx-auto">
                Thank you, {form.name}! We'll review your request and contact you within 24 hours with your free estimate.
              </p>
              <div className="mt-6 text-white/40 text-sm">
                Questions? Call us at{" "}
                <a href="tel:8653330788" className="text-blue-400 hover:text-blue-300 cursor-pointer">865-333-0788</a>
              </div>
            </motion.div>
          ) : (
            <>
              {/* Progress */}
              <div className="flex items-center justify-between mb-10">
                {STEPS.map((s, i) => (
                  <div key={s} className="flex items-center flex-1">
                    <div className="flex flex-col items-center">
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all ${
                        i < step ? "bg-blue-600 border-blue-600 text-white" :
                        i === step ? "border-blue-500 text-blue-400 bg-blue-600/10" :
                        "border-white/20 text-white/30"
                      }`}>
                        {i < step ? <CheckCircle size={15} /> : i + 1}
                      </div>
                      <div className={`text-xs mt-1 font-semibold ${i <= step ? "text-white/70" : "text-white/25"}`}>{s}</div>
                    </div>
                    {i < STEPS.length - 1 && (
                      <div className={`flex-1 h-0.5 mx-2 mb-5 transition-all ${i < step ? "bg-blue-600" : "bg-white/15"}`} />
                    )}
                  </div>
                ))}
              </div>

              {/* Step content */}
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25 }}
                className="bg-[#0d1b32] border border-white/10 rounded-2xl p-7 md:p-9"
              >
                {step === 0 && (
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400">
                        <Home size={20} />
                      </div>
                      <h2 className="text-xl font-black text-white">Which services do you need?</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {SERVICES.map((s) => (
                        <button
                          key={s}
                          onClick={() => toggleService(s)}
                          className={`flex items-center gap-3 px-4 py-4 rounded-xl border text-left transition-all cursor-pointer ${
                            form.services.includes(s)
                              ? "border-blue-500 bg-blue-600/15 text-white"
                              : "border-white/15 bg-white/5 text-white/60 hover:border-white/25 hover:text-white"
                          }`}
                        >
                          <div className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 ${
                            form.services.includes(s) ? "border-blue-500 bg-blue-600" : "border-white/30"
                          }`}>
                            {form.services.includes(s) && <CheckCircle size={12} className="text-white" />}
                          </div>
                          <span className="font-semibold text-sm">{s}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 1 && (
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400">
                        <Upload size={20} />
                      </div>
                      <h2 className="text-xl font-black text-white">Tell us about your property</h2>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-white/50 text-xs font-semibold uppercase tracking-wider mb-2">Property Type</label>
                        <div className="grid grid-cols-3 gap-3">
                          {["Single Family", "Townhome", "Other"].map((type) => (
                            <button
                              key={type}
                              onClick={() => update("propertyType", type)}
                              className={`py-3 rounded-xl border text-sm font-semibold transition-all cursor-pointer ${
                                form.propertyType === type
                                  ? "border-blue-500 bg-blue-600/15 text-white"
                                  : "border-white/15 text-white/50 hover:border-white/25"
                              }`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="block text-white/50 text-xs font-semibold uppercase tracking-wider mb-2">Property Address *</label>
                        <input
                          value={form.address}
                          onChange={(e) => update("address", e.target.value)}
                          placeholder="123 Main St, Maryville, TN"
                          className="w-full bg-white/8 border border-white/15 rounded-lg px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-blue-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-white/50 text-xs font-semibold uppercase tracking-wider mb-2">
                          <DollarSign size={12} className="inline mr-1" />
                          Approximate Budget
                        </label>
                        <select
                          value={form.budget}
                          onChange={(e) => update("budget", e.target.value)}
                          className="w-full bg-white/8 border border-white/15 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors cursor-pointer"
                        >
                          <option value="" className="bg-[#0d1b32]">Select a range...</option>
                          <option value="Under $200" className="bg-[#0d1b32]">Under $200</option>
                          <option value="$200–$500" className="bg-[#0d1b32]">$200–$500</option>
                          <option value="$500–$1,000" className="bg-[#0d1b32]">$500–$1,000</option>
                          <option value="$1,000+" className="bg-[#0d1b32]">$1,000+</option>
                          <option value="Not sure" className="bg-[#0d1b32]">Not sure</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400">
                        <Calendar size={20} />
                      </div>
                      <h2 className="text-xl font-black text-white">Preferred Appointment</h2>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-white/50 text-xs font-semibold uppercase tracking-wider mb-2">Preferred Date</label>
                        <input
                          type="date"
                          value={form.preferredDate}
                          onChange={(e) => update("preferredDate", e.target.value)}
                          className="w-full bg-white/8 border border-white/15 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-white/50 text-xs font-semibold uppercase tracking-wider mb-2">Additional Notes</label>
                        <textarea
                          value={form.notes}
                          onChange={(e) => update("notes", e.target.value)}
                          placeholder="Any specific instructions, gate codes, access info, etc."
                          rows={4}
                          className="w-full bg-white/8 border border-white/15 rounded-lg px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <h2 className="text-xl font-black text-white mb-6">Your Contact Info</h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-white/50 text-xs font-semibold uppercase tracking-wider mb-2">Full Name *</label>
                        <input
                          value={form.name}
                          onChange={(e) => update("name", e.target.value)}
                          placeholder="John Smith"
                          className="w-full bg-white/8 border border-white/15 rounded-lg px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-blue-500 transition-colors"
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-white/50 text-xs font-semibold uppercase tracking-wider mb-2">Phone *</label>
                          <input
                            value={form.phone}
                            onChange={(e) => update("phone", e.target.value)}
                            placeholder="(865) 555-0000"
                            className="w-full bg-white/8 border border-white/15 rounded-lg px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-blue-500 transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-white/50 text-xs font-semibold uppercase tracking-wider mb-2">Email *</label>
                          <input
                            type="email"
                            value={form.email}
                            onChange={(e) => update("email", e.target.value)}
                            placeholder="example@gmail.com"
                            className="w-full bg-white/8 border border-white/15 rounded-lg px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-blue-500 transition-colors"
                          />
                        </div>
                      </div>
                      {/* Summary */}
                      <div className="bg-blue-600/10 border border-blue-500/20 rounded-xl p-4 mt-2">
                        <div className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-2">Your Request Summary</div>
                        <div className="text-white/70 text-sm space-y-1">
                          <div><span className="text-white/40">Services:</span> {form.services.join(", ") || "—"}</div>
                          <div><span className="text-white/40">Address:</span> {form.address || "—"}</div>
                          {form.preferredDate && <div><span className="text-white/40">Date:</span> {form.preferredDate}</div>}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Nav buttons */}
                <div className="flex items-center justify-between mt-8">
                  {step > 0 ? (
                    <button
                      onClick={() => setStep((s) => s - 1)}
                      className="flex items-center gap-2 px-5 py-3 bg-white/8 hover:bg-white/12 border border-white/15 text-white font-bold rounded-xl text-sm transition-all cursor-pointer"
                    >
                      <ChevronLeft size={16} />
                      Back
                    </button>
                  ) : <div />}
                  <button
                    onClick={next}
                    disabled={loading}
                    className="flex items-center gap-2 px-7 py-3 bg-blue-600 hover:bg-blue-500 disabled:opacity-60 text-white font-black rounded-xl text-sm transition-all cursor-pointer"
                  >
                    {loading ? (
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        {step === 3 ? "Submit Request" : "Continue"}
                        <ChevronRight size={16} />
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
