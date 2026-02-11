export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/thank-you/',
          '/*?',
          '/*.htm',
          '/*.html',
          '/*.shtml',
          '/shopdetail/',
        ],
      },
    ],
    sitemap: 'https://www.iniziosolutions.com/sitemap.xml',
  }
}