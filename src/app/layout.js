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

import Header from "./includes/Header";
import Footer from "./includes/Footer";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Inizio Solutions | Embroidery Digitizing & Vector Art",
  description: "Inizio Solutions is a full-service digital agency helping startups and enterprises build AI automations, SaaS platforms, and high-performing websites. We also craft logos and branding that power business growth.",
  alternates: {
    canonical: "https://iniziosolutions.com",
  },
  icons: {
    icon: "/assets/images/inizo-logo.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="body-overlay"></div>
        <main>{children}</main>


        <Footer />
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

      </body>

      </html>
  );
}
