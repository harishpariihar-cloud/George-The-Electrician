import { Phone, ClipboardCheck, Wrench, ShieldCheck } from "lucide-react";
import { business } from "@/data/business";

const steps = [
  {
    icon: Phone,
    title: "Call & Describe the Issue",
    desc: "Tell us what's happening. We'll schedule a same-day visit and give you a rough idea of timing — no waiting on hold, no call centers.",
  },
  {
    icon: ClipboardCheck,
    title: "Diagnose & Upfront Quote",
    desc: "Our licensed electrician inspects the problem, finds the root cause, and gives you a flat-rate price before any work begins. No surprises.",
  },
  {
    icon: Wrench,
    title: "Clean, Code-Compliant Repair",
    desc: "We fix it right the first time — clean workmanship, proper materials, and full code compliance. Your home is left spotless.",
  },
  {
    icon: ShieldCheck,
    title: "Warranty & Follow-Up",
    desc: "Every job is backed by our lifetime workmanship warranty. We follow up to make sure everything works perfectly.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mt-2 mb-4 tracking-tight">
            Simple, Transparent Process
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            From your first call to the final follow-up, we make electrical service effortless and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="bg-gray-50 rounded-2xl p-6 lg:p-8 border border-gray-200 hover:border-yellow-300 hover:shadow-lg transition-all h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-yellow-400/10 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-yellow-500" strokeWidth={2} />
                  </div>
                  <span className="text-4xl font-bold text-gray-200">{i + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-200" />
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href={`tel:${business.phoneRaw}`}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-black text-white font-bold text-lg hover:bg-gray-900 transition-all shadow-lg hover:scale-105"
          >
            <Phone className="w-6 h-6 text-yellow-400" strokeWidth={2.5} />
            Start Now — {business.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
