export default function Header() {
    return (
        <>
        <header>
            <div id="header-sticky" className="tp-header-area header-pl-pr header-transparent ">
                <div className="container">
                    <div className="row g-0 align-items-center">
                    <div className="col-xl-2 col-lg-2 col-md-4 col-6">
                        <div className="tp-logo mt-5">
                            <a href="index.html">
                                <img src="/assets/images/inizo-logo-removebg-preview.png" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-10 col-lg-10 col-md-8 col-6 d-flex justify-content-around">
                        <div className="tp-main-menu d-none d-xl-block">
                            <nav id="mobile-menu">
                                <ul>                
                                    <li><a href="service.html">Services <i className="fas fa-caret-down"></i></a>
                                        <ul className="submenu">
                                            <li><a href="digitizing.html">Embroidery Digitizing</a></li>
                                            <li><a href="vector.html">Vector Art Conversion</a></li>
                                            <li><a href="custom-patch.html">Custom Patches</a></li>


                                        </ul>
                                    </li>
                                    <li><a href="price.html">Pricing</a></li>                            
                                    <li><a href="portfolio.html">Portfolio</a></li>
                                    <li className="d-block d-xl-none">
                                        <a href="place-order.html">Place An Order</a>
                                    </li>
                                    <li><a href="pp-shirt.html">Promotional Product <i className="fas fa-caret-down"></i></a>
                                        <ul className="submenu">
                                            <li><a href="pp-shirt.html">PP T-Shirt</a></li>
                                            <li><a href="pp-caps.html">PP Caps</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="https://www.etsy.com/shop/iniziosolutionsshop/?etsrc=sdt">Shop</a></li>
                                    <li><a href="blog.html">Blogs</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-xl-3 col-lg-12 col-md-12 col-10 d-flex justify-content-end">
                            <div
                                className="header-right-two d-flex align-items-center justify-content-end ml-10 mt-5 mt-sm-0 pt-sm-0 pt-5">

                                <a className="tp-btn-border d-none d-xl-block" href="place-order.html">Place an
                                Order</a>
                                <a className="bars d-xl-none tp-menu-bar " href="javascript:void(0)"><i className="fa fa-bars"></i></a>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </header>
        <div className="tp-offcanvas-area">
            <div className="tpoffcanvas">
                <div className="tpoffcanvas__close-btn">
                    <button className="close-btn text-dark"><i className="fal fa-times"></i></button>
                </div>
                <div className="tpoffcanvas__logo pt-30">
                    <a href="index.html">
                    <img src="/assets/images/inizo-logo-removebg-preview.png" alt="" />
                    </a>
                </div>
                <div className="tpoffcanvas__text">
                    <p>Suspendisse interdum consectetur libero id. Fermentum leo vel orci porta non. Euismod viverra nibh cras
                    pulvinar suspen.</p>
                </div>
                <div className="mobile-menu"></div>
                <div className="tpoffcanvas__info">
                    <h3 className="offcanva-title">Get In Touch</h3>
                    <div className="tp-info-wrapper mb-20 d-flex align-items-center">
                    <div className="tpoffcanvas__info-icon">
                        <a href="#"><i className="fal fa-envelope"></i></a>
                    </div>
                    <div className="tpoffcanvas__info-address">
                        <span>Email</span>
                        <a href="maito:hello@yourmail.com"><span className="__cf_email__"
                                data-cfemail="adc5c8c1c1c2edd4c2d8dfc0ccc4c183cec2c0">[email&#160;protected]</span></a>
                    </div>
                    </div>
                    <div className="tp-info-wrapper mb-20 d-flex align-items-center">
                    <div className="tpoffcanvas__info-icon">
                        <a href="#"><i className="fal fa-phone-alt"></i></a>
                    </div>
                    <div className="tpoffcanvas__info-address">
                        <span>Phone</span>
                        <a href="tel:(00)45611227890">(00) 456 1122 7890</a>
                    </div>
                    </div>
                    <div className="tp-info-wrapper mb-20 d-flex align-items-center">
                    <div className="tpoffcanvas__info-icon">
                        <a href="#"><i className="fas fa-map-marker-alt"></i></a>
                    </div>
                    <div className="tpoffcanvas__info-address">
                        <span>Location</span>
                        <a href="https://www.google.com/maps/@37.4801311,22.8928877,3z" target="_blank">Riverside 255, San
                            Francisco, USA </a>
                    </div>
                    </div>
                </div>
                <div className="tpoffcanvas__social">
                    <div className="social-icon">
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-facebook-square"></i></a>
                    <a href="#"><i className="fab fa-dribbble"></i></a>
                    </div>
                </div>
            </div>
     </div>
   </>
    )
}