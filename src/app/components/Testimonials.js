'use client';

import Slider from "react-slick";

export default function Testimonials() {
  const settings = {
    fade: false,
    autoplay: false,
    slidesToShow: 5,
    arrows: false,
    responsive: [
      {
        breakpoint: 1600,
        settings: { slidesToShow: 4 }
      },
      {
        breakpoint: 1400,
        settings: { slidesToShow: 4 }
      },
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section>
      <div className="tp-testimonial-area grey-bg pt-60 pb-60 fix">
        <div className="container-fluid">
          <div className="row g-0 justify-content-center">
            <div
              className="col-xl-4 wow tpfadeUp"
              data-wow-duration=".7s"
              data-wow-delay=".5s"
            >
              <div className="tp-testtimonial-title-box mb-60 text-center">
                <div className="trustpilot-btn">
                  <a
                    href="https://www.trustpilot.com/review/www.iniziosolutions.com"
                    target="_blank"
                  >
                    <button className="trust-btn">
                      Review us on{" "}
                      <span>
                        <img
                          src="/assets/images/testimonials/trustpilot-logo.png"
                          alt="" />
                      </span>
                    </button>
                  </a>
                </div>
                <h2>
                  <span className="content-color">Testimonials</span>
                </h2>
                <p className="fs-4">
                  What People Say About
                  <br />
                  Our Company
                </p>
              </div>
            </div>
          </div>

          <div className="testimonial-slide-wrapper">
            <Slider
              {...settings}
              className="testimonial-active-three"
            >
                <div className="tp-testimonial-three text-center wow tpfadeUp" data-wow-duration=".7s"
                        data-wow-delay=".6s">
                        <div className="tp-testimonial-three__content">
                           <div className="tp-testimonial-three__content-icon">
                              <i className="fas fa-quote-right"></i>
                           </div>
                           <div className="tp-testimonial-three__content-text mb-30">
                              <p>"John Reed at Inizio has been nothing short of Amazing! He is so helpful, kind and
                                 inspiring and he actuly... <a
                                    href="https://www.trustpilot.com/reviews/68d6baa79ca20af1c5e02e14" className="read-more"
                                    target="_blank">Read More</a> </p>
                           </div>
                        </div>
                        <div className="tp-testimonial-three__user">
                           <div className="tp-testimonial-three__user-img1">
                              <p>KM</p>
                           </div>
                           <div className="tp-testimonial-three__user-content">
                              <h4 className="user-title">Kay Middleton</h4>
                           </div>
                           <div className="tp-testimonial-item__ratting d-none d-md-block">
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                           </div>
                        </div>
                     </div>
                     <div className="tp-testimonial-three text-center wow tpfadeUp" data-wow-duration=".7s"
                        data-wow-delay=".s7">
                        <div className="tp-testimonial-three__content">
                           <div className="tp-testimonial-three__content-icon content-icon-1">
                              <i className="fas fa-quote-right"></i>
                           </div>
                           <div className="tp-testimonial-three__content-text  pb-30">
                              <p>"Inisio is a great digitizing company I very recommend it to everyone. I love the
                                 quality of their work.</p>
                           </div>
                        </div>
                        <div className="tp-testimonial-three__user">
                           <div className="tp-testimonial-three__user-img1 img-bg-1">
                              <p>MA</p>
                           </div>
                           <div className="tp-testimonial-three__user-content">
                              <h4 className="user-title">Marisela</h4>
                              <div className="tp-testimonial-item__ratting d-none d-md-block">
                                 <span><i className="fas fa-star"></i></span>
                                 <span><i className="fas fa-star"></i></span>
                                 <span><i className="fas fa-star"></i></span>
                                 <span><i className="fas fa-star"></i></span>
                                 <span><i className="fas fa-star"></i></span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="tp-testimonial-three text-center wow tpfadeUp" data-wow-duration=".7s"
                        data-wow-delay=".8s">
                        <div className="tp-testimonial-three__content">
                           <div className="tp-testimonial-three__content-icon content-icon-2">
                              <i className="fas fa-quote-right"></i>
                           </div>
                           <div className="tp-testimonial-three__content-text">
                              <p>I've been having our designs digitized and vectorized by Inizio for 2+ years. They
                                 have always done great works... <a
                                    href="https://www.trustpilot.com/reviews/68d6baa79ca20af1c5e02e14" className="read-more"
                                    target="_blank">Read More</a></p>
                           </div>
                        </div>
                        <div className="tp-testimonial-three__user">
                           <div className="tp-testimonial-three__user-img ">
                              <img src="/assets/images/testimonials/73x73.png" alt="" />
                           </div>
                           <div className="tp-testimonial-three__user-content">
                              <h4 className="user-title">Zachary James</h4>
                           </div>
                           <div className="tp-testimonial-item__ratting d-none d-md-block">
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                           </div>
                        </div>
                     </div>
                     <div className="tp-testimonial-three text-center wow tpfadeUp" data-wow-duration=".7s"
                        data-wow-delay=".9s">
                        <div className="tp-testimonial-three__content">
                           <div className="tp-testimonial-three__content-icon content-icon-3">
                              <i className="fas fa-quote-right"></i>
                           </div>
                           <div className="tp-testimonial-three__content-text">
                              <p>Missouri Cotton Exchange is very happy with the digitizing and customer service that
                                 we receive from Inizio... <a
                                    href="https://www.trustpilot.com/reviews/68d6baa79ca20af1c5e02e14" className="read-more"
                                    target="_blank">Read More</a></p>
                           </div>
                        </div>
                        <div className="tp-testimonial-three__user">
                           <div className="tp-testimonial-three__user-img1 img-bg-2">
                              <p>ML</p>
                           </div>
                           <div className="tp-testimonial-three__user-content">
                              <h4 className="user-title">Mallorye Looten</h4>
                           </div>
                           <div className="tp-testimonial-item__ratting d-none d-md-block">
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                           </div>
                        </div>
                     </div>
                     <div className="tp-testimonial-three text-center wow tpfadeUp" data-wow-duration=".7s"
                        data-wow-delay="1s">
                        <div className="tp-testimonial-three__content">
                           <div className="tp-testimonial-three__content-icon content-icon-4">
                              <i className="fas fa-quote-right"></i>
                           </div>
                           <div className="tp-testimonial-three__content-text">
                              <p>Great service as usually. They’re currently my go-to for embroidery digitizing & I
                                 always receive a quality & speedy outcome.</p>
                           </div>
                        </div>
                        <div className="tp-testimonial-three__user">
                           <div className="tp-testimonial-three__user-img">
                              <img src="/assets/images/testimonials/73x73 (1).png" alt="" />
                           </div>
                           <div className="tp-testimonial-three__user-content">
                              <h4 className="user-title">UPrintz Design Studio</h4>
                           </div>
                           <div className="tp-testimonial-item__ratting d-none d-md-block">
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                           </div>
                        </div>
                     </div>
                     <div className="tp-testimonial-three text-center wow tpfadeUp" data-wow-duration=".7s"
                        data-wow-delay="1.1s">
                        <div className="tp-testimonial-three__content">
                           <div className="tp-testimonial-three__content-icon content-icon-5">
                              <i className="fas fa-quote-right"></i>
                           </div>
                           <div className="tp-testimonial-three__content-text">
                              <p>Aiden is great to work with!
                                 Very timely and polite!
                                 They do a great job!</p>
                           </div>

                        </div>
                        <div className="tp-testimonial-three__user">
                           <div className="tp-testimonial-three__user-img1 img-bg-3">
                              <p>J</p>
                           </div>
                           <div className="tp-testimonial-three__user-content">
                              <h4 className="user-title">James Reaves</h4>
                           </div>
                           <div className="tp-testimonial-item__ratting d-none d-md-block">
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                              <span><i className="fas fa-star"></i></span>
                           </div>
                        </div>
                     </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}