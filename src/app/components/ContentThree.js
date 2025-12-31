export default function ContentThree() {
    return (
        <section>
            <div className="tp-about-area ab-area-sapce pt-120 pb-120">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-5 col-lg-5 order-2 order-lg-1 wow tpfadeLeft" data-wow-duration=".7s"
                            data-wow-delay=".5s"
                            style={{
                                visibility: "visible",
                                animationDuration: "0.7s",
                                animationDelay: "0.6s",
                                animationName: "tpfadeUp",
                            }}>
                            <div className="tp-ab-wrapper p-relative">
                                <div className="tp-ab-shape-one z-index-3">
                                    <img src="/assets/img/about/about-shape-1.png" alt="" />
                                </div>
                                <div className="tp-ab-shape-two z-index-3">
                                    <img src="/assets/img/about/about-circle-shape.png" alt="" />
                                </div>
                                <div className="tp-about-thumb">
                                    <img src="/assets/img/about/about-img.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 order-1 order-lg-2 wow tpfadeRight" data-wow-duration=".7s"
                            data-wow-delay=".7s"
                            style={{
                                visibility: "visible",
                                animationDuration: "0.7s",
                                animationDelay: "0.6s",
                                animationName: "tpfadeUp",
                            }}>
                            <div className="tp-ab-section-title-box">
                                <span className="tp-section-subtitle">Who we are?</span>
                                <h2 className="tp-section-title">We are dynamic team of creative design and development</h2>
                                <p>We have almost 12+ years of experience for helping consulting services <br/> and
                                    business
                                    solutions and best protect.</p>
                                <a className="tp-btn" href="about-us.html">About our Agency</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}