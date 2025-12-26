import Link from "next/link";

export default function SecondHero( {subheading,headingone,heading,description}){
    return(
        <section className="breadcrumb__area breadcrumb-height include-bg p-relative"
            data-background="/assets/images/slider-grident-bg.png" style={{ backgroundImage: "url(/assets/images/slider-grident-bg.png)" }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="breadcrumb__content">
                            <div className="breadcrumb__list wow tpfadeUp" data-wow-duration=".9s">
                                <span><Link href="/">Home</Link></span>
                                <span className="dvdr"><i className="fa fa-angle-right"></i></span>
                                <span> {subheading}</span>
                            </div>
                            <h3 className="breadcrumb__title wow tpfadeUp" data-wow-duration=".7s" data-wow-delay=".5s">{headingone}
                                <span className="content-color text-capitalize"> {heading}</span>
                            </h3>

                        </div>
                    </div>
                    <div className="col-lg-6">
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}