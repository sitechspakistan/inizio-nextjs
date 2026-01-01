import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer>
                <div className="tp-footer-area footer-bg pt-60 pb-60">
                    <div className="container">
                        <div className="row borderbottom">
                            <div className="col-xl-2 col-lg-2 col-md-3 col-6 mb-30">
                                <div className="tp-footer-widget z-index-3">
                                    <div className="tp-footer-widget__title">
                                        <h4 className="tp-footer-title">Quick Links</h4>
                                    </div>
                                    <div className="tp-footer-widget__list">
                                        <ul>
                                            <li><Link href="/services">Services</Link></li>
                                            <li><Link href="/pricing">Our Pricing</Link></li>
                                            <li><Link href="https://www.etsy.com/shop/iniziosolutionsshop/?etsrc=sdt">Shop</Link></li>
                                            <li><Link href="/portfolio">Portfolio</Link></li>
                                            <li><Link href="#">Privacy Policy</Link></li>
                                            <li><Link href="#">Terms of Use</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-2 col-md-3 col-6 mb-30">
                                <div className="tp-footer-widget footer-space-one z-index-3">
                                    <div className="tp-footer-widget__title">
                                        <h4 className="tp-footer-title">Services </h4>
                                    </div>
                                    <div className="tp-footer-widget__list">
                                        <ul>
                                            <li><Link href="/services/embroidery-digitizing">Digitizing</Link></li>
                                            <li><Link href="/services/vector-art">Verctor Art</Link></li>
                                            <li><Link href="/services/custom-patches">Custom Patches</Link></li>
                                            <li><Link href="/tshirt">Shirts</Link></li>
                                            <li><Link href="/caps">Caps</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-12 mb-30">
                                <div className="tp-footer-widget z-index-5">
                                    <div className="tp-footer-widget__title">
                                        <h4 className="tp-footer-title">Contact Us</h4>
                                    </div>
                                    <div className="tp-footer-widget__list">
                                        <ul className="footer-position">
                                            <li><a href="https://www.google.com/maps/@38.4999525,-103.0632285,6.46z" target="_blank">
                                                <span><i className="fal fa-map-marker-alt"></i></span>
                                                131 Continental Dr Ste 305, Newark, DE 19713, USA
                                            </a>
                                            </li>
                                            <li><a href="/cdn-cgi/l/email-protection#3c4f494c4c534e487c5a555b515d">
                                                <span><i className="fal fa-envelope"></i></span>
                                                orders@iniziosolutions.com
                                            </a>
                                            </li>
                                            <li className="mt-16"><a href="tel:778886664">
                                                <span><i className="fal fa-phone-alt "></i></span>
                                                +1 (302) 779-1338</a>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-3 col-12 mb-30">
                                <div className="tp-footer-widget z-index-3 d-flex justify-content-center mx-auto mt-45">
                                    <div className="row g-20">

                                        <img src="/assets/images/footer/payment-footer.png" />

                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row ">
                            <div className="z-index-3">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-12">
                                        <div className="copyright-left text-lg-start mb-0">
                                            <p className="pt-2 mb-0">© Inizio Solutions 2026. All Rights Reserved. Designed & Developed by <a href="https://sitechs.co" target="_blank"><span className="content-color">Sitechs</span></a>.</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-12">
                                        <div className="copyright-right-side text-lg-end">
                                            <div className="footer-font">
                                                <span><a href="https://www.facebook.com/iniziosolutionsllc/" target="blank"><i className="fab fa-facebook" id="facebook"></i></a></span>
                                                <span><a href="https://www.instagram.com/iniziosolutions/" target="blank"><i className="fab fa-instagram" id="instagram"></i></a></span>
                                                <span><a href="https://www.linkedin.com/company/iniziosolutions/" target="blank"><i className="fab fa-linkedin" id="linkedin"></i></a ></span>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <button className="scroll-top scroll-to-target" data-target="html">
                    <i className="far fa-angle-double-up"></i>
                </button>


            </footer>
        </>
    );
}