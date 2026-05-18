import Script from "next/script"
import DOMPurify from 'dompurify'

interface SEOSchemaProps {
  schema?: object
}

function sanitizeHtml(html: string | null | undefined) {
  return html
    ? DOMPurify.sanitize(html, {
        ALLOWED_TAGS: ['span', 'p'],
        ALLOWED_ATTR: ['class'],
      })
    : '';
}

export default function SeoSchema({ schema }: SEOSchemaProps) {
  if (!schema) return null

  return (
    <Script
      id="seo-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: sanitizeHtml(JSON.stringify(schema)),
      }}
    />
  )
}
