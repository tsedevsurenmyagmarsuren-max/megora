"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function SocializationLessonPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="flex items-center justify-between px-8 py-6 bg-white border-b">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Megora
        </Link>
        <UserButton />
      </nav>

      <section className="max-w-4xl mx-auto px-8 py-12">
        <Link href="/subjects/social/lessons" className="text-blue-600">
          ← Буцах
        </Link>

        <h1 className="text-4xl font-bold mt-6">Нийгэмшил</h1>

        <div className="bg-white rounded-2xl shadow p-6 mt-8 space-y-8">
          <div>
            <h2 className="text-2xl font-bold">1. Нийгэмшил гэж юу вэ?</h2>
            <p className="text-gray-700 mt-2">
              Нийгэмшил гэдэг нь хүн нийгмийн хэм хэмжээ, үнэт зүйл, зан үйл,
              мэдлэг, чадварыг эзэмшиж нийгмийн гишүүн болон төлөвших үйл явц юм.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">2. Анхдагч нийгэмшил</h2>
            <p className="text-gray-700 mt-2">
              Хүүхэд бага насандаа гэр бүл, ойр дотнын орчноос хэл, зан байдал,
              анхны хэм хэмжээ, харилцааны дадлыг эзэмших үе.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">3. Хоёрдогч нийгэмшил</h2>
            <p className="text-gray-700 mt-2">
              Сургууль, найз нөхөд, ажлын газар, хэвлэл мэдээлэл зэрэг өргөн
              орчноор дамжин шинэ үүрэг, мэдлэг, зан төлөв эзэмших үйл явц.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">4. Нийгэмшүүлэгч агентууд</h2>
            <ul className="list-disc ml-6 mt-3 text-gray-700">
              <li>Гэр бүл</li>
              <li>Сургууль</li>
              <li>Найз нөхөд</li>
              <li>Хэвлэл мэдээлэл</li>
              <li>Ажлын байр</li>
              <li>Шашин, соёлын орчин</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold">5. Нийгэмшлийн ач холбогдол</h2>
            <p className="text-gray-700 mt-2">
              Нийгэмшлээр дамжуулан хүн нийгэмд амьдрах чадвартай болж,
              өөрийн статус, үүргийг ойлгон, бусадтай зохицон харилцдаг.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h2 className="font-bold">ЭЕШ-д анхаарах</h2>
            <p className="text-gray-700 mt-2">
              “Анхдагч нийгэмшил” гэвэл гэр бүл, бага нас. “Хоёрдогч нийгэмшил”
              гэвэл сургууль, найз нөхөд, ажил, хэвлэл мэдээлэл гэж ялгаарай.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}