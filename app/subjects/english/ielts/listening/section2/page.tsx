"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function ListeningSection2Page() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="flex items-center justify-between px-8 py-6 bg-white border-b">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Megora
        </Link>
        <UserButton />
      </nav>

      <section className="max-w-4xl mx-auto px-8 py-12">
        <Link href="/subjects/english/ielts/listening" className="text-blue-600">
          ← Буцах
        </Link>

        <h1 className="text-4xl font-bold mt-6">📢 IELTS Listening Section 2</h1>

        <div className="bg-white rounded-2xl shadow p-6 mt-8 space-y-8">
          <div>
            <h2 className="text-2xl font-bold">Monologue</h2>
            <p className="text-gray-700 mt-4 leading-8">
              Welcome to Green Park. The park opens every day at 7 a.m. and closes at 9 p.m.
              Visitors can enjoy walking paths, a small lake, and a children’s playground.
              The information desk is located near the main entrance. Guided tours are
              available on Saturdays at 10 a.m.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Notes Completion</h2>
            <ol className="list-decimal ml-6 mt-3 space-y-2 text-gray-700">
              <li>Opening time: __________</li>
              <li>Closing time: __________</li>
              <li>Information desk location: __________</li>
              <li>Guided tours: Saturdays at __________</li>
            </ol>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h2 className="font-bold">Answer Key</h2>
            <ol className="list-decimal ml-6 mt-2 text-gray-700">
              <li>7 a.m.</li>
              <li>9 p.m.</li>
              <li>Near the main entrance</li>
              <li>10 a.m.</li>
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
}