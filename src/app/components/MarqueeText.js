'use client';

import Slider from "react-slick";

export default function MarqueeText() {
  const settings = {
    speed: 10000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 1,
    variableWidth: true,
    infinite: true,
    arrows: false,
  };

  return (
    <section>
         <div className="tp-marque-area fix pt-60">
            <div className="tp-marque-wrapper">
                <div className="marque-slider-active-2">
                <Slider {...settings}>
                    <div className="marque-item">
                        <span>Embroidery <span className="content-color-1">Designing.</span></span>
                    </div>
                    <div className="marque-item">
                        <span>Vector <span className="content-color-1">Art.</span></span>
                    </div>
                    <div className="marque-item">
                        <span>Custom <span className="content-color-1">Design.</span></span>
                    </div>
                </Slider>
                </div>
            </div>
         </div>
    </section>
  );
}