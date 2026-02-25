import blog from "@/data/post.json"
import Link from "next/link";
import ContactForm from "@/app/components/ContactForm";


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
    // Make sure params.slug exists

    const { slug } = await params;
    // console.log("Params", blog);
    const post = blog.find((p) => p.slug === slug);

    if (!post) return <p>Post not found!</p>;

    return (
        <>
            <section className="pt-100 pb-0">
                <div className="blogdetail__area pt-60">
                    <div className="container">
                        <div className="d-flex align-items-center wow tpfadeRight" data-wow-duration=".9s"
                            data-wow-delay="1.2s">
                            <Link href="/blog">
                                <div className="back-btn">
                                    <i className="fal fa-arrow-left fw-bold"></i>
                                </div>
                            </Link>
                            <span className="fw-bold fs-6 ms-3">{post.date}</span>
                        </div>
                        <h1 className="pt-10 pb-20 wow tpfadeRight" data-wow-duration=".9s"
                            data-wow-delay="1.2s">{post.title}</h1>
                        <div className="row">
                            <div className="col-xxl-12 col-xl-8 col-lg-8">
                                <div className="postbox__wrapper pr-20">

                                    <div key={post.slug}>

                                        <article className="postbox__item format-image mb-50 transition-3">
                                            <div className="postbox__thumb w-img wow tpfadeRight" data-wow-duration=".9s"
                                                data-wow-delay="1.2s">

                                                <img src={post.image} alt="" />
                                            </div>

                                            <div className="postbox__content wow tpfadeRight" data-wow-duration=".9s"
                                                data-wow-delay="1.2s">
                                                <div className="postbox__text" dangerouslySetInnerHTML={{ __html: post?.content || "" }} />
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >

            </section >
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
