'use client';

import Slider from "react-slick";

export default function Clients() {
  const settings = {
    fade: false,
    autoplay: false,
    slidesToShow: 6,
    arrows: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          arrows: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="tp-brand-area brand-space-bottom pb-110">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tp-brand-title-box pb-60">
              <h4 className="tp-brand-title text-center pt-50">
                <span className="content-color">Over 250+</span> business growing
                with us
              </h4>
            </div>
          </div>
        </div>

        <Slider
          {...settings}
          className="brand-slider-active d-flex align-items-center"
        >
          <div className="brand-item">
            <div className="tp-brand-icon">
              <img src="assets/images/logo/10.webp" alt="" />
            </div>
          </div>

          <div
            className="brand-item wow tpfadeUp"
            data-wow-duration=".7s"
            data-wow-delay=".3s"
          >
            <div className="tp-brand-icon">
              <img src="assets/images/logo/03.webp" alt="" />
            </div>
          </div>

          <div
            className="brand-item wow tpfadeUp"
            data-wow-duration=".7s"
            data-wow-delay=".5s"
          >
            <div className="tp-brand-icon">
              <img src="assets/images/logo/04.webp" alt="" />
            </div>
          </div>

          <div
            className="brand-item wow tpfadeUp"
            data-wow-duration=".7s"
            data-wow-delay=".7s"
          >
            <div className="tp-brand-icon">
              <img src="assets/images/logo/07.webp" alt="" />
            </div>
          </div>

          <div
            className="brand-item wow tpfadeUp"
            data-wow-duration=".7s"
            data-wow-delay=".9s"
          >
            <div className="tp-brand-icon">
              <img src="assets/images/logo/09.webp" alt="" />
            </div>
          </div>

          <div
            className="brand-item wow tpfadeUp"
            data-wow-duration=".7s"
            data-wow-delay=".9s"
          >
            <div className="tp-brand-icon">
              <img src="assets/images/logo/01.webp" alt="" />
            </div>
          </div>

          <div
            className="brand-item wow tpfadeUp"
            data-wow-duration=".7s"
            data-wow-delay="1s"
          >
            <div className="tp-brand-icon">
              <img src="assets/images/logo/06.webp" alt="" />
            </div>
          </div>

          <div
            className="brand-item wow tpfadeUp"
            data-wow-duration=".7s"
            data-wow-delay="1s"
          >
            <div className="tp-brand-icon">
              <img src="assets/images/logo/05.webp" alt="" />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}