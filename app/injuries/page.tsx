import { INJURIES } from "@/lib/data";
import InjuryCard from "@/components/InjuryCard";

export const metadata = {
  title: "Injury Guides — InjuryInsight",
  description:
    "Recovery roadmaps, rehab videos, and expert tips for common sports injuries.",
};

export default function InjuriesPage() {
  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
      <p className="text-xs uppercase tracking-[0.3em] font-bold text-[#FF3B30] mb-3">
        Recovery Library
      </p>
      <h1 className="font-heading text-5xl md:text-6xl uppercase tracking-tight text-white mb-4">
        Injury Guides
      </h1>
      <p className="text-[#A1A1AA] max-w-2xl mb-12 leading-relaxed">
        Select an injury to see its full recovery roadmap, rehab videos, and
        tips for a safe return to sport.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {INJURIES.map((inj, i) => (
          <InjuryCard key={inj.slug} injury={inj} index={i} />
        ))}
      </div>
    </div>
  );
}
