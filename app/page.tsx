import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="flex items-center justify-between px-8 py-6 border-b">
        <h1 className="text-2xl font-bold text-blue-600">Megora</h1>

        <div className="flex gap-6">
          <Link href="/" className="hover:text-blue-600">Нүүр</Link>
          <Link href="/subjects" className="hover:text-blue-600">Хичээлүүд</Link>
          <Link href="/exams" className="hover:text-blue-600">Mock Test</Link>
          <Link href="/yesh-test" className="hover:text-blue-600">ЭЕШ Test</Link>
          <Link href="/login" className="hover:text-blue-600">Нэвтрэх</Link>
        </div>
      </nav>

      <section className="max-w-6xl mx-auto px-8 py-24 text-center">
        <h2 className="text-5xl font-bold leading-tight">
          Монгол сурагчдад зориулсан
          <br />
          <span className="text-blue-600">
            хамгийн хялбар суралцах платформ
          </span>
        </h2>

        <p className="text-gray-600 text-lg mt-6">
          Онол, тест, тайлбар бүгд нэг дор.
          <br />
          Илүү ухаалаг суралцъя.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <Link
            href="/subjects"
            className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 inline-block"
          >
            Хичээл эхлэх
          </Link>

          <Link
            href="/exams"
            className="border px-8 py-3 rounded-xl hover:bg-gray-100"
          >
            Mock Test
          </Link>

          <Link
            href="/yesh-test"
            className="border px-8 py-3 rounded-xl hover:bg-gray-100"
          >
            ЭЕШ Test
          </Link>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-8">
        <input
          type="text"
          placeholder="Хичээл хайх..."
          className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </section>

      <section className="max-w-6xl mx-auto py-20 px-8">
        <h3 className="text-3xl font-bold mb-10">Онцлох хэсгүүд</h3>

        <div className="grid md:grid-cols-3 gap-6">
          <Link
            href="/subjects"
            className="border rounded-2xl p-6 hover:shadow-lg transition block"
          >
            <h4 className="text-xl font-bold">🏛️ Нийгмийн ухаан</h4>
            <p className="text-gray-600 mt-3">
              Онол, тест, ЭЕШ-ийн бэлтгэл.
            </p>
          </Link>

          <Link
            href="/exams"
            className="border rounded-2xl p-6 hover:shadow-lg transition block"
          >
            <h4 className="text-xl font-bold">📝 Mock Test</h4>
            <p className="text-gray-600 mt-3">
              Өмнөх mock test-үүдээ ажиллах.
            </p>
          </Link>

          <Link
            href="/yesh-test"
            className="border rounded-2xl p-6 hover:shadow-lg transition block"
          >
            <h4 className="text-xl font-bold">🎯 ЭЕШ Test</h4>
            <p className="text-gray-600 mt-3">
              ЭЕШ материал дээр суурилсан тест.
            </p>
          </Link>
        </div>
      </section>

      <footer className="border-t py-8 text-center text-gray-500">
        © 2026 Megora. All rights reserved.
      </footer>
    </main>
  );
}