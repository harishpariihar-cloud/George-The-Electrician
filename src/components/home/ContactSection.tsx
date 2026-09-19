import { Phone, MapPin, Clock, Mail, Star } from "lucide-react";
import { business } from "@/data/business";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mt-2 mb-4 tracking-tight">
            Contact George The Electrician
          </h2>
          <p className="text-lg text-gray-600">
            Call now for same-day service, or visit us in Glendale. We are ready to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-6">
            <a
              href={`tel:${business.phoneRaw}`}
              className="flex items-center gap-4 p-6 rounded-2xl bg-yellow-400 hover:bg-yellow-300 transition-colors group"
            >
              <div className="w-14 h-14 rounded-xl bg-black flex items-center justify-center flex-shrink-0">
                <Phone className="w-7 h-7 text-yellow-400" strokeWidth={2.5} />
              </div>
              <div>
                <div className="text-sm font-semibold text-black/70 uppercase tracking-wide">Call Now</div>
                <div className="text-2xl font-bold text-black">{business.phoneDisplay}</div>
              </div>
            </a>

            <div className="p-6 rounded-2xl bg-white border border-gray-200">
              <div className="flex items-start gap-4 mb-5">
                <MapPin className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Our Location</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{business.address.full}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-5">
                <Mail className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                  <a href={`mailto:${business.email}`} className="text-gray-600 text-sm hover:text-yellow-600">{business.email}</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-2">Business Hours</h3>
                  <ul className="space-y-1">
                    {business.hours.map((h) => (
                      <li key={h.day} className="flex justify-between text-sm text-gray-600">
                        <span>{h.day}</span>
                        <span className="font-medium">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-5 rounded-2xl bg-white border border-gray-200">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-gray-700 text-sm font-medium">
                {business.rating} / 5 from {business.reviewCount} verified reviews
              </span>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl min-h-[400px] lg:min-h-full">
            <iframe
              title="George The Electrician location map — Glendale, CA"
              src={business.mapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
