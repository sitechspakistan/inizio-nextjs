// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import '../styles/bootstrap.min.css';
import '../styles/animate.css';
import '../styles/custom-animation.css';
import '../styles/flaticon.css';
import '../styles/font-awesome-pro.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/meanmenu.css';
import '../styles/magnific-popup.css';
import '../styles/spacing.css';
import '../styles/style.css';
import '../styles/custom.css';
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
/>



import Header from "./includes/Header";
import Footer from "./includes/Footer";
import WhatsAppButton from "./components/WhatsappBtn";
import Chatwidget from "./components/ChatWidget";
import ChatBox from "./components/ChatWidget";


// export const metadata = {
//   title: "Inizio Solutions | Embroidery Digitizing & Vector Art",
//   description: "Inizio Solutions is a full-service digital agency helping startups and enterprises build AI automations, SaaS platforms, and high-performing websites. We also craft logos and branding that power business growth.",
//   alternates: {
//     canonical: "https://iniziosolutions.com",
//   },
//   icons: {
//     icon: "/assets/images/inizo-logo.webp",
//   },
//   metadataBase: new URL("https://iniziosolutions.com"),

//   openGraph: {
//     title: "Inizio Solutions | Embroidery Digitizing & Vector Art",
//     description: "Inizio Solutions is a full-service digital agency helping startups and enterprises build AI automations, SaaS platforms, and high-performing websites. We also craft logos and branding that power business growth.",
//     url: "https://iniziosolutions.com",
//     siteName: "Inizio Solutions",
//     images: [
//       {
//         url: "https://iniziosolutions.com/assets/images/open-graph.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Inizio Solutions Logo",
//       },
//     ],
//     type: "website",
//   },
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head><link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-p+o8+5msqZ5qfNczL0V7Kc6+OniBkM+ZPqMw+uvQJp8AwOKQvQ8xR5ZXEm9f6Rg7Bcl7Gp+/xYbE7e6D+g7rAw=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
        <Script async src={`https://www.googletagmanager.com/gtag/js?id=G-QZLZ17ENJT`}></Script>
        <Script>
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-QZLZ17ENJT') ;`}
        </Script>
      </head>

      <body>

        <Header />
        <div className="body-overlay"></div>
        <main>{children}</main>


        <Footer />
        <WhatsAppButton />
        {/* <ChatBox /> */}
        <Script src="/assets/js/jquery.js"></Script>
        <Script src="/assets/js/waypoints.js"></Script>
        <Script src="/assets/js/wow.js"></Script>
        <Script src="/assets/js/magnific-popup.js"></Script>
        <Script src="/assets/js/counterup.js"></Script>
        <Script src="/assets/js/nice-select.js"></Script>
        <Script src="/assets/js/bootstrap.bundle.min.js"></Script>
        <Script src="/assets/js/isotope-pkgd.js"></Script>
        <Script src="/assets/js/imagesloaded-pkgd.js"></Script>
        <Script src="/assets/js/meanmenu.js"></Script>
        <Script src="/assets/js/main.js"></Script>
        <Script src="/assets/js/custom.js"></Script>


      </body>

    </html >
  );
}
