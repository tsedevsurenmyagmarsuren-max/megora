import Link from "next/link";
import { cultureLessons } from "@/data/culture";

export default function CulturePage() {
  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-purple-600 mb-3">
        🎭 Соёл
      </h1>

      <p className="text-gray-600 mb-8">
        Соёлын ойлголт, бүтэц, ангилал ба даяаршил
      </p>

      <div className="grid gap-5">
        {cultureLessons.map((lesson) => (
          <Link
            key={lesson.slug}
            href={`/culture/${lesson.slug}`}
            className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold">
              {lesson.title}
            </h2>

            <p className="text-gray-500 mt-2">
              {lesson.description}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}