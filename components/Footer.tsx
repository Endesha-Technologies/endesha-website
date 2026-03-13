"use client";

import AnimateOnScroll from "./ui/AnimateOnScroll";

const footerLinks = {
  Company: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Careers", href: "#" },
  ],
  Resources: [
    { label: "Blog", href: "#" },
    { label: "Case Studies", href: "#portfolio" },
    { label: "Documentation", href: "#" },
    { label: "FAQ", href: "#" },
  ],
};

const socials = [
  { label: "LinkedIn", path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M2 4a2 2 0 114 0 2 2 0 01-4 0z" },
  { label: "GitHub", path: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" },
  { label: "Twitter", path: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
];

export default function Footer() {
  return (
    <footer className="bg-bg-deep border-t border-white/5 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-1 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">E</span>
                </div>
                <span className="text-xl font-bold text-white">Endesha</span>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                Software engineering that ships. From prototype to
                production-grade scale.
              </p>
              {/* Social Icons */}
              <div className="flex gap-3 pt-2">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    aria-label={social.label}
                    className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 transition-colors"
                  >
                    <svg className="w-4 h-4 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={social.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-white font-semibold mb-4">{title}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-text-secondary text-sm hover:text-primary-light transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Connect Column */}
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:hello@endesha.com" className="text-text-secondary text-sm hover:text-primary-light transition-colors">
                    hello@endesha.com
                  </a>
                </li>
                <li className="text-text-secondary text-sm">
                  Nairobi, Kenya
                </li>
              </ul>
              <a
                href="#contact"
                className="inline-block mt-6 px-5 py-2 bg-primary/10 border border-primary/20 text-primary-light text-sm font-medium rounded-lg hover:bg-primary/20 transition-colors"
              >
                Start a Project
              </a>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm">
            &copy; 2026 Endesha Technologies. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-text-muted hover:text-text-secondary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-text-muted hover:text-text-secondary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
