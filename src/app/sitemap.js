export default function sitemap() {
  const baseUrl = 'https://www.iniziosolutions.com'
  const currentDate = new Date().toISOString()

  // 1. Static and Service Pages
  const staticPages = [
    { url: `${baseUrl}/, lastModified: currentDate, priority: 1.0 ` },
    { url: `${baseUrl}/services, lastModified: currentDate, priority: 0.8 ` },
    { url: `${baseUrl}/services/embroidery-digitizing, lastModified: currentDate, priority: 0.8 ` },
    { url: `${baseUrl}/services/vector-art, lastModified: currentDate, priority: 0.8 ` },
    { url: `${baseUrl}/services/custom-patches, lastModified: currentDate, priority: 0.8 ` },
    { url: `${baseUrl}/pricing, lastModified: currentDate, priority: 0.8 ` },
    { url: `${baseUrl}/portfolio, lastModified: currentDate, priority: 0.8 ` },
    { url: `${baseUrl}/place-an-order, lastModified: currentDate, priority: 0.8 ` },
    { url: `${baseUrl}/t-shirt, lastModified: currentDate, priority: 0.8 ` },
    { url: `${baseUrl}/caps, lastModified: currentDate, priority: 0.8 ` },
  ]

  // 2. City Pages
  const cityPages = [
    'kissimmee', 'sunrise', 'okeechobee', 'new-york', 'buffalo', 'phoenix'
  ].map(city => ({
    url: `${baseUrl}/cities/${city}`,
    lastModified: currentDate,
    priority: 0.6,
  }))

  // 3. Blog Pages (Yahan aap naye blog slugs add karte jayenge)
  const blogPosts = [
    'what-is-embroidery-digitizing-beginners-guide',
    // 'future-blog-slug-2',
  ].map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: currentDate,
    priority: 0.7,
  }))

  return [...staticPages, ...cityPages, ...blogPosts]
}