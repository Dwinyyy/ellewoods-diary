import React, { useState, useEffect } from 'react';
import { 
  Book, 
  Feather, 
  Hammer, 
  Flame, 
  Wind, 
  Menu, 
  X, 
  ChevronRight, 
  Scroll, 
  Anchor, 
  Gem 
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLore, setActiveLore] = useState('aether');

  // Handle scroll effects for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-slate-900 text-stone-200 font-serif selection:bg-amber-900 selection:text-amber-100">
      {/* Load Google Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&display=swap');
      `}</style>

      {/* Dynamic Background Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-5 bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')] z-0"></div>
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-amber-900/30 py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Feather className="h-6 w-6 text-amber-500" />
              <span className="text-2xl font-bold tracking-widest text-amber-50 uppercase" style={{ fontFamily: 'Cinzel, serif' }}>
                Ellewood's Diary
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#featured" className="text-sm uppercase tracking-widest hover:text-amber-500 transition-colors">The Current Work</a>
              <a href="#library" className="text-sm uppercase tracking-widest hover:text-amber-500 transition-colors">Library</a>
              <a href="#lore" className="text-sm uppercase tracking-widest hover:text-amber-500 transition-colors">The Archive</a>
              <button className="px-6 py-2 border border-amber-600 text-amber-500 hover:bg-amber-600 hover:text-white transition-all duration-300 text-sm uppercase tracking-widest">
                Subscribe
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-amber-50 hover:text-amber-500 transition-colors">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-amber-900/50 py-4 px-4 shadow-xl">
            <div className="flex flex-col space-y-4">
              <a href="#featured" onClick={toggleMenu} className="text-stone-300 hover:text-amber-500">The Current Work</a>
              <a href="#library" onClick={toggleMenu} className="text-stone-300 hover:text-amber-500">Library</a>
              <a href="#lore" onClick={toggleMenu} className="text-stone-300 hover:text-amber-500">The Archive</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="featured" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Atmospheric Glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[100px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          
          {/* Book Cover / Visual */}
          <div className="order-2 md:order-1 relative group perspective-1000">
            <div className="relative w-64 md:w-96 mx-auto aspect-[2/3] bg-slate-800 rounded-sm shadow-2xl transform transition-transform duration-700 group-hover:rotate-y-6 group-hover:scale-105 border border-slate-700">
              {/* Cover Art Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-between p-8 border-l-4 border-l-slate-950">
                <div className="text-amber-500/20 w-full text-center mt-4">
                  <Wind size={48} className="mx-auto" />
                </div>
                <div className="text-center">
                  <h1 className="text-3xl md:text-5xl font-bold text-amber-50 uppercase tracking-tighter mb-2" style={{ fontFamily: 'Cinzel, serif' }}>
                    To Hold<br/><span className="text-amber-600">The Sky</span>
                  </h1>
                  <div className="h-px w-24 bg-amber-600/50 mx-auto my-4"></div>
                  <p className="text-xs uppercase tracking-[0.2em] text-stone-400">Jalen Ellewood</p>
                </div>
                <div className="w-full flex justify-center pb-4">
                  <Hammer size={32} className="text-stone-600" />
                </div>
              </div>
              {/* Spine Effect */}
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-r from-white/10 to-transparent"></div>
            </div>
            {/* Shadow */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-64 h-4 bg-black/50 blur-xl rounded-full"></div>
          </div>

          {/* Text Content */}
          <div className="order-1 md:order-2 text-center md:text-left">
            <div className="inline-block px-3 py-1 mb-4 border border-amber-900/50 rounded-full bg-amber-950/30 text-amber-500 text-xs tracking-widest uppercase">
              Latest Release
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-stone-100 mb-6 leading-tight" style={{ fontFamily: 'Cinzel, serif' }}>
              Gravity Has Come<br/>To Collect.
            </h2>
            <p className="text-lg md:text-xl text-stone-400 mb-8 leading-relaxed max-w-xl mx-auto md:mx-0 font-light italic">
              "We taught the stone to sing so we would not have to hear it scream. But the throat is dry, the song is ending, and the earth is remembering how to settle."
            </p>
            <p className="text-stone-300 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
              In the crumbling capital of Antheia, a stonemason who hears the earth's pain, a scientist desperate to fix a broken world, and a scholar chasing ghosts must unite before the Aether fades forever.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="px-8 py-3 bg-amber-700 text-stone-100 hover:bg-amber-600 transition-colors uppercase tracking-widest text-sm font-bold shadow-lg shadow-amber-900/20">
                Start Reading
              </button>
              <button className="px-8 py-3 border border-stone-600 text-stone-400 hover:border-amber-500 hover:text-amber-500 transition-colors uppercase tracking-widest text-sm">
                View Synopsis
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* The Library / Works Grid */}
      <section id="library" className="py-24 bg-slate-950/50 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-600 text-sm tracking-[0.3em] uppercase block mb-2">The Collection</span>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-100" style={{ fontFamily: 'Cinzel, serif' }}>Published Works</h2>
            <div className="h-px w-24 bg-amber-900/50 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Book Card 1 */}
            <div className="group relative bg-slate-900 border border-slate-800 p-6 hover:border-amber-900/50 transition-all duration-500 hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-slate-950 rounded-sm border border-slate-800">
                  <Hammer className="text-stone-500 group-hover:text-amber-500 transition-colors" size={24} />
                </div>
                <span className="text-xs text-amber-700 font-mono">Part I: Chapters 1-10</span>
              </div>
              <h3 className="text-xl font-bold text-stone-200 mb-2 group-hover:text-amber-500 transition-colors">Resonance in the Kingdom</h3>
              <p className="text-stone-500 text-sm mb-6 leading-relaxed">
                August discovers the "song" within the stone, and Arabella faces the destruction of her life's work at the Innovator's Gauntlet.
              </p>
              <a href="#" className="inline-flex items-center text-xs uppercase tracking-widest text-stone-400 group-hover:text-amber-500 transition-colors">
                Read Part I <ChevronRight size={14} className="ml-1" />
              </a>
            </div>

            {/* Book Card 2 */}
            <div className="group relative bg-slate-900 border border-slate-800 p-6 hover:border-amber-900/50 transition-all duration-500 hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-slate-950 rounded-sm border border-slate-800">
                  <Scroll className="text-stone-500 group-hover:text-blue-500 transition-colors" size={24} />
                </div>
                <span className="text-xs text-stone-600 font-mono">Part II: Chapters 11-20</span>
              </div>
              <h3 className="text-xl font-bold text-stone-200 mb-2 group-hover:text-blue-400 transition-colors">Warden of Silvaurum</h3>
              <p className="text-stone-500 text-sm mb-6 leading-relaxed">
                The Trio of Greyfang Pass forms. They descend into the deep mines and discover the horrifying truth about the First Dominion.
              </p>
              <a href="#" className="inline-flex items-center text-xs uppercase tracking-widest text-stone-400 group-hover:text-blue-400 transition-colors">
                Read Part II <ChevronRight size={14} className="ml-1" />
              </a>
            </div>

            {/* Book Card 3 */}
            <div className="group relative bg-slate-900 border border-slate-800 p-6 hover:border-amber-900/50 transition-all duration-500 hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-slate-950 rounded-sm border border-slate-800">
                  <Anchor className="text-stone-500 group-hover:text-red-500 transition-colors" size={24} />
                </div>
                <span className="text-xs text-stone-600 font-mono">Part III: Coming Soon</span>
              </div>
              <h3 className="text-xl font-bold text-stone-200 mb-2 group-hover:text-red-400 transition-colors">The Crown's Shadowed Peak</h3>
              <p className="text-stone-500 text-sm mb-6 leading-relaxed">
                Fame brings danger. The Aether begins to flicker in the capital, and the first cracks in the world appear.
              </p>
              <div className="flex items-center space-x-2">
                <span className="inline-block w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
                <span className="text-xs uppercase tracking-widest text-amber-500">In Progress</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Archive (Lore Teaser) */}
      <section id="lore" className="py-24 relative overflow-hidden">
        {/* Decorative Gear Background - purely CSS/SVG placeholder implication */}
        <div className="absolute right-0 top-0 opacity-5 pointer-events-none transform translate-x-1/2 -translate-y-1/2">
          <svg width="600" height="600" viewBox="0 0 100 100" className="animate-[spin_60s_linear_infinite]">
            <path d="M50 0 L55 10 L65 5 L65 15 L75 15 L70 25 L80 30 L70 35 L75 45 L65 45 L60 55 L50 50 L40 55 L35 45 L25 45 L30 35 L20 30 L30 25 L25 15 L35 15 L35 5 L45 10 Z" fill="currentColor" className="text-amber-900" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-12">
            
            {/* Sidebar Controls */}
            <div className="md:col-span-4 space-y-6">
              <h2 className="text-3xl font-bold text-stone-100 mb-8" style={{ fontFamily: 'Cinzel, serif' }}>
                The Archive
              </h2>
              <div className="space-y-2">
                <button 
                  onClick={() => setActiveLore('aether')}
                  className={`w-full text-left px-6 py-4 border-l-2 transition-all duration-300 ${activeLore === 'aether' ? 'border-amber-500 bg-slate-800/50 text-amber-50' : 'border-slate-700 text-stone-500 hover:text-stone-300 hover:border-stone-500'}`}
                >
                  <span className="block text-xs uppercase tracking-widest mb-1 opacity-50">Physics of the World</span>
                  <span className="text-lg font-serif">Aether & Aura</span>
                </button>
                <button 
                  onClick={() => setActiveLore('beasts')}
                  className={`w-full text-left px-6 py-4 border-l-2 transition-all duration-300 ${activeLore === 'beasts' ? 'border-amber-500 bg-slate-800/50 text-amber-50' : 'border-slate-700 text-stone-500 hover:text-stone-300 hover:border-stone-500'}`}
                >
                  <span className="block text-xs uppercase tracking-widest mb-1 opacity-50">Fauna</span>
                  <span className="text-lg font-serif">Beasts of the Decline</span>
                </button>
                <button 
                  onClick={() => setActiveLore('factions')}
                  className={`w-full text-left px-6 py-4 border-l-2 transition-all duration-300 ${activeLore === 'factions' ? 'border-amber-500 bg-slate-800/50 text-amber-50' : 'border-slate-700 text-stone-500 hover:text-stone-300 hover:border-stone-500'}`}
                >
                  <span className="block text-xs uppercase tracking-widest mb-1 opacity-50">Power Structure</span>
                  <span className="text-lg font-serif">The Guilds & The Guard</span>
                </button>
              </div>
            </div>

            {/* Content Display */}
            <div className="md:col-span-8 bg-slate-900/50 border border-slate-800 p-8 md:p-12 relative min-h-[400px]">
              {/* Content Fade Effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-900/10 to-transparent"></div>
              
              {activeLore === 'aether' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="flex items-center space-x-3 mb-6 text-amber-500">
                    <Gem size={24} />
                    <h3 className="text-xl uppercase tracking-widest font-bold">The Marrow of the Earth</h3>
                  </div>
                  <p className="text-stone-300 leading-relaxed mb-6 font-light text-lg">
                    <strong className="text-amber-100">Aether</strong> is the omnipresent, invisible energy field that permeates the world. It is not infinite. It is a physical resource that flows through ley-lines and conduits—often calcified First Dominion ruins.
                  </p>
                  <p className="text-stone-400 leading-relaxed mb-6">
                    <strong className="text-amber-100">Aura</strong> is biological. The metabolic processing of trace Aether by living organisms. True Aura Warriors possess the "Iron Lung" mutation, acting as biological sieves to filter energy from the air.
                  </p>
                  <div className="p-4 bg-slate-950 border-l-4 border-amber-800 text-sm text-stone-400 italic">
                    "If the marrow dries, the bones become brittle glass. The Long Silence isn't just the end of magic; it is the end of structural integrity." — Valerius
                  </div>
                </div>
              )}

              {activeLore === 'beasts' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="flex items-center space-x-3 mb-6 text-amber-500">
                    <Book size={24} />
                    <h3 className="text-xl uppercase tracking-widest font-bold">The Beastiary</h3>
                  </div>
                  <p className="text-stone-300 leading-relaxed mb-6 font-light text-lg">
                    As the Aether wanes, the great beasts of the world are changing. The majestic <strong className="text-white">Crowned Elk</strong> and <strong className="text-white">Thunder Steppers</strong> are losing their connection to the land, becoming erratic and violent.
                  </p>
                  <ul className="space-y-4 mb-6">
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-600 mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-stone-400"><strong className="text-stone-200">Stone Bores:</strong> Armored burrowers that consume Aether-rich minerals. They are destabilizing the mines in Greyfang Pass.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-600 mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-stone-400"><strong className="text-stone-200">Crag Bats:</strong> Their sonic emissions disrupt mammalian equilibrium. A swarm is not just a physical threat, but a sensory assault.</span>
                    </li>
                  </ul>
                </div>
              )}

              {activeLore === 'factions' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="flex items-center space-x-3 mb-6 text-amber-500">
                    <Anchor size={24} />
                    <h3 className="text-xl uppercase tracking-widest font-bold">The Architecture of Power</h3>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-stone-100 font-bold mb-2 border-b border-slate-700 pb-2">The Masons</h4>
                      <p className="text-stone-400 text-sm">
                        Keepers of the stone. They fear the "song" August hears, viewing it as Geomantic Heresy. They build the walls that hide the decay.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-stone-100 font-bold mb-2 border-b border-slate-700 pb-2">The Artificers</h4>
                      <p className="text-stone-400 text-sm">
                        Masters of brass and logic. Led by figures like Elmsworth, they are split between the "Clean Tech" of Aether and the "Dirty Tech" of combustion.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-stone-100 font-bold mb-2 border-b border-slate-700 pb-2">The Wardens</h4>
                      <p className="text-stone-400 text-sm">
                        Mercenaries and monster hunters. They do the jobs the Guilds are too polite to acknowledge.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-stone-100 font-bold mb-2 border-b border-slate-700 pb-2">Aura Warriors</h4>
                      <p className="text-stone-400 text-sm">
                        Elite soldiers with the Iron Lung mutation. As the ambient Aether fades, they are beginning to starve.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-20 bg-amber-950/20 border-t border-b border-amber-900/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-stone-200 mb-4" style={{ fontFamily: 'Cinzel, serif' }}>Join the Watch</h2>
          <p className="text-stone-400 mb-8">Receive notifications when new chapters are unearthed from the debris.</p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-slate-900 border border-slate-700 text-stone-200 px-4 py-3 focus:outline-none focus:border-amber-500 w-full"
            />
            <button className="bg-amber-700 text-stone-100 px-6 py-3 font-bold uppercase tracking-widest text-xs hover:bg-amber-600 transition-colors whitespace-nowrap">
              Sign Up
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 border-t border-slate-900 text-center md:text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <Feather className="h-5 w-5 text-amber-600" />
              <span className="text-lg font-bold tracking-widest text-stone-300 uppercase" style={{ fontFamily: 'Cinzel, serif' }}>
                Ellewood's Diary
              </span>
            </div>
            <p className="text-stone-600 text-sm max-w-sm mx-auto md:mx-0">
              A repository for stories forged in soot, silence, and the echo of falling empires.
            </p>
          </div>
          <div>
            <h4 className="text-stone-300 font-bold uppercase tracking-widest text-xs mb-4">Connect</h4>
            <ul className="space-y-2 text-stone-500 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Twitter / X</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Patreon</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-stone-300 font-bold uppercase tracking-widest text-xs mb-4">Legal</h4>
            <ul className="space-y-2 text-stone-500 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Terms of Service</a></li>
              <li><span className="opacity-50">© 2025 Jalen Ellewood</span></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;