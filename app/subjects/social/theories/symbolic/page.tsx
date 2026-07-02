"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function SymbolicPage() {
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
          Бэлгэдлийн харилцан үйлдлийн онол
        </h1>

        <p className="text-gray-600 mt-3">
          Хүмүүс өдөр тутмын харилцаандаа бэлгэдэл, хэл, дохио зангаагаар утга бүтээдэг гэж үздэг онол.
        </p>

        <div className="bg-white rounded-2xl shadow p-6 mt-8 space-y-6">
          <div>
            <h2 className="text-2xl font-bold">Гол санаа</h2>
            <p className="text-gray-700 mt-2">
              Нийгмийн бодит байдал нь хүмүүсийн харилцаа, утга оноох үйл явцаар бий болдог.
              Хүн бусдын үйлдэл, үг, тэмдэгтэд утга өгч түүндээ тохируулан хариу үйлдэл хийдэг.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Эрдэмтэд</h2>
            <ul className="list-disc ml-6 mt-2 text-gray-700">
              <li>Жорж Херберт Мид</li>
              <li>Чарльз Хортон Кули</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Түлхүүр үг</h2>
            <p className="text-gray-700 mt-2">
              харилцан үйлдэл, бэлгэдэл, хэл, утга, өдөр тутмын харилцаа, өөрийн дүр
            </p>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
            <h2 className="font-bold">ЭЕШ clue</h2>
            <p className="text-gray-700 mt-2">
              “Хүмүүсийн өдөр тутмын харилцаа”, “бэлгэдэл”, “утга оноох”,
              “хэл ба дохио зангаа” гэж гарвал энэ онол.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Жишээ</h2>
            <p className="text-gray-700 mt-2">
              Инээмсэглэл найрсаг байдлыг, дүрэмт хувцас тухайн хүний нийгмийн үүргийг,
              гар барих нь мэндчилгээний утгыг илэрхийлж болно.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}