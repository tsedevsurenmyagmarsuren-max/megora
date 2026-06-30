import { economicsLessons } from "@/data/economics";
import { notFound } from "next/navigation";

export default async function EconomicsLessonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const lesson = economicsLessons.find(
    (item) => item.slug === slug
  );

  if (!lesson) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-yellow-600 text-white py-10">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl font-bold">{lesson.title}</h1>
          <p className="mt-2 text-yellow-100">{lesson.description}</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto p-8">
        <div className="bg-white rounded-2xl shadow p-8">
          <p className="text-gray-500 mb-6">
            ⏱️ Унших хугацаа: {lesson.readTime}
          </p>

          <h2 className="text-2xl font-bold mb-4">
            🎯 Энэ хичээлээр сурах зүйлс
          </h2>

          <ul className="list-disc ml-6 mb-8 space-y-2">
            {lesson.objectives.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold mb-4">
            📖 Онол
          </h2>

          <p className="text-gray-700 whitespace-pre-line leading-8">
            {lesson.content}
          </p>
        </div>
      </div>
    </main>
  );
}