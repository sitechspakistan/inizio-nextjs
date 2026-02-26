"use client";

import { useEffect, useState } from "react";
import Slider from "react-slick";

export default function PortfolioSec({ subheading, heading, type }) {
  const [mounted, setMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    setMounted(true);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted) return null;

  // Width ke hisaab se slidesToShow decide karo
  const getSlidesToShow = () => {
    if (windowWidth < 576) return 1;
    if (windowWidth < 767) return 2;
    if (windowWidth < 1024) return 3;
    if (windowWidth < 1200) return 4;
    return 6;
  };

  const settings = {
    fade: false,
    autoplay: false,
    arrows: false,
    infinite: true,
    slidesToShow: getSlidesToShow(),
    slidesToScroll: 1,
    rtl: true,
    cssEase: "ease",
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4, slidesToScroll: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 767, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 576, settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ]
  };

  // ...rest of your code

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
  // let portfolioImages = [
  //   "1.webp",
  //   "2.webp",
  //   "3.webp",
  //   "4.webp",
  //   "20.webp",
  //   "25.webp",
  //   "23.webp",
  //   "24.webp",
  // ];




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