import Link from "next/link";

export default function ContentFour() {
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
                                <h2 className="tp-section-title">We are dynamic team of creative design and
                                    development</h2>
                                <p>We have almost 12+ years of experience for helping consulting services <br /> and
                                    business
                                    solutions and best protect. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Iusto deserunt cupiditate odit enim tempora vero. Assumenda, voluptatibus? Unde,
                                    sapiente dolores.</p>
                                <Link className="tp-btn" href="/digitizing">Read More</Link>
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
                                    <img src="assets/images/template/digitizing.jpg"
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