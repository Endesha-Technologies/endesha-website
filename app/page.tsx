"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "portfolio", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      {/* Enhanced Navbar */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo + Company Name */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">E</span>
            </div>
            <span className="text-2xl font-bold text-[#1E40AF]">Endesha Technologies</span>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="#home" 
              onClick={() => setActiveSection("home")}
              className={`relative hover:text-[#3B82F6] transition-colors font-medium ${
                activeSection === "home" ? "text-[#3B82F6]" : "text-gray-700"
              }`}
            >
              Home
              {activeSection === "home" && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#3B82F6]"></span>
              )}
            </a>
            <a 
              href="#about" 
              onClick={() => setActiveSection("about")}
              className={`relative hover:text-[#3B82F6] transition-colors font-medium ${
                activeSection === "about" ? "text-[#3B82F6]" : "text-gray-700"
              }`}
            >
              About
              {activeSection === "about" && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#3B82F6]"></span>
              )}
            </a>
            <a 
              href="#services" 
              onClick={() => setActiveSection("services")}
              className={`relative hover:text-[#3B82F6] transition-colors font-medium ${
                activeSection === "services" ? "text-[#3B82F6]" : "text-gray-700"
              }`}
            >
              Services
              {activeSection === "services" && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#3B82F6]"></span>
              )}
            </a>
            <a 
              href="#portfolio" 
              onClick={() => setActiveSection("portfolio")}
              className={`relative hover:text-[#3B82F6] transition-colors font-medium ${
                activeSection === "portfolio" ? "text-[#3B82F6]" : "text-gray-700"
              }`}
            >
              Portfolio
              {activeSection === "portfolio" && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#3B82F6]"></span>
              )}
            </a>
            <a href="#contact" className="bg-[#3B82F6] text-white px-6 py-2.5 rounded-lg hover:bg-[#1E40AF] transition-colors font-semibold shadow-md hover:shadow-lg">
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Refined */}
      <section id="home" className="relative pt-40 pb-32 px-6 min-h-screen flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-purple-50">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#3B82F6]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8B5CF6]/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(#3B82F6 1px, transparent 1px), linear-gradient(90deg, #3B82F6 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Side - Content */}
            <div className="text-left space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0F172A] leading-tight">
                We Build Software That Launches, Scales, and Lasts.
              </h1>
              
              <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed max-w-xl" style={{lineHeight: '1.6'}}>
                Endesha delivers full-stack web apps, mobile products, and AI integrations for startups and growing companies — from first prototype to production-grade scale.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 pt-4">
                <a href="#contact" className="group bg-[#0F172A] text-white px-10 py-5 rounded-xl hover:bg-black transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transform text-center">
                  Book a Discovery Call
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <a href="#portfolio" className="group bg-white text-[#0F172A] px-10 py-5 rounded-xl hover:bg-gray-50 transition-all duration-300 font-semibold text-lg border-2 border-[#0F172A] hover:border-black hover:shadow-lg text-center">
                  See Our Work
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
              
              {/* Technology Logos */}
              <div className="flex items-center gap-10 pt-6 opacity-50 grayscale">
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.763 10.036c.41 0 .763-.334.763-.745 0-.41-.353-.744-.763-.744-.41 0-.744.334-.744.744 0 .41.334.745.744.745zm2.644 0c.41 0 .763-.334.763-.745 0-.41-.353-.744-.763-.744-.41 0-.744.334-.744.744 0 .41.334.745.744.745zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.94 14.886c-1.473 2.122-4.194 2.664-6.07 2.664-1.876 0-4.597-.542-6.07-2.664-.147-.212-.106-.506.106-.653.212-.147.506-.106.653.106 1.285 1.848 3.662 2.33 5.311 2.33 1.649 0 4.026-.482 5.311-2.33.147-.212.441-.253.653-.106.212.147.253.441.106.653z"/>
                </svg>
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
                </svg>
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.314 0L2.3 6 6 8.3l8.314-4.3 8.314 4.3L19.7 10.3l-5.4-2.8-8.314 4.3v8.6l5.4 2.8 5.4-2.8v-8.6l-2.7-1.4v5.6l-2.7 1.4-2.7-1.4V9.7l8.314-4.3L21.7 8.3v8.6l-8.314 4.3L5.086 17v-8.6L0 6l12.014-6L24 6v12l-12.014 6L0 18V6l14.314-6z"/>
                </svg>
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A11.198 11.198 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A11.177 11.177 0 0 0 13.26 24a11.083 11.083 0 0 0 5.282-1.245 5.979 5.979 0 0 0 3.997-2.9 6.039 6.039 0 0 0-.747-7.097zm-10.99 4.711c-3.139 0-5.694-2.555-5.694-5.694 0-3.138 2.555-5.694 5.694-5.694 3.139 0 5.694 2.556 5.694 5.694 0 3.139-2.555 5.694-5.694 5.694z"/>
                </svg>
              </div>
              
              {/* Stats */}
              <div className="flex items-center gap-10 flex-wrap pt-8">
                <div>
                  <div className="text-4xl font-bold text-[#1E40AF]">500+</div>
                  <div className="text-base text-gray-700 mt-1 font-medium">Products Shipped</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#1E40AF]">98%</div>
                  <div className="text-base text-gray-700 mt-1 font-medium">Client Retention</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#1E40AF]">8 Weeks</div>
                  <div className="text-base text-gray-700 mt-1 font-medium">Average MVP Delivery</div>
                </div>
              </div>
              
              {/* Testimonial */}
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border-l-4 border-[#3B82F6] shadow-sm">
                <p className="text-lg text-gray-700 italic mb-4 leading-relaxed">
                  "Our platform went from zero to 40,000 users in three months and the infrastructure never flinched."
                </p>
                <div className="text-base">
                  <span className="font-bold text-[#0F172A]">Sarah K.</span>
                  <span className="text-gray-700 font-semibold">, CTO, Launchpad Inc.</span>
                </div>
              </div>
              
              {/* Bottom Text */}
              <p className="text-base text-gray-700 pt-6 text-center font-medium">
                Fixed-price contracts. Senior engineers on every project. No handoffs to juniors.
              </p>
            </div>

            {/* Right Side - Product Screenshot */}
            <div className="relative hidden md:block">
              <div className="relative w-full h-[600px]">
                {/* Device Frame */}
                <div className="absolute inset-0 bg-gray-900 rounded-3xl shadow-2xl p-3 border-8 border-gray-800">
                  {/* Browser Chrome */}
                  <div className="flex items-center gap-2 mb-2 px-3 py-2 bg-gray-800 rounded-t-xl">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex-1 bg-gray-700 rounded px-3 py-1 text-xs text-gray-400">
                      https://app.endesha.com
                    </div>
                  </div>
                  
                  {/* Real Dashboard Screenshot Mockup */}
                  <div className="w-full h-full bg-white rounded-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">Analytics Dashboard</h3>
                      <p className="text-blue-100">Real-time performance metrics</p>
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-[#1E40AF]">12.5K</div>
                          <div className="text-sm text-gray-600">Active Users</div>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-[#8B5CF6]">$2.5M</div>
                          <div className="text-sm text-gray-600">Revenue</div>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-green-600">98%</div>
                          <div className="text-sm text-gray-600">Uptime</div>
                        </div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-semibold">Performance</span>
                          <span className="text-sm text-[#3B82F6]">85%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] h-3 rounded-full" style={{width: '85%'}}></div>
                        </div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-semibold">API Response Time</span>
                          <span className="text-sm text-green-600">Fast</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div className="bg-green-500 h-3 rounded-full" style={{width: '92%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#1E40AF]">About Us</h2>
          <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto">Endesha Technologies delivers innovative solutions for digital transformation.</p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#1E40AF]">Services</h2>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#1E40AF]">Portfolio</h2>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#1E40AF]">Contact</h2>
          <form className="bg-white p-8 rounded-lg shadow-lg space-y-6">
            <input type="text" placeholder="Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
            <input type="email" placeholder="Email" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
            <textarea placeholder="Message" rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg"></textarea>
            <button type="submit" className="w-full bg-[#3B82F6] text-white py-4 rounded-lg hover:bg-[#1E40AF]">Send</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1E40AF] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Endesha Technologies</h3>
          <p className="text-blue-200">© 2026 All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
