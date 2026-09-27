// Absolute site URL for metadata, sitemap and structured data.
// Set NEXT_PUBLIC_SITE_URL once a custom domain is live; on Vercel the production URL is used automatically.
export const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
        ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
        : 'http://localhost:3000');
