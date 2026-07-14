import { COMMUNITY_LINKS, INJURIES } from "@/lib/data";
import { ExternalLink, Users } from "lucide-react";

export const metadata = {
  title: "Community — InjuryInsight",
  description:
    "Connect with real communities of injured athletes on Reddit. Find your injury-specific support group.",
};

export default function CommunityPage() {
  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
      <p className="text-xs uppercase tracking-[0.3em] font-bold text-[#FF3B30] mb-3">
        Real communities · No account needed
      </p>
      <h1 className="font-heading text-5xl md:text-6xl uppercase tracking-tight text-white mb-4">
        Find Your People
      </h1>
      <p className="text-[#A1A1AA] max-w-2xl mb-12 leading-relaxed">
        These are real subreddits with thousands of athletes sharing their
        recovery journeys. Click any community to join the conversation directly
        on Reddit.
      </p>

      {/* How it works */}
      <div className="bg-[#121212] border border-white/10 rounded-sm p-6 mb-12">
        <div className="flex items-start gap-4">
          <div className="w-8 h-8 rounded-sm bg-[#FF3B30] flex items-center justify-center flex-shrink-0">
            <Users size={16} className="text-white" />
          </div>
          <div>
            <h2 className="font-heading text-xl text-white tracking-wide mb-2">
              How the Community Works
            </h2>
            <p className="text-[#A1A1AA] text-sm leading-relaxed max-w-2xl">
              We link directly to real Reddit communities rather than building a
              separate forum. This means you get access to thousands of active
              members with real experience — not an empty new forum. Just click
              any community below and join for free.
            </p>
          </div>
        </div>
      </div>

      {/* Community grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {COMMUNITY_LINKS.map((c) => {
          const relatedNames = c.relatedInjuries
            .map((slug) => INJURIES.find((inj) => inj.slug === slug)?.name)
            .filter(Boolean);

          return (
            <a
              key={c.subreddit}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#121212] border border-white/10 rounded-sm p-6 hover:border-white/30 hover:-translate-y-1 transition-all duration-200 group flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-heading text-2xl text-white tracking-wide">
                    {c.name}
                  </h3>
                  <p className="text-[#FF3B30] text-xs font-medium mt-0.5">
                    reddit.com/{c.name}
                  </p>
                </div>
                <ExternalLink
                  size={16}
                  className="text-[#A1A1AA] group-hover:text-white transition-colors flex-shrink-0 mt-1"
                />
              </div>
              <p className="text-[#A1A1AA] text-sm leading-relaxed mb-4 flex-1">
                {c.description}
              </p>
              {relatedNames.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {relatedNames.map((name) => (
                    <span
                      key={name}
                      className="text-xs px-2 py-0.5 bg-white/5 border border-white/10 rounded-sm text-[#A1A1AA]"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              )}
            </a>
          );
        })}
      </div>

      {/* CTA */}
      <div className="mt-16 bg-[#121212] border border-white/10 rounded-sm p-8 text-center">
        <h2 className="font-heading text-3xl text-white uppercase tracking-tight mb-3">
          Don&apos;t See Your Injury?
        </h2>
        <p className="text-[#A1A1AA] mb-4 max-w-lg mx-auto">
          r/sportsinjuries and r/physicaltherapy cover almost any injury. Or
          search Reddit directly for your specific injury — there&apos;s almost always
          a community.
        </p>
        <a
          href="https://www.reddit.com/r/sportsinjuries/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#FF3B30] text-white px-6 py-3 rounded-sm font-medium hover:bg-[#E0352A] transition-colors"
        >
          Go to r/sportsinjuries <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
}
