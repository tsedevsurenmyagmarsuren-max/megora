import { yeshTests } from "@/data/yeshTests";
import { notFound } from "next/navigation";

export default async function YeshTestDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const test = yeshTests.find((t) => t.id === id);

  if (!test) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white px-8 py-10">
      <h1 className="text-3xl font-bold mb-2">{test.title}</h1>

      <p className="text-gray-600 mb-8">
        {test.questions.length} асуулт • {test.durationMinutes} минут
      </p>

      <div className="space-y-6">
        {test.questions.map((q, index) => (
          <div key={q.id} className="border rounded-2xl p-5">
            <h2 className="font-bold mb-4">
              {index + 1}. {q.question}
            </h2>

            <div className="space-y-2">
              {q.options.map((option, i) => (
                <label key={i} className="block">
                  <input
                    type="radio"
                    name={`question-${q.id}`}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Задгай даалгавар</h2>

      <div className="space-y-6">
        {test.openTasks.map((task, index) => (
          <div key={task.id} className="border rounded-2xl p-5">
            <h3 className="font-bold mb-3">
              {index + 1}. {task.question}
            </h3>

            <textarea
              className="w-full border rounded-xl p-3 min-h-32"
              placeholder="Хариултаа бичнэ үү..."
            />
          </div>
        ))}
      </div>
    </main>
  );
}