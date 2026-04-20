import { memberPasses, subjects } from "../../../../src/mock/community";

type Props = { params: { subjectSlug: string } };

export default function CommunityPassPage({ params }: Props) {
  const subject = subjects.find((s) => s.slug === params.subjectSlug);
  if (!subject) return <main>Community not found</main>;

  const pass = memberPasses.find((p) => p.subjectId === subject.id);

  return (
    <main>
      <h1>{subject.name} MemberPass</h1>
      {pass ? <p>{pass.serialCode} / {pass.tier}</p> : <p>pass未発行</p>}
    </main>
  );
}
