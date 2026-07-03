"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

const mockTests = [
  {
    title: "Social Mock Test 1",
    description: "20 асуулт • 20 минут • auto score",
    href: "/subjects/social/mock/test1",
    status: "Free",
  },
    {
    title: "Social Mock Test 2",
    description: "20 асуулт • 20 минут • auto score",
    href: "/subjects/social/mock/test2",
    status: "Free",
  },
  {
    title: "Premium Mock Tests",
    description: "20+ advanced tests • тайлбартай хариулт",
    href: "/premium",
    status: "Premium",
  },
];

export default function SocialMockPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="flex items-center justify-between px-8 py-6 bg-white border-b">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Megora
        </Link>
        <UserButton />
      </nav>

      <section className="max-w-6xl mx-auto px-8 py-12">
        <Link href="/subjects/social" className="text-blue-600">
          ← Буцах
        </Link>

        <h1 className="text-4xl font-bold mt-6">📝 Нийгмийн Mock Test</h1>
        <p className="text-gray-600 mt-2">
          Нийгмийн ухааны mock test-үүдээ эндээс ажиллаарай.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {mockTests.map((test) => (
            <Link
              key={test.title}
              href={test.href}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">{test.title}</h2>
                <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                  {test.status}
                </span>
              </div>
              <p className="text-gray-500 mt-3">{test.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}