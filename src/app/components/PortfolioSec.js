"use client";

import Slider from "react-slick";
import Link from "next/link";

export default function PortfolioSec({subheading, heading}) {

  const settings = {
    fade: false,
    autoplay: false,
    arrows: false,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const portfolioImages = [
    "11.webp",
    "12.webp",
    "13.webp",
    "14.webp",
    "15.webp",
  ];

  return (
    <section>
      <div className="tp-case-area case-grident-bg pt-60 pb-60 fix">
        <div className="container-fluid">

          {/* TITLE */}
          <div className="tp-case-title-box text-center">
            <span className="tp-section-subtitle">{subheading}</span>
            <h2 className="heading-2 pb-30 mb-0"> {heading}</h2>
          </div>

          {/* SLIDER */}
          <div className="tp-case-wrapper">
            <Slider className="tp-case-active" {...settings}>
              {portfolioImages.map((img, index) => (
                <div
                  key={index}
                  className="tp-case-item text-center p-relative mb-30"
                >
                  <div className="tp-case-item__thumb fix">
                    <Link href="/portfolio">
                      <img
                        src={`/assets/images/digitizing/logo/${img}`}
                        alt="Portfolio item"
                      />
                    </Link>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* BUTTON */}
          <div className="row">
            <div className="case-button mt-30 text-center">
              <Link className="tp-btn text-capitalize" href="/portfolio">
                View Full Portfolio
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}