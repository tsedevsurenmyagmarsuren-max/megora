"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

const theories = [
  {
    title: "Бүтэц-чиг үүргийн онол",
    scholar: "Э.Дюркгейм, Т.Парсонс, Р.Мертон",
    href: "/subjects/social/theories/functionalism",
  },
  {
    title: "Мөргөлдөөний онол",
    scholar: "К.Маркс, Р.Дарендорф",
    href: "/subjects/social/theories/conflict",
  },
  {
    title: "Бэлгэдлийн харилцан үйлдлийн онол",
    scholar: "Ж.Мид, Ч.Кули",
    href: "/subjects/social/theories/symbolic",
  },
  {
    title: "Формацын онол",
    scholar: "К.Маркс",
    href: "/subjects/social/theories/formation",
  },
  {
    title: "Иргэншлийн онол",
    scholar: "А.Тойнби",
    href: "/subjects/social/theories/civilization",
  },
  {
    title: "Элитийн онол",
    scholar: "В.Парето, Г.Моска",
    href: "/subjects/social/theories/elite",
  },
];

export default function TheoriesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="flex items-center justify-between px-8 py-6 bg-white border-b">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Megora
        </Link>
        <UserButton />
      </nav>

      <section className="max-w-6xl mx-auto px-8 py-12">
        <h1 className="text-4xl font-bold">📘 Нийгмийн онолууд</h1>

        <p className="text-gray-600 mt-2">
          ЭЕШ-д түгээмэл гардаг онолууд ба эрдэмтдийн гол санаанууд.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {theories.map((theory) => (
            <Link
              key={theory.title}
              href={theory.href}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-bold">{theory.title}</h2>

              <p className="text-gray-500 mt-2">
                👨‍🏫 {theory.scholar}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}