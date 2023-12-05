import Link from "next/link";
import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!);

type Quiz = {
  Quiz_id: number;
  Quiz_name: string;
};
async function Quizzes() {
  const quizzes: Quiz[] = await sql`SELECT * FROM quizzes`;
  return (
    <ul>
      {quizzes.map((quiz) => (
        <li key={quiz.Quiz_id}>
          <Link href={`/quiz/${quiz.Quiz_id}`}>{quiz.Quiz_name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <section>
      <h1>All quizzes</h1>
      <Quizzes />
    </section>
  );
}
