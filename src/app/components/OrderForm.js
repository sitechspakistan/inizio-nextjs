"use client"
import { useSearchParams } from "next/navigation";

export default function OrderForm() {
    const searchParams = useSearchParams();
    const type = searchParams.get("type") || "Select Order Type";
    const name = searchParams.get("name") || "";
    const phone = searchParams.get("phone") || "";
    const email = searchParams.get("email") || "";
    return (
        <div className="tp-contact-area grey-bg pt-50 pb-50 ">
            <div className="container">
                <div className="place-odr">
                    <div className="col-lg-9 offset-lg-2">
                        <div className="tp-contact-wrapper p-relative">
                            {/* <div className="tp-contact-shape d-none d-xl-block">
                                <img src="/assets/img/cta/cta-1.png" alt="" />
                            </div> */}
                            {/* <div id="second-shape">
                                <div className="tp-contact-shape d-none d-xl-block">
                                    <img src="/assets/img/cta/cta-1.png" alt="" />
                                </div>
                            </div> */}
                            <div className="row">
                                <div className="col-xl-12 col-lg-12">
                                    <div className="tpcontact">
                                        <div className="tpcontact__form">
                                            <form action="/api/order" method="POST" encType="multipart/form-data">
                                                <div className="row">
                                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                                        <input type="text" placeholder="Your name" name="name" required defaultValue={name} />
                                                    </div>
                                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                                        <input type="email" placeholder="Your Email Address" name="email" required defaultValue={email} />
                                                    </div>


                                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                                        <input type="tel" placeholder="Your Phone" name="phone" required defaultValue={phone} />
                                                    </div>
                                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                                        <select className="form-select form-select-lg mb-3 w-100 mt-5" name="care_of"
                                                            aria-label="Default select example" required defaultValue="Care of">
                                                            <option value="Care of">Care of</option>
                                                            <option value="Muhammad">Muhammad</option>
                                                            <option value="Sam Miller">Sam Miller</option>
                                                            <option value="James baldwin">James baldwin</option>
                                                            <option value="Stuart Fountain">Stuart Fountain</option>
                                                            <option value="Sam Marcus">Sam Marcus</option>
                                                            <option value="Aiden gray">Aiden gray</option>
                                                            <option value="John Reed">John Reed</option>
                                                            <option value="Henry Clark">Henry Clark</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                    <select className="form-select form-select-lg mb-3 w-100 mt-5" name="order_type"
                                                        aria-label="Default select example" required defaultValue={type}>
                                                        <option selected="">Select Order Type</option>
                                                        <option value="Digitizing">Digitizing</option>
                                                        <option value="Vector Art">Vector Art</option>
                                                    </select>
                                                </div>
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                    <textarea className="pt-10 mt-10 ps-3" cols="70" rows="5"
                                                        placeholder="Your Message..." name="message" required></textarea>
                                                    <div className="mb-3">
                                                        <input className="form-control pt-3" type="file" id="formFile" name="file" required />
                                                    </div>
                                                </div>
                                                <button className="tp-btn d-flex justify-content-center mx-auto" type="submit">Order Now</button>
                                            </form>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}