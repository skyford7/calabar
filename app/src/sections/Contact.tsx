import { Button } from '@/components/ui/button';
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  Instagram,
  ExternalLink,
  Navigation,
} from 'lucide-react';

export function Contact() {
  const handleGetDirections = () => {
    window.open(
      'https://www.google.com/maps/dir/?api=1&destination=185+Dalry+Road+Edinburgh+EH11+2EB',
      '_blank'
    );
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#1a1410] relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            Visit <span className="text-gradient">Calabar Tastee</span>
          </h2>
          <p className="text-amber-100/70 text-lg max-w-2xl mx-auto">
            Find us on Dalry Road, right beside Lidl. We&apos;re ready to serve you
            the best Nigerian food in Edinburgh!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info Card */}
          <div className="bg-[#231a14] border border-amber-900/30 rounded-2xl p-6 md:p-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-600/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Address</h4>
                  <p className="text-amber-100/70">
                    185 Dalry Road
                    <br />
                    Edinburgh, Scotland
                    <br />
                    EH11 2EB
                  </p>
                  <p className="text-amber-500/80 text-sm mt-1">
                    (Beside Lidl on Dalry Road)
                  </p>
                </div>
              </div>

              {/* Phone/WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-600/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    Phone / WhatsApp
                  </h4>
                  <p className="text-amber-100/70">07961 711422</p>
                  <Button
                    variant="link"
                    className="text-green-500 p-0 h-auto mt-1"
                    onClick={() =>
                      window.open('https://wa.me/447961711422', '_blank')
                    }
                  >
                    <MessageCircle className="w-4 h-4 mr-1" />
                    Chat on WhatsApp
                  </Button>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-600/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    Opening Hours
                  </h4>
                  <div className="text-amber-100/70 space-y-1">
                    <div className="flex justify-between gap-8">
                      <span>Monday - Friday</span>
                      <span>12:00 PM - 9:00 PM</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span>Saturday</span>
                      <span>12:00 PM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span>Sunday</span>
                      <span>1:00 PM - 8:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-6 border-t border-amber-900/30">
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() =>
                    window.open('https://www.tiktok.com/@calabartastee', '_blank')
                  }
                  className="border-amber-600/50 text-amber-400 hover:bg-amber-600 hover:text-white"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() =>
                    window.open(
                      'https://www.instagram.com/calabartastee',
                      '_blank'
                    )
                  }
                  className="border-amber-600/50 text-amber-400 hover:bg-amber-600 hover:text-white"
                >
                  <Instagram className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Map Card */}
          <div className="bg-[#231a14] border border-amber-900/30 rounded-2xl p-6 md:p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Find Us</h3>

            {/* Map Embed */}
            <div className="relative rounded-xl overflow-hidden bg-[#14100c] h-64 md:h-80 mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2233.827123456789!2d-3.2318!3d55.9389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887c7c5c5c5c5c5%3A0x5c5c5c5c5c5c5c5c!2s185%20Dalry%20Rd%2C%20Edinburgh%20EH11%202EB!5e0!3m2!1sen!2suk!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(30%) invert(90%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Calabar Tastee Location"
              />
            </div>

            {/* Quick Actions */}
            <div className="space-y-3">
              <Button
                onClick={handleGetDirections}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white gap-2"
              >
                <Navigation className="w-5 h-5" />
                Get Directions
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  window.open('https://wa.me/447961711422', '_blank')
                }
                className="w-full border-green-600/50 text-green-500 hover:bg-green-600 hover:text-white gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Order on WhatsApp
              </Button>
            </div>

            {/* Delivery Partners */}
            <div className="mt-6 pt-6 border-t border-amber-900/30">
              <p className="text-amber-100/60 text-sm mb-3">
                Also available on:
              </p>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    window.open(
                      'https://deliveroo.co.uk/menu/edinburgh/southwest-edinburgh/calabar-tastee',
                      '_blank'
                    )
                  }
                  className="border-amber-600/30 text-amber-300 hover:bg-amber-600/20 gap-1"
                >
                  Deliveroo
                  <ExternalLink className="w-3 h-3" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    window.open(
                      'https://www.just-eat.co.uk/restaurants-calabar-tastee-edinburgh',
                      '_blank'
                    )
                  }
                  className="border-amber-600/30 text-amber-300 hover:bg-amber-600/20 gap-1"
                >
                  Just Eat
                  <ExternalLink className="w-3 h-3" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
