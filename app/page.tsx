import Link from "next/link";
import Image from "next/image";
import { INJURIES, COMMUNITY_LINKS } from "@/lib/data";
import { ArrowRight, ExternalLink } from "lucide-react";

export default function HomePage() {
  const featured = INJURIES.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1600"
            alt="Athlete in recovery"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/85 to-[#0A0A0A]/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 py-24">
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-[#FF3B30] mb-4 animate-fade-up">
            Built by a recovering athlete
          </p>
          <h1 className="font-heading text-6xl md:text-8xl uppercase tracking-tight text-white mb-6 animate-fade-up leading-none">
            Your Comeback
            <br />
            <span className="text-[#FF3B30]">Starts Here</span>
          </h1>
          <p className="text-[#A1A1AA] max-w-xl mb-8 text-lg leading-relaxed animate-fade-up">
            Science-backed recovery guides, rehab videos, and a real community
            of athletes who&apos;ve been where you are.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-up">
            <Link
              href="/injuries"
              className="inline-flex items-center gap-2 bg-[#FF3B30] text-white px-6 py-3 rounded-sm font-medium hover:bg-[#E0352A] transition-colors"
            >
              Browse Injury Guides <ArrowRight size={16} />
            </Link>
            <Link
              href="/community"
              className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded-sm font-medium hover:border-white/50 transition-colors"
            >
              Find Your Community
            </Link>
          </div>
        </div>
      </section>

      {/* Founder story */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <div className="bg-[#121212] border border-white/10 rounded-sm p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-[#FF3B30]" />
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-[#FF3B30] mb-3">
            Why this site exists
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-white uppercase tracking-tight mb-4">
            I Hurt My Knee Too
          </h2>
          <p className="text-[#A1A1AA] max-w-2xl leading-relaxed text-lg">
            I&apos;m 15 and I injured my knee playing sports. When I started physical
            therapy, I searched everywhere for good recovery info and a community
            of people who understood what I was going through. I couldn&apos;t find
            what I needed in one place — so I built it. This site is for every
            athlete sitting on the sidelines wondering when they&apos;ll be back.
          </p>
        </div>
      </section>

      {/* AI Checker CTA */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 pt-0">
        <div className="bg-[#121212] border border-[#FF3B30]/30 rounded-sm p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF3B30]/5 to-transparent pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] font-bold text-[#FF3B30] mb-3">
                New · AI-Powered
              </p>
              <h2 className="font-heading text-4xl md:text-5xl text-white uppercase tracking-tight mb-3">
                Not Sure What You Have?
              </h2>
              <p className="text-[#A1A1AA] max-w-lg leading-relaxed">
                Describe your symptoms and our AI will help you figure out your next step —
                home rest, PT, doctor, or ER. Built for teen athletes.
              </p>
            </div>
            <Link
              href="/assess"
              className="inline-flex items-center gap-2 bg-[#FF3B30] text-white px-8 py-4 rounded-sm font-medium hover:bg-[#E0352A] transition-colors whitespace-nowrap flex-shrink-0"
            >
              Try AI Symptom Checker <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured injuries */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 pt-0">
        <p className="text-xs uppercase tracking-[0.3em] font-bold text-[#FF3B30] mb-3">
          Recovery Library
        </p>
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-heading text-4xl md:text-5xl text-white uppercase tracking-tight">
            Injury Guides
          </h2>
          <Link
            href="/injuries"
            className="text-sm text-[#A1A1AA] hover:text-white transition-colors flex items-center gap-1"
          >
            View all <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((inj) => (
            <Link
              key={inj.slug}
              href={`/injuries/${inj.slug}`}
              className="group bg-[#121212] border border-white/10 rounded-sm overflow-hidden hover:border-white/30 hover:-translate-y-1 transition-all duration-200 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={inj.thumbnail}
                  alt={inj.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent" />
                <span className="absolute bottom-3 left-4 text-xs font-bold uppercase tracking-widest text-[#FF3B30]">
                  {inj.body_part}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-heading text-2xl text-white tracking-wide mb-1">
                  {inj.name}
                </h3>
                <p className="text-[#A1A1AA] text-sm mb-4 flex-1">
                  {inj.tagline}
                </p>
                <span className="text-xs text-[#A1A1AA]">
                  {inj.recovery_time}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Community preview */}
      <section className="bg-[#121212] border-y border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-[#FF3B30] mb-3">
            Real communities on Reddit
          </p>
          <div className="flex items-end justify-between mb-8">
            <h2 className="font-heading text-4xl md:text-5xl text-white uppercase tracking-tight">
              You&apos;re Not Alone
            </h2>
            <Link
              href="/community"
              className="text-sm text-[#A1A1AA] hover:text-white transition-colors flex items-center gap-1"
            >
              All communities <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {COMMUNITY_LINKS.slice(0, 3).map((c) => (
              <a
                key={c.subreddit}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1A1A1A] border border-white/10 rounded-sm p-5 hover:border-white/30 hover:-translate-y-1 transition-all duration-200 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-heading text-xl text-white tracking-wide">
                    {c.name}
                  </span>
                  <ExternalLink
                    size={14}
                    className="text-[#A1A1AA] group-hover:text-white transition-colors"
                  />
                </div>
                <p className="text-[#A1A1AA] text-sm leading-relaxed">
                  {c.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
