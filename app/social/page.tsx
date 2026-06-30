import Link from "next/link";
import { socialLessons } from "@/data/social";

export default function SocialPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-blue-600 mb-3">
        🏛️ Нийгэм, нийгмийн харилцаа
      </h1>

      <p className="text-gray-600 mb-8">
        10–11-р ангийн Нийгмийн ухааны хичээл
      </p>

      <div className="grid gap-5">
        {socialLessons.map((lesson) => (
          <Link
            key={lesson.slug}
            href={`/social/${lesson.slug}`}
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