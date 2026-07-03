"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

const words = [
  {
    word: "achieve",
    meaning: "хүрэх, биелүүлэх",
    example: "She worked hard to achieve her goals.",
    synonyms: "accomplish, attain, succeed",
    antonyms: "fail, lose",
  },
  {
    word: "environment",
    meaning: "орчин, хүрээлэн буй орчин",
    example: "We should protect the environment for future generations.",
    synonyms: "surroundings, habitat",
    antonyms: "pollution, destruction",
  },
  {
    word: "improve",
    meaning: "сайжруулах",
    example: "Practice every day to improve your English.",
    synonyms: "enhance, develop, upgrade",
    antonyms: "worsen, decline",
  },
  {
    word: "require",
    meaning: "шаардах",
    example: "This job requires strong communication skills.",
    synonyms: "need, demand, expect",
    antonyms: "allow, permit",
  },
  {
    word: "responsibility",
    meaning: "хариуцлага",
    example: "Parents have the responsibility to guide their children.",
    synonyms: "duty, obligation",
    antonyms: "freedom, neglect",
  },
];

export default function YESHVocabPage() {
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

        <h1 className="text-4xl font-bold mt-6">📘 ЭЕШ Vocabulary</h1>
        <p className="text-gray-600 mt-2">
          Set 1 — ЭЕШ-д түгээмэл ордог үгс.
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