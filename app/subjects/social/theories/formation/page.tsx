"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function FormationPage() {
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
          Формацын онол
        </h1>

        <p className="text-gray-600 mt-3">
          Нийгмийн хөгжил нь үйлдвэрлэлийн арга, өмчийн харилцаанаас хамаарч
          тодорхой үе шаттайгаар хөгждөг гэж үздэг онол.
        </p>

        <div className="bg-white rounded-2xl shadow p-6 mt-8 space-y-6">
          <div>
            <h2 className="text-2xl font-bold">Гол санаа</h2>
            <p className="text-gray-700 mt-2">
              Хүн төрөлхтний түүхийг эдийн засгийн суурь дээр үндэслэн үе шаттай
              тайлбарладаг. Үйлдвэрлэлийн хэрэгсэл өөрчлөгдөхөд нийгмийн бүтэц өөрчлөгдөнө.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Эрдэмтэн</h2>
            <ul className="list-disc ml-6 mt-2 text-gray-700">
              <li>Карл Маркс</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Үе шатууд</h2>
            <ul className="list-disc ml-6 mt-2 text-gray-700">
              <li>Анхны хамтын нийгэм</li>
              <li>Боолчлол</li>
              <li>Феодализм</li>
              <li>Капитализм</li>
              <li>Социализм</li>
              <li>Коммунизм</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Түлхүүр үг</h2>
            <p className="text-gray-700 mt-2">
              үйлдвэрлэл, өмч, анги, эдийн засаг, хөгжлийн үе шат
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <h2 className="font-bold">ЭЕШ clue</h2>
            <p className="text-gray-700 mt-2">
              “Нийгмийн хөгжлийн үе шат”, “үйлдвэрлэлийн арга”, “анги хоорондын тэмцэл”
              гэж гарвал энэ онол.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Жишээ</h2>
            <p className="text-gray-700 mt-2">
              Хүн төрөлхтөн анхны хамтын нийгмээс капитализм хүртэл эдийн засгийн
              өөрчлөлтөөр дамжин хөгжсөн.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}