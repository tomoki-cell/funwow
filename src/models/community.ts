export type SubjectType = "artist" | "art_space" | "art_fair";

export type Visibility = "public" | "members_only";
export type MembershipTier = "free" | "annual";

/**
 * 仮置き: 1 Subject = 1 Community のMVP前提。
 * 既存Phase1との衝突回避のため、Subjectは追加モデルとして定義。
 */
export interface Subject {
  id: string;
  slug: string;
  type: SubjectType;
  name: string;
  tagline: string;
  description: string;
}

export interface SubjectRole {
  subjectId: string;
  userId: string;
  role: "owner" | "manager" | "editor" | "viewer";
}

export interface MembershipPlan {
  id: string;
  subjectId: string;
  tier: MembershipTier;
  label: string;
  priceJpy: number;
  summary: string;
  // 仮置き: annualのFunwowバンドル特典は静的表示のみに留める
  bundledFunwowFeatures?: string[];
}

export interface CommunityMembership {
  id: string;
  subjectId: string;
  userId: string;
  tier: MembershipTier;
  startedAt: string;
  status: "active" | "inactive";
}

export interface Post {
  id: string;
  subjectId: string;
  title: string;
  body: string;
  visibility: Visibility;
  minimumTier: MembershipTier;
  publishedAt: string;
}

export interface Event {
  id: string;
  subjectId: string;
  title: string;
  description: string;
  startsAt: string;
  endsAt: string;
  visibility: Visibility;
  minimumTier: MembershipTier;
}

export interface EventEntry {
  id: string;
  eventId: string;
  userId: string;
  status: "requested" | "confirmed" | "cancelled";
}

export interface MemberPass {
  id: string;
  subjectId: string;
  userId: string;
  tier: MembershipTier;
  serialCode: string;
  validUntil?: string;
}

export interface Participation {
  id: string;
  subjectId: string;
  userId: string;
  category: "volunteer" | "creator_support" | "exhibitor";
  note: string;
  status: "open" | "assigned" | "closed";
}

export interface SubjectExhibitionLink {
  id: string;
  subjectId: string;
  exhibitionId: string;
  relationType: "host" | "partner" | "featured";
}
