import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect } from "react";
import { Download } from "lucide-react";
import collageFinalLeft from "@/assets/collage-final-left.png";
import collageFinalRight from "@/assets/collage-final-right.png";

const ease = [0.16, 1, 0.3, 1] as const;

export function FinalCta() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 20 });
  const leftX = useTransform(smoothX, [-0.5, 0.5], [-22, 22]);
  const leftY = useTransform(smoothY, [-0.5, 0.5], [-14, 14]);
  const rightX = useTransform(smoothX, [-0.5, 0.5], [18, -18]);
  const rightY = useTransform(smoothY, [-0.5, 0.5], [12, -12]);

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      mouseX.set(event.clientX / window.innerWidth - 0.5);
      mouseY.set(event.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [mouseX, mouseY]);

  return (
    <section
      id="install"
      className="relative flex h-[100svh] min-h-[620px] flex-col items-center justify-center overflow-hidden bg-ink px-4 text-paper sm:px-6 md:h-screen"
    >
      {/* background image with soft top edge (no hard line into previous section) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/last-sec-bg.png)" }}
      />
      {/* dissolve the image into the previous section's white at the top */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-64"
        style={{ background: "linear-gradient(to bottom, var(--paper) 0%, color-mix(in oklch, var(--paper) 60%, transparent) 30%, transparent 100%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-40 backdrop-blur-2xl"
        style={{ maskImage: "linear-gradient(to bottom, black, transparent)", WebkitMaskImage: "linear-gradient(to bottom, black, transparent)" }}
      />

      {/* side collages */}
      <motion.img
        src={collageFinalLeft}
        alt=""
        aria-hidden
        style={{ x: leftX, y: leftY }}
        initial={{ opacity: 0, x: -60, rotate: -4 }}
        whileInView={{ opacity: 1, rotate: -2 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease }}
        className="pointer-events-none absolute -left-2 top-0 z-[6] h-full w-[34vw] max-w-[150px] object-contain object-left mix-blend-multiply sm:-left-12 sm:w-[38vw] sm:max-w-[300px] lg:-left-16 lg:z-50 lg:w-[30vw] lg:max-w-[460px]"
      />
      <motion.img
        src={collageFinalRight}
        alt=""
        aria-hidden
        style={{ x: rightX, y: rightY }}
        initial={{ opacity: 0, x: 60, rotate: 4 }}
        whileInView={{ opacity: 1, rotate: 2 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease }}
        className="pointer-events-none absolute -right-2 top-0 z-[6] h-full w-[34vw] max-w-[150px] object-contain object-right mix-blend-multiply sm:-right-12 sm:w-[38vw] sm:max-w-[300px] lg:-right-16 lg:z-50 lg:w-[30vw] lg:max-w-[460px]"
      />

      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center px-2 text-center sm:px-8 md:mt-[17%]">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="inline-block bg-ink px-5 py-2 font-stamp text-[0.65rem] font-medium uppercase tracking-[0.32em] text-paper sm:px-7 sm:py-2.5 sm:text-xs"
        >
          Ready when you are
        </motion.span>

        <h2 className="mt-4 font-display text-[clamp(1.9rem,8.4vw,5.5rem)] uppercase leading-[0.95] text-paper sm:mt-6">
          {["Start giving", "without giving"].map((line, li) => (
            <span key={line} className="block overflow-hidden pb-1">
              <motion.span
                className="block"
                initial={{ y: "110%", rotate: 3 }}
                whileInView={{ y: 0, rotate: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.9, delay: li * 0.1, ease }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25, ease }}
          className="mx-auto mt-4 max-w-md px-2 text-sm leading-snug text-paper/90 sm:text-base md:text-lg"
        >
          Free forever, off in one tap, and every dollar lands with a verified charity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35, ease }}
          className="mt-6 flex items-center justify-center"
        >
          <a
            href="#causes"
            data-cursor-hover
            className="rise-button group inline-flex items-center gap-2 rounded-full border border-ink/15 bg-ink px-5 py-3 text-sm font-medium text-paper transition-transform duration-300 hover:scale-[1.03] sm:gap-3 sm:px-8 sm:py-3.5 sm:text-base md:text-lg"
          >
            <span aria-hidden className="rise-fill rise-fill--leaf" />
            <Download className="rise-label h-4 w-4 sm:h-5 sm:w-5" />
            <span className="rise-label">Install Dotis — it's free</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}