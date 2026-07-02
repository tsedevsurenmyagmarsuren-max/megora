"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function FunctionalismPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="flex items-center justify-between px-8 py-6 bg-white border-b">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Megora
        </Link>
        <UserButton />
      </nav>

      <section className="max-w-4xl mx-auto px-8 py-12">
        <Link href="/subjects/social/theories" className="text-blue-600">
          ← Буцах
        </Link>

        <h1 className="text-4xl font-bold mt-6">
          Бүтэц-чиг үүргийн онол
        </h1>

        <p className="text-gray-600 mt-3">
          Нийгмийг харилцан холбоотой хэсгүүдээс бүрдсэн бүхэл тогтолцоо гэж үздэг онол.
        </p>

        <div className="bg-white rounded-2xl shadow p-6 mt-8 space-y-6">
          <div>
            <h2 className="text-2xl font-bold">Гол санаа</h2>
            <p className="text-gray-700 mt-2">
              Нийгмийн институт, бүлэг, байгууллага бүр нийгмийн тогтвортой байдал,
              эмх журам, зохицолд тодорхой үүрэг гүйцэтгэдэг.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Эрдэмтэд</h2>
            <ul className="list-disc ml-6 mt-2 text-gray-700">
              <li>Эмиль Дюркгейм</li>
              <li>Талкотт Парсонс</li>
              <li>Роберт Мертон</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Түлхүүр үг</h2>
            <p className="text-gray-700 mt-2">
              тогтолцоо, бүтэц, институт, чиг үүрэг, тогтвортой байдал, нийгмийн зохицол
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h2 className="font-bold">ЭЕШ clue</h2>
            <p className="text-gray-700 mt-2">
              “Нийгмийн хэсэг бүр тодорхой үүрэгтэй”, “нийгэм бол бүхэл тогтолцоо”,
              “институтүүд нийгмийн тогтвортой байдлыг хангана” гэж гарвал энэ онол.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Жишээ</h2>
            <p className="text-gray-700 mt-2">
              Гэр бүл хүүхдийг нийгэмшүүлнэ, сургууль мэдлэг олгоно, төр хууль журам
              тогтооно. Эдгээр нь тус бүрдээ нийгэмд чиг үүрэг гүйцэтгэж байна.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}