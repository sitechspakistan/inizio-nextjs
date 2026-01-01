import Link from "next/link";

export default function ContentFour({heading, headingone, para}) {
    return (
        <section>
            <div className="tp-about-area ab-area-sapce pt-120 pb-120">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-xl-7 col-lg-7 wow tpfadeLeft" data-wow-duration=".7s" data-wow-delay=".7s"
                            style={{
                                visibility: "visible",
                                animationDuration: "0.7s",
                                animationDelay: "0.5s",
                                animationName: "tpfadeRight",
                            }}>
                            <div className="tp-ab-section-title-box">
                                <h2 className="tp-section-title">{heading} <span className="content-color"> {headingone} </span></h2>
                                <p>{para}</p>
                                <Link className="tp-btn" href="/services/digitizing">Read More</Link>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 wow tpfadeRight" data-wow-duration=".7s" data-wow-delay=".5s"
                            style={{
                                visibility: "visible",
                                animationDuration: "0.7s",
                                animationDelay: "0.5s",
                                animationName: "tpfadeRight",
                            }}>
                            <div className="tp-ab-wrapper p-relative">
                                <div className="tp-about-thumb">
                                    <img src="/assets/images/template/digitizing.jpg"
                                        className="bg-transparent" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}