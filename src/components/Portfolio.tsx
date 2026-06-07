import portraitHero from "@/assets/heo-portait.png";
import portraitAbout from "@/assets/about.png";
import featured from "@/assets/featured.jpg";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useRef, useState } from "react";

import { HairlineGrid } from "./HairlineGrid";

function PhaseMark({ n, label }: { n: string; label: string }) {
  return (
    <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-ash">
      <span className="text-lime">{n}</span> <span className="mx-2">/</span> {label}
    </div>
  );
}

/* ─────────────── HERO ─────────────── */
function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <section id="top" ref={ref} className="relative min-h-screen w-full bg-void overflow-hidden pt-20 md:pt-24">
      <HairlineGrid />
      <div className="relative z-20 flex flex-col md:grid md:grid-cols-12 gap-3 md:gap-6 px-[5vw] md:px-[3vw] pb-12 md:pb-16 md:min-h-[calc(100vh-6rem)]">
        {/* Phase mark — top on mobile */}
        <div className="md:hidden pt-1">
          <PhaseMark n="001" label="Phase / Break" />
        </div>

        {/* PORTRAIT — first on mobile, right on desktop */}
        <motion.div
          style={{ y: imgY, scale: imgScale }}
          className="order-1 md:order-2 md:col-span-5 relative h-[48vh] sm:h-[54vh] md:h-auto md:min-h-[80vh] -mx-[5vw] md:mx-0"
        >
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={portraitHero}
              alt="Charan portrait"
              className="w-full h-full object-cover object-top grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent md:hidden" />
          </div>
          {/* Desktop-only overlay quote — difference blend over portrait */}
          <div className="hidden md:block absolute bottom-6 right-4 left-4 text-right leading-[0.95] font-display font-extrabold uppercase tracking-[-0.03em] mix-blend-difference pointer-events-none text-paper">
            <div className="text-[clamp(1.5rem,3.4vw,3rem)]">I build things</div>
            <div className="text-[clamp(1.5rem,3.4vw,3rem)]">to see how they</div>
            <div className="text-[clamp(1.5rem,3.4vw,3rem)]">break and heal</div>
            <div className="mt-3 font-mono text-[10px] tracking-[0.15em] font-medium">| CHARAN</div>
          </div>


        </motion.div>

        {/* TEXT */}
        <motion.div style={{ y: textY }} className="order-2 md:order-1 md:col-span-7 flex flex-col justify-between gap-5 md:gap-0 -mt-3 md:mt-0">
          <div className="hidden md:flex flex-col gap-2 pt-2">
            <PhaseMark n="001" label="Phase / Break" />
          </div>

          <div className="leading-none md:-ml-1 md:mt-0">
            <h1 className="font-display font-extrabold uppercase tracking-[-0.04em] leading-[0.85]">
              <span className="block text-lime text-[clamp(3.5rem,14vw,14rem)]">DEV</span>
              <span className="block text-lime text-[clamp(3.5rem,14vw,14rem)] md:pl-[10vw]">EL</span>
              <span className="block text-paper text-[clamp(3.5rem,14vw,14rem)]">OPER</span>
            </h1>
          </div>

          {/* Mobile-only quote (below name) */}
          <div className="md:hidden leading-[1] font-display font-extrabold uppercase text-[1.5rem] tracking-[-0.02em]">
            <div className="text-lime">I build things</div>
            <div className="text-paper">to see how they</div>
            <div className="text-lime">break and heal</div>
            <div className="mt-2 font-mono text-[10px] tracking-[0.15em] text-lime font-medium">| CHARAN</div>
          </div>

          <div className="md:mt-12 flex flex-col gap-3">
            <p className="font-mono text-[11px] tracking-[0.1em] uppercase text-ash max-w-[40ch]">
              Fresher · Full-stack developer building production apps with React & TypeScript.
            </p>
            <div className="mt-2 h-px w-full bg-paper/15" />
            <ul className="font-mono text-[11px] tracking-[0.1em] uppercase text-paper space-y-1.5 mt-2">
              <li>— Full-Stack Web Apps</li>
              <li>— React + TypeScript</li>
              <li>— Shipped on Vercel</li>
              <li>— Open Source on GitHub</li>
            </ul>
          </div>

        </motion.div>
      </div>

      <div className="absolute bottom-6 right-[3vw] z-20 font-mono text-[10px] tracking-[0.15em] uppercase text-ash">
        Scroll ↓
      </div>
    </section>
  );
}

/* ─────────────── MANIFESTO / WORK ─────────────── */
function Work() {
  const [showAll, setShowAll] = useState(false);
  const projects = [
    {
      title: "Phoenix Marketing — agency site",
      cat: "React · TypeScript",
      status: "Live on Vercel",
      live: "https://phoenix-marketing.vercel.app",
      code: "https://github.com/cmd-gi/Phoenix-Marketing",
    },
    {
      title: "Shree Ganesh Prasad — brand site",
      cat: "React · TypeScript",
      status: "Live on Vercel",
      live: "https://shreeganeshprasad.vercel.app",
      code: "https://github.com/cmd-gi/shreeganeshprasad-",
    },
    {
      title: "Showcase Page — full-stack template",
      cat: "TypeScript · API",
      status: "Live on Vercel",
      live: "https://showcase-page-api-server.vercel.app",
      code: "https://github.com/cmd-gi/showcase_page",
    },
    {
      title: "A1 Decorators — landing v1",
      cat: "JavaScript · Web",
      status: "Live on Vercel",
      live: "https://a1decorators.vercel.app",
      code: "https://github.com/cmd-gi/a1decorators",
    },
    {
      title: "Agency Landing Page",
      cat: "React · TypeScript",
      status: "Live on Vercel",
      live: "https://agency-landing-page-tan-mu.vercel.app",
      code: "https://github.com/cmd-gi/agency_landing_page-",
    },
    {
      title: "A1 Decorators v2 — event screens",
      cat: "JavaScript · Web",
      status: "Live on Vercel",
      live: "https://a1-v2.vercel.app",
      code: "https://github.com/cmd-gi/a1_v2",
    },
  ].map((p) => ({
    ...p,
    img: `https://api.microlink.io/?url=${encodeURIComponent(p.live)}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=800`,
    imgFallback: `https://image.thum.io/get/width/1280/crop/800/noanimate/${p.live}`,
  }));

  const total = projects.length;
  const visible = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="work" className="relative bg-paper text-charcoal py-[12vh]">
      <HairlineGrid light />
      <div className="relative z-20 px-[3vw]">
        <div className="grid grid-cols-12 gap-6 mb-20">
          <div className="col-span-12 md:col-span-1">
            <PhaseMark n="002" label="Index" />
          </div>
          <div className="col-span-12 md:col-span-11">
            <h2 className="font-display font-bold uppercase tracking-[-0.03em] leading-[0.9] text-[clamp(2.25rem,8vw,8rem)] text-charcoal">
              Full-stack work,<br/>
              shipped with<br/>
              <span className="text-charcoal/40">React, TypeScript</span><br/>
              and a Vercel URL.
            </h2>
            <p className="mt-8 font-display text-[1rem] leading-[1.5] text-charcoal max-w-[55ch] md:ml-auto">
              A fresher's portfolio of production-grade apps — typed end to end, deployed on Vercel, source open on GitHub. Each one is a study in turning an idea into something you can actually use.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <AnimatePresence initial={false}>
            {visible.map((p, i) => {
              const host = p.live.replace(/^https?:\/\//, "");
              return (
                <motion.article
                  key={i}
                  layout
                  initial={i >= 3 ? { opacity: 0, y: 20 } : false}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: i >= 3 ? (i - 3) * 0.08 : 0 }}
                  className="group relative flex flex-col bg-paper border border-charcoal/15 overflow-hidden"
                >
                  {/* Browser chrome */}
                  <div className="flex items-center gap-2 px-3 py-2 border-b border-charcoal/15 bg-charcoal/[0.03]">
                    <span className="w-2.5 h-2.5 rounded-full bg-charcoal/20" />
                    <span className="w-2.5 h-2.5 rounded-full bg-charcoal/20" />
                    <span className="w-2.5 h-2.5 rounded-full bg-charcoal/20" />
                    <div className="ml-2 flex-1 truncate font-mono text-[10px] tracking-[0.05em] text-charcoal/60 bg-paper border border-charcoal/15 px-2 py-0.5">
                      {host}
                    </div>
                    <span className="hidden sm:inline font-mono text-[9px] tracking-[0.15em] uppercase text-charcoal/40">
                      {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Live screenshot — wide aspect so the full site shows */}
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="relative block aspect-[16/10] overflow-hidden bg-charcoal/5"
                  >
                    <img
                      src={p.img}
                      alt={`${p.title} — live site preview`}
                      loading="lazy"
                      onError={(e) => {
                        const el = e.currentTarget;
                        if (el.dataset.fallback !== "1") {
                          el.dataset.fallback = "1";
                          el.src = p.imgFallback;
                        }
                      }}
                      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-charcoal/10" />
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="font-mono text-[10px] tracking-[0.15em] uppercase bg-lime text-void px-2 py-1">
                        Open ↗
                      </span>
                    </div>
                  </a>

                  {/* Info panel */}
                  <div className="flex items-start justify-between gap-4 p-4 md:p-5 border-t border-charcoal/15">
                    <div className="flex items-start gap-2 min-w-0">
                      <span className="text-lime text-xl leading-none mt-0.5">▸</span>
                      <div className="min-w-0">
                        <h3 className="font-display font-bold uppercase tracking-[-0.02em] text-[clamp(1rem,1.4vw,1.4rem)] leading-[1] text-charcoal">
                          {p.title}
                        </h3>
                        <div className="mt-2 flex items-center gap-3 flex-wrap font-mono text-[10px] tracking-[0.15em] uppercase">
                          <span className="text-charcoal/70">{p.cat}</span>
                          <span className="text-charcoal/40">●</span>
                          <span className="text-charcoal/70">{p.status}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 shrink-0">
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono text-[10px] tracking-[0.15em] uppercase border border-charcoal px-3 py-1.5 text-charcoal hover:bg-charcoal hover:text-paper transition-colors text-center"
                      >
                        Live ↗
                      </a>
                      <a
                        href={p.code}
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono text-[10px] tracking-[0.15em] uppercase border border-charcoal/40 px-3 py-1.5 text-charcoal hover:bg-charcoal hover:text-paper transition-colors text-center"
                      >
                        Code →
                      </a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>

        {total > 3 && (
          <div className="mt-12 flex items-center justify-between gap-4 flex-wrap border-t border-charcoal/15 pt-6">
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-charcoal/60">
              Showing {visible.length} / {total}
            </span>
            <button
              onClick={() => setShowAll((v) => !v)}
              className="group font-mono text-[11px] tracking-[0.15em] uppercase border border-charcoal px-5 py-3 text-charcoal hover:bg-charcoal hover:text-paper transition-colors"
            >
              {showAll ? "Show less ↑" : `View all projects (${total}) →`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}



/* ─────────────── FEATURED CASE STUDY ─────────────── */
function Featured() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="featured" ref={ref} className="relative grid grid-cols-1 md:grid-cols-2 min-h-[90vh]">
      {/* LEFT lime panel */}
      <div className="relative bg-lime text-void px-[3vw] py-[10vh] flex flex-col justify-between overflow-hidden">
        {/* vertical stripes */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 flex">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex-1 border-r border-void/10 last:border-r-0" />
          ))}
        </div>

        <div className="flex items-start justify-between relative z-10">
          <span className="font-display font-bold text-[15px] tracking-tight">CHARAN</span>
          <span className="font-mono text-[10px] tracking-[0.15em] uppercase">Featured / 003</span>
        </div>

        <div className="relative z-10 mt-12">
          <h2 className="font-display font-bold uppercase tracking-[-0.03em] leading-[0.9] text-[clamp(3rem,9vw,9rem)] text-void">
            VIRTUAL<br/>TRY-ON
          </h2>
          <div className="mt-6 font-mono text-[10px] tracking-[0.15em] uppercase text-void flex items-center gap-3 flex-wrap">
            <span>STUDY—01.26 / FEATURED</span>
            <span className="inline-flex items-center gap-1.5 border border-void/40 px-2 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-void" /> Source on GitHub
            </span>
            <span className="inline-flex items-center gap-1.5 border border-void/30 px-2 py-1 text-void/70">
              <span className="w-1.5 h-1.5 rounded-full bg-void/40" /> Live demo — soon
            </span>
          </div>

          <blockquote className="mt-10 border-l-2 border-void pl-5 font-display font-bold uppercase tracking-[-0.02em] text-[clamp(1.25rem,2.5vw,2.25rem)] leading-[0.95] max-w-[20ch]">
            Try before you buy — with AI.
          </blockquote>

          <p className="mt-8 font-display text-[1rem] leading-[1.5] text-void/90 max-w-[45ch]">
            A portrait-first retail kiosk built with Next.js and FastAPI. Shoppers capture a photo, pick preferences, browse AI-curated recommendations, and preview a virtual try-on — all on a touch-first display. The backend orchestrates a ComfyUI-powered FLUX.2 Klein cloth-swap pipeline, while an admin portal manages the full clothing catalog with SQLite-backed storage.
          </p>
        </div>

        <div className="relative z-10 mt-12 flex items-center gap-3 flex-wrap">
          <a href="https://github.com/cmd-gi/virtual-tryon" target="_blank" rel="noreferrer" className="inline-block border border-void px-5 py-3 font-mono text-[11px] tracking-[0.15em] uppercase font-medium hover:bg-void hover:text-lime transition-colors">
            View on GitHub →
          </a>
          <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-void/70">Next.js · TypeScript · FastAPI · Python · ComfyUI · FLUX.2 Klein</span>
        </div>
      </div>

      {/* RIGHT image */}
      <div className="relative bg-void overflow-hidden min-h-[70vh] md:min-h-0">
        <motion.img
          src={featured}
          alt="Virtual Try-On Kiosk"
          style={{ y: imgY }}
          className="absolute inset-0 w-full h-[120%] -top-[10%] object-cover grayscale contrast-125"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="font-display font-extrabold uppercase tracking-[-0.04em] text-paper text-[clamp(3rem,7vw,6rem)]"
            style={{ textShadow: "0 0 30px rgba(255,255,255,0.6)" }}
          >
            [COMPILE]
          </span>
        </div>
        <div className="absolute bottom-6 left-6 font-mono text-[10px] tracking-[0.15em] uppercase text-paper/70">
          Stack — Next.js · TypeScript · FastAPI · Python · ComfyUI · FLUX.2 Klein
        </div>

      </div>
    </section>
  );
}

/* ─────────────── ABOUT ─────────────── */
function About() {
  return (
    <section id="about" className="relative grid grid-cols-1 md:grid-cols-2 min-h-[90vh]">
      {/* LEFT image */}
      <div className="relative bg-warm overflow-hidden min-h-[70vh] md:min-h-0">
        <img
          src={portraitAbout}
          alt="Charan portrait distorted"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 glitch-anim"
        />
        <div className="absolute top-6 left-6 z-10 flex flex-col gap-2 font-mono text-[10px] tracking-[0.15em] uppercase text-paper">
          <span>Illusion</span>
          <span>Latency</span>
          <span>Perspective</span>
          <span>Control</span>
          <span className="block w-3 h-3 mt-2 rounded-full bg-signal" aria-hidden />
        </div>

        <div className="absolute bottom-6 left-6 right-6 z-10">
          <h3 className="font-display font-extrabold uppercase tracking-[-0.04em] leading-[0.9] text-paper text-[clamp(1.75rem,4.5vw,4.5rem)]">
            Patterns<br/>emerge.<br/>
            <span className="text-lime">Friction creates</span><br/>meaning.
          </h3>
        </div>
      </div>

      {/* RIGHT text */}
      <div className="relative bg-editorial text-charcoal px-[3vw] py-[10vh] flex flex-col justify-between">
        <HairlineGrid light />
        <div className="relative z-20 flex items-start justify-between">
          <PhaseMark n="004" label="About" />
          <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-charcoal">04.1</span>
        </div>

        <div className="relative z-20 mt-16">
          <h2 className="font-display font-bold uppercase tracking-[-0.03em] leading-[0.9] text-charcoal text-[clamp(2.25rem,6vw,5.5rem)]">
            Curious about<br/>what comes<br/>next
          </h2>
          <div className="mt-4 h-1 w-32 bg-charcoal" />
          <p className="mt-8 font-display text-[1rem] leading-[1.55] text-charcoal max-w-[48ch]">
            I explore the intersection of technology, design, and human behavior. My work revolves around building intelligent experiences, experimenting with new ideas, and creating systems that solve real problems. Every project begins with curiosity and evolves through exploration, iteration, and discovery.
          </p>
        </div>

        <div className="relative z-20 mt-12 font-mono text-[11px] tracking-[0.05em] uppercase text-charcoal/70 max-w-[55ch]">
          Work shaped by movement, memory, and interruption. Studies in logic, depth, and distortion. Each piece begins as a question and ends wherever it needs to.
        </div>
      </div>
    </section>
  );
}

/* ─────────────── CONTACT ─────────────── */
function Contact() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);

  return (
    <section id="contact" ref={ref} className="relative bg-void text-paper min-h-[80vh] flex flex-col justify-between px-[5vw] md:px-[3vw] py-[8vh] md:py-[10vh] overflow-hidden gap-12">
      <HairlineGrid />
      <div className="relative z-20 flex items-start justify-between">
        <PhaseMark n="005" label="Contact / End" />
        <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-ash">// 2026</span>
      </div>

      <motion.div style={{ scale }} className="relative z-20 grid grid-cols-12 gap-8 md:gap-6 my-8 md:my-16">
        <div className="col-span-12 md:col-span-8">
          <h2 className="font-display font-extrabold uppercase tracking-[-0.04em] leading-[0.85] text-[clamp(2.75rem,12vw,12rem)] break-words">
            <span className="block text-lime">Let's</span>
            <span className="block text-lime pl-[6vw]">build</span>
            <span className="block text-paper">together.</span>
          </h2>
        </div>
        <div className="col-span-12 md:col-span-4 flex flex-col md:justify-end gap-4 font-mono text-[11px] tracking-[0.1em] uppercase">
          <p className="text-ash max-w-[30ch] normal-case tracking-[0.02em]">
            Let's build something meaningful. Always open to new ideas, collaborations, or just a thoughtful conversation.
          </p>
          <a href="mailto:32charan@gmail.com" className="text-paper hover:text-lime transition-colors block break-all">
            <span className="text-ash">EMAIL — </span>32charan@gmail.com
          </a>
          <a href="https://github.com/cmd-gi" target="_blank" rel="noreferrer" className="text-paper hover:text-lime transition-colors block">
            <span className="text-ash">GITHUB — </span>/cmd-gi
          </a>
          <a href="https://www.linkedin.com/in/32charan/" target="_blank" rel="noreferrer" className="text-paper hover:text-lime transition-colors block">
            <span className="text-ash">LINKEDIN — </span>/in/32charan
          </a>
          <a href="tel:+918951448408" className="text-paper hover:text-lime transition-colors block">
            <span className="text-ash">PHONE — </span>+91 8951448408
          </a>
          <a
            href="mailto:32charan@gmail.com"
            className="mt-4 inline-block border border-lime px-5 py-3 text-lime hover:bg-lime hover:text-void transition-colors w-fit"
          >
            Start a project →
          </a>
        </div>
      </motion.div>

      <div className="relative z-20 pt-6 border-t border-paper/15 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 font-mono text-[10px] tracking-[0.15em] uppercase text-ash">
        <span>// 2026 — Charan / cmd-gi</span>
        <a href="#top" className="hover:text-lime transition-colors">Back to top ↑</a>
      </div>
    </section>

  );
}

export function Portfolio() {
  return (
    <main className="bg-void">
      <Hero />
      <Work />
      <Featured />
      <About />
      <Contact />
    </main>
  );
}
