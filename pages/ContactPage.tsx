import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import ContactForm from '../components/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Contact Us</h1>
          <p className="text-lg text-slate-600">
            Have a question or need a custom solution? Our expert team is ready to help you navigate your IT challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Info Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-800 mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-2.5 rounded-lg text-orange-600 shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Visit Us</h4>
                    <p className="text-slate-600 text-sm mt-1">
                      123 Tech Park Blvd<br />
                      Innovation District, CA 94025
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2.5 rounded-lg text-blue-900 shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Email Us</h4>
                    <p className="text-slate-600 text-sm mt-1">hello@n2itsolutions.com</p>
                    <p className="text-slate-600 text-sm">support@n2itsolutions.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-2.5 rounded-lg text-green-700 shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Call Us</h4>
                    <p className="text-slate-600 text-sm mt-1">+1 (555) 123-4567</p>
                    <p className="text-slate-400 text-xs mt-1">Mon-Fri from 8am to 5pm</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-900 text-white p-8 rounded-xl shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="text-orange-500" />
                <h3 className="text-lg font-bold">Business Hours</h3>
              </div>
              <ul className="space-y-2 text-blue-100 text-sm">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>08:00 - 17:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span>09:00 - 13:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;