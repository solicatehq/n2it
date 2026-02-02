import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
             <div className="flex items-center gap-2 mb-4">
                <div className="bg-white text-blue-900 p-1.5 rounded-lg">
                  <Monitor size={24} />
                </div>
                <span className="text-xl font-bold text-white tracking-tight">N2IT SOLUTIONS</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Empowering businesses with cutting-edge technology solutions. We simplify IT so you can focus on growth.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-orange-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-orange-500 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-orange-500 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-orange-500 transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-orange-500 transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-orange-500 transition-colors">Managed Services</Link></li>
              <li><Link to="/solutions" className="hover:text-orange-500 transition-colors">Cloud Solutions</Link></li>
              <li><Link to="/about" className="hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-orange-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Resources & Legal */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Knowledge Base</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Acceptable Use Policy</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-orange-500 mt-0.5" />
                <span>123 Tech Park Blvd, Innovation District, CA 94025</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-orange-500" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-orange-500" />
                <span>hello@n2itsolutions.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 mt-8 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} N2IT Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;