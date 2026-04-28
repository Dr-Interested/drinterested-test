import Script from "next/script"

interface SEOSchemaProps {
  schema?: object
}

export default function SeoSchema({ schema }: SEOSchemaProps) {
  if (!schema) return null

  return (
    <Script
      id="seo-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}
