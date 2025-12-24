export default function SecondHero(){
    return(
        <section className="breadcrumb__area breadcrumb-height include-bg p-relative"
            data-background="/assets/images/slider-grident-bg.png" style={{ backgroundImage: "url(/assets/images/slider-grident-bg.png)" }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="breadcrumb__content">
                            <div className="breadcrumb__list wow tpfadeUp" data-wow-duration=".9s">
                                <span><a href="#">Home</a></span>
                                <span className="dvdr"><i className="fa fa-angle-right"></i></span>
                                <span>Our Services</span>
                            </div>
                            <h3 className="breadcrumb__title wow tpfadeUp" data-wow-duration=".7s" data-wow-delay=".5s">Our
                                <span className="content-color text-capitalize">Services</span>
                            </h3>

                        </div>
                    </div>
                    <div className="col-lg-6">
                        <p>We provide high-quality embroidery digitizing, vector art services, and custom patches
                            tailored to your needs. Every design is crafted with precision to ensure your brand looks
                            sharp and professional. Our team focuses on fast turnaround, clean results, and complete
                            customer satisfaction. Whether you need logo digitizing, vector redraws, or premium custom
                            patches we’ve got you covered.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}