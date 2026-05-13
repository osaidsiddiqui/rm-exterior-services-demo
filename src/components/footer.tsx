import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const SERVICES = [
  { label: "Pressure Washing", path: "/services/pressure-washing" },
  { label: "Soft Washing", path: "/services/soft-washing" },
  { label: "Roof Cleaning", path: "/services/roof-cleaning" },
  { label: "Gutter Cleaning", path: "/services/gutter-cleaning" },
  { label: "Window Cleaning", path: "/services/window-cleaning" },
];

const QUICK_LINKS = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Gallery", path: "/gallery" },
  { label: "Reviews", path: "/reviews" },
  { label: "Contact", path: "/contact" },
  { label: "Free Estimate", path: "/estimate" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#070e1a] border-t border-white/10">
      {/* CTA strip */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-white text-xl font-black tracking-tight">Ready to Restore Your Property?</h3>
            <p className="text-blue-200 text-sm mt-1">Professional exterior cleaning — Maryville, TN & surrounding areas.</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:8653330788"
              className="px-6 py-3 bg-white text-blue-700 font-black rounded-lg hover:bg-blue-50 transition-colors cursor-pointer text-sm"
            >
              Call 865-333-0788
            </a>
            <Link
              to="/estimate"
              className="px-6 py-3 bg-blue-800/60 border border-white/30 text-white font-bold rounded-lg hover:bg-blue-800 transition-colors cursor-pointer text-sm"
            >
              Free Estimate
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://hercules-cdn.com/file_4aLSiiGwxBEdMmjaCAa2sPEu"
                alt="RM Exterior Services"
                className="h-14 w-14 object-contain"
              />
              <div>
                <div className="text-white font-black text-base leading-tight">RM EXTERIOR</div>
                <div className="text-blue-400 text-xs font-semibold tracking-widest uppercase">Services</div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Professional exterior cleaning services delivering exceptional results throughout Maryville, Tennessee and surrounding areas.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.facebook.com/people/RM-Exterior-Services/61588734543357/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors cursor-pointer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/55 hover:text-blue-400 text-sm font-medium transition-colors cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-5">Our Services</h4>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.path}>
                  <Link
                    to={s.path}
                    className="text-white/55 hover:text-blue-400 text-sm font-medium transition-colors cursor-pointer"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-5">Contact Us</h4>
            <div className="space-y-4">
              <a href="tel:8653330788" className="flex items-start gap-3 group cursor-pointer">
                <div className="mt-0.5 w-7 h-7 bg-blue-600/20 rounded-md flex items-center justify-center shrink-0">
                  <Phone size={13} className="text-blue-400" />
                </div>
                <div>
                  <div className="text-white/40 text-xs uppercase tracking-wider">Phone</div>
                  <div className="text-white/80 text-sm font-medium group-hover:text-blue-400 transition-colors">865-333-0788</div>
                </div>
              </a>
              <a href="mailto:rmallexteriorservices@gmail.com" className="flex items-start gap-3 group cursor-pointer">
                <div className="mt-0.5 w-7 h-7 bg-blue-600/20 rounded-md flex items-center justify-center shrink-0">
                  <Mail size={13} className="text-blue-400" />
                </div>
                <div>
                  <div className="text-white/40 text-xs uppercase tracking-wider">Email</div>
                  <div className="text-white/80 text-xs font-medium group-hover:text-blue-400 transition-colors break-all">rmallexteriorservices@gmail.com</div>
                </div>
              </a>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 w-7 h-7 bg-blue-600/20 rounded-md flex items-center justify-center shrink-0">
                  <MapPin size={13} className="text-blue-400" />
                </div>
                <div>
                  <div className="text-white/40 text-xs uppercase tracking-wider">Address</div>
                  <div className="text-white/80 text-sm font-medium">502 East Lamar Alexander Pkwy<br />Maryville, TN</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            &copy; {year} RM Exterior Services. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="text-white/30 hover:text-white/60 text-xs transition-colors cursor-pointer">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white/30 hover:text-white/60 text-xs transition-colors cursor-pointer">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
