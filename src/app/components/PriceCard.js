import Link from "next/link";

export default function PriceCard() {
    return (
        <div className="tp-price-area pt-40 pb-40">
            <div className="container">
                <div className="row">

                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                        <div className="tp-price price-grey-bg-1">
                            <div className="tp-price__title">
                                <div className="tp-price__content d-flex align-items-center">
                                    <div className="tp-price__content-circle">
                                        <img src="/assets/images/pricing/1.webp" alt="" />
                                        <span></span>
                                    </div>
                                    <div className="tp-price__content-text">
                                        <h5>Free</h5>
                                    </div>
                                </div>
                                <p className="text-center">First Order Under 6000 Stitches </p>

                                <p className="text-center fs-2 fw-bold"><span className=" content-color"> $0.00</span></p>


                            </div>
                            <div className="tp-price__title">
                                <h4 className="text-center pt-1 pb-5 fs-5">What’s included</h4>
                            </div>
                            <div className="tp-price__list">
                                <ul>
                                    <li><i className="far fa-check"></i> Free Account Setup</li>
                                    <li><i className="far fa-check"></i> No Credit Card Required</li>
                                    <li><i className="far fa-check"></i> Access to Client Dashboard Panel</li>
                                    <li><i className="far fa-check"></i> Access to Client Dashboard Panel</li>
                                    <li><i className="far fa-check"></i> 5 Free Edit within 7 days</li>
                                    <li><i className="far fa-check"></i> 2- 6 hours Delivery (extra $5 USD)</li>
                                </ul>
                            </div>
                            <div className="tp-price__button d-flex justify-content-center mx-auto">
                                <Link className="tp-btn-radius" href="/placeanorder">Order Now</Link>

                            </div>
                        </div>

                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                        <div className="tp-price price-grey-bg-1">
                            <div className="tp-price__content d-flex align-items-center">
                                <div className="tp-price__content-circle">
                                    <img src="/assets/images/pricing/06.webp" alt="" />
                                    <span></span>
                                </div>
                                <div className="tp-price__content-text">
                                    <span>For individuals</span>
                                    <h5 className="half-line">Left Chest + <span className="content-color">Caps</span></h5>
                                </div>
                            </div>
                            <p className="text-center">$ 8 Minimum</p>
                            <p className="text-center fs-2 fw-bold"><span className="content-color">$8.00</span></p>

                            <div className="tp-price__title">
                                <h4 className="text-center pt-3 pb-5 fs-5">What’s included</h4>
                            </div>
                            <div className="tp-price__list">
                                <ul>
                                    <li><i className="far fa-check"></i> 24/7 Live Chat Support</li>
                                    <li><i className="far fa-check"></i> Desired Format(s)</li>
                                    <li><i className="far fa-check"></i> Normal Turnaround (6 to 12 hours)</li>
                                    <li><i className="far fa-check"></i> Unlimited edits for 30 days</li>
                                </ul>
                            </div>
                            <div className="tp-price__button d-flex justify-content-center mx-auto">
                                <Link className="tp-btn-radius " href="/place-an-order">Order Now</Link>

                            </div>

                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                        <div className="tp-price price-grey-bg-1">
                            <div className="tp-price__content d-flex align-items-center">
                                <div className="tp-price__content-circle">
                                    <img src="/assets/images/pricing/07.webp" alt="" />
                                    <span></span>
                                </div>
                                <div className="tp-price__content-text">
                                    <span>For individuals</span>
                                    <h5 className="half-line">Jacket Back <span className="content-color">Logo</span></h5>
                                </div>
                            </div>
                            <p className="text-center">$ 12Minimum</p>
                            <p className="text-center fs-2 fw-bold"><span className="content-color">$22.00</span></p>
                            <div className="tp-price__title">
                                <h4 className="text-center pt-3 pb-5 fs-5">What’s included</h4>
                            </div>
                            <div className="tp-price__list">
                                <ul>
                                    <li><i className="far fa-check"></i> 24/7 Customer Support</li>
                                    <li><i className="far fa-check"></i> 5 selected Formats</li>
                                    <li><i className="far fa-check"></i> Data Aggregation</li>
                                    <li><i className="far fa-check"></i> Normal Turnaround (18 to 48 hours)</li>
                                    <li><i className="far fa-check"></i> Free Unlimited Edits for 30 Days</li>
                                    <li><i className="far fa-check"></i> Urgent (6 to 14 hours) $10 fee</li>
                                </ul>
                            </div>
                            <div className="tp-price__button d-flex justify-content-center mx-auto">
                                <Link className="tp-btn-radius" href="/place-an-order">Order Now</Link>

                            </div>

                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                        <div className="tp-price price-grey-bg-1">
                            <div className="tp-price__content d-flex align-items-center">
                                <div className="tp-price__content-circle">
                                    <img src="/assets/images/pricing/09.webp" alt="" />
                                    <span></span>
                                </div>
                                <div className="tp-price__content-text">
                                    <span>For individuals</span>
                                    <h5 className="half-line">Vector Art <span className="content-color">Conversion</span></h5>
                                </div>
                            </div>
                            <p className="text-center">$ 10 Minimum</p>
                            <p className="text-center fs-2 fw-bold"><span className="content-color">$10.00</span></p>

                            <div className="tp-price__title">
                                <h4 className="text-center pt-3 pb-5 fs-5">What’s included</h4>
                            </div>
                            <div className="tp-price__list">
                                <ul>
                                    <li><i className="far fa-check"></i> Simple Textual Logo $12</li>
                                    <li><i className="far fa-check"></i> Simple 2+ Color Logos $15</li>
                                    <li><i className="far fa-check"></i> Complex 2+ Color Logos $35</li>
                                    <li><i className="far fa-check"></i> Hardcore 2+ Color Logos $75</li>
                                    <li><i className="far fa-check"></i> Extremely hardcore (ASK FOR QUOTATION)</li>
                                    <li><i className="far fa-check"></i> Turnaround Time (3 to 24 hours)</li>
                                    <li><i className="far fa-check"></i> Urgent (1 to 12 hours) $5 Fee</li>
                                </ul>
                            </div>
                            <div className="tp-price__button d-flex justify-content-center mx-auto">
                                <Link className="tp-btn-radius" href="/place-an-order">Order Now</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}