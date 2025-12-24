"use client";
import Slider from "react-slick";

export default function Hero() {

  const sliderSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 6000,
    pauseOnHover: false,
    pauseOnFocus: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 3 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2, slidesToScroll: 2 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2, slidesToScroll: 1 }
      }
    ]
  };

  return (
    <section>
      <div
        className="tp-hero-area hero-grideant-bg"
        style={{ backgroundImage: "url(/assets/images/slider-grident-bg.png)" }}
      >
        <div className="container mt-50">
          <div className="row align-items-center hero-space">
            
            {/* LEFT CONTENT */}
            <div className="col-xl-6 col-lg-6 pt-30">
              <div className="tp-hero">
                <div className="tp-hero__section-box">
                  <span className="tp-section-subtitle">
                    Best solution we offer you
                  </span>

                  <h1 className="tp-slider-title pb-3">
                    Expert Embroidery Digitizing & Vector Art{" "}
                    <span className="content-color">IN THE USA.</span>
                  </h1>

                  <p>Inizio Solutions is your
                              trusted partner for professional apparel branding services in the U.S. We specialize in
                              converting your designs into high-quality embroidery digitizing files, scalable vector
                              art, and manufacturing premium custom patches. Get guaranteed quality and the fastest
                              turnaround in the industry. </p>
                </div>

                {/* LOGO SLIDER */}
                <div id="multiple-items">
                    <Slider {...sliderSettings}>
                    {[
                        "01","03","04","05","06","07","09","10"
                    ].map((img, i) => (
                        <div key={i}>
                        <img
                            src={`/assets/images/logo/${img}.webp`}
                            alt="Brand logo"
                        />
                        </div>
                    ))}
                    </Slider>

                </div>

              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="col-xl-6 col-lg-6">
                <div className="tp-hero__wrapper-thumb p-relative">
                <div className="tp-hero-shape-four">
                    <img src="/assets/img/slider/hero-star-sm-shape.png" alt="" />
                </div>
                <div className="text-start text-lg-end wow tpfadeRight" data-wow-duration=".9s"
                    data-wow-delay="1.2s">
                    <div className="tp-ab-section-title-box-2">
                        <h2 className="tp-section-title-2 text-center text-uppercase">Get A Custom Quote
                        </h2>
                        <form action="place-order.html" className="form-top">
                            <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <input type="text" id="name" name="name" className="form-control mb-10"
                                    placeholder="Your Name*" />
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <input type="text" id="phone" name="phone" className="form-control mb-10 "
                                    placeholder="Your Phone Number*" />
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <input type="email" id="email" name="email" className="form-control mb-10"
                                    placeholder="Type your Email*" />
                            </div>

                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <select className="form-select mb-3 " defaultValue="Select Order Type" name="order_type">
                                    <option value="Select Order Type" >Select Order Type</option>
                                    <option value="Digitizing or Vector">Digitizing or Vector</option>
                                    <option value="Vector Art">Vector Art</option>
                                </select>
                            </div>
                            <div className="col-lg-12 w-100">
                                <a href="place-order.html"><button className="hero-btn">Get a free Quote</button></a>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
                </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}