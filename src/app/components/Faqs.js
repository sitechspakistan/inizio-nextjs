export default function Faqs(){
    return(
         <div className="sd-accordio-area pt-120 pb-120">
            <div className="container">
                <div className="text-center">
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
                                            What are the acceptable file formats should I provide to ensure the
                                            highest-quality digitizing results?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show"
                                        aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            You can send us your artwork in a variety of formats, including .jpg, .jpeg,
                                            .gif, .bmp, .tif, .ai, and .eps. For faster uploading and smaller file
                                            sizes, .jpeg and .gif are usually the most convenient options.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-items">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-buttons collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                            aria-expanded="false" aria-controls="collapseTwo">
                                            Do you provide digitized embroidery files in specialized or custom formats
                                            if needed?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse"
                                        aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Yes, we can provide your digitized embroidery files in any specialized or
                                            custom format you need. DST is our standard delivery format, we can supply
                                            any file format based on your machine’s specific requirements.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-items">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-buttons collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                            aria-expanded="false" aria-controls="collapseThree">
                                            What is the turnaround time for embroidery digitizing or other services?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse"
                                        aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            The turnaround time is based on the complexity of the image you send us. We
                                            offer a super-fast turnaround time of 4 to 5 hours. If you let us know your
                                            emergency, top priority will be given to your job.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-items">
                                    <h2 className="accordion-header" id="headingfour">
                                        <button className="accordion-buttons collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapsefour"
                                            aria-expanded="false" aria-controls="collapsefour">
                                            Do you offer free revisions with your embroidery digitizing or other
                                            services?
                                        </button>
                                    </h2>
                                    <div id="collapsefour" className="accordion-collapse collapse"
                                        aria-labelledby="headingfour" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Yes, InizioSolutions offers unlimited free revisions to ensure you get
                                            exactly the result you want. Your satisfaction is our top priority.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-items">
                                    <h2 className="accordion-header" id="headingfive">
                                        <button className="accordion-buttons collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapsefive"
                                            aria-expanded="false" aria-controls="collapsefive">
                                            Can I use vector art services for screen printing and embroidery?
                                        </button>
                                    </h2>
                                    <div id="collapsefive" className="accordion-collapse collapse"
                                        aria-labelledby="headingfive" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Yes, absolutely, our vector files are embroidery and print-ready, making
                                            them perfect for screen printing, sublimation, and even for embroidery.
                                        </div>
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