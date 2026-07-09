import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Plus, Minus, ArrowRight, Instagram, Facebook, MapPin, Clock, Phone } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- SECTION 9: FAQ ---
const faqs = [
  { question: "Do you offer gluten-free or vegan options?", answer: "Yes, we have a curated selection of gluten-free and vegan desserts prepared with the same dedication to flavor and premium ingredients." },
  { question: "How far in advance should I order for a special event?", answer: "For custom cakes and large event orders, we recommend reaching out at least 2 weeks in advance to ensure availability." },
  { question: "Can I customize the sweetness level?", answer: "Our recipes are carefully balanced by our master chefs for optimal flavor. However, we can accommodate minor adjustments for custom whole cake orders." },
  { question: "Do you offer delivery?", answer: "Yes, we offer white-glove temperature-controlled delivery within a 20-mile radius of our boutique." },
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-32 px-6 sm:px-12 lg:px-24 bg-cream">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-strawberry-600 font-medium tracking-[0.2em] uppercase text-sm mb-4 block">Inquiries</span>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-900">Common Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={cn(
                  "bg-white rounded-[24px] border border-stone-200 overflow-hidden transition-all duration-300",
                  isOpen ? "shadow-md" : "shadow-sm hover:shadow-md"
                )}
              >
                <button 
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                >
                  <span className="text-lg font-medium text-stone-900">{faq.question}</span>
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                    isOpen ? "bg-strawberry-50 text-strawberry-600" : "bg-stone-50 text-stone-400"
                  )}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-6 text-stone-500 font-light leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// --- SECTION 10: Newsletter ---
export function Newsletter() {
  return (
    <section className="py-24 px-6 sm:px-12 lg:px-24 bg-cream relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blush/40 via-white to-cream rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden shadow-xl border border-white"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-strawberry-400/20 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blush/40 rounded-full blur-[80px]" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">Stay Sweet With Us</h2>
            <p className="text-stone-500 text-lg mb-10 font-light">Join our exclusive club for seasonal menu updates, secret recipes, and special invitations to tasting events.</p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 bg-white/80 backdrop-blur-sm border border-stone-200 rounded-full px-6 py-4 outline-none focus:border-strawberry-400 focus:ring-2 focus:ring-strawberry-400/20 transition-all font-light"
                required
              />
              <button 
                type="submit"
                className="bg-stone-900 text-white px-8 py-4 rounded-full font-medium hover:bg-strawberry-600 transition-colors flex items-center justify-center gap-2"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// --- SECTION 11: Footer ---
export function Footer() {
  return (
    <footer className="bg-stone-950 pt-32 pb-12 px-6 sm:px-12 lg:px-24 text-stone-400 border-t border-white/10 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-strawberry-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
        <div>
          <h3 className="text-2xl font-serif text-white mb-6 italic">The Art of Sweetness</h3>
          <p className="font-light text-stone-500 leading-relaxed mb-8">Elevating the dessert experience through passion, precision, and the finest ingredients nature has to offer.</p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-strawberry-600 hover:border-strawberry-600 hover:text-white transition-all">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-strawberry-600 hover:border-strawberry-600 hover:text-white transition-all">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-sm">Navigation</h4>
          <ul className="space-y-4 font-light">
            <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Menu</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Catering & Events</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Gift Cards</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-sm">Visit Us</h4>
          <ul className="space-y-4 font-light">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-strawberry-400 shrink-0" />
              <span>124 Premium Avenue<br/>Culinary District, NY 10001</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-strawberry-400 shrink-0" />
              <span>+1 (555) 123-4567</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-sm">Hours</h4>
          <ul className="space-y-4 font-light">
            <li className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-strawberry-400 shrink-0" />
              <div>
                <p className="text-white">Mon - Fri</p>
                <p>8:00 AM - 8:00 PM</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-transparent shrink-0" />
              <div>
                <p className="text-white">Sat - Sun</p>
                <p>9:00 AM - 10:00 PM</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-light">
        <p>&copy; 2024 The Art of Sweetness. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
