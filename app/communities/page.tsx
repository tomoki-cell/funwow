import { subjects } from "../../src/mock/community";

export default function CommunitiesPage() {
  return (
    <main>
      <h1>Communities</h1>
      <p>主体コミュニティの一覧（MVP骨格）</p>
      <ul>
        {subjects.map((subject) => (
          <li key={subject.id}>
            <a href={`/communities/${subject.slug}`}>{subject.name}</a> ({subject.type})
          </li>
        ))}
      </ul>
    </main>
  );
}
