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

            <section>
                <div className="postbox__area pt-60 pb-60">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-8 col-xl-8 col-lg-8">
                                <div className="postbox__wrapper pr-20">
                                    {blog.map((post) => (
                                        <div key={post.slug}>
                                            <article className="postbox__item format-image mb-50 transition-3">
                                                <div className="postbox__thumb w-img">
                                                    <Link href={`/blog/${post.slug}`}>
                                                        <img src={post.image} alt="" />
                                                    </Link>
                                                    <div className="postbox__meta">
                                                        <span><i className="fal fa-clock"></i> {post.date}</span>
                                                    </div>
                                                </div>
                                                <div className="postbox__content">

                                                    <h2 className="postbox__title">
                                                        <Link href={`/blog/${post.slug}`}>
                                                            {post.title}
                                                        </Link>
                                                    </h2>
                                                    <div className="postbox__text">
                                                        <p>{post.summary}</p>
                                                    </div>
                                                    <div className="post__button">
                                                        <Link className="tp-btn-sm" href={`/blog/${post.slug}`}> READ MORE</Link>
                                                    </div>
                                                </div>
                                            </article>

                                        </div>
                                    ))}

                                    {/* <div className="basic-pagination">
                                        <nav>
                                            <ul>
                                                <li>
                                                    <Link href="#">
                                                        <i className="fal fa-arrow-left"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#" className="current">1</Link>
                                                </li>
                                                <li>
                                                    <Link href="#">2</Link>
                                                </li>
                                                <li>
                                                    <Link href="#">3</Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <i className="fal fa-arrow-right"></i>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-4 col-lg-4">
                                <div className="sidebar__wrapper">
                                    <>
                                        <SideBar />
                                    </>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
