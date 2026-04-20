import { events, subjects } from "../../../../../src/mock/community";
import { canViewByVisibility } from "../../../../../src/lib/community-access";

type Props = { params: { subjectSlug: string; eventId: string } };

export default function CommunityEventPage({ params }: Props) {
  const subject = subjects.find((s) => s.slug === params.subjectSlug);
  const event = events.find((e) => e.id === params.eventId);
  if (!subject || !event) return <main>Event not found</main>;

  // 仮置き: デモユーザーをannual会員として扱う
  const canView = canViewByVisibility(event.visibility, "annual", event.minimumTier);

  return (
    <main>
      <h1>{event.title}</h1>
      <p>{subject.name}</p>
      {canView ? <p>{event.description}</p> : <p>members_only: このイベントは会員限定です。</p>}
    </main>
  );
}
