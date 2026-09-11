import { motion } from "motion/react";
import { BadgeCheck, Quote } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const QUOTES = [
  {
    text: "I installed it, forgot about it, and three months later I'd funded 900 meals. Easiest good deed of my life.",
    name: "Mara V.",
    role: "Designer, Lisbon",
  },
  {
    text: "The dashboard shows exactly where every cent went. That transparency is why I still have it running.",
    name: "Devansh R.",
    role: "Student, Pune",
  },
  {
    text: "Our whole studio runs it overnight. Zero slowdown, and the wildlife fund gets a cheque every month.",
    name: "Ollie B.",
    role: "Studio lead, Manchester",
  },
];

const CHARITIES = [
  "Feeding America",
  "charity: water",
  "WildAid",
  "Direct Relief",
  "IFAW",
  "OXFAM",
  "Mercy Corps",
  "WaterAid",
  "CARE",
  "Action Against Hunger",
  "The Nature Conservancy",
  "Water.org",
];

const STATS = [
  { value: "2.4M", label: "meals funded" },
  { value: "180k", label: "people sharing" },
  { value: "40+", label: "whitelisted charities" },
  { value: "$0", label: "cost to users" },
];

export function SocialProof() {
  return (
    <section id="proof" className="relative overflow-hidden bg-paper px-5 pb-16 pt-20 text-ink sm:px-6 sm:pb-24 sm:pt-28 md:pb-32 md:pt-44">
      <div className="relative mx-auto max-w-[1800px]">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8, ease }}
        >
          <span className="inline-block bg-tape px-6 py-2 font-stamp text-xs font-medium uppercase tracking-[0.32em]">
            Trusted by people &amp; partners
          </span>
          <h2 className="mt-5 max-w-4xl font-display text-[clamp(2.2rem,8.6vw,5rem)] leading-[0.92]">
            Small habits,{" "}
            <span className="text-flare">enormous receipts</span>
          </h2>
        </motion.div>

        <div className="mt-10 grid grid-cols-2 gap-5 border-y border-ink/12 py-8 sm:gap-6 md:mt-14 md:grid-cols-4 md:py-10">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 55 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08, ease }}
            >
              <p className="font-display text-[clamp(2.4rem,4.6vw,4rem)] leading-none text-flare">{stat.value}</p>
              <p className="mt-2 font-stamp text-[0.62rem] uppercase tracking-[0.26em] text-ink/50">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:gap-6 md:mt-14 md:grid-cols-3">
          {QUOTES.map((q, i) => (
            <motion.figure
              key={q.name}
              initial={{ opacity: 0, y: 90, rotate: i % 2 ? 1.5 : -1.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: i % 2 ? 1 : -1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.85, delay: i * 0.1, ease }}
              whileHover={{ rotate: 0, y: -8 }}
              className="relative flex flex-col rounded-3xl border border-ink/10 bg-tape/40 p-6 sm:p-8"
            >
              <Quote className="h-7 w-7 text-flare" />
              <blockquote className="mt-4 flex-1 text-base leading-relaxed sm:text-lg">{q.text}</blockquote>
              <figcaption className="mt-6 border-t border-ink/10 pt-4">
                <p className="font-medium">{q.name}</p>
                <p className="font-stamp text-[0.62rem] uppercase tracking-[0.26em] text-ink/50">{q.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease }}
          className="mt-12 md:mt-16"
        >
          <p className="font-stamp text-[0.65rem] uppercase tracking-[0.3em] text-ink/50">
            Whitelisted charities
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {CHARITIES.map((name, i) => (
              <motion.span
                key={name}
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04, ease }}
                whileHover={{ y: -4 }}
                data-cursor-hover
                className="flex items-center gap-2 rounded-full border border-moss/30 bg-paper px-5 py-2.5 text-sm"
              >
                <BadgeCheck className="h-4 w-4 text-moss" />
                {name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
