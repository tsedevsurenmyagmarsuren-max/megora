import Link from "next/link";
import { yeshTests } from "@/data/yeshTests";

export default function YeshTestPage() {
  return (
    <main className="min-h-screen bg-white px-8 py-10">
      <h1 className="text-3xl font-bold mb-8">ЭЕШ Test</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {yeshTests.map((test) => (
          <Link
            key={test.id}
            href={`/yesh-test/${test.id}`}
            className="border rounded-2xl p-6 hover:shadow-lg transition block"
          >
            <h2 className="text-xl font-bold">{test.title}</h2>
            <p className="text-gray-600 mt-2">
              {test.questions.length} асуулт • {test.durationMinutes} минут
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}