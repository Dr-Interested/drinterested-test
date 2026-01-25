import { notFound, redirect } from "next/navigation";
import { getMemberByIdOrSlug, getMemberSlug } from "@/data/members";

export default async function TeamLegacyRedirect({
  params,
}: {
  params?: { id?: string } | Promise<{ id?: string }>;
}) {
  const resolvedParams = await Promise.resolve(params);
  const memberId = resolvedParams?.id;
  if (!memberId) {
    notFound();
  }
  const member = getMemberByIdOrSlug(memberId);
  if (!member) {
    notFound();
  }

  const canonicalSlug = getMemberSlug(member);
  redirect(`/teams/${canonicalSlug}`);
}
