"use client";
import Image from "next/image";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
import BrandSlider from "@/components/common/BrandSlider";
import "./partners.css";
export default function Partners() {
  return (
    <section className="section-work-together ">
      <div className="wg-partner  tf-spacing-1">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="heading-section  text-center mb-48">
                <h2 className="title text_white split-text effect-right">
                  <SplitTextAnimation text="Properties from trusted vendors & agents." />
                </h2>
                <p
                  className="text-1 text_white wow animate__fadeInUp animate__animated"
                  data-wow-duration="1.5s"
                >
                  Get expert support to maximize value and close with confidence.
                </p>
              </div>
              <BrandSlider />
            </div>
          </div>
        </div>
      </div>
      <div className="wg-appraisal ">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <div className="heading-section mb-30">
                  <h2 className="title split-text effect-right">
                    <SplitTextAnimation text="Are You Selling Or" />
                    <br />
                    <SplitTextAnimation text="Renting Your Property?" />
                  </h2>
                  <p
                    className="text-1 split-text split-lines-transform"
                    data-wow-duration="1.5s"
                  >
                    Get expert support to maximize value and close with confidence.
                  </p>
                </div>
                <a href="./contact" className="tf-btn bg-color-primary fw-7 pd-11">
                  Request your free appraisal
                </a>
                <div
                  className="person wow animate__fadeInRight animate__animated"
                  data-wow-duration="2s"
                >
                  <Image
                    alt=""
                    src="/images/section/del.jpg"
                    width={405}
                    height={495}
                    allign="center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
