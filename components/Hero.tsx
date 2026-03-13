"use client";

import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] as const },
});

const headingContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.25 } },
};

const wordReveal = {
  hidden: { opacity: 0, y: 48, skewY: 4 },
  visible: {
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative px-6 pr-10 md:pr-16 min-h-screen flex items-center overflow-hidden bg-white"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 max-w-7xl mx-auto">
        <div className="absolute top-10 right-10 w-100 h-100 bg-gray-100 rounded-full blur-[100px] opacity-70 animate-pulse" />
        <div
          className="absolute bottom-10 left-10 w-100 h-100 bg-primary rounded-full blur-[100px] opacity-60 animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#EAB308 1px, transparent 1px), linear-gradient(90deg, #EAB308 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full py-12 md:py-20 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="text-left space-y-6">

            {/* Pre-headline badge */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-gray-900 text-xs font-bold px-4 py-1.5 rounded-full"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Trusted by 500+ teams worldwide
            </motion.div>

            {/* Animated heading */}
            <motion.h1
              variants={headingContainer}
              initial="hidden"
              animate="visible"
              className="font-extrabold text-gray-900 leading-tight py-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              <span className="block overflow-hidden">
                {"We Build Software That".split(" ").map((word) => (
                  <motion.span
                    key={word}
                    variants={wordReveal}
                    className="inline-block mr-[0.25em]"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
              <span className="block overflow-hidden relative">
                {"Launches & Scales.".split(" ").map((word) => (
                  <motion.span
                    key={word}
                    variants={wordReveal}
                    className="inline-block mr-[0.2em] text-primary tracking-tight"
                  >
                    {word}
                  </motion.span>
                ))}
                {/* Animated underline */}
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.7, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-1 left-0 h-0.75 w-full bg-primary/40 rounded-full"
                  style={{ transformOrigin: "left" }}
                />
              </span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.35)}
              className="text-gray-900 leading-relaxed max-w-lg font-medium"
              style={{ fontSize: "clamp(1rem, 1.5vw, 1.125rem)" }}
            >
              Endesha delivers full-stack web apps, mobile products, and AI
              integrations for companies moving fast. Professional, reliable,
              and beautifully designed.
            </motion.p>

            <motion.div
              {...fadeUp(0.5)}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <a
                href="#contact"
                className="group bg-primary text-gray-900 px-7 py-3 rounded-lg hover:bg-yellow-400 hover:text-gray-900 hover:-translate-y-0.5 transform transition-all duration-300 font-bold text-center text-sm"
              >
                Book a Discovery Call
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </a>
              <a
                href="#portfolio"
                className="group bg-white text-gray-900 px-7 py-3 rounded-lg hover:bg-gray-50 transition-all duration-300 font-semibold border border-gray-200 hover:border-gray-300 shadow-sm text-center text-sm"
              >
                See Our Work
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </a>
            </motion.div>

            {/* Divider */}
            <div className="pt-6 pb-2">
              <div className="w-full h-px bg-gray-200 max-w-lg" />
            </div>

            {/* Stats */}
            <motion.div
              {...fadeUp(0.65)}
              className="flex items-center gap-8 flex-wrap pt-2"
            >
              {[
                { value: "500+", label: "Products Shipped" },
                { value: "98%", label: "Client Retention" },
                { value: "8 Wks", label: "Avg MVP Delivery" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-extrabold text-gray-900 text-2xl">
                    {stat.value}
                  </div>
                  <div className="text-gray-900 mt-0.5 font-semibold text-xs uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Dashboard Mockup (Reduced Size) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] as const }}
            className="relative hidden lg:flex lg:items-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              <div className="bg-white rounded-2xl p-2 border border-gray-100 shadow-2xl ">
                {/* Browser Chrome */}
                <div className="flex items-center gap-2 mb-2 px-3 py-2 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 bg-white border border-gray-200 rounded px-2 py-0.5 text-[10px] text-gray-900 text-center font-medium">
                    app.endesha.com
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="w-full bg-white rounded-lg overflow-hidden border border-gray-50">
                  <div className="bg-primary/10 p-4 border-b border-primary/20">
                    <h3 className="text-sm font-bold text-gray-900 mb-0.5">Analytics Dashboard</h3>
                    <p className="text-[10px] text-gray-900 font-medium">Real-time performance metrics</p>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                        <div className="text-base font-bold text-gray-900">12.5K</div>
                        <div className="text-[9px] text-gray-900 uppercase font-semibold tracking-wide mt-1">Users</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-yellow-100 outline-1 outline-gray-200">
                        <div className="text-base font-bold text-gray-900">$2.5M</div>
                        <div className="text-[9px] text-gray-900 uppercase font-semibold tracking-wide mt-1">Revenue</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                        <div className="text-base font-bold text-gray-900">98%</div>
                        <div className="text-[9px] text-gray-900 uppercase font-semibold tracking-wide mt-1">Uptime</div>
                      </div>
                    </div>
                    <div className="bg-white border border-gray-100 p-3 rounded-lg shadow-sm">
                      <div className="flex justify-between mb-1.5">
                        <span className="text-[10px] font-semibold text-gray-900 uppercase">Performance</span>
                        <span className="text-[10px] font-bold text-primary">85%</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-1.5">
                        <div className="bg-primary h-1.5 rounded-full" style={{ width: "85%" }} />
                      </div>
                    </div>
                    <div className="bg-white border border-gray-100 p-3 rounded-lg shadow-sm">
                      <div className="flex justify-between mb-1.5">
                        <span className="text-[10px] font-semibold text-gray-900 uppercase">Server Response</span>
                        <span className="text-[10px] font-bold text-green-500">Fast</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-1.5">
                        <div className="bg-green-500 h-1.5 rounded-full" style={{ width: "92%" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Status Card */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-3 border-2 border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <div>
                    <div className="text-gray-900 font-bold text-[11px]">System Status</div>
                    <div className="text-gray-900 font-medium text-[9px]">All systems operational</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
