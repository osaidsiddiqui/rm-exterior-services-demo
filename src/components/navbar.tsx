import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  {
    label: "Services",
    path: "/services",
    children: [
      { label: "Pressure Washing", path: "/services/pressure-washing" },
      { label: "Soft Washing", path: "/services/soft-washing" },
      { label: "Roof Cleaning", path: "/services/roof-cleaning" },
      { label: "Gutter Cleaning", path: "/services/gutter-cleaning" },
      { label: "Window Cleaning", path: "/services/window-cleaning" },
    ],
  },
  { label: "Gallery", path: "/gallery" },
  { label: "Reviews", path: "/reviews" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:flex bg-[#0a1628] border-b border-white/10 px-6 py-2 items-center justify-between text-sm text-white/70">
        <span className="font-medium tracking-wide">Exterior Cleaning Specialists — Maryville, Tennessee</span>
        <a href="tel:8653330788" className="flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition-colors cursor-pointer">
          <Phone size={14} />
          865-333-0788
        </a>
      </div>

      {/* Main nav */}
      <motion.nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a1628]/95 backdrop-blur-xl shadow-2xl shadow-black/40 border-b border-white/10"
            : "bg-[#0a1628]/80 backdrop-blur-md border-b border-white/5"
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer">
            <img
              src="https://hercules-cdn.com/file_4aLSiiGwxBEdMmjaCAa2sPEu"
              alt="RM Exterior Services"
              className="h-12 w-12 object-contain"
            />
            <div className="hidden sm:block">
              <div className="text-white font-black text-lg leading-tight tracking-tight">RM EXTERIOR</div>
              <div className="text-blue-400 text-xs font-semibold tracking-[0.2em] uppercase">Services</div>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div key={link.label} className="relative group">
                  <button
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold rounded-md transition-all duration-200 cursor-pointer ${
                      location.pathname.startsWith("/services")
                        ? "text-blue-400"
                        : "text-white/80 hover:text-white"
                    }`}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    {link.label}
                    <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                    {location.pathname.startsWith("/services") && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-3 right-3 h-0.5 bg-blue-400 rounded-full"
                      />
                    )}
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-52 bg-[#0f1f3d]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden"
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className={`block px-4 py-3 text-sm font-medium transition-all hover:bg-blue-600/20 hover:text-blue-300 cursor-pointer ${
                              location.pathname === child.path ? "text-blue-400 bg-blue-600/10" : "text-white/75"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-semibold rounded-md transition-all duration-200 cursor-pointer ${
                    location.pathname === link.path
                      ? "text-blue-400"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-blue-400 rounded-full"
                    />
                  )}
                </Link>
              )
            )}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:8653330788"
              className="flex items-center gap-2 text-sm text-white/80 hover:text-white font-medium transition-colors cursor-pointer"
            >
              <Phone size={15} />
              <span>865-333-0788</span>
            </a>
            <Link
              to="/estimate"
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-lg transition-all duration-200 shadow-lg shadow-blue-900/30 hover:shadow-blue-800/50 cursor-pointer"
            >
              Free Estimate
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white p-2 cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden overflow-hidden bg-[#0a1628]/98 backdrop-blur-xl border-t border-white/10"
            >
              <div className="px-4 py-4 space-y-1">
                {NAV_LINKS.map((link) =>
                  link.children ? (
                    <div key={link.label}>
                      <button
                        className="w-full flex items-center justify-between px-3 py-3 text-sm font-semibold text-white/80 cursor-pointer"
                        onClick={() => setServicesOpen(!servicesOpen)}
                      >
                        {link.label}
                        <ChevronDown size={14} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                      </button>
                      {servicesOpen && (
                        <div className="pl-4 space-y-1">
                          {link.children.map((child) => (
                            <Link
                              key={child.path}
                              to={child.path}
                              className="block px-3 py-2.5 text-sm text-white/70 hover:text-blue-400 font-medium cursor-pointer"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`block px-3 py-3 text-sm font-semibold rounded-lg cursor-pointer ${
                        location.pathname === link.path
                          ? "text-blue-400 bg-blue-600/10"
                          : "text-white/80 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )
                )}
                <div className="pt-3 border-t border-white/10 space-y-2">
                  <a
                    href="tel:8653330788"
                    className="flex items-center gap-2 px-3 py-3 text-sm text-blue-400 font-semibold cursor-pointer"
                  >
                    <Phone size={15} />
                    865-333-0788
                  </a>
                  <Link
                    to="/estimate"
                    className="block w-full text-center px-5 py-3 bg-blue-600 text-white text-sm font-bold rounded-lg cursor-pointer"
                  >
                    Get Free Estimate
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile sticky call button */}
      <a
        href="tel:8653330788"
        className="lg:hidden fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-blue-600 text-white text-sm font-bold px-4 py-3 rounded-full shadow-2xl shadow-blue-900/50 cursor-pointer"
      >
        <Phone size={16} />
        Call Now
      </a>
    </>
  );
}
