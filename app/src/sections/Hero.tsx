import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, ChevronDown } from 'lucide-react';

export function Hero() {
  const scrollToMenu = () => {
    document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={`${import.meta.env.BASE_URL}restaurant-hero.jpg`}
          alt="Calabar Tastee Restaurant"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#1a1410]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-600/20 border border-amber-500/30 mb-6 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-amber-300 text-sm font-medium">
            Now Open - Authentic Nigerian Cuisine
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
          Taste the Soul of
          <span className="block text-gradient">Nigeria in Edinburgh</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-amber-100/80 max-w-2xl mx-auto mb-8">
          Experience authentic Calabar flavors crafted with love. From our famous
          Jollof Rice to traditional soups, every dish tells a story of Nigerian
          heritage.
        </p>

        {/* Quick Info */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10 text-amber-100/70 text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-amber-500" />
            <span>185 Dalry Road, Edinburgh</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-amber-500" />
            <span>07961 711422</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-amber-500" />
            <span>Takeaway & Delivery</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            size="lg"
            onClick={scrollToMenu}
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg font-semibold rounded-full animate-pulse-glow"
          >
            View Our Menu
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => window.open('https://wa.me/447961711422', '_blank')}
            className="border-amber-500/50 text-amber-100 hover:bg-amber-600/20 px-8 py-6 text-lg rounded-full"
          >
            <Phone className="w-5 h-5 mr-2" />
            Order on WhatsApp
          </Button>
        </div>

        {/* Social Proof */}
        <div className="flex items-center justify-center gap-4 text-amber-100/60 text-sm">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 border-2 border-[#1a1410] flex items-center justify-center text-xs font-bold"
              >
                {String.fromCharCode(64 + i)}
              </div>
            ))}
          </div>
          <span>Join 500+ happy customers</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContact}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-amber-400/60 hover:text-amber-400 transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
