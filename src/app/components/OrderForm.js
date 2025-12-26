export default function OrderForm() {
    return (
        <div className="tp-contact-area grey-bg pt-50 pb-50 ">
            <div className="container">
                <div className="place-odr">
                    <div className="col-lg-9 offset-lg-2">
                        <div className="tp-contact-wrapper p-relative">
                            <div className="tp-contact-shape d-none d-xl-block">
                                <img src="assets/img/cta/cta-1.png" alt="" />
                            </div>
                            <div id="second-shape">
                                <div className="tp-contact-shape d-none d-xl-block">
                                    <img src="assets/img/cta/cta-1.png" alt="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-12 col-lg-12">
                                    <div className="tpcontact">
                                        <div className="tpcontact__form">
                                            <form action="#">
                                                <div className="row">
                                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                                        <input type="text" placeholder="Your name" />
                                                    </div>
                                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                                        <input type="email" placeholder="Your Address" />
                                                    </div>


                                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                                        <input type="tel" placeholder="Your Phone" inputmode="numeric" pattern="[0-9]*"
                                                            oninput="this.value = this.value.replace(/[^0-9]/g, '')" />
                                                    </div>
                                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                                        <select className="form-select form-select-lg mb-3 w-100 mt-5" name="care_of"
                                                            aria-label="Default select example">
                                                            <option selected="">Care of</option>
                                                            <option value="volvo">Muhammad</option>
                                                            <option value="saab">Sam Miller</option>
                                                            <option value="mercedes">James baldwin</option>
                                                            <option value="audi">Stuart Fountain</option>
                                                            <option value="audi2">Sam Marcus</option>
                                                            <option value="audi3">Aiden gray</option>
                                                            <option value="audi4">John Reed</option>
                                                            <option value="audi5">Henry Clark</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                    <select className="form-select form-select-lg mb-3 w-100 mt-5" name="order_type"
                                                        aria-label="Default select example">
                                                        <option selected="">Select Order Type</option>
                                                        <option value="Digitizing or Vector">Digitizing or Vector
                                                        </option>
                                                        <option value="Vector Art">Vector Art</option>
                                                    </select>
                                                </div>
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                    <textarea className="pt-10 mt-10 ps-3" cols="70" rows="5"
                                                        placeholder="Your Message..."></textarea>
                                                    <div className="mb-3">
                                                        <input className="form-control pt-3" type="file" id="formFile" />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                    <button className="tp-btn d-flex justify-content-center mx-auto">Order Now</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}