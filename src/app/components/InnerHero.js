import Link from "next/link";

export default function InnerHero({ subheading, headingone, headingtwo, paragraph }) {
    return (
        <section className="breadcrumb__area breadcrumb-height include-bg p-relative"
            data-background="/assets/images/slider-grident-bg.png" style={{ backgroundImage: "url(/assets/images/slider-grident-bg.png)" }}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="breadcrumb__list wow tpfadeUp " data-wow-duration=".9s">
                            <span><Link href="/">Home</Link></span>
                            <span className="dvdr"><i className="fa fa-angle-right"></i></span>
                            <span>{subheading}</span>

                        </div>
                        <div className="breadcrumb__content">
                            <h1 className="breadcrumb__title fw-normal fw-bold">{headingone} <span className="content-color text-capitalize">{headingtwo}</span></h1>

                            <p>{paragraph}</p>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="tp-hero-area hero-grideant-bg pt-0 pb-0 " style={{ background: "none" }}>
                            <div className="tp-hero__wrapper-thumb p-relative">
                                <div className="tp-hero-shape-four">
                                    <img src="/assets/img/slider/hero-star-sm-shape.png" alt="" />
                                </div>
                                <div className="text-start text-lg-end wow tpfadeRight" data-wow-duration=".9s"
                                    data-wow-delay="1.2s">
                                    <div className="tp-ab-section-title-box-2">
                                        <h2 className="tp-section-title-2 text-center text-uppercase">Place an Order
                                        </h2>
                                        <form action="/place-an-order" method="GET" className="form-top">
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                    <input type="text" id="name" name="name" className="form-control mb-10"
                                                        placeholder="Your Name*" required />
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                    <input type="email" id="email" name="email"
                                                        className="form-control mb-10" placeholder="Type your Email*" required />
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                    <input type="text" id="phone" name="phone"
                                                        className="form-control mb-10 " placeholder="Your Phone Number*" required />
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                    <select className="form-select mb-3 " name="type" defaultValue="Select Order Type" required>
                                                        <option className=" w-100">Select Order Type</option>
                                                        <option value="Digitizing">Digitizing</option>
                                                        <option value="Vector Art">Vector Art</option>
                                                        <option value="Custom Patches">Custom Patches</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-12 w-100">
                                                    <button className="hero-btn">Place an Order</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}