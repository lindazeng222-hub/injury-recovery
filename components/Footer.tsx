import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0A0A0A] mt-16">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#A1A1AA]">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-sm bg-[#FF3B30] flex items-center justify-center font-heading text-white text-sm">
            II
          </span>
          <span className="font-heading text-white text-xl tracking-wide">
            InjuryInsight
          </span>
        </div>
        <p className="text-center">
          Built by a recovering athlete, for recovering athletes.{" "}
          <span className="text-white">Not a substitute for medical advice.</span>
        </p>
        <div className="flex gap-6">
          <Link href="/injuries" className="hover:text-white transition-colors">
            Injury Guides
          </Link>
          <Link href="/community" className="hover:text-white transition-colors">
            Community
          </Link>
          <Link href="/about" className="hover:text-white transition-colors">
            About
          </Link>
        </div>
      </div>
    </footer>
  );
}
