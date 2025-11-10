import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.synctom.com'

  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/portfolio',
    '/industries',
    '/contact',
  ]

  const now = new Date()

  return staticRoutes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: path === '' ? 1 : 0.7,
  }))
}


