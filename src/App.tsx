import SmoothScroll from './components/SmoothScroll';
import Hero from './components/Hero';
import { SignatureDesserts, WhyChooseUs, Ingredients, Process } from './components/Section1to4';
import { Gallery, Reviews, Stats, InstaFeed } from './components/Section5to8';
import { FAQ, Newsletter, Footer } from './components/Section9to11';

export default function App() {
  return (
    <SmoothScroll>
      <div className="bg-cream text-stone-800 font-sans selection:bg-strawberry-400/30 selection:text-strawberry-600 overflow-x-hidden">
        {/* The Hero component is exactly as it was originally */}
        <Hero />
        
        {/* The new sections flow naturally under the 200vh parallax hero */}
        <div className="relative z-20 bg-cream">
          <SignatureDesserts />
          <WhyChooseUs />
          <Ingredients />
          <Process />
          <Gallery />
          <Reviews />
          <Stats />
          <InstaFeed />
          <FAQ />
          <Newsletter />
        </div>
        
        <Footer />
      </div>
    </SmoothScroll>
  );
}
