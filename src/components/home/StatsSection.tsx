import { Award, Users, Wrench, Clock } from "lucide-react";

const stats = [
  { icon: Award, value: "15+", label: "Years in Business" },
  { icon: Users, value: "5,000+", label: "Jobs Completed" },
  { icon: Wrench, value: "10+", label: "Electrical Services" },
  { icon: Clock, value: "24/7", label: "Emergency Available" },
];

export function StatsSection() {
  return (
    <section className="bg-black py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-yellow-400/10 flex items-center justify-center mb-3">
                <stat.icon className="w-7 h-7 text-yellow-400" strokeWidth={2} />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-white tracking-tight">{stat.value}</div>
              <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
