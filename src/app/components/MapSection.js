import Link from "next/link";

export default function MapSection() {
   return (
      <section>
         <div className="tp-about-area ab-area-sapce pt-80 pb-80 grey-bg-1">
            <div className="container">
               <div className="row align-items-center">

                  <div className="col-xl-5 col-lg-5 wow tpfadeLeft" data-wow-duration=".7s" data-wow-delay=".7s"
                     style={{ visibility: "visible", animationDuration: "0.7s", animationDelay: "0.7s", animationName: "tpfadeLeft" }}>
                     <div className="tp-ab-section-title-box">
                        <h2 className="tp-section-title">Your Partner for Global Growth & Innovation</h2>
                        <p>Trusted by 1,000+ clients worldwide, Inizio Solutions provides professional embroidery digitizing services across the USA and beyond. Using precision digitizing and a data-driven workflow, we help brands achieve flawless stitch quality and consistent results at scale.</p>
                        <Link className="tp-btn-map text-capitalize" href="#contact-us">Get a Quote </Link>
                     </div>
                  </div>
                  <div className="col-xl-7 col-lg-7 wow tpfadeRight " data-wow-duration=".7s" data-wow-delay=".5s"
                     style={{ visibility: "visible", animationDuration: "0.7s", animationDelay: "0.5s", animationName: "tpfadeRight" }}>
                     <div className="tp-about-global">

                        <div className="tp-map-icon kissimmee">
                           <Link href="/template">
                              <i className="far fa-dot-circle"></i>
                              <p>Kissimmee, Florida</p>
                           </Link>
                        </div>

                        <div className="tp-map-icon sunrise">
                           <Link href="/template">
                              <i className="far fa-dot-circle"></i>
                              <p>Sunrise, Floride</p>
                           </Link>
                        </div>

                        <div className="tp-map-icon okeechobee">
                           <Link href="/template">
                              <i className="far fa-dot-circle"></i>
                              <p>Okeechobee, Florida</p>
                           </Link>
                        </div>

                        <div className="tp-map-icon new-york">
                           <Link href="/template">
                              <i className="far fa-dot-circle"></i>
                              <p>New York City, NY</p>
                           </Link>
                        </div>

                        <div className="tp-map-icon buffalo">
                           <Link href="/template">
                              <i className="far fa-dot-circle"></i>
                              <p>Buffalo, NY</p>
                           </Link>
                        </div>
                        <div className="tp-map-icon phoenix">
                           <Link href="/template">
                              <i className="far fa-dot-circle"></i>
                              <p>Phoenix, A rizona</p>
                           </Link>
                        </div>

                     </div>

                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}