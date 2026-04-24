import { MetadataRoute } from 'next'
import { blogPosts } from '@/data/blogPosts'
import { articleHref, getAllCollections } from '@/lib/help/load-content'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://westrosemedia.com'

  const helpEntries: MetadataRoute.Sitemap = (() => {
    const entries: MetadataRoute.Sitemap = [
      {
        url: `${baseUrl}/help`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.75,
      },
    ]
    for (const col of getAllCollections()) {
      entries.push({
        url: `${baseUrl}/help/${col.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.65,
      })
      for (const a of col.articles) {
        entries.push({
          url: `${baseUrl}${articleHref(a)}`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.55,
        })
      }
      for (const sub of col.subCollections) {
        entries.push({
          url: `${baseUrl}/help/${col.slug}/${sub.slug}`,
          lastModified: new Date(),
          changeFrequency: 'weekly',
          priority: 0.6,
        })
        for (const a of sub.articles) {
          entries.push({
            url: `${baseUrl}${articleHref(a)}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.55,
          })
        }
      }
    }
    return entries
  })()

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'monthly',
    priority: 0.65,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/mastermind`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/packages`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/cadence`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    ...helpEntries,
    {
      url: `${baseUrl}/apply`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/how-it-works`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/influence`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/vip`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/quiz`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/calgary`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/vancouver`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/toronto`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    ...blogEntries,
    {
      url: `${baseUrl}/login`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
