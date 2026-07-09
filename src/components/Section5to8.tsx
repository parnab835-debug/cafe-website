import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { ZoomIn, Quote } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- SECTION 5: Gallery ---
const galleryImages = [
  "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515037893149-de7f840978e2?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1559620192-032c4bc4674e?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1509365465994-3e81bc340073?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1614083017255-b77ce4d15682?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1514845512214-3677b10a2731?q=80&w=600&auto=format&fit=crop",
];

export function Gallery() {
  return (
    <section className="py-32 px-6 sm:px-12 lg:px-24 bg-cream-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-strawberry-600 font-medium tracking-[0.2em] uppercase text-sm mb-4 block">Visuals</span>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">A Feast For The Eyes</h2>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryImages.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (idx % 4) * 0.1 }}
              className="relative group overflow-hidden rounded-[20px] break-inside-avoid bg-stone-200"
            >
              <img 
                src={src} 
                alt={`Gallery image ${idx + 1}`} 
                loading="lazy"
                className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-[2px]"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <button className="bg-white/90 backdrop-blur-sm p-4 rounded-full text-stone-900 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                  <ZoomIn className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- SECTION 6: Customer Reviews ---
const reviews = [
  { name: "Eleanor Vance", text: "The most exquisite cheesecake I have ever tasted. The presentation is simply immaculate.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" },
  { name: "Julian Thorne", text: "A truly premium experience from the moment the box is opened. Flawless execution.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop" },
  { name: "Sophia Laurent", text: "Their tiramisu transported me back to Venice. The balance of sweetness is absolute perfection.", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop" },
  { name: "Marcus Chen", text: "Incredible attention to detail. The macarons melt in your mouth and look like little jewels.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop" },
];

export function Reviews() {
  return (
    <section className="py-32 bg-stone-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-strawberry-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blush/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        <div className="text-center mb-20 relative z-10">
          <span className="text-strawberry-400 font-medium tracking-[0.2em] uppercase text-sm mb-4 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white">What Our Guests Say</h2>
        </div>

        <div className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory hide-scrollbar relative z-10">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="min-w-[320px] md:min-w-[400px] snap-center bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[28px]"
            >
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 h-4 text-strawberry-400 fill-strawberry-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/80 font-light text-lg mb-8 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <img src={review.img} alt={review.name} className="w-12 h-12 rounded-full object-cover border border-white/20" />
                <span className="text-white font-medium">{review.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
}

// --- SECTION 7: Statistics ---
function Counter({ value, suffix = "", text }: { value: number, suffix?: string, text: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const stepTime = Math.abs(Math.floor(duration / value));
      const timer = setInterval(() => {
        start += Math.ceil(value / 50);
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-6xl font-serif text-stone-900 mb-2">
        {count}{suffix}
      </div>
      <div className="text-stone-500 font-medium tracking-wide uppercase text-sm">{text}</div>
    </div>
  );
}

export function Stats() {
  return (
    <section className="py-24 bg-cream border-y border-stone-200/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          <Counter value={10} suffix="K+" text="Happy Customers" />
          <Counter value={500} suffix="+" text="Orders Daily" />
          <Counter value={30} suffix="+" text="Signature Desserts" />
          <Counter value={4} suffix=".9★" text="Average Rating" />
        </div>
      </div>
    </section>
  );
}

// --- SECTION 8: Instagram Feed ---
const instaImages = [
  "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=300&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=300&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1612203985729-70726954388c?q=80&w=300&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1514056052883-d017fddd0426?q=80&w=300&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=300&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?q=80&w=300&auto=format&fit=crop",
];

export function InstaFeed() {
  // Duplicate array for infinite scroll
  const duplicatedImages = [...instaImages, ...instaImages];

  return (
    <section className="py-32 bg-cream-100 overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-4">Follow Our Sweet Journey</h2>
        <a href="#" className="text-strawberry-600 hover:text-strawberry-500 font-medium transition-colors">@TheArtOfSweetness</a>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee flex gap-6 whitespace-nowrap group-hover:[animation-play-state:paused]">
          {duplicatedImages.map((src, idx) => (
            <div key={idx} className="w-64 h-64 flex-shrink-0 rounded-[20px] overflow-hidden relative">
              <img src={src} alt="Instagram post" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
              <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
        <div className="animate-marquee flex gap-6 whitespace-nowrap ml-6 group-hover:[animation-play-state:paused] absolute top-0">
          {duplicatedImages.map((src, idx) => (
            <div key={`dup-${idx}`} className="w-64 h-64 flex-shrink-0 rounded-[20px] overflow-hidden relative">
              <img src={src} alt="Instagram post" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
              <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}} />
    </section>
  );
}
