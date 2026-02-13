import Script from "next/script";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Blogs from "@/components/homes/home-1/Blogs";
import Categories from "@/components/common/Categories";
import Cities from "@/components/homes/home-1/Cities";
import HelpCenter from "@/components/homes/home-1/HelpCenter";
import Hero from "@/components/homes/home-1/Hero";
import LoanCalculator from "@/components/homes/home-1/LoanCalculator";
import Partners from "@/components/homes/home-1/Partners";
import Properties from "@/components/homes/home-1/Properties";
import Properties2 from "@/components/homes/home-1/Properties2";
import Testimonials from "@/components/homes/home-1/Testimonials";

export const metadata = {
  title: "Bindals Property Hub - Luxury Real Estate ",
  description: "Bindals Property Hub - Luxury Real Estate",
};
export default function Home() {
  return (
    <>
     {/* Google Tag */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17909613244"
        strategy="afterInteractive"
      />
      <Script id="google-tag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17909613244');
        `}
      </Script>
      <Header1 />
      <Hero />
      <div className="main-content ">
        <Categories />
        <Properties />
        <HelpCenter />
        {/* <LoanCalculator /> */}
        <Cities />
        {/* <Properties2 /> */}
        <Partners />
        <Blogs />
        {/* <Testimonials /> */}
      </div>
      <Footer1 />
    </>
  );
}
