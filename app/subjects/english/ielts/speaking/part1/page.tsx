"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function SpeakingPart1Page() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="flex items-center justify-between px-8 py-6 bg-white border-b">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Megora
        </Link>
        <UserButton />
      </nav>

      <section className="max-w-4xl mx-auto px-8 py-12">
        <Link href="/subjects/english/ielts/speaking" className="text-blue-600">
          ← Буцах
        </Link>

        <h1 className="text-4xl font-bold mt-6">🗨️ IELTS Speaking Part 1</h1>

        <div className="bg-white rounded-2xl shadow p-6 mt-8 space-y-8">

          <div>
            <h2 className="text-2xl font-bold">Topic: Hometown</h2>

            <p className="mt-4"><b>Q:</b> Where is your hometown?</p>
            <p className="text-gray-700 mt-2">
              My hometown is in western Mongolia. It is a peaceful place with beautiful nature.
            </p>

            <p className="mt-4"><b>Q:</b> What do you like about your hometown?</p>
            <p className="text-gray-700 mt-2">
              I like its quiet environment and friendly people. It feels very comfortable to live there.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Topic: Study</h2>

            <p className="mt-4"><b>Q:</b> What do you study?</p>
            <p className="text-gray-700 mt-2">
              I am currently a high school student and I plan to study finance at university.
            </p>

            <p className="mt-4"><b>Q:</b> Why do you want to study finance?</p>
            <p className="text-gray-700 mt-2">
              Because I am interested in business, investment, and understanding how money works.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Topic: Free Time</h2>

            <p className="mt-4"><b>Q:</b> What do you usually do in your free time?</p>
            <p className="text-gray-700 mt-2">
              I usually read, practice English, and sometimes play checkers.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h2 className="font-bold">Part 1 Tip</h2>
            <p className="text-gray-700 mt-2">
              Short answer бүү өг. 2–3 sentence болгож өргөжүүлж ярь.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}