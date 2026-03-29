import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Flame, Star } from 'lucide-react';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  popular?: boolean;
  spicy?: boolean;
}

const base = import.meta.env.BASE_URL;

const menuItems: MenuItem[] = [
  // Rice Dishes
  {
    id: 1,
    name: 'Jollof Rice (Chicken)',
    description:
      'Nigeria\'s famous party rice cooked in rich tomato stew with aromatic spices, served with grilled chicken',
    price: '£14.80',
    image: `${base}jollof-rice.jpg`,
    category: 'Rice Dishes',
    popular: true,
  },
  {
    id: 2,
    name: 'Jollof Rice (Beef & Plantain)',
    description:
      'Classic Jollof rice served with tender beef pieces and sweet fried plantains',
    price: '£14.80',
    image: `${base}jollof-rice.jpg`,
    category: 'Rice Dishes',
  },
  {
    id: 3,
    name: 'Jollof Rice (Chicken & Plantain)',
    description:
      'Our signature Jollof rice with grilled chicken and crispy fried plantain slices',
    price: '£15.40',
    image: `${base}jollof-rice.jpg`,
    category: 'Rice Dishes',
    popular: true,
  },
  {
    id: 4,
    name: 'Fried Rice (Chicken)',
    description:
      'Fragrant fried rice with mixed vegetables, scrambled eggs, and grilled chicken',
    price: '£16.80',
    image: `${base}fried-rice.jpg`,
    category: 'Rice Dishes',
  },
  // Traditional Soups
  {
    id: 5,
    name: 'Edikaikong (Calabar Signature)',
    description:
      'The king of Calabar soups! Rich vegetable soup with pumpkin leaves, waterleaf, assorted meats, and dried fish',
    price: '£17.20',
    image: `${base}edikaikong-soup.jpg`,
    category: 'Traditional Soups',
    popular: true,
    spicy: true,
  },
  {
    id: 6,
    name: 'Afang Soup (Calabar Special)',
    description:
      'Nutritious soup made with Afang leaves, waterleaf, assorted meats, and seafood',
    price: '£17.20',
    image: `${base}afang-soup.jpg`,
    category: 'Traditional Soups',
    popular: true,
    spicy: true,
  },
  {
    id: 7,
    name: 'Egusi Soup',
    description:
      'Rich and creamy melon seed soup with leafy vegetables, assorted meats, and fish',
    price: '£17.20',
    image: `${base}egusi-soup.jpg`,
    category: 'Traditional Soups',
    popular: true,
  },
  {
    id: 8,
    name: 'Okra Soup (Ila)',
    description:
      'Delicious okra soup with seafood, meats, and traditional seasonings',
    price: '£16.00',
    image: `${base}egusi-soup.jpg`,
    category: 'Traditional Soups',
    spicy: true,
  },
  // Special Dishes
  {
    id: 9,
    name: 'Ekpang Nkwukwo',
    description:
      'Traditional Calabar delicacy made with grated cocoyam wrapped in leaves, cooked with palm oil and periwinkles',
    price: '£18.00',
    image: `${base}edikaikong-soup.jpg`,
    category: 'Special Dishes',
    popular: true,
    spicy: true,
  },
  {
    id: 10,
    name: 'Vegetarian Beans & Dodo',
    description:
      'Slow-cooked beans in palm oil sauce served with sweet fried plantains',
    price: '£12.50',
    image: `${base}jollof-rice.jpg`,
    category: 'Special Dishes',
  },
  // Stews
  {
    id: 11,
    name: 'Chicken Stew',
    description:
      'Rich tomato-based stew with tender chicken pieces, perfect with rice or swallow',
    price: '£15.40',
    image: `${base}fried-rice.jpg`,
    category: 'Stews',
  },
  {
    id: 12,
    name: 'Beef Stew',
    description: 'Flavorful beef stew slow-cooked in traditional Nigerian spices',
    price: '£15.40',
    image: `${base}fried-rice.jpg`,
    category: 'Stews',
    spicy: true,
  },
];

const categories = [
  'All',
  'Rice Dishes',
  'Traditional Soups',
  'Special Dishes',
  'Stews',
];

export function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems =
    activeCategory === 'All'
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 md:py-28 bg-[#14100c] relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">
            Our Menu
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            Authentic <span className="text-gradient">Nigerian Dishes</span>
          </h2>
          <p className="text-amber-100/70 text-lg max-w-2xl mx-auto">
            Explore our selection of traditional Calabar and Nigerian dishes,
            each prepared with authentic recipes and the finest ingredients.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-amber-600 text-white'
                  : 'bg-[#231a14] text-amber-100/70 hover:bg-amber-900/30 hover:text-amber-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#1a1410] border border-amber-900/30 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  {item.popular && (
                    <span className="flex items-center gap-1 px-2 py-1 bg-amber-600 text-white text-xs font-semibold rounded-full">
                      <Star className="w-3 h-3" />
                      Popular
                    </span>
                  )}
                  {item.spicy && (
                    <span className="flex items-center gap-1 px-2 py-1 bg-red-600 text-white text-xs font-semibold rounded-full">
                      <Flame className="w-3 h-3" />
                      Spicy
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-white font-semibold text-lg">
                    {item.name}
                  </h3>
                  <span className="text-amber-500 font-bold text-lg">
                    {item.price}
                  </span>
                </div>
                <p className="text-amber-100/60 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>
                <Button
                  onClick={() =>
                    window.open('https://wa.me/447961711422', '_blank')
                  }
                  variant="outline"
                  className="w-full border-amber-600/50 text-amber-400 hover:bg-amber-600 hover:text-white gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Order Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Order CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-amber-900/40 to-orange-900/40 border border-amber-600/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-3">
              Ready to Order?
            </h3>
            <p className="text-amber-100/70 mb-6">
              Place your order via WhatsApp for quick and easy takeaway. We&apos;ll
              have your food ready in no time!
            </p>
            <Button
              size="lg"
              onClick={() =>
                window.open('https://wa.me/447961711422', '_blank')
              }
              className="bg-green-600 hover:bg-green-700 text-white px-8"
            >
              <ShoppingBag className="w-5 h-5 mr-2" />
              Order on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
