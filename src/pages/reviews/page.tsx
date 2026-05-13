import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const REVIEWS = [
  {
    name: "Sarah M.",
    location: "Maryville, TN",
    service: "Pressure Washing",
    text: "Absolutely incredible results! My driveway looks brand new. RM Exterior did a fantastic job — they were professional, punctual, and left the place spotless. Will definitely be calling them again!",
    stars: 5,
    date: "March 2025",
  },
  {
    name: "James T.",
    location: "Knoxville, TN",
    service: "Roof & Gutter Cleaning",
    text: "Had my roof and gutters cleaned. The team was on time, thorough, and the results were beyond my expectations. The dark algae streaks on my roof are completely gone. Highly recommend!",
    stars: 5,
    date: "February 2025",
  },
  {
    name: "Lisa R.",
    location: "Alcoa, TN",
    service: "Soft Washing",
    text: "The soft washing service completely transformed our home's exterior. No more green algae or stains on the siding. Amazing work at a fair price. My neighbors keep complimenting how clean it looks!",
    stars: 5,
    date: "January 2025",
  },
  {
    name: "Mike D.",
    location: "Maryville, TN",
    service: "Gutter Cleaning",
    text: "Called RM Exterior after my gutters were overflowing during every rain. They came out quickly, cleaned everything out, and the drainage is perfect now. Great communication throughout.",
    stars: 5,
    date: "April 2025",
  },
  {
    name: "Jennifer K.",
    location: "Oak Ridge, TN",
    service: "Pressure Washing",
    text: "Our concrete patio was covered in black stains and mold. One visit from RM Exterior and it looks brand new. Couldn't believe the transformation. Top-notch service from start to finish.",
    stars: 5,
    date: "March 2025",
  },
  {
    name: "Robert H.",
    location: "Maryville, TN",
    service: "Window Cleaning",
    text: "Crystal clear windows with zero streaks. I've tried DIY solutions for years and could never get them looking this clean. Professional, fast, and reasonably priced. Scheduling was easy too.",
    stars: 5,
    date: "April 2025",
  },
  {
    name: "Amanda W.",
    location: "Loudon, TN",
    service: "Soft Washing",
    text: "I was nervous about cleaning my vinyl siding but RM Exterior put me at ease. They were so careful and professional. The house looks like it was freshly painted. Incredible job!",
    stars: 5,
    date: "February 2025",
  },
  {
    name: "Tom S.",
    location: "Lenoir City, TN",
    service: "Roof Cleaning",
    text: "The black streaks on my roof were embarrassing. RM Exterior removed them completely in just a few hours. My HOA even sent a compliment notice! Will be scheduling annually from now on.",
    stars: 5,
    date: "January 2025",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

export default function ReviewsPage() {
  return (
    <div className="bg-[#0a1628] min-h-screen">
      {/* Hero */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-br from-blue-900/20 to-transparent">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-blue-600/15 border border-blue-500/25 rounded-full px-4 py-1.5 text-blue-400 text-sm font-semibold mb-5">
            <Star size={13} className="fill-blue-400" />
            Customer Reviews
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-black text-white tracking-tight mb-4">
            What Our Clients Say
          </motion.h1>
          <motion.p variants={fadeUp} className="text-white/55 text-lg max-w-xl mx-auto mb-8">
            Real reviews from real homeowners across Maryville, Knoxville, and surrounding Tennessee communities.
          </motion.p>
          {/* Rating summary */}
          <motion.div variants={fadeUp} className="inline-flex items-center gap-4 bg-[#0d1b32] border border-white/10 rounded-2xl px-6 py-4">
            <div className="text-5xl font-black text-white">5.0</div>
            <div>
              <div className="flex items-center gap-1 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-white/50 text-sm">Based on customer reviews</div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured review */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-blue-800/30 to-blue-900/20 border border-blue-600/30 rounded-2xl p-8 md:p-10"
          >
            <Quote className="text-blue-500/40 w-12 h-12 mb-4" />
            <p className="text-white/80 text-xl md:text-2xl font-medium leading-relaxed italic mb-6">
              {`"${REVIEWS[0].text}"`}
            </p>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <div className="text-white font-bold">{REVIEWS[0].name}</div>
                <div className="text-white/50 text-sm">{REVIEWS[0].location} · {REVIEWS[0].service}</div>
              </div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Review grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {REVIEWS.slice(1).map((review) => (
              <motion.div
                key={review.name}
                variants={fadeUp}
                className="bg-[#0d1b32] border border-white/10 rounded-2xl p-6 hover:border-blue-500/25 transition-all"
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-white/65 text-sm leading-relaxed mb-5 italic">{`"${review.text}"`}</p>
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-white font-bold text-sm">{review.name}</div>
                    <div className="text-white/40 text-xs">{review.location}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-blue-400 text-xs font-semibold">{review.service}</div>
                    <div className="text-white/30 text-xs">{review.date}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
