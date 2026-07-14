import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { INJURIES, COMMUNITY_LINKS } from "@/lib/data";
import { ArrowLeft, ExternalLink, Clock, AlertTriangle } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return INJURIES.map((inj) => ({ slug: inj.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const injury = INJURIES.find((i) => i.slug === slug);
  if (!injury) return {};
  return {
    title: `${injury.name} Recovery Guide — InjuryInsight`,
    description: injury.description,
  };
}

export default async function InjuryDetailPage({ params }: Props) {
  const { slug } = await params;
  const injury = INJURIES.find((i) => i.slug === slug);
  if (!injury) notFound();

  const relatedCommunities = COMMUNITY_LINKS.filter((c) =>
    c.relatedInjuries.includes(slug)
  );

  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <Image
          src={injury.thumbnail}
          alt={injury.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 to-[#0A0A0A]/50" />
        <div className="absolute inset-0 flex flex-col justify-end max-w-7xl mx-auto px-5 sm:px-8 pb-10">
          <Link
            href="/injuries"
            className="inline-flex items-center gap-1 text-xs text-[#A1A1AA] hover:text-white transition-colors mb-4"
          >
            <ArrowLeft size={14} /> Back to Injury Guides
          </Link>
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-[#FF3B30] mb-2">
            {injury.body_part}
          </p>
          <h1 className="font-heading text-5xl md:text-7xl uppercase tracking-tight text-white leading-none mb-2">
            {injury.name}
          </h1>
          <p className="text-[#A1A1AA] text-lg">{injury.tagline}</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#121212] border border-white/10 rounded-sm p-5">
                <div className="flex items-center gap-2 text-[#A1A1AA] text-xs mb-2">
                  <Clock size={14} /> Recovery Time
                </div>
                <p className="font-heading text-2xl text-white tracking-wide">
                  {injury.recovery_time}
                </p>
              </div>
              <div className="bg-[#121212] border border-white/10 rounded-sm p-5">
                <div className="flex items-center gap-2 text-[#A1A1AA] text-xs mb-2">
                  <AlertTriangle size={14} /> Severity
                </div>
                <p className="font-heading text-2xl text-white tracking-wide">
                  {injury.severity}
                </p>
              </div>
            </div>

            {/* About */}
            <div>
              <h2 className="font-heading text-3xl text-white uppercase tracking-wide mb-4">
                About This Injury
              </h2>
              <p className="text-[#A1A1AA] leading-relaxed text-base">
                {injury.description}
              </p>
            </div>

            {/* Recovery phases */}
            <div>
              <h2 className="font-heading text-3xl text-white uppercase tracking-wide mb-6">
                Recovery Roadmap
              </h2>
              <div className="space-y-4">
                {injury.phases.map((phase, i) => (
                  <div
                    key={i}
                    className="bg-[#121212] border border-white/10 rounded-sm p-5 flex gap-5"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-sm bg-[#FF3B30] flex items-center justify-center font-heading text-white text-lg">
                      {i + 1}
                    </div>
                    <div>
                      <div className="flex items-baseline gap-3 mb-1">
                        <h3 className="font-heading text-xl text-white tracking-wide">
                          {phase.title}
                        </h3>
                        <span className="text-xs text-[#FF3B30] font-medium">
                          {phase.duration}
                        </span>
                      </div>
                      <p className="text-[#A1A1AA] text-sm leading-relaxed">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Videos */}
            <div>
              <h2 className="font-heading text-3xl text-white uppercase tracking-wide mb-6">
                Rehab Videos
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {injury.videos.map((vid) => (
                  <div key={vid.youtube_id} className="space-y-2">
                    <div className="relative pb-[56.25%] bg-black rounded-sm overflow-hidden border border-white/10">
                      <iframe
                        className="absolute inset-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${vid.youtube_id}`}
                        title={vid.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <p className="text-sm text-[#A1A1AA]">{vid.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tips */}
            <div className="bg-[#121212] border border-white/10 rounded-sm p-6">
              <h3 className="font-heading text-xl text-white uppercase tracking-wide mb-4">
                Expert Tips
              </h3>
              <ul className="space-y-3">
                {injury.tips.map((tip, i) => (
                  <li key={i} className="flex gap-3 text-sm text-[#A1A1AA]">
                    <span className="text-[#FF3B30] font-bold flex-shrink-0">
                      {i + 1}.
                    </span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            {/* Community */}
            {relatedCommunities.length > 0 && (
              <div className="bg-[#121212] border border-white/10 rounded-sm p-6">
                <h3 className="font-heading text-xl text-white uppercase tracking-wide mb-4">
                  Community Support
                </h3>
                <p className="text-[#A1A1AA] text-sm mb-4">
                  Connect with others recovering from {injury.name} in these
                  Reddit communities:
                </p>
                <div className="space-y-3">
                  {relatedCommunities.map((c) => (
                    <a
                      key={c.subreddit}
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-[#1A1A1A] border border-white/10 rounded-sm hover:border-white/30 transition-colors group"
                    >
                      <div>
                        <p className="text-white text-sm font-medium">
                          {c.name}
                        </p>
                        <p className="text-[#A1A1AA] text-xs mt-0.5 line-clamp-1">
                          {c.description}
                        </p>
                      </div>
                      <ExternalLink
                        size={14}
                        className="text-[#A1A1AA] group-hover:text-white transition-colors flex-shrink-0 ml-3"
                      />
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Disclaimer */}
            <div className="border border-yellow-500/20 bg-yellow-500/5 rounded-sm p-4">
              <p className="text-xs text-yellow-400/80 leading-relaxed">
                <strong className="text-yellow-400">Medical Disclaimer:</strong>{" "}
                This information is for educational purposes only. Always follow
                the advice of your physical therapist or doctor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
