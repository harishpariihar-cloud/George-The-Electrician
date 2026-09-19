import { ShieldCheck, Clock, Award, Phone, BadgeCheck, ThumbsUp } from "lucide-react";
import { business } from "@/data/business";

const badges = [
  { icon: ShieldCheck, title: "Licensed & Insured", desc: "CSLB certified, bonded, fully insured" },
  { icon: Clock, title: "24/7 Emergency", desc: "Same fair rates, day or night" },
  { icon: Award, title: "15+ Years Experience", desc: "Trusted by Glendale since 2010" },
  { icon: BadgeCheck, title: "Upfront Pricing", desc: "Flat-rate quotes, no surprises" },
  { icon: ThumbsUp, title: "4.9★ Rating", desc: `${business.reviewCount} verified reviews` },
  { icon: Phone, title: "Same-Day Service", desc: "Call before noon, see us today" },
];

export function TrustBadges() {
  return (
    <section className="bg-gray-50 border-y border-gray-200 py-10 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {badges.map((badge) => (
            <div key={badge.title} className="flex flex-col items-center text-center group">
              <div className="w-12 h-12 rounded-full bg-yellow-400/10 flex items-center justify-center mb-3 group-hover:bg-yellow-400/20 transition-colors">
                <badge.icon className="w-6 h-6 text-yellow-500" strokeWidth={2} />
              </div>
              <h3 className="text-sm font-bold text-gray-900 mb-1">{badge.title}</h3>
              <p className="text-xs text-gray-500 leading-snug">{badge.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
