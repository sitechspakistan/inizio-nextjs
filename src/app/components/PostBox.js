import Link from "next/link";

export default function PostBox({ title, summary, imageUrl, btndetail }) {
    return (
        <div className="postbox__area pt-120 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-8 col-xl-8 col-lg-8">
                        <div className="postbox__wrapper pr-20">
                            <article className="postbox__item format-image mb-50 transition-3">
                                <div className="postbox__thumb w-img">
                                    <Link href="/blogs/detail">
                                        <img src={imageUrl} alt="" />
                                    </Link>
                                </div>
                                <div className="postbox__content">
                                    <div className="postbox__meta">
                                        <span><Link href="#"><i className="fal fa-user-circle"></i> Alextina </Link></span>
                                        <span><Link href="#"><i className="fal fa-clock"></i> Dec 28, 2022</Link></span>
                                        <span><Link href="#"><i className="fal fa-comment-alt-lines"></i>(04)
                                            Coments</Link></span>
                                    </div>
                                    <h2 className="postbox__title">
                                        <Link href="/blogs/detail">{title}</Link>
                                    </h2>
                                    <div className="postbox__text">
                                        <p>{summary}</p>
                                    </div>
                                    <div className="post__button">
                                        <Link className="tp-btn-sm" href={`/blog/${btndetail}`}> READ MORE</Link>
                                    </div>
                                </div>
                            </article>

                            <div className="basic-pagination">
                                <nav>
                                    <ul>
                                        <li>
                                            <Link href="blog.html">
                                                <i className="fal fa-arrow-left"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="blog.html">1</Link>
                                        </li>
                                        <li>
                                            <span className="current">2</span>
                                        </li>
                                        <li>
                                            <Link href="blog.html">3</Link>
                                        </li>
                                        <li>
                                            <Link href="blog.html">
                                                <i className="fal fa-arrow-right"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4">
                        <div className="sidebar__wrapper">
                            <div className="sidebar__widget mb-40">
                                <h3 className="sidebar__widget-title">Search Here</h3>
                                <div className="sidebar__widget-content">
                                    <div className="sidebar__search">
                                        <form action="#">
                                            <div className="sidebar__search-input-2">
                                                <input type="text" placeholder="Search your keyword..." />
                                                <button type="submit"><i className="far fa-search"></i></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar__widget mb-40">
                                <h3 className="sidebar__widget-title">Recent Post</h3>
                                <div className="sidebar__widget-content">
                                    <div className="sidebar__post rc__post">
                                        <div className="rc__post mb-20 d-flex">
                                            <div className="rc__post-thumb mr-20">
                                                <Link href="/blogs/detail"><img src="assets/img/blog/blog-sm-1.jpg"
                                                    alt="" /></Link>
                                            </div>
                                            <div className="rc__post-content">
                                                <div className="rc__meta">
                                                    <span>4 March. 2022</span>
                                                </div>
                                                <h3 className="rc__post-title">
                                                    <Link href="/blogs/detail">Don’t Underestimate The Software</Link>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="rc__post mb-20 d-flex">
                                            <div className="rc__post-thumb mr-20">
                                                <Link href="/blogs/detail"><img src="assets/img/blog/blog-sm-2.jpg"
                                                    alt="" /></Link>
                                            </div>
                                            <div className="rc__post-content">
                                                <div className="rc__meta">
                                                    <span>4 March. 2022</span>
                                                </div>
                                                <h3 className="rc__post-title">
                                                    <Link href="/blogs/detail">Designing Human-Machine Interfaces..</Link>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="rc__post mb-20 d-flex">
                                            <div className="rc__post-thumb mr-20">
                                                <Link href="/blogs/detail"><img src="assets/img/blog/blog-sm-3.jpg"
                                                    alt="" /></Link>
                                            </div>
                                            <div className="rc__post-content">
                                                <div className="rc__meta">
                                                    <span>4 March. 2022</span>
                                                </div>
                                                <h3 className="rc__post-title">
                                                    <Link href="/blogs/detail">Web Design Done Well: Excellent</Link>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="rc__post mb-20 d-flex">
                                            <div className="rc__post-thumb mr-20">
                                                <Link href="/blogs/detail"><img src="assets/img/blog/blog-sm-4.jpg"
                                                    alt="" /></Link>
                                            </div>
                                            <div className="rc__post-content">
                                                <div className="rc__meta">
                                                    <span>4 March. 2022</span>
                                                </div>
                                                <h3 className="rc__post-title">
                                                    <Link href="/blogs/detail">Don’t Underestimate The Software </Link>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar__widget mb-40">
                                <h3 className="sidebar__widget-title">Categories</h3>
                                <div className="sidebar__widget-content">
                                    <ul>
                                        <li><Link href="blog.html">Web Design<span><i
                                            className="fal fa-angle-right"></i></span></Link></li>
                                        <li><Link href="blog.html">Branding Design<span><i
                                            className="fal fa-angle-right"></i></span></Link></li>
                                        <li><Link href="blog.html">Photography <span><i
                                            className="fal fa-angle-right"></i></span></Link></li>
                                        <li><Link href="blog.html">Business Statergy<span><i
                                            className="fal fa-angle-right"></i></span></Link></li>
                                        <li><Link href="blog.html">UI/UX Deisgn<span><i
                                            className="fal fa-angle-right"></i></span></Link></li>
                                        <li><Link href="blog.html">Web Development<span><i
                                            className="fal fa-angle-right"></i></span></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="sidebar__widget mb-40">
                                <h3 className="sidebar__widget-title">Tags</h3>
                                <div className="sidebar__widget-content">
                                    <div className="tagcloud">
                                        <Link href="#">landing </Link>
                                        <Link href="#">Charity</Link>
                                        <Link href="#">apps</Link>
                                        <Link href="#">Education </Link>
                                        <Link href="#">data</Link>
                                        <Link href="#">book</Link>
                                        <Link href="#">Design</Link>
                                        <Link href="#">website</Link>
                                        <Link href="#">landing page</Link>
                                        <Link href="#">data</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}