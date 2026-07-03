"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function WritingTipsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="flex items-center justify-between px-8 py-6 bg-white border-b">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Megora
        </Link>
        <UserButton />
      </nav>

      <section className="max-w-4xl mx-auto px-8 py-12">
        <Link href="/subjects/english/ielts/writing" className="text-blue-600">
          ← Буцах
        </Link>

        <h1 className="text-4xl font-bold mt-6">🚀 Band 7+ Writing Tips</h1>

        <div className="bg-white rounded-2xl shadow p-6 mt-8 space-y-8">

          <div>
            <h2 className="text-2xl font-bold">1. Task Response</h2>
            <p className="mt-2 text-gray-700">
              Асуултыг яг зөв ойлгож, бүх хэсэгт нь хариул. Topic-оос бүү хазай.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">2. Coherence & Cohesion</h2>
            <p className="mt-2 text-gray-700">
              Paragraph бүр logical холбоотой байх ёстой. Linking words зөв ашигла.
            </p>

            <ul className="list-disc ml-6 mt-3 text-gray-700">
              <li>Firstly</li>
              <li>Furthermore</li>
              <li>However</li>
              <li>In conclusion</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold">3. Lexical Resource</h2>
            <p className="mt-2 text-gray-700">
              Давтагдсан үг бага хэрэглэж, synonyms ашигла.
            </p>

            <p className="mt-2 italic">
              important → crucial / significant  
              big → enormous / substantial
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">4. Grammar Range</h2>
            <p className="mt-2 text-gray-700">
              Simple sentence-ээс гадна complex sentence ашигла.
            </p>

            <p className="mt-2 italic">
              Although many people believe..., it can be argued that...
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">5. Time Management</h2>
            <p className="mt-2 text-gray-700">
              Task 1 → 20 минут  
              Task 2 → 40 минут  
              Task 2 дээр илүү их цаг зарцуул.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h2 className="font-bold">Golden Rule</h2>
            <p className="text-gray-700 mt-2">
              Clear structure + strong examples + fewer grammar mistakes = Band 7+
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}