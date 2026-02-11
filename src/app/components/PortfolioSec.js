"use client";

import Slider from "react-slick";

export default function PortfolioSec({ subheading, heading, type }) {
  const settings = {
    fade: false,
    autoplay: false,
    arrows: false,
    infinite: true,
    slidesToShow: 6,
    rtl: true,
    slidesToScroll: 4,
    cssEase: "ease",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 767, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      // { breakpoint: 468, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };



  let portfolioImages = [];

  if (type === 'digitizing') {
    portfolioImages = [
      "11.webp",
      "12.webp",
      "13.webp",
      "14.webp",
      "15.webp",
      "20.webp",
      "25.webp",
    ];
  }
  else if (type === 'vector-art') {
    portfolioImages = [
      "11.jpg",
      "12.jpg",
      "13.jpg",
      "14.jpg",
      "15.jpg",
      "20.jpg",
      "25.jpg",
    ];
  }
  else {
    // home / mix
    portfolioImages = [
      "1.webp",
      "2.webp",
      "3.webp",
      "4.webp",
      "20.webp",
      "25.webp",
      "23.webp",
      "24.webp",
    ];
  }




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
            <div className="tp-case-active">
              <Slider {...settings}>
                {portfolioImages.map((img, index) => (
                  <div
                    key={index}
                    className="tp-case-item text-center p-relative mb-30"
                  >
                    <div className="tp-case-item__thumb fix">
                      {/* <Link href="/portfolio"> */}
                      <img
                        src={`/assets/images/portfolio/${type}/${img}`}
                        alt={`${type} | Inizio Solutions`}
                      />
                      {/* </Link> */}
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          {/* BUTTON */}
          <div className="row">
            <div className="case-button mt-30 text-center">
              <a className="tp-btn text-capitalize" href="https://www.behance.net/iniziosolutionsllc" target="_blank">
                View Full Portfolio
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}