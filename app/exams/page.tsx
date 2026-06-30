import Link from "next/link";
import { exams } from "@/data/exams";

export default function ExamsPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-4xl font-bold mb-8">📝 Шалгалт</h1>

      <div className="grid gap-5">
        {exams.map((exam) => (
          <Link
            key={exam.slug}
            href={`/exams/${exam.slug}`}
            className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-bold">{exam.title}</h2>
            <p className="text-gray-500 mt-2">{exam.description}</p>
            <p className="text-gray-400 mt-2">⏱️ {exam.duration}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}