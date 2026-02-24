import React from 'react'
import ContactForm from './ContactForm'
import Link from 'next/link'

const SideBar = () => {
    return (

        // ContactFormclassName="tp-hero-area hero-grideant-bg"

        // <div className="col-xl-4 col-lg-4">

        <>
            <div className='tp-hero-area hero-grideant-bg py-0'
                style={{ backgroundImage: "url(/assets/images/slider-grident-bg.png)" }} >
                <div className="tp-hero__wrapper-thumb p-relative">
                    <div className="tp-hero-shape-four">
                        <img src="/assets/img/slider/hero-star-sm-shape.png" alt="" />
                    </div>
                    <div className="text-start text-lg-end wow tpfadeRight" data-wow-duration=".9s"
                        data-wow-delay="1.2s">
                        <div className="tp-ab-section-title-box-2 mx-0">
                            <h2 className="tp-section-title-2 text-center text-uppercase fs-2">Get a Free Quote
                            </h2>
                            <form action="/place-an-order" method="GET" className="form-top">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                        <input type="text" id="name" name="name" className="form-control mb-10"
                                            placeholder="Your Name*" />
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                        <input type="text" id="phone" name="phone" className="form-control mb-10 "
                                            placeholder="Your Phone Number*" />
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                        <input type="email" id="email" name="email" className="form-control mb-10"
                                            placeholder="Type your Email*" />
                                    </div>

                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                        <select className="form-select mb-3 " defaultValue="Select Order Type" name="type">
                                            <option value="Select Order Type" >Select Order Type</option>
                                            <option value="Digitizing">Digitizing</option>
                                            <option value="Vector Art">Vector Art</option>
                                            <option value="Custom Patches">Custom Patches</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-12 w-100">
                                        <button type="submit" className="hero-btn">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sidebar__widget mt-20 mb-20 rounded-3">
                <h3 className="sidebar__widget-title">Contact Information</h3>
                <div className="sidebar__widget-content">
                    <div className="sidebar__post rc__post">
                        <div className="contact-info">
                            <div className="contact-info-item d-flex align-items-center mx-0">
                                <div className="contact-icon">
                                    <span><i className="fal fa-map-marker-alt"></i></span>
                                </div>
                                <div className="contact-loaction">
                                    <a href="https://maps.app.goo.gl/m5ZVT8chR1iBS3fj8"
                                        target="_blank">131 Continental Dr Ste 305, Newark, DE 19713, USA</a>
                                </div>
                            </div>
                            <div className="contact-info-item d-flex align-items-center mx-0">
                                <div className="contact-icon">
                                    <span><i className="fal fa-envelope"></i></span>
                                </div>
                                <div className="contact-loaction">
                                    <a
                                        href="mailto:orders@iniziosolutions.com">orders@iniziosolutions.com</a>
                                </div>
                            </div>
                            <div className="contact-info-item d-flex align-items-center mx-0">
                                <div className="contact-icon">
                                    <span><i className="fal fa-phone-alt "></i></span>
                                </div>
                                <div className="contact-loaction">
                                    <a href="tel:+1 (302) 779-1338)">+1 (302) 779-1338</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideBar
