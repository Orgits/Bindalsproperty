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

{/* meta */}
{/* Meta Pixel */}
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;
          n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];
          t=b.createElement(e);t.async=!0;
          t.src=v;
          s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}
          (window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');

          fbq('init', '909795298216798');
          fbq('track', 'PageView');
        `}
      </Script>
{/* <!-- Event snippet for Submit lead form conversion page --> */}

<Script id="google-ads" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', 'AW-17963893077');
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
