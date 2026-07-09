import { motion, useScroll, useTransform } from 'motion/react';
import { Star, ArrowRight, Leaf, Heart, Award, Clock } from 'lucide-react';
import { useRef } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- SECTION 1: Signature Desserts ---
const desserts = [
  { name: 'Strawberry Dream', desc: 'Classic vanilla bean cheesecake with fresh strawberry glaze', price: '$12', rating: '4.9', img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1065&auto=format&fit=crop' },
  { name: 'Pistachio Rose Macaron', desc: 'Delicate almond shells filled with Iranian pistachio ganache', price: '$8', rating: '4.8', img: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?q=80&w=1170&auto=format&fit=crop' },
  { name: 'Venetian Tiramisu', desc: 'Espresso soaked ladyfingers with rich mascarpone cream', price: '$14', rating: '5.0', img: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=1087&auto=format&fit=crop' },
  { name: 'Summer Fruit Tart', desc: 'Butter pastry crust filled with crème pâtissière and berries', price: '$11', rating: '4.7', img: 'https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=1166&auto=format&fit=crop' },
  { name: 'Belgian Chocolate Mousse', desc: 'Dark 70% cacao mousse with gold leaf garnish', price: '$15', rating: '4.9', img: 'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?q=80&w=1080&auto=format&fit=crop' },
  { name: 'Lemon Meringue Bliss', desc: 'Tart lemon curd topped with toasted marshmallow meringue', price: '$10', rating: '4.8', img: 'https://images.unsplash.com/photo-1514845512214-3677b10a2731?q=80&w=1170&auto=format&fit=crop' },
];

export function SignatureDesserts() {
  return (
    <section className="py-32 px-6 sm:px-12 lg:px-24 bg-cream">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <span className="text-strawberry-600 font-medium tracking-[0.2em] uppercase text-sm mb-4 block">Our Pride</span>
          <h2 className="text-4xl md:text-6xl font-serif text-stone-900 mb-6">Our Signature Collection</h2>
          <div className="w-16 h-0.5 bg-strawberry-400 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {desserts.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
              whileHover="hover"
              className="group relative bg-white rounded-[28px] p-4 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(232,74,95,0.15)] transition-shadow duration-500"
            >
              <div className="relative h-72 rounded-[20px] overflow-hidden mb-6 bg-stone-100">
                <motion.img 
                  src={item.img} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                  variants={{
                    hover: { scale: 1.05, y: -5 }
                  }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                />
                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <Star className="w-3.5 h-3.5 text-strawberry-500 fill-strawberry-500" />
                  <span className="text-xs font-medium text-stone-800">{item.rating}</span>
                </div>
              </div>
              <div className="px-4 pb-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-serif text-stone-900 group-hover:text-strawberry-600 transition-colors duration-300">{item.name}</h3>
                  <span className="text-lg font-medium text-stone-900">{item.price}</span>
                </div>
                <p className="text-stone-500 text-sm font-light mb-6 line-clamp-2">{item.desc}</p>
                <motion.button 
                  variants={{
                    hover: { y: -3 }
                  }}
                  className="w-full py-3.5 rounded-full border border-stone-200 text-stone-800 font-medium text-sm flex justify-center items-center gap-2 group-hover:bg-strawberry-600 group-hover:border-strawberry-600 group-hover:text-white transition-all duration-300"
                >
                  Order Now
                  <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                </motion.button>
              </div>
              <div className="absolute inset-0 bg-strawberry-400/5 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- SECTION 2: Why Choose Us ---
export function WhyChooseUs() {
  return (
    <section className="py-32 px-6 sm:px-12 lg:px-24 bg-cream-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-strawberry-600 font-medium tracking-[0.2em] uppercase text-sm mb-4 block">Excellence</span>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-900">Why Choose Us</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="md:col-span-2 row-span-1 rounded-[28px] bg-white/60 backdrop-blur-xl border border-white p-10 relative overflow-hidden flex flex-col justify-end shadow-sm"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-strawberry-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
            <Leaf className="w-8 h-8 text-strawberry-500 mb-4" />
            <h3 className="text-2xl font-serif text-stone-900 mb-2">Fresh Ingredients</h3>
            <p className="text-stone-500 font-light max-w-md">Only premium seasonal fruits picked at their absolute peak of sweetness and flavor.</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="md:col-span-1 row-span-2 rounded-[28px] bg-white/60 backdrop-blur-xl border border-white p-10 relative overflow-hidden flex flex-col justify-center shadow-sm text-center items-center"
          >
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blush/30 to-transparent pointer-events-none" />
            <Heart className="w-10 h-10 text-strawberry-500 mb-6" />
            <h3 className="text-3xl font-serif text-stone-900 mb-4">Handmade Daily</h3>
            <p className="text-stone-500 font-light">Prepared every morning by our master pastry chefs with love and dedication.</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="md:col-span-1 row-span-1 rounded-[28px] bg-white/60 backdrop-blur-xl border border-white p-8 relative shadow-sm"
          >
             <Award className="w-7 h-7 text-stone-700 mb-4" />
             <h3 className="text-xl font-serif text-stone-900 mb-2">Premium Quality</h3>
             <p className="text-stone-500 font-light text-sm">Finest vanilla beans from Madagascar and French butter.</p>
          </motion.div>

          {/* Card 4 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -5 }}
            className="md:col-span-1 row-span-1 rounded-[28px] bg-strawberry-600 p-8 relative shadow-[0_20px_40px_-15px_rgba(232,74,95,0.4)] text-white overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2" />
             <Clock className="w-7 h-7 text-white/80 mb-4" />
             <h3 className="text-xl font-serif mb-2">Fast Delivery</h3>
             <p className="text-white/70 font-light text-sm">Fresh desserts delivered quickly to your doorstep.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// --- SECTION 3: Ingredients ---
export function Ingredients() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  const chips = [
    { text: "Fresh Strawberry", top: "15%", left: "15%", delay: 0 },
    { text: "Cream Cheese", top: "25%", right: "15%", delay: 0.2 },
    { text: "Vanilla Bean", top: "50%", left: "10%", delay: 0.4 },
    { text: "French Butter", top: "60%", right: "12%", delay: 0.6 },
    { text: "Organic Milk", bottom: "20%", left: "20%", delay: 0.8 },
    { text: "Fresh Cream", bottom: "15%", right: "25%", delay: 1.0 },
    { text: "Biscuit Base", bottom: "5%", left: "45%", delay: 1.2 },
  ];

  return (
    <section ref={containerRef} className="py-40 relative overflow-hidden bg-stone-900 min-h-screen flex items-center justify-center">
      <motion.img 
        src="https://images.unsplash.com/photo-1524351199678-941a58a3df50?q=80&w=1171&auto=format&fit=crop" 
        alt="Cheesecake background" 
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        style={{ y }}
      />
      <div className="absolute inset-0 bg-stone-900/40" />

      <div className="relative z-10 text-center pointer-events-none">
        <h2 className="text-5xl md:text-7xl font-serif text-white mb-6 drop-shadow-xl">Pure Ingredients</h2>
        <p className="text-white/80 text-lg font-light max-w-xl mx-auto drop-shadow-md">We believe that extraordinary taste begins with exceptional components. Nothing hidden, simply pure.</p>
      </div>

      {chips.map((chip, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: chip.delay }}
          animate={{ y: [0, -15, 0] }}
          style={{
            top: chip.top,
            bottom: chip.bottom,
            left: chip.left,
            right: chip.right,
          }}
          className="absolute z-20 backdrop-blur-md bg-white/10 border border-white/20 text-white px-6 py-3 rounded-full text-sm font-medium shadow-2xl"
        >
          {chip.text}
        </motion.div>
      ))}
    </section>
  );
}

// --- SECTION 4: Making Process ---
export function Process() {
  const steps = [
    { title: "Mixing Ingredients", desc: "Whisking the finest components to a smooth perfection." },
    { title: "Slow Baking", desc: "Baked carefully at low temperatures for the silkiest texture." },
    { title: "Cooling Process", desc: "Rested overnight to develop complex flavor profiles." },
    { title: "Fresh Decoration", desc: "Hand-decorated with fresh fruits and gold leaf." },
    { title: "Ready to Serve", desc: "Presented beautifully, awaiting your enjoyment." },
  ];

  return (
    <section className="py-32 px-6 sm:px-12 lg:px-24 bg-cream">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-strawberry-600 font-medium tracking-[0.2em] uppercase text-sm mb-4 block">The Journey</span>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-900">Making Process</h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-stone-200" />

          {steps.map((step, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={cn(
                  "relative flex items-center justify-between w-full mb-16",
                  isEven ? "flex-row-reverse" : ""
                )}
              >
                <div className="w-5/12" />
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-strawberry-500 z-10 shadow-[0_0_15px_rgba(232,74,95,0.4)]" />
                <div className={cn(
                  "w-5/12 bg-white p-8 rounded-[24px] shadow-sm border border-stone-100 hover:shadow-md transition-shadow",
                  isEven ? "text-right" : "text-left"
                )}>
                  <span className="text-strawberry-400 font-medium text-sm mb-2 block">Step {idx + 1}</span>
                  <h3 className="text-2xl font-serif text-stone-900 mb-3">{step.title}</h3>
                  <p className="text-stone-500 font-light">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
