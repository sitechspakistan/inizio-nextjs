const SITE_URL = "https://iniziosolutions.com";
const SITE_NAME = "Inizio Solutions";
const DEFAULT_IMAGE = {
    url: `${SITE_URL}/assets/images/open-graph.jpg`,
    width: 1200,
    height: 630,
    alt: "Inizio Solutions",
};

/**
 * Builds a consistent Next.js metadata object (title, description,
 * canonical, Open Graph and Twitter tags) for a page.
 */
export function buildMetadata({ title, description, canonical, image, type = "website" }) {
    const images = [image ? { ...DEFAULT_IMAGE, url: image.startsWith("http") ? image : `${SITE_URL}${image}`, alt: title } : DEFAULT_IMAGE];

    return {
        metadataBase: new URL(SITE_URL),
        title: { absolute: title },
        description,
        alternates: { canonical },
        icons: { icon: "/assets/images/inizo-logo.webp" },
        openGraph: {
            title,
            description,
            url: canonical,
            siteName: SITE_NAME,
            images,
            locale: "en_US",
            type,
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: images.map((i) => i.url),
        },
    };
}
