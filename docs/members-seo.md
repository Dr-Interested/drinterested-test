# Members SEO

This repo indexes members in three places: structured data on the members page, the RSS feed, and dedicated `/team/:id` profile pages. Update all by editing `data/members.ts` (the data source) and, if needed, `app/rss.xml/route.tsx` (image descriptions).

## How member SEO works
- `data/members.ts` exports `getAllMembers()`, which is the single source for member lists used by SEO, RSS, and the sitemap.
- `app/members/page.tsx` builds a JSON-LD graph from `getAllMembers()`. Each member becomes a `Person` with `name`, `jobTitle`, `image`, `url`, and `sameAs` links.
- `app/rss.xml/route.tsx` publishes each member as an RSS item with their role, bio, and image. This is used for indexing and rich previews.
- `app/team/[id]/page.tsx` renders the member profile page used by RSS URLs and the sitemap, and injects per-member `Person` JSON-LD.

## Adding or updating members
1. Update `data/members.ts` with the new member(s). Every entry must include:
   - `id` (unique)
   - `name`
   - `role` (this is the job title shown in SEO)
   - `image` (path in `public/`, e.g. `/jane-doe.png`)
   - `bio`
2. If you add new member images, optionally update `imageDescriptions` in `app/rss.xml/route.tsx` to provide a better image description. If you use `/logo.png`, the RSS output will automatically fall back to `"Name, Role"` for the description.

## Quick checklist
- Member `role` matches the actual title (Director, Deputy Director, Coordinator, Ambassador, etc.).
- Member `image` exists in `public/` and matches the person.
- `data/members.ts` and `app/members/page.tsx` stay in sync (JSON-LD uses the data file directly).
- If you see mismatched images in search, check the `image` path first, then update `imageDescriptions`.
