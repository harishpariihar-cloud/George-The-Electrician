import { AlertTriangle, Phone } from "lucide-react";
import { business } from "@/data/business";

const problems = [
  {
    title: "Breakers Keep Tripping",
    desc: "Overloaded circuits or a failing breaker — a fire risk that needs immediate diagnosis.",
  },
  {
    title: "Lights Flicker or Dim",
    desc: "Loose neutral, overloaded circuit, or degraded wiring — we find and fix the root cause.",
  },
  {
    title: "Outlets Are Dead or Sparking",
    desc: "Failed receptacle, broken wire, or worse — don't ignore a sparking outlet, call now.",
  },
  {
    title: "Burning Smell from Panel",
    desc: "This is an emergency. Turn off your main breaker and call us immediately — 24/7.",
  },
  {
    title: "Panel Is Over 25 Years Old",
    desc: "Older panels, especially Federal Pacific or Zinsco, are linked to electrical fires.",
  },
  {
    title: "Adding an EV Charger or ADU",
    desc: "Your panel may not have the capacity. We assess and upgrade so you're ready.",
  },
];

export function CommonProblems() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">
            Don't Ignore These Signs
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mt-2 mb-4 tracking-tight">
            Common Electrical Problems in Glendale Homes
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            If you notice any of these warning signs, call a licensed electrician right away. Small problems become expensive — and dangerous — fast.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-yellow-300 hover:shadow-lg transition-all">
              <div className="flex items-start gap-3 mb-3">
                <AlertTriangle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                <h3 className="text-lg font-bold text-gray-900">{p.title}</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href={`tel:${business.phoneRaw}`}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-yellow-400 text-black font-bold text-lg hover:bg-yellow-300 transition-all shadow-xl hover:scale-105"
          >
            <Phone className="w-6 h-6" strokeWidth={2.5} />
            Call Now — {business.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
