import type { MembershipTier, SubjectRole, Visibility } from "../models/community";

export function canViewByTier(userTier: MembershipTier, requiredTier: MembershipTier): boolean {
  const rank: Record<MembershipTier, number> = { free: 0, annual: 1 };
  return rank[userTier] >= rank[requiredTier];
}

export function canViewByVisibility(
  visibility: Visibility,
  userTier: MembershipTier,
  requiredTier: MembershipTier,
): boolean {
  if (visibility === "public") return true;
  return canViewByTier(userTier, requiredTier);
}

export function canAccessManage(role?: SubjectRole["role"]): boolean {
  return role === "owner" || role === "manager" || role === "editor";
}
