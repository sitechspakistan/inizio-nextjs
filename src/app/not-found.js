import Link from "next/link"


export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
}



export default function NotFound() {

  return (
    <section className="breadcrumb__area breadcrumb-height include-bg p-relative"
      data-background="/assets/images/slider-grident-bg.png" style={{ backgroundImage: "url(/assets/images/slider-grident-bg.png)" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="breadcrumb__content">
              {/* <div className="breadcrumb__list wow tpfadeUp" data-wow-duration=".9s">
                                <span><Link href="/">Home</Link></span>
                                <span className="dvdr"><i className="fa fa-angle-right"></i></span>
                                <span> {subheading}</span>
                            </div> */}
              <h3 className="breadcrumb__title wow tpfadeUp " data-wow-duration=".7s" data-wow-delay=".5s"><span className="content-color">404 </span>
                | Page Not Found
              </h3>

            </div>
          </div>
          <div className="col-lg-6">
            <p>This page may have been removed, renamed, or is temporarily unavailable.
              Please use the button below to visit our homepage and find what you're looking for.</p>
              <div className="tp-service-content mb-20 text-start">
            <Link className="tp-btn mt-10 text-capitalize " href="/">Explore Our Website</Link>
          </div>
          </div>
          
        </div>
      </div>
    </section>

  )
}