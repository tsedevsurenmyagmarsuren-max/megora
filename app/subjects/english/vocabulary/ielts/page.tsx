"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

const words = [
  {
    word: "analyze",
    meaning: "задлан шинжлэх",
    example: "Students should analyze the chart before writing the essay.",
    synonyms: "examine, study, investigate",
    antonyms: "ignore, overlook",
  },
  {
    word: "significant",
    meaning: "чухал, мэдэгдэхүйц",
    example: "There was a significant increase in internet use.",
    synonyms: "important, major, meaningful",
    antonyms: "minor, unimportant",
  },
  {
    word: "benefit",
    meaning: "ашиг тус",
    example: "Online learning has many benefits for students.",
    synonyms: "advantage, gain, value",
    antonyms: "disadvantage, drawback",
  },
  {
    word: "impact",
    meaning: "нөлөө",
    example: "Technology has a strong impact on education.",
    synonyms: "effect, influence, result",
    antonyms: "cause",
  },
  {
    word: "increase",
    meaning: "өсөх, нэмэгдэх",
    example: "The number of international students increased rapidly.",
    synonyms: "rise, grow, expand",
    antonyms: "decrease, decline, fall",
  },
];

export default function IELTSVocabPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="flex items-center justify-between px-8 py-6 bg-white border-b">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Megora
        </Link>
        <UserButton />
      </nav>

      <section className="max-w-5xl mx-auto px-8 py-12">
        <Link href="/subjects/english/vocabulary" className="text-blue-600">
          ← Буцах
        </Link>

        <h1 className="text-4xl font-bold mt-6">🎯 IELTS Common Words</h1>
        <p className="text-gray-600 mt-2">
          Set 1 — Meaning, example sentence, synonyms, antonyms.
        </p>

        <div className="space-y-6 mt-10">
          {words.map((item) => (
            <div key={item.word} className="bg-white rounded-2xl shadow p-6">
              <h2 className="text-2xl font-bold text-blue-600">
                {item.word}
              </h2>

              <p className="mt-2">
                <b>Meaning:</b> {item.meaning}
              </p>

              <p className="mt-2 text-gray-700">
                <b>Example:</b> {item.example}
              </p>

              <p className="mt-2">
                <b>Synonyms:</b> {item.synonyms}
              </p>

              <p className="mt-2">
                <b>Antonyms:</b> {item.antonyms}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}