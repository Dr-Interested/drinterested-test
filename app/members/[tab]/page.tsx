import MembersClient from '../MembersClient'  // relative import works fine

interface PageProps {
  params: { tab: string }
}

export default function MembersPage({ params }: PageProps) {
  return <MembersClient />
}