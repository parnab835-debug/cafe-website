import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import { Play, ArrowRight, Star } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Scroll Parallax for depth
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // Mouse Parallax for 3D interactive effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Exaggerated movement for different layers
  const textParallaxX = useTransform(smoothMouseX, [-0.5, 0.5], [-30, 30]);
  const textParallaxY = useTransform(smoothMouseY, [-0.5, 0.5], [-30, 30]);
  
  const floatingCardLeftX = useTransform(smoothMouseX, [-0.5, 0.5], [40, -40]);
  const floatingCardLeftY = useTransform(smoothMouseY, [-0.5, 0.5], [40, -40]);

  const floatingCardRightX = useTransform(smoothMouseX, [-0.5, 0.5], [-50, 50]);
  const floatingCardRightY = useTransform(smoothMouseY, [-0.5, 0.5], [-20, 20]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div className="relative h-[200vh] bg-stone-950 font-sans" ref={containerRef}>
      {/* Sticky Hero Container */}
      <div 
        className="sticky top-0 h-screen w-full overflow-hidden perspective-1000"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Video Background Layer */}
        <motion.div 
          className="absolute inset-0 w-full h-full"
          style={{ y: backgroundY }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-110"
            src="/i_want_a_soft_video_of_this_im.mp4" 
          />
          {/* Multi-stop elegant gradient for text readability and premium feel */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/60 to-black/30 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/40 via-transparent to-stone-950/80" />
        </motion.div>

        {/* Center Content Layer */}
        <motion.div 
          className="relative z-10 h-full flex items-center justify-center px-6 sm:px-12 lg:px-24"
          style={{ 
            y: textY, 
            opacity,
            x: textParallaxX,
          }}
        >
          <motion.div 
            className="max-w-5xl mx-auto text-center flex flex-col items-center"
            style={{ y: textParallaxY }}
          >
            {/* Top Label */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-black/20 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_12px_rgba(239,68,68,0.6)]" />
              <span className="text-xs font-medium tracking-[0.25em] text-stone-200 uppercase">Artisan Crafted</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="text-5xl sm:text-7xl lg:text-[7rem] font-serif text-white leading-[1.05] mb-8 drop-shadow-2xl"
            >
              The Art of <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-500 to-red-600 italic pr-4">Sweetness</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
              className="text-lg sm:text-xl text-stone-300 max-w-2xl mb-12 font-light leading-relaxed drop-shadow-lg"
            >
              Experience the pinnacle of culinary delight. Every slice is a masterpiece, carefully crafted to elevate your senses and create unforgettable moments.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8"
            >
              <button className="group relative flex items-center justify-center gap-3 bg-red-600 text-white px-9 py-4 rounded-full font-medium transition-all duration-500 overflow-hidden shadow-[0_0_40px_rgba(220,38,38,0.2)] hover:shadow-[0_0_60px_rgba(220,38,38,0.4)] hover:bg-red-500">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer" />
                <span className="relative z-10 tracking-wide text-lg">Order Now</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>

              <button className="flex items-center gap-4 text-stone-300 hover:text-white transition-colors group">
                <div className="w-14 h-14 rounded-full border border-stone-500/40 group-hover:border-white/80 flex items-center justify-center transition-all duration-500 backdrop-blur-md bg-white/5 group-hover:bg-white/10 group-hover:scale-105">
                  <Play className="w-4 h-4 ml-1 fill-current opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="font-medium tracking-wide">Watch the Process</span>
              </button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* 3D Layer: Left Floating Card */}
        <motion.div
           initial={{ opacity: 0, x: -100, rotate: -5 }}
           animate={{ opacity: 1, x: 0, rotate: 0 }}
           transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
           style={{ x: floatingCardLeftX, y: floatingCardLeftY }}
           className="hidden lg:flex absolute left-16 bottom-32 p-5 rounded-3xl border border-white/10 bg-black/20 backdrop-blur-xl shadow-2xl items-center gap-5 hover:bg-black/30 transition-colors cursor-default"
        >
          <div className="w-14 h-14 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center shadow-inner">
             <Star className="w-6 h-6 text-red-400 fill-red-400" />
          </div>
          <div>
            <h3 className="text-white font-medium text-lg tracking-tight">Award Winning</h3>
            <p className="text-stone-400 text-sm font-light">Voted best dessert 2024</p>
          </div>
        </motion.div>

        {/* 3D Layer: Right Floating Card */}
        <motion.div
           initial={{ opacity: 0, x: 100, rotate: 5 }}
           animate={{ opacity: 1, x: 0, rotate: 0 }}
           transition={{ duration: 1.5, ease: "easeOut", delay: 1.2 }}
           style={{ x: floatingCardRightX, y: floatingCardRightY }}
           className="hidden lg:flex absolute right-16 top-32 p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-2xl flex-col items-end gap-1 hover:bg-white/10 transition-colors cursor-default"
        >
          <h3 className="text-white font-serif italic text-3xl">100%</h3>
          <p className="text-stone-300 text-xs uppercase tracking-[0.2em] font-medium">Organic Ingredients</p>
          <div className="w-12 h-[1px] bg-red-500/50 mt-2" />
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 text-white/40"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Scroll to explore</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-16 bg-gradient-to-b from-white/60 to-transparent" 
        />
      </motion.div>
    </div>
  );
}
