import Link from "next/link";

export default function Subjects() {
  return (
    <main className="min-h-screen p-10 bg-gray-50">
      <h1 className="text-4xl font-bold mb-8">📚 Хичээлүүд</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <Link href="/social" className="border rounded-xl p-6 bg-white hover:bg-blue-50 hover:shadow-lg transition">
          <h2 className="text-2xl font-bold">🏛️ Нийгмийн ухаан</h2>
          <p className="mt-3 text-gray-500">Нийгэм, нийгмийн харилцаа</p>
        </Link>

        <Link href="/culture" className="border rounded-xl p-6 bg-white hover:bg-purple-50 hover:shadow-lg transition">
          <h2 className="text-2xl font-bold">🎭 Соёл</h2>
          <p className="mt-3 text-gray-500">Соёлын ойлголт, ангилал, даяаршил</p>
        </Link>

        <Link href="/law" className="border rounded-xl p-6 bg-white hover:bg-red-50 hover:shadow-lg transition">
          <h2 className="text-2xl font-bold">⚖️ Эрх зүй</h2>
          <p className="mt-3 text-gray-500">Хүний эрх, хууль, өмч, гэмт хэрэг</p>
        </Link>

        <Link href="/politics" className="border rounded-xl p-6 bg-white hover:bg-green-50 hover:shadow-lg transition">
          <h2 className="text-2xl font-bold">🏛️ Улс төр</h2>
          <p className="mt-3 text-gray-500">Ардчилал, сонгууль, улс төрийн институт</p>
        </Link>

        <Link href="/economics" className="border rounded-xl p-6 bg-white hover:bg-yellow-50 hover:shadow-lg transition">
          <h2 className="text-2xl font-bold">📈 Эдийн засаг</h2>
          <p className="mt-3 text-gray-500">Макро эдийн засаг, санхүү, худалдаа</p>
        </Link>

        <Link href="/international" className="border rounded-xl p-6 bg-white hover:bg-cyan-50 hover:shadow-lg transition">
          <h2 className="text-2xl font-bold">🌍 Олон улсын харилцаа</h2>
          <p className="mt-3 text-gray-500">НҮБ, гадаад бодлого, даяаршил</p>
        </Link>
      </div>
    </main>
  );
}