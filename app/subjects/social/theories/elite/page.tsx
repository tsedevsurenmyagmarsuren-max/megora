"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function ElitePage() {
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

        <h1 className="text-4xl font-bold mt-6">Элитийн онол</h1>

        <p className="text-gray-600 mt-3">
          Нийгэмд цөөн тооны нөлөө бүхий хүмүүс буюу элитүүд гол шийдвэр гаргаж,
          нийгмийг удирддаг гэж үздэг онол.
        </p>

        <div className="bg-white rounded-2xl shadow p-6 mt-8 space-y-6">
          <div>
            <h2 className="text-2xl font-bold">Гол санаа</h2>
            <p className="text-gray-700 mt-2">
              Нийгмийн эрх мэдэл бүх хүмүүст тэгш хуваарилагддаггүй.
              Харин цөөн элит бүлэг нийгмийн гол шийдвэрүүдийг гаргадаг.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Эрдэмтэд</h2>
            <ul className="list-disc ml-6 mt-2 text-gray-700">
              <li>Вильфредо Парето</li>
              <li>Гаэтано Моска</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Түлхүүр үг</h2>
            <p className="text-gray-700 mt-2">
              элит, эрх мэдэл, удирдлага, нөлөө бүхий бүлэг
            </p>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
            <h2 className="font-bold">ЭЕШ clue</h2>
            <p className="text-gray-700 mt-2">
              “Цөөнх олонхыг удирдана”, “эрх мэдэл элитүүдэд төвлөрдөг”
              гэж гарвал энэ онол.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Жишээ</h2>
            <p className="text-gray-700 mt-2">
              Улс төрийн удирдагчид, томоохон бизнесийн бүлэглэлүүд,
              өндөр нөлөөтэй хүмүүс нийгмийн бодлогод хүчтэй нөлөөлдөг.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}