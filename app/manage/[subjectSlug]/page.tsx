import { subjectRoles, subjects } from "../../../src/mock/community";
import { canAccessManage } from "../../../src/lib/community-access";

type Props = { params: { subjectSlug: string } };

export default function ManageCommunityPage({ params }: Props) {
  const subject = subjects.find((s) => s.slug === params.subjectSlug);
  if (!subject) return <main>Subject not found</main>;

  // 仮置き: ログインユーザーは user_owner
  const role = subjectRoles.find((r) => r.subjectId === subject.id && r.userId === "user_owner")?.role;

  if (!canAccessManage(role)) {
    return <main>管理画面アクセス権限がありません。</main>;
  }

  return (
    <main>
      <h1>Manage: {subject.name}</h1>
      <ul>
        <li><a href={`/manage/${subject.slug}/members`}>Members</a></li>
        <li><a href={`/manage/${subject.slug}/posts`}>Posts</a></li>
        <li><a href={`/manage/${subject.slug}/events`}>Events</a></li>
        <li><a href={`/manage/${subject.slug}/participations`}>Participations</a></li>
        <li><a href={`/manage/${subject.slug}/exhibitions`}>Exhibitions</a></li>
      </ul>
    </main>
  );
}
