import Link from "next/link";
import postgres from "postgres";

type Quiz = {
  Quiz_id: number;
  Quiz_name: string;
};
async function Quizzes() {
  const quizzes = [
    { Quiz_id: 1, Quiz_name: "Math Quiz" },
    { Quiz_id: 2, Quiz_name: "History Quiz" },
    { Quiz_id: 3, Quiz_name: "Science Quiz" },
    { Quiz_id: 4, Quiz_name: "English Quiz" },
    // Add more dummy data as needed
  ];
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
