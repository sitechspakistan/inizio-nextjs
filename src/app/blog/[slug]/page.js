import blog from "@/data/post.json"
import Link from "next/link";
import ContactForm from "@/app/components/ContactForm";
import SideBar from "@/app/components/SideBar";
import PageHero from "@/app/components/ui/PageHero";


export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = blog.find((p) => p.slug === slug);

    if (!post) return { title: "Post not found" };

    return {
        title: post.seo.title,
        description: post.seo.description,
        alternates: {
            canonical: post.seo.canonical, // JSON me already full URL
        },
        icons: {
            icon: "/assets/images/inizo-logo.webp",
        },
    };
}


export default async function BlogDetail({ params }) {
    const { slug } = await params;
    const post = blog.find((p) => p.slug === slug);

    if (!post) return <p>Post not found!</p>;

    return (
        <>
            <PageHero className="iz-phero--post" crumb={<Link href="/blog">Blog</Link>} title={post.title}>
                <span className="iz-post-card__date">{post.date}</span>
            </PageHero>

            <section className="iz-root iz-container iz-section" style={{ paddingTop: 48 }}>
                <div className="iz-blog-layout">
                    <article>
                        <img className="iz-article__cover" src={post.image} alt={post.title} />
                        <div className="iz-prose" dangerouslySetInnerHTML={{ __html: post?.content || "" }} />
                        <p style={{ marginTop: 40 }}>
                            <Link href="/blog" className="iz-back">← Back to all posts</Link>
                        </p>
                    </article>
                    <aside>
                        <SideBar />
                    </aside>
                </div>
            </section>
            <ContactForm />
        </>
    );
}

export async function generateStaticParams() {
    return blog
        .filter((post) => post.slug)
        .map((post) => ({
            slug: post.slug,
        }));
}
