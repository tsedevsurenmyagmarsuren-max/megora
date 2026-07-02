"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function CivilizationPage() {
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

        <h1 className="text-4xl font-bold mt-6">Иргэншлийн онол</h1>

        <p className="text-gray-600 mt-3">
          Нийгмийн хөгжлийг зөвхөн эдийн засгаар биш, соёл, шашин, үнэт зүйл,
          иргэншлийн онцлогоор тайлбарладаг онол.
        </p>

        <div className="bg-white rounded-2xl shadow p-6 mt-8 space-y-6">
          <div>
            <h2 className="text-2xl font-bold">Гол санаа</h2>
            <p className="text-gray-700 mt-2">
              Хүн төрөлхтний хөгжил нь өөр өөр иргэншлүүдийн үүсэл, өсөлт,
              уналт, харилцан нөлөөллөөр тайлбарлагдана.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Эрдэмтэд</h2>
            <ul className="list-disc ml-6 mt-2 text-gray-700">
              <li>Арнольд Тойнби</li>
              <li>Освальд Шпенглер</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Түлхүүр үг</h2>
            <p className="text-gray-700 mt-2">
              иргэншил, соёл, шашин, үнэт зүйл, түүхэн хөгжил, соёлын ялгаа
            </p>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
            <h2 className="font-bold">ЭЕШ clue</h2>
            <p className="text-gray-700 mt-2">
              “Соёл иргэншлийн ялгаа”, “иргэншлийн өсөлт ба уналт”,
              “соёл, шашин, үнэт зүйлээр хөгжлийг тайлбарлах” гэж гарвал энэ онол.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Жишээ</h2>
            <p className="text-gray-700 mt-2">
              Өрнө, Дорно, Ислам, Хятад зэрэг иргэншлүүд өөр өөр соёл,
              шашин, үнэт зүйлээрээ ялгарч хөгждөг.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}