import { subjects } from "../src/mock/community";

export default function HomePage() {
  return (
    <main style={{ padding: 24, fontFamily: "sans-serif" }}>
      <h1>Funwow Phase2 MVP Sandbox</h1>
      <p>まずは以下から触れます。</p>

      <h2>コミュニティ一覧</h2>
      <ul>
        <li>
          <a href="/communities">/communities</a>
        </li>
      </ul>

      <h2>サンプル導線（artist）</h2>
      <ul>
        <li><a href="/communities/aoi-kanda">コミュニティ詳細</a></li>
        <li><a href="/communities/aoi-kanda/posts/post_001">公開Post</a></li>
        <li><a href="/communities/aoi-kanda/posts/post_002">members_only Post（freeだと非表示）</a></li>
        <li><a href="/communities/aoi-kanda/events/event_001">公開Event</a></li>
        <li><a href="/communities/aoi-kanda/events/event_002">members_only Event（annual想定）</a></li>
        <li><a href="/communities/aoi-kanda/join">Join</a></li>
        <li><a href="/communities/aoi-kanda/pass">MemberPass</a></li>
      </ul>

      <h2>管理画面導線（仮置き user_owner）</h2>
      <ul>
        <li><a href="/manage/aoi-kanda">/manage/aoi-kanda</a></li>
      </ul>

      <h2>利用可能subjectSlug</h2>
      <ul>
        {subjects.map((subject) => (
          <li key={subject.id}>
            {subject.slug} ({subject.type})
          </li>
        ))}
      </ul>
    </main>
  );
}
