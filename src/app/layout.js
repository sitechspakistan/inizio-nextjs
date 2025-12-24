// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import '../styles/bootstrap.min.css';
import '../styles/animate.css';
import '../styles/custom-animation.css';
// import '../styles/flaticon.css';
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
  title: "Inizio Solutions",
  description: "Expert Embroidery Digitizing, Vector Art & Premium Custom Patches in the USA. Fast turnaround, High-quality, print-ready files. Get a FREE Quote Now",
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
        <Script src="/assets/js/bootstrap.bundle.min.js"></Script>
        <Script src="/assets/js/meanmenu.js"></Script>
        <Script src="/assets/js/main.js"></Script>

      </body>

      </html>
  );
}
