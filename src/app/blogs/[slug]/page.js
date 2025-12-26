import Link from "next/link";
import SecondHero from "../../components/SecondHero"

export default async function blogdetail({params}){
     const { slug } = await params
    return(
     <>
     <SecondHero subheading={"Blog Detail"} heading={slug}/>
     <div className="postbox__area pt-120 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-8 col-xl-8 col-lg-8 col-12">
                        <div className="postbox__wrapper">
                            <article className="postbox__item format-image transition-3">
                                <div className="postbox__content">
                                    <p><img className="w-100" src="assets/img/blog/blog-details.jpg" alt="" /></p>
                                    <div className="postbox__meta">
                                        <span><Link href="#"><i className="fal fa-user-circle"></i> Alextina </Link></span>
                                        <span><Link href="#"><i className="fal fa-clock"></i> Dec 28, 2022</Link></span>
                                        <span><Link href="#"><i className="fal fa-comment-alt-lines"></i>(04) Coments</Link></span>
                                    </div>
                                    <h3 className="postbox__title">
                                        Building A Retro Draggable Web Component With Lit ar not working
                                    </h3>
                                    <div className="postbox__text">
                                        <p>
                                            In today’s article, Andrico Karoulla explains how to create Link cool draggable effect by listening to the drag events and writing some custom logic inside the handlers.
                                        </p>
                                        <p>We tend to neglect our mental well-being because of the stigma of mental health care. But as societies become wiser and more self-aware, there is Link greater need to redefine the meaning of mental health care. Naomi Hirabayashi and Marah Lidey do exactly that by drawing attention to the aspect of preventing mental health issues. The application they built makes mental self-care easy and accessible. of this year of the best law and his Link part of this years.
                                        </p>
                                    </div>

                                    <div className="postbox__thumb2 mb-60">
                                        <div className="row gx-50">
                                            <div className="col-xl-6">
                                                <p><img src="assets/img/blog/blog-sm-5.jpg" alt="" /></p>
                                            </div>
                                            <div className="col-xl-6">
                                                <p><img src="assets/img/blog/blog-sm-6.jpg" alt="" /></p>
                                            </div>
                                        </div>
                                        <h3 className="postbox__title">
                                            How To Create A Vanilla JavaScript
                                        </h3>
                                        <div className="postbox__text">
                                            <p>
                                                One in four people in the world will be affected by mental or neurological disorders at some point in their lives, says the World Health Organization. Still, we spend more time brushing our teeth than taking care of our mental health, said Guy Winch in his TED talk.
                                            </p>
                                            <p>We tend to neglect our mental well-being because of the stigma of mental health care. But as societies become wiser and more self-aware, there is Link greater need to redefine the meaning of mental health care. Naomi Hirabayashi and Marah Lidey do exactly that by drawing attention to the aspect of preventing mental health issues. The application they built makes mental self-care easy and accessible. of this year of the best law and his Link part of this years.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="postbox__social-wrapper">
                                        <div className="row">
                                            <div className="col-xl-8 col-lg-12">
                                                <div className="postbox__tag tagcloud">
                                                    <span>Tag</span>
                                                    <Link href="/blogdetail">Business</Link>
                                                    <Link href="/blogdetail">Design</Link>
                                                    <Link href="/blogdetail">apps</Link>
                                                    <Link href="/blogdetail">data</Link>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-12">
                                                <div className="postbox__social text-xl-end text-start">
                                                    <span>Share</span>
                                                    <Link href="/blogdetail"><i className="fab fa-linkedin tp-linkedin"></i></Link>
                                                    <Link href="/blogdetail"><i className="fab fa-pinterest tp-pinterest"></i></Link>
                                                    <Link href="/blogdetail"><i className="fab fa-facebook tp-facebook" ></i></Link>
                                                    <Link href="/blogdetail"><i className="fab fa-twitter tp-twitter"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <div className="postbox__comment mb-65">
                                <h3 className="postbox__comment-title">(04) Comment</h3>
                                <ul>
                                    <li>
                                        <div className="postbox__comment-box d-flex">
                                            <div className="postbox__comment-info ">
                                                <div className="postbox__comment-avater mr-20">
                                                    <img src="assets/img/blog/blog-avata-1.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="postbox__comment-text">
                                                <div className="postbox__comment-name">
                                                    <h5>Kristin Watson</h5>
                                                    <span className="post-meta"> July 14, 2022</span>
                                                </div>
                                                <p>Patient Comments are Link collection of comments submitted by viewers in <br /> response to Link question posed by Link MedicineNet doctor.</p>
                                                <div className="postbox__comment-reply">
                                                    <Link href="#">Reply</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="children">
                                        <div className="postbox__comment-box  d-flex">
                                            <div className="postbox__comment-info">
                                                <div className="postbox__comment-avater mr-20">
                                                    <img src="assets/img/blog/blog-avata-2.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="postbox__comment-text">
                                                <div className="postbox__comment-name">
                                                    <h5>Farhan Firoz</h5>
                                                    <span className="post-meta"> July 14, 2022</span>
                                                </div>
                                                <p>Include anecdotal examples of your experience, or things you took notice of that <br /> you feel others would find useful.</p>
                                                <div className="postbox__comment-reply">
                                                    <Link href="#">Reply</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="postbox__comment-form">
                                <h3 className="postbox__comment-form-title">Leave Link Reply</h3>
                                <form action="#">
                                    <div className="row">
                                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                                            <div className="postbox__comment-input">
                                                <input type="text" placeholder="Your Name" />
                                            </div>
                                        </div>
                                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                                            <div className="postbox__comment-input">
                                                <input type="email" placeholder="Your Email" />
                                            </div>
                                        </div>
                                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                                            <div className="postbox__comment-input">
                                                <input type="text" placeholder="Number" />
                                            </div>
                                        </div>
                                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                                            <div className="postbox__comment-input">
                                                <input type="text" placeholder="Website" />
                                            </div>
                                        </div>
                                        <div className="col-xxl-12">
                                            <div className="postbox__comment-input">
                                                <textarea placeholder="Enter your comment ..."></textarea>
                                            </div>
                                        </div>
                                        <div className="col-xxl-12">
                                            <div className="postbox__comment-agree d-flex align-items-start mb-20">
                                                <input className="e-check-input" type="checkbox" id="e-agree" />
                                                <label className="e-check-label" for="e-agree">Save my name, email, and website in this browser for the next time I comment.</label>
                                            </div>
                                        </div>
                                        <div className="col-xxl-12">
                                            <div className="postbox__comment-btn">
                                                <button type="submit" className="tp-btn-sm">Post comment</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
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
                                <h3 className="sidebar__widget-title">Categories</h3>
                                <div className="sidebar__widget-content">
                                    <ul>
                                        <li><Link href="/blogs">Web Design<span>26</span></Link></li>
                                        <li><Link href="/blogs">Devlopment <span>30</span></Link></li>
                                        <li><Link href="/blogs">Branding <span>71</span></Link></li>
                                        <li><Link href="/blogs">MOtion Design <span>56</span></Link></li>
                                        <li><Link href="/blogs">UI/UX Deisgn <span>60</span></Link></li>
                                        <li><Link href="/blogs">Graphic Design <span>99</span></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="sidebar__widget mb-40">
                                <h3 className="sidebar__widget-title">Pages</h3>
                                <div className="sidebar__widget-content">
                                    <ul>
                                        <li><Link href="/blogs">Web Design <span><i className="fal fa-angle-right"></i></span></Link></li>
                                        <li><Link href="/blogs">Devlopment <span><i className="fal fa-angle-right"></i></span></Link></li>
                                        <li><Link href="/blogs">Branding <span><i className="fal fa-angle-right"></i></span></Link></li>
                                        <li><Link href="/blogs">MOtion Design<span><i className="fal fa-angle-right"></i></span></Link></li>
                                        <li><Link href="/blogs">UI/UX Deisgn  <span><i className="fal fa-angle-right"></i></span></Link></li>
                                        <li><Link href="/blogs">Graphic Design  <span><i className="fal fa-angle-right"></i></span></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="sidebar__widget mb-40">
                                <h3 className="sidebar__widget-title">Recent Post</h3>
                                <div className="sidebar__widget-content">
                                    <div className="sidebar__post rc__post">
                                        <div className="rc__post mb-20 d-flex">
                                            <div className="rc__post-thumb mr-20">
                                                <Link href="/blogdetail"><img src="assets/img/blog/blog-sm-1.jpg" alt="" /></Link>
                                            </div>
                                            <div className="rc__post-content">
                                                <div className="rc__meta">
                                                    <span>4 March. 2022</span>
                                                </div>
                                                <h3 className="rc__post-title">
                                                    <Link href="/blogdetail">Don’t Underestimate The Software</Link>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="rc__post mb-20 d-flex">
                                            <div className="rc__post-thumb mr-20">
                                                <Link href="/blogdetail"><img src="assets/img/blog/blog-sm-2.jpg" alt="" /></Link>
                                            </div>
                                            <div className="rc__post-content">
                                                <div className="rc__meta">
                                                    <span>4 March. 2022</span>
                                                </div>
                                                <h3 className="rc__post-title">
                                                    <Link href="/blogdetail">Designing Human-Machine Interfaces..</Link>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="rc__post mb-20 d-flex">
                                            <div className="rc__post-thumb mr-20">
                                                <Link href="/blogdetail"><img src="assets/img/blog/blog-sm-3.jpg" alt="" /></Link>
                                            </div>
                                            <div className="rc__post-content">
                                                <div className="rc__meta">
                                                    <span>4 March. 2022</span>
                                                </div>
                                                <h3 className="rc__post-title">
                                                    <Link href="blog-details.html">Web Design Done Well: Excellent</Link>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="rc__post mb-20 d-flex">
                                            <div className="rc__post-thumb mr-20">
                                                <Link href="/blogdetail"><img src="assets/img/blog/blog-sm-4.jpg" alt="" /></Link>
                                            </div>
                                            <div className="rc__post-content">
                                                <div className="rc__meta">
                                                    <span>4 March. 2022</span>
                                                </div>
                                                <h3 className="rc__post-title">
                                                    <Link href="/blogdetail">Don’t Underestimate The Software </Link>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar__widget mb-40">
                                <h3 className="sidebar__widget-title">Tags</h3>
                                <div className="sidebar__widget-content">
                                    <div className="tagcloud">
                                        <Link href="/blogs">landing</Link>
                                        <Link href="/blogs">Charity</Link>
                                        <Link href="/blogs">apps</Link>
                                        <Link href="/blogs">Education </Link>
                                        <Link href="/blogs">data</Link>
                                        <Link href="/blogs">book</Link>
                                        <Link href="/blogs">Design</Link>
                                        <Link href="/blogs">website</Link>
                                        <Link href="/blogs">landing page</Link>
                                        <Link href="/blogs">data</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </>
    )
}