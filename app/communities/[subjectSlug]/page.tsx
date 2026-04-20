import { events, plans, posts, subjects } from "../../../src/mock/community";

type Props = { params: { subjectSlug: string } };

export default function CommunityDetailPage({ params }: Props) {
  const subject = subjects.find((s) => s.slug === params.subjectSlug);
  if (!subject) return <main>Community not found</main>;

  const subjectPlans = plans.filter((p) => p.subjectId === subject.id);
  const subjectPosts = posts.filter((p) => p.subjectId === subject.id);
  const subjectEvents = events.filter((e) => e.subjectId === subject.id);

  return (
    <main>
      <h1>{subject.name}</h1>
      <p>{subject.tagline}</p>
      <p>{subject.description}</p>

      <h2>参加プラン</h2>
      <ul>
        {subjectPlans.map((plan) => (
          <li key={plan.id}>
            {plan.label}: ¥{plan.priceJpy} / {plan.summary}
          </li>
        ))}
      </ul>

      <h2>Posts</h2>
      <ul>
        {subjectPosts.map((post) => (
          <li key={post.id}>
            <a href={`/communities/${subject.slug}/posts/${post.id}`}>{post.title}</a> ({post.visibility} / {post.minimumTier})
          </li>
        ))}
      </ul>

      <h2>Events</h2>
      <ul>
        {subjectEvents.map((event) => (
          <li key={event.id}>
            <a href={`/communities/${subject.slug}/events/${event.id}`}>{event.title}</a> ({event.visibility} / {event.minimumTier})
          </li>
        ))}
      </ul>

      <p>
        <a href={`/communities/${subject.slug}/join`}>Join</a> / <a href={`/communities/${subject.slug}/pass`}>MemberPass</a>
      </p>
    </main>
  );
}
