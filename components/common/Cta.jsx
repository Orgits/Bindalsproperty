import React from "react";
import Image from "next/image";
export default function Cta() {
  return (
    <section className="section-CTA">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="content-inner">
              <Image
                alt=""
                src="/images/section/cta.png"
                width={216}
                height={312}
              />
              <div className="content">
                <h4 className="text_white mb-8">
                  Find a Local Real Estate Agent Today
                </h4>
                <p className="text_white text-1">
                  Looking to buy or sell a home? We’re here to guide you toward the best possible outcome.
                </p>
              </div>
              <a href="tel:+919873940835" className="tf-btn style-2 fw-6">
                Call your location agent
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
