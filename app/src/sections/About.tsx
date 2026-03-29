import { Utensils, Heart, Award, Leaf } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Utensils,
      title: 'Authentic Recipes',
      description:
        'Traditional Calabar dishes passed down through generations, prepared with authentic Nigerian spices and techniques.',
    },
    {
      icon: Heart,
      title: 'Made with Love',
      description:
        'Every dish is crafted with care and passion, bringing the warmth of Nigerian hospitality to Edinburgh.',
    },
    {
      icon: Award,
      title: 'Quality Ingredients',
      description:
        'We use only the finest fresh ingredients and imported Nigerian spices for that true authentic taste.',
    },
    {
      icon: Leaf,
      title: 'Fresh Daily',
      description:
        'All our dishes are prepared fresh daily, ensuring you get the best quality and flavor in every bite.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#1a1410] relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src={`${import.meta.env.BASE_URL}jollof-rice.jpg`}
                alt="Nigerian Jollof Rice"
                className="rounded-2xl shadow-2xl w-full h-48 md:h-64 object-cover transform translate-y-8"
              />
              <img
                src={`${import.meta.env.BASE_URL}egusi-soup.jpg`}
                alt="Traditional Egusi Soup"
                className="rounded-2xl shadow-2xl w-full h-48 md:h-64 object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-amber-600 text-white px-6 py-3 rounded-full shadow-xl">
              <span className="font-bold text-lg">Est. 2024</span>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-6">
              Bringing the{' '}
              <span className="text-gradient">Flavors of Calabar</span> to
              Scotland
            </h2>
            <p className="text-amber-100/70 text-lg leading-relaxed mb-6">
              Calabar Tastee is Edinburgh&apos;s premier destination for authentic
              Nigerian cuisine. Located in the heart of Dalry, we specialize in
              traditional Calabar dishes that celebrate the rich culinary
              heritage of South-South Nigeria.
            </p>
            <p className="text-amber-100/70 text-lg leading-relaxed mb-8">
              From our signature Edikaikong soup to the famous Nigerian Jollof
              Rice, every dish is prepared with authentic recipes and the finest
              ingredients. Whether you&apos;re craving a taste of home or exploring
              African cuisine for the first time, we promise an unforgettable
              dining experience.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-amber-500">
                  15+
                </div>
                <div className="text-amber-100/60 text-sm">Menu Items</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-amber-500">
                  500+
                </div>
                <div className="text-amber-100/60 text-sm">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-amber-500">
                  5★
                </div>
                <div className="text-amber-100/60 text-sm">Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#231a14] border border-amber-900/30 rounded-xl p-6 hover:border-amber-500/50 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-amber-600/20 flex items-center justify-center mb-4 group-hover:bg-amber-600/30 transition-colors">
                <feature.icon className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-amber-100/60 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
