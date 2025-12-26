export default function FaqsCustom(){
    return(
          <div className="sd-accordio-area pt-120 pb-120">
            <div className="container">
                <div className="text-center">
                    <span className="tp-section-subtitle  wow tpfadeUp" data-wow-duration=".7s"
                        data-wow-delay=".3s">FAQS</span>
                    <h2 className="heading-2 pb-30 mb-0">Frequently Asked Question</h2>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="tp-custom-accordio">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-items faq-accordio-border">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-buttons " type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne" aria-expanded="true"
                                            aria-controls="collapseOne">
                                            What exactly are these embroidered custom patches?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show"
                                        aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Embroidered custom patches are small, stitched designs created on cotton
                                            twill using high-quality thread. They’re used to represent brands, events,
                                            teams, and causes with a polished, durable look. These patches can be sewn
                                            or applied to clothing, bags, uniforms, or used creatively in crafts making
                                            them a versatile way to showcase identity and style.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-items">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-buttons collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                            aria-expanded="false" aria-controls="collapseTwo">
                                            What's the minimum and maximum number of patches I can order at a time?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse"
                                        aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            We welcome all order sizes big or small. Our skilled team can handle
                                            high-volume production, including 100,000+ patches, while maintaining top
                                            quality. Please note, our minimum order quantity starts at 50 patches.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-items">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-buttons collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                            aria-expanded="false" aria-controls="collapseThree">
                                            How long does it take to make them?

                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse"
                                        aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Once the order details and invoice are finalized, we submit the order.
                                            You'll get a soft sample of the patch within 1-2 days for review. After
                                            approval, we usually ship them out within 7-10 days.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-items">
                                    <h2 className="accordion-header" id="headingfour">
                                        <button className="accordion-buttons collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapsefour"
                                            aria-expanded="false" aria-controls="collapsefour">
                                            Do you offer revisions for quality assurance?
                                        </button>
                                    </h2>
                                    <div id="collapsefour" className="accordion-collapse collapse"
                                        aria-labelledby="headingfour" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Yes. If there are any issues with the patches design, please let us know,
                                            and we will work with you until it is perfect.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-items">
                                    <h2 className="accordion-header" id="headingfive">
                                        <button className="accordion-buttons collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapsefive"
                                            aria-expanded="false" aria-controls="collapsefive">
                                            Can you replicate a patch that I already have?

                                        </button>
                                    </h2>
                                    <div id="collapsefive" className="accordion-collapse collapse"
                                        aria-labelledby="headingfive" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Get an identical copy of your patch with ease. Take a photo and share it
                                            with us. We’ll create a replica and return your original item to you. Trust
                                            us to create a perfect match.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-items">
                                    <h2 className="accordion-header" id="headingsix">
                                        <button className="accordion-buttons collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapsesix"
                                            aria-expanded="false" aria-controls="collapsesix">
                                            Can I mix different designs in one order?
                                        </button>
                                    </h2>
                                    <div id="collapsesix" className="accordion-collapse collapse"
                                        aria-labelledby="headingsix" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Each design counts as a separate item. So, if you want 50 of one design and
                                            50 of another, it would be priced as 100 separate items. </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}