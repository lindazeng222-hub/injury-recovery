import Link from "next/link";
import Image from "next/image";
import type { Injury } from "@/lib/types";

export default function InjuryCard({
  injury,
  index = 0,
}: {
  injury: Injury;
  index?: number;
}) {
  return (
    <Link
      href={`/injuries/${injury.slug}`}
      className="group bg-[#121212] border border-white/10 rounded-sm overflow-hidden hover:border-white/30 hover:-translate-y-1 transition-all duration-200 h-full flex flex-col"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={injury.thumbnail}
          alt={injury.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent" />
        <span className="absolute bottom-3 left-4 text-xs font-bold uppercase tracking-widest text-[#FF3B30]">
          {injury.body_part}
        </span>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-heading text-2xl text-white tracking-wide mb-1">
          {injury.name}
        </h3>
        <p className="text-[#A1A1AA] text-sm mb-4 flex-1">{injury.tagline}</p>
        <div className="flex items-center justify-between text-xs text-[#A1A1AA]">
          <span
            className={`px-2 py-0.5 rounded-sm border text-xs ${
              injury.severity === "Severe" || injury.severity === "Moderate–Severe"
                ? "border-red-500/40 text-red-400"
                : injury.severity === "Mild–Moderate" ||
                    injury.severity === "Mild–Severe"
                  ? "border-yellow-500/40 text-yellow-400"
                  : "border-green-500/40 text-green-400"
            }`}
          >
            {injury.severity}
          </span>
          <span>{injury.recovery_time}</span>
        </div>
      </div>
    </Link>
  );
}
