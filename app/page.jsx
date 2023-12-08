import Link from "next/link";
import prisma from "@/lib/prisma";
import { Suspense } from "react";

async function getPosts() {
  const quizzes = await prisma.quiz.findMany();
  return quizzes;
}
async function Quizzes() {
  const quizzes = await getPosts();
  console.log(quizzes);
  return (
    <ul>
      {quizzes.map((quiz) => (
        <li key={quiz.id}>
          <Link href={`/quiz/${quiz.id}`}>{quiz.title}</Link>
        </li>
      ))}
    </ul>
  );
}
export default function Home() {
  return (
    <section>
      <h1 className="text-2xl font-semibold">All quizzes</h1>
      <Suspense fallback={<p>Loading.....</p>}>
        <Quizzes />
      </Suspense>
    </section>
  );
}
