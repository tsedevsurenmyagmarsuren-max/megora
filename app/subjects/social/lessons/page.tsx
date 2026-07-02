"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

const lessons = [
  {
    title: "Нийгэм, нийгмийн бүтэц",
    href: "/subjects/social/lessons/structure",
  },
  {
    title: "Нийгэмшил",
    href: "/subjects/social/lessons/socialization",
  },
  {
    title: "Нийгмийн давхраажилт",
    href: "/subjects/social/lessons/stratification",
  },
  {
    title: "Нийгмийн гажуудал",
    href: "/subjects/social/lessons/deviance",
  },
  {
    title: "Нийгмийн өөрчлөлт",
    href: "/subjects/social/lessons/change",
  },
  {
    title: "Нийгмийн судалгаа",
    href: "/subjects/social/lessons/research",
  },
];

export default function SocialLessonsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="flex items-center justify-between px-8 py-6 bg-white border-b">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Megora
        </Link>
        <UserButton />
      </nav>

      <section className="max-w-6xl mx-auto px-8 py-12">
        <h1 className="text-4xl font-bold">📚 Нийгмийн хичээлүүд</h1>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {lessons.map((lesson) => (
            <Link
              key={lesson.title}
              href={lesson.href}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg"
            >
              <h2 className="text-xl font-bold">{lesson.title}</h2>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}