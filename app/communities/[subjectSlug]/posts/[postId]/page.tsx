import { posts, subjects } from "../../../../../src/mock/community";
import { canViewByVisibility } from "../../../../../src/lib/community-access";

type Props = { params: { subjectSlug: string; postId: string } };

export default function CommunityPostPage({ params }: Props) {
  const subject = subjects.find((s) => s.slug === params.subjectSlug);
  const post = posts.find((p) => p.id === params.postId);
  if (!subject || !post) return <main>Post not found</main>;

  // 仮置き: デモユーザーをfree会員として扱う
  const canView = canViewByVisibility(post.visibility, "free", post.minimumTier);

  return (
    <main>
      <h1>{post.title}</h1>
      <p>{subject.name}</p>
      {!canView ? <p>members_only: annualプランで閲覧できます。</p> : <p>{post.body}</p>}
    </main>
  );
}
