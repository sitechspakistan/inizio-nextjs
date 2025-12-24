export default function ServiceContent(){
    return(
        <div className="tp-about-area ab-area-sapce pb-120" data-background="assets/images/slider-grident-bg.png"
            style={{backgroundImage:"url(/assets/images/slider-grident-bg.png)"}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-5 col-lg-5 order-2 order-lg-1 wow tpfadeLeft" data-wow-duration=".7s"
                        data-wow-delay=".5s">
                        <div className="tp-ab-wrapper p-relative">
                            <div className="tp-ab-shape-one z-index-3">
                                <img src="assets/img/about/about-shape-1.png" alt="" />
                            </div>
                            <div className="tp-ab-shape-two z-index-3">
                                <img src="assets/img/about/about-circle-shape.png" alt="" />
                            </div>
                            <div className="tp-about-thumb">
                                <img src="assets/img/about/about-img.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-7 order-1 order-lg-2 wow tpfadeRight" data-wow-duration=".7s"
                        data-wow-delay=".8s">
                        <div className="tp-ab-section-title-box">
                            <span className="tp-section-subtitle tp-green-color">Our Mission</span>
                            <h2 className="tp-section-title">Precision Digitizing and Vectorizing for Global Brands</h2>
                            <p>We are a dedicated team providing specialized services like professional embroidery
                                digitizing and vector art conversion. With 10+ years of experience, we guarantee
                                pixel-perfect results and durable patches, making your vision ready for print and
                                embroidery.
                                <br />
                                We understand the unique demands of the apparel industry and ensure all files DST, EXP,
                                AI, or EPS are delivered with exceptional clarity and fast turnaround. From complex logo
                                digitizing to creating custom patches for your brand, Inizio Solution is committed to
                                quality that lasts.
                            </p>
                            <p className="fs-3"><em>Ready to bring your designs to life? Get in touch today for a free
                                    Quote!</em></p>
                            <a className="tp-btn" href="about-us.html">Get a Free Quote</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}