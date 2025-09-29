import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/dashboard/', '/checkout/', '/book/'],
    },
    sitemap: 'https://westrosemedia.com/sitemap.xml',
  }
}
