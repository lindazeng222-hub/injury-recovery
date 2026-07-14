import { Heart } from "lucide-react";

export const metadata = {
  title: "About — InjuryInsight",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-16">
      <p className="text-xs uppercase tracking-[0.3em] font-bold text-[#FF3B30] mb-3">
        The Story
      </p>
      <h1 className="font-heading text-5xl md:text-6xl uppercase tracking-tight text-white mb-8 leading-none">
        About InjuryInsight
      </h1>

      <div className="space-y-6 text-[#A1A1AA] leading-relaxed text-base">
        <p>
          Hi, I&apos;m a 15-year-old high school athlete who injured my knee. When my
          physical therapy started, I went looking for a website that had
          everything in one place — clear recovery guides, real rehab videos, and
          a community of people who&apos;d been through the same thing.
        </p>
        <p>
          I couldn&apos;t find it. So I built it.
        </p>
        <p>
          InjuryInsight is my passion project. Every injury guide is based on
          peer-reviewed rehab protocols and vetted physical therapy resources. The
          community links go to real, active subreddits with thousands of members
          — people who share their recovery wins, setbacks, and hard-won advice
          every day.
        </p>
        <p>
          My goal is to make this the first place an injured athlete goes — not
          to replace your physical therapist, but to help you understand what
          you&apos;re going through and feel less alone on the road back.
        </p>

        <div className="bg-[#121212] border border-white/10 rounded-sm p-6 mt-8">
          <div className="flex items-center gap-2 mb-3">
            <Heart size={16} className="text-[#FF3B30]" />
            <h2 className="font-heading text-xl text-white uppercase tracking-wide">
              Medical Disclaimer
            </h2>
          </div>
          <p className="text-sm">
            Everything on this site is for educational purposes only. The
            recovery guides reflect general rehab principles — not a prescription
            for your specific injury. Always work with a licensed physical
            therapist or sports medicine doctor for your individual recovery plan.
          </p>
        </div>
      </div>
    </div>
  );
}
