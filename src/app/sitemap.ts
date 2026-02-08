import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://masledinnext.vercel.app'

    // Static pages
    const staticPages = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/products`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/quote`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
    ]

    // Category pages
    const categories = ['indoor', 'outdoor', 'rental', 'transparent', 'standee']
    const categoryPages = categories.map(category => ({
        url: `${baseUrl}/products/${category}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    // Product pages
    const products = [
        { category: 'indoor', slug: 'infinity' },
        { category: 'indoor', slug: 'hd-pro' },
        { category: 'indoor', slug: 'cob' },
        { category: 'indoor', slug: 'bendex' },
        { category: 'outdoor', slug: 'ox' },
        { category: 'outdoor', slug: 'storm' },
        { category: 'outdoor', slug: 'flexedge' },
        { category: 'rental', slug: 'rx-indoor' },
        { category: 'rental', slug: 'eventsmax' },
        { category: 'transparent', slug: 'transglow' },
        { category: 'standee', slug: 'standpro' },
    ]
    const productPages = products.map(product => ({
        url: `${baseUrl}/products/${product.category}/${product.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    return [...staticPages, ...categoryPages, ...productPages]
}
