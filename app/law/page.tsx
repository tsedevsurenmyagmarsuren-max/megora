import Link from "next/link";
import { lawLessons } from "@/data/law";

export default function LawPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-red-600 mb-3">
        ⚖️ Эрх зүй
      </h1>

      <p className="text-gray-600 mb-8">
        Хүний эрх, үндсэн хууль, өмч, гэмт хэрэг ба хамгааллын тогтолцоо
      </p>

      <div className="grid gap-5">
        {lawLessons.map((lesson) => (
          <Link
            key={lesson.slug}
            href={`/law/${lesson.slug}`}
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