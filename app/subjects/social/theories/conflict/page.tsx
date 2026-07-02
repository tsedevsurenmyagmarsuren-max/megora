"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function ConflictPage() {
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
          Мөргөлдөөний онол
        </h1>

        <p className="text-gray-600 mt-3">
          Нийгэм бол ашиг сонирхлын зөрчил, эрх мэдлийн тэмцэл дээр тогтдог гэж үздэг онол.
        </p>

        <div className="bg-white rounded-2xl shadow p-6 mt-8 space-y-6">
          <div>
            <h2 className="text-2xl font-bold">Гол санаа</h2>
            <p className="text-gray-700 mt-2">
              Нийгэм дотор баялаг, эрх мэдэл, боломжийг тэгш бус хуваарилснаас
              бүлгүүдийн хооронд зөрчил үүсдэг.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Эрдэмтэд</h2>
            <ul className="list-disc ml-6 mt-2 text-gray-700">
              <li>Карл Маркс</li>
              <li>Ральф Дарендорф</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Түлхүүр үг</h2>
            <p className="text-gray-700 mt-2">
              зөрчил, эрх мэдэл, анги давхарга, тэгш бус байдал, тэмцэл
            </p>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-xl p-4">
            <h2 className="font-bold">ЭЕШ clue</h2>
            <p className="text-gray-700 mt-2">
              “Анги хоорондын тэмцэл”, “эрх мэдлийн төлөө тэмцэл”,
              “нийгмийн тэгш бус байдал” гэж гарвал энэ онол.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Жишээ</h2>
            <p className="text-gray-700 mt-2">
              Ажилчин ба ажил олгогчийн ашиг сонирхлын зөрчил, баячууд ба ядуусын ялгаа.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}