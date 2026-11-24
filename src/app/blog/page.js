import SecondHero from "../components/SecondHero"
import blog from "@/data/post.json"
import Link from "next/link";
import SideBar from "../components/SideBar";

export const metadata = {
    title: "Blog Posts | Inizio Solutions",
    description: "Stay ahead with the latest insights on our services, promotional products, branding trends, and effective marketing strategies.",
    alternates: {
        canonical: "https://www.iniziosolutions.com/blog",
    },
    icons: {
        icon: "/assets/images/inizo-logo.webp",
    },
};

export default function blogs() {

    return (
        <>
            <SecondHero subheading={"Blogs"}
                heading={"Blog Posts"}
                description={"Stay ahead with the latest insights on our services, promotional products, emerging branding trends, and effective marketing strategies. Our industry experts provide curated articles, tips, and case studies to help you grow your business and elevate your brand."} />

            <section className="iz-root iz-container iz-section">
                <div className="iz-blog-layout">
                    <div className="iz-blog-grid">
                        {blog.map((post, i) => (
                            <article key={post.slug} className="iz-post-card iz-reveal" style={{ "--d": i % 2 }}>
                                <Link href={`/blog/${post.slug}`} className="iz-post-card__img" tabIndex={-1} aria-hidden="true">
                                    <img src={post.image} alt="" loading="lazy" />
                                </Link>
                                <div className="iz-post-card__body">
                                    <span className="iz-post-card__date">{post.date}</span>
                                    <h2>
                                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                    </h2>
                                    <p>{post.summary}</p>
                                    <Link className="iz-link" href={`/blog/${post.slug}`}>Read more →</Link>
                                </div>
                            </article>
                        ))}
                    </div>
                    <aside>
                        <SideBar />
                    </aside>
                </div>
            </section>
        </>
    )
}
