import { ReactNode } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  number: string;
  delay?: number;
  featured?: boolean;
}

export default function ServiceCard({
  title,
  description,
  icon,
  number,
  delay = 0,
  featured = false,
}: ServiceCardProps) {
  if (featured) {
    return (
      <AnimateOnScroll delay={delay}>
        <div className="group relative bg-gray-900 rounded-2xl p-8 md:p-10 overflow-hidden hover:-translate-y-1 transition-all duration-300 h-full">
          {/* Big background number */}
          <span className="absolute -top-4 -right-2 text-[9rem] font-extrabold text-white/5 leading-none select-none pointer-events-none">
            {number}
          </span>
          {/* Yellow accent bar */}
          <div className="w-10 h-1 bg-primary rounded-full mb-8" />
          <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
            <span className="text-primary group-hover:text-gray-900 transition-colors duration-300">{icon}</span>
          </div>
          <h3 className="text-xl font-extrabold text-white mb-3 leading-snug">{title}</h3>
          <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
          <div className="mt-8 flex items-center gap-2 text-primary text-sm font-semibold">
            <span>Explore service</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </AnimateOnScroll>
    );
  }

  return (
    <AnimateOnScroll delay={delay}>
      <div className="group relative bg-white border border-gray-100 rounded-2xl p-7 overflow-hidden hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 h-full">
        {/* Big background number */}
        <span className="absolute -top-4 -right-2 text-[7rem] font-extrabold text-gray-100 leading-none select-none pointer-events-none group-hover:text-primary/10 transition-colors duration-300">
          {number}
        </span>
        {/* Yellow accent bar */}
        <div className="w-6 h-0.5 bg-primary rounded-full mb-6 group-hover:w-10 transition-all duration-300" />
        <div className="w-11 h-11 bg-gray-50 rounded-xl flex items-center justify-center mb-5 border border-gray-100 group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
          <span className="text-gray-500 group-hover:text-gray-900 transition-colors duration-300">{icon}</span>
        </div>
        <h3 className="text-base font-extrabold text-gray-900 mb-2 leading-snug">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
        <div className="mt-6 flex items-center gap-1.5 text-primary text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span>Learn more</span>
          <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </AnimateOnScroll>
  );
}
