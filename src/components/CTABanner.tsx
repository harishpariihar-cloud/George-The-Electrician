import { Phone } from "lucide-react";
import { business } from "@/data/business";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
}

export function CTABanner({
  title = "Need an Electrician in Glendale Today?",
  subtitle = "Call now for same-day service, upfront pricing, and a lifetime workmanship warranty. No after-hours surcharge — ever.",
}: CTABannerProps) {
  return (
    <section className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-12 lg:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl lg:text-4xl font-bold text-black mb-3 tracking-tight">
          {title}
        </h2>
        <p className="text-black/80 text-base lg:text-lg mb-6 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <a
          href={`tel:${business.phoneRaw}`}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-black text-white font-bold text-lg hover:bg-gray-900 transition-all shadow-xl hover:scale-105"
        >
          <Phone className="w-6 h-6" strokeWidth={2.5} />
          {business.phoneDisplay}
        </a>
      </div>
    </section>
  );
}
