export default function ContentOne({ subheading, headingone, headingtwo, headingthree, paraone, paratwo, imgpath }) {
    return (
        <section>
            <div className="tp-about-us-area pt-120 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6 wow tpfadeLeft" data-wow-duration=".7s" data-wow-delay=".5s">
                            <div id="tp-detail-col1">
                                <span className="tp-section-subtitle  wow tpfadeUp" data-wow-duration=".7s"
                                    data-wow-delay=".3s">
                                    {subheading}</span><br />
                                {/* <span className="content-color sec-sub-span ">At The Inizio Solutions</span> */}
                                <h2 className="pt-2">{headingone} <span className="content-color">{headingtwo} </span>{headingthree}</h2>
                                <p>{paraone}</p>

                                <p className="pt-2">{paratwo}</p>


                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6 wow tpfadeRight" data-wow-duration=".7s" data-wow-delay=".8s">
                            <div className="tp-img-inner text-end pt-60">
                                <div className="row gx-3">
                                    <div className="col-xl-12 col-lg-12">
                                        <div className="ab-inner-img">
                                            <img src={imgpath} alt="" />
                                        </div>
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