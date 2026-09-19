import { Link } from "react-router-dom";
import { MapPin, ChevronRight } from "lucide-react";
import { locations, images } from "@/data/business";

export function AreaQuickLinks() {
  return (
    <section className="py-16 lg:py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">
            Quick Links
          </span>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-2 tracking-tight">
            Find Your City
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {locations.map((loc) => (
            <Link
              key={loc.slug}
              to={`/electrician-${loc.slug}`}
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 hover:border-yellow-400 hover:bg-yellow-50 transition-all"
            >
              <MapPin className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-medium text-gray-800 group-hover:text-yellow-700">Electrician in {loc.shortName}</span>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-yellow-600 group-hover:translate-x-0.5 transition-all" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
