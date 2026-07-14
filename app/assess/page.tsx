import type { Metadata } from "next";
import AssessChat from "./_components/AssessChat";

export const metadata: Metadata = {
  title: "AI Symptom Checker — InjuryInsight",
  description:
    "Describe your symptoms and get guidance on whether you need the ER, a doctor, PT, or home rest.",
};

export default function AssessPage() {
  return <AssessChat />;
}
