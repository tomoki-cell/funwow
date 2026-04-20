import type {
  CommunityMembership,
  Event,
  MemberPass,
  MembershipPlan,
  Post,
  Subject,
  SubjectRole,
} from "../models/community";

export const subjects: Subject[] = [
  {
    id: "sub_artist_01",
    slug: "aoi-kanda",
    type: "artist",
    name: "Aoi Kanda",
    tagline: "素材実験を続ける現代作家",
    description: "制作プロセス、展示準備、公開トークの裏側をコミュニティで共有します。",
  },
  {
    id: "sub_space_01",
    slug: "north-light-space",
    type: "art_space",
    name: "North Light Space",
    tagline: "地域で育てるオープンスペース",
    description: "展示設営、ワークショップ企画、地域連携プロジェクトの進捗を発信します。",
  },
  {
    id: "sub_fair_01",
    slug: "tokyo-mini-art-fair",
    type: "art_fair",
    name: "Tokyo Mini Art Fair",
    tagline: "新進作家と出会う年次フェア",
    description: "フェア準備、参加作家情報、会員限定プレビュー案内を公開します。",
  },
];

export const plans: MembershipPlan[] = subjects.flatMap((subject) => [
  {
    id: `${subject.id}_free`,
    subjectId: subject.id,
    tier: "free",
    label: "Free",
    priceJpy: 0,
    summary: "公開投稿・公開イベントを閲覧可能",
  },
  {
    id: `${subject.id}_annual`,
    subjectId: subject.id,
    tier: "annual",
    label: "Annual",
    priceJpy: 12000,
    summary: "会員限定投稿・イベント参加・MemberPass発行",
    bundledFunwowFeatures: ["イベント先行案内", "アーカイブ閲覧"],
  },
]);

export const memberships: CommunityMembership[] = [
  {
    id: "mem_001",
    subjectId: "sub_artist_01",
    userId: "user_demo_free",
    tier: "free",
    startedAt: "2026-04-01",
    status: "active",
  },
  {
    id: "mem_002",
    subjectId: "sub_artist_01",
    userId: "user_demo_annual",
    tier: "annual",
    startedAt: "2026-03-15",
    status: "active",
  },
];

export const subjectRoles: SubjectRole[] = [
  { subjectId: "sub_artist_01", userId: "user_owner", role: "owner" },
  { subjectId: "sub_space_01", userId: "user_manager", role: "manager" },
];

export const posts: Post[] = [
  {
    id: "post_001",
    subjectId: "sub_artist_01",
    title: "制作ノート Vol.1",
    body: "公開版: 新シリーズの素材探索について。",
    visibility: "public",
    minimumTier: "free",
    publishedAt: "2026-04-10",
  },
  {
    id: "post_002",
    subjectId: "sub_artist_01",
    title: "年次会員向け: 展示レイアウト先行共有",
    body: "annual会員向け詳細。",
    visibility: "members_only",
    minimumTier: "annual",
    publishedAt: "2026-04-12",
  },
];

export const events: Event[] = [
  {
    id: "event_001",
    subjectId: "sub_artist_01",
    title: "オープンスタジオ",
    description: "free会員でも参加可能な公開スタジオデー",
    startsAt: "2026-05-10T11:00:00+09:00",
    endsAt: "2026-05-10T13:00:00+09:00",
    visibility: "public",
    minimumTier: "free",
  },
  {
    id: "event_002",
    subjectId: "sub_artist_01",
    title: "annual会員限定 プレビュー会",
    description: "展示作品の先行プレビュー",
    startsAt: "2026-05-15T18:00:00+09:00",
    endsAt: "2026-05-15T20:00:00+09:00",
    visibility: "members_only",
    minimumTier: "annual",
  },
];

export const memberPasses: MemberPass[] = [
  {
    id: "pass_001",
    subjectId: "sub_artist_01",
    userId: "user_demo_annual",
    tier: "annual",
    serialCode: "AK-2026-0001",
    validUntil: "2027-03-31",
  },
];
