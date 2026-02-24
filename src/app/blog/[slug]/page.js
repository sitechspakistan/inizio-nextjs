
import SecondHero from "@/app/components/SecondHero";
import blog from "@/data/post.json"
import Link from "next/link";
import SideBar from "@/app/components/SideBar";


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
            <SecondHero subheading={<Link href={"/blog"}>Blogs</Link>}
                headingone={post.title}
                fontsize={42}
                height={1.3} />
            <section>
                <div className="postbox__area pt-60 pb-60">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-8 col-xl-8 col-lg-8">
                                <div className="postbox__wrapper pr-20">

                                    <div key={post.slug}>

                                        <article className="postbox__item format-image mb-50 transition-3">
                                            <div className="postbox__thumb w-img">

                                                <img src={post.image} alt="" />
                                                <div className="postbox__meta">
                                                    {/* <span><i className="fal fa-user-circle"></i> Alextina</span> */}
                                                    <span><i className="fal fa-clock"></i> {post.date}</span>
                                                    {/* <span><Link href="#"><i className="fal fa-comment-alt-lines"></i>(04)
                                                        Coments</Link></span> */}
                                                </div>
                                            </div>

                                            <div className="postbox__content">

                                                {/* <h2 className="postbox__title">
                                                    {post.title}
                                                </h2> */}
                                                <div className="postbox__text" dangerouslySetInnerHTML={{ __html: post?.content || "" }} />
                                            </div>
                                        </article>

                                    </div>



                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-4 col-lg-4">
                                <div className="sidebar__wrapper">
                                    {/* <> */}
                                    <SideBar />
                                    {/* </> */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
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
// App Router equivalent of getStaticPaths
// export async function generateStaticParams() {
//     return blog.map((post) => ({
//         "slug": post.slug,
//     }));
// }
{/* <h1>{post.title}</h1>
<p>{post.date}</p>
<img src={post.image} alt={post.title} />
<div dangerouslySetInnerHTML={{ __html: post?.content || "" }} /> */}