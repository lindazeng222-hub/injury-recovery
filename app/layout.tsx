import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "InjuryInsight — Sports Injury Recovery Hub",
  description:
    "Recovery guides, rehab videos, and a real community for athletes overcoming sports injuries.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-[#0A0A0A] text-[#E0E0E0]">
        <Navbar />
        <main className="flex-1 min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
