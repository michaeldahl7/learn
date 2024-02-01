import Image from "next/image";

export default function Home() {
  return (
    <section>
      <h1>All Quizzes</h1>
      <ul>
        <li>
          <a href="/quiz/1">Quiz 1</a>
        </li>
        <li>
          <a href="/quiz/2">Quiz 2</a>
        </li>
        <li>
          <a href="/quiz/3">Quiz 2</a>
        </li>
      </ul>
    </section>
  );
}
