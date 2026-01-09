export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/thank-you/',
        ],
      },
    ],
    sitemap: 'https://www.iniziosolutions.com/sitemap.xml',
  }
}
