import { plans, subjects } from "../../../../src/mock/community";

type Props = { params: { subjectSlug: string } };

export default function CommunityJoinPage({ params }: Props) {
  const subject = subjects.find((s) => s.slug === params.subjectSlug);
  if (!subject) return <main>Community not found</main>;

  const subjectPlans = plans.filter((plan) => plan.subjectId === subject.id);

  return (
    <main>
      <h1>{subject.name} への参加</h1>
      <ul>
        {subjectPlans.map((plan) => (
          <li key={plan.id}>{plan.label} / ¥{plan.priceJpy}</li>
        ))}
      </ul>
      <p>※ 課金処理は実装対象外（MVP骨格）。</p>
    </main>
  );
}
