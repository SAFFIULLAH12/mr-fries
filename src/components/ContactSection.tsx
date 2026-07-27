import React, { useState } from 'react';
import { Phone, Mail, MessageSquare, MapPin, Send, CheckCircle2, Clock, Instagram } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', message: '' });
    }, 4000);
  };

  const whatsappNumber = '+923212158262';
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(
    'Hello Mr. Fries D.I. Khan! I would like to place an order or ask a question.'
  )}`;

  return (
    <section id="contact" className="py-20 relative bg-black z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
                <Phone className="w-4 h-4 text-orange-500" />
                <span>Contact Mr. Fries D.I. Khan</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
                We'd Love To <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">Serve You</span>
              </h2>

              <p className="text-gray-400 text-sm sm:text-base font-light mb-8">
                Want to order our famous 1-Meter Pizza, Loaded Fries, or Zinger Burgers? Call us directly or send us a WhatsApp message!
              </p>

              {/* Direct Quick Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 mb-8">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-green-600 hover:bg-green-500 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-xl shadow-green-600/30 transition-transform hover:scale-105 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-white text-green-600" />
                  <span>WhatsApp Order</span>
                </a>

                <a
                  href="https://www.instagram.com/mr_fries_mr_fries"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-90 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-xl shadow-pink-600/30 transition-transform hover:scale-105 cursor-pointer"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>

                <a
                  href="https://www.tiktok.com/@mr.fries65"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-black hover:bg-gray-900 border border-white/20 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-xl shadow-cyan-500/20 transition-transform hover:scale-105 cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current text-cyan-400" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.34 22a6.33 6.33 0 0 0 6.33-6.33V9.05a8.16 8.16 0 0 0 4.67 1.47V7.07a4.85 4.85 0 0 1-.75-.38z"/>
                  </svg>
                  <span>TikTok @mr.fries65</span>
                </a>

                <a
                  href="tel:03212158262"
                  className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-extrabold text-xs flex items-center justify-center gap-2 border border-white/15 transition-transform hover:scale-105 cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-orange-400" />
                  <span>Call Us</span>
                </a>
              </div>

              {/* Details List */}
              <div className="space-y-4 text-xs text-gray-300">
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-gray-950 border border-white/5">
                  <MapPin className="w-5 h-5 text-red-500 shrink-0" />
                  <span>RWM5+VR6, North Circular Road, Dera Ismail Khan, 29111, Pakistan</span>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-gray-950 border border-white/5">
                  <Instagram className="w-5 h-5 text-pink-500 shrink-0" />
                  <a
                    href="https://www.instagram.com/mr_fries_mr_fries"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-pink-400 transition-colors font-semibold"
                  >
                    Instagram: instagram.com/mr_fries_mr_fries
                  </a>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-gray-950 border border-white/5">
                  <svg className="w-5 h-5 fill-current text-cyan-400 shrink-0" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.34 22a6.33 6.33 0 0 0 6.33-6.33V9.05a8.16 8.16 0 0 0 4.67 1.47V7.07a4.85 4.85 0 0 1-.75-.38z"/>
                  </svg>
                  <a
                    href="https://www.tiktok.com/@mr.fries65"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-cyan-400 transition-colors font-semibold"
                  >
                    TikTok: tiktok.com/@mr.fries65
                  </a>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-gray-950 border border-white/5">
                  <Phone className="w-5 h-5 text-orange-500 shrink-0" />
                  <span>Phone / WhatsApp: 03212158262</span>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-gray-950 border border-white/5">
                  <Mail className="w-5 h-5 text-amber-500 shrink-0" />
                  <a href="mailto:afnaank55@gmail.com" className="hover:text-amber-400 transition-colors font-medium">
                    afnaank55@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-gray-950 border border-white/5">
                  <Clock className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>Open Daily • Family Friendly Dining & Takeaway</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 bg-gradient-to-b from-gray-900 to-black p-8 rounded-3xl border border-white/10 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 flex flex-col items-center justify-center">
                <CheckCircle2 className="w-16 h-16 text-green-500 mb-4 animate-bounce" />
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                <p className="text-gray-400 text-xs">Our customer support manager will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-extrabold text-white mb-4">Send Us A Message</h3>

                <div>
                  <label className="text-xs font-bold text-gray-300 block mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-black border border-white/10 rounded-2xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-300 block mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +1 555-019-2834"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-black border border-white/10 rounded-2xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-300 block mb-1">Your Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Type your inquiry, feedback, or catering requirement..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-black border border-white/10 rounded-2xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-red-600 via-orange-600 to-amber-500 text-white font-extrabold text-xs sm:text-sm hover:scale-[1.02] active:scale-95 transition-transform shadow-xl shadow-red-600/30 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
