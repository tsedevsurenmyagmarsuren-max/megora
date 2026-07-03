"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

const words = [
  {
    word: "obscure",
    meaning: "тодорхойгүй, ойлгомжгүй",
    example: "The meaning of the poem was obscure to many students.",
    synonyms: "unclear, vague, hidden",
    antonyms: "clear, obvious",
  },
  {
    word: "mitigate",
    meaning: "багасгах, зөөлрүүлэх",
    example: "New laws can help mitigate environmental damage.",
    synonyms: "reduce, lessen, ease",
    antonyms: "worsen, intensify",
  },
  {
    word: "validate",
    meaning: "батлах, хүчинтэй болгох",
    example: "The experiment validated the scientist’s theory.",
    synonyms: "confirm, verify, prove",
    antonyms: "deny, reject",
  },
  {
    word: "profound",
    meaning: "гүнзгий, хүчтэй",
    example: "The speech had a profound effect on the audience.",
    synonyms: "deep, intense, powerful",
    antonyms: "shallow, weak",
  },
  {
    word: "inevitable",
    meaning: "зайлшгүй, гарцаагүй",
    example: "Change is inevitable in every society.",
    synonyms: "certain, unavoidable",
    antonyms: "avoidable, uncertain",
  },
];

export default function SATVocabPage() {
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

        <h1 className="text-4xl font-bold mt-6">🧠 SAT Common Words</h1>
        <p className="text-gray-600 mt-2">
          Set 1 — High-frequency SAT vocabulary.
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