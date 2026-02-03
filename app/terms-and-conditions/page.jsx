import React from "react";
import Header1 from "@/components/headers/Header1";
import Footer1 from "@/components/footers/Footer1";
import Breadcumb from "@/components/common/Breadcumb";
import "./terms.css";

export const metadata = {
  title: "Terms & Conditions || Bindals Property Hub",
  description: "Terms and Conditions for Bindals Property Hub - Real Estate Services",
};

export default function TermsAndConditions() {
  return (
    <>
      <div id="wrapper">
        <Header1 />
        <div className="main-content">
          <Breadcumb pageName="Terms & Conditions" />
          
          <section className="" style={{padding: '0 0 60px 0'}}>
            <div className="tf-container">
              <div className="row justify-center">
                <div className="col-lg-10">
                  <div className="terms-content">
                    {/* Header */}
                    <div className="terms-header mb-40">
                      <p className="text-1 mb-16">Last updated: December 24, 2025</p>
                      <p className="text-1">
                        Welcome to Bindals Property HUB ("Company", "we", "our", or "us"). 
                        These Terms & Conditions ("Terms") govern your access to and use of{" "}
                        <a href="https://bindalsproperty.com" className="text-color-primary">
                          https://bindalsproperty.com
                        </a>{" "}
                        (the "Website").
                      </p>
                      <p className="text-1 mt-16">
                        By accessing or using this Website, you agree to be bound by these Terms. 
                        If you do not agree, please do not use the Website.
                      </p>
                    </div>

                    {/* Section 1 */}
                    <div className="terms-section mb-40">
                      <h3 className="title mb-20">1. Company Information</h3>
                      <p className="text-1 mb-12"><strong>Company Name:</strong> Bindals Property HUB</p>
                      <p className="text-1 mb-8"><strong>Registered Address:</strong></p>
                      <p className="text-1 mb-8">RZD-193/192A, Street No. 9,</p>
                      <p className="text-1 mb-8">Mahavir Enclave, Dashrath Puri,</p>
                      <p className="text-1 mb-12">New Delhi 110045, India</p>
                      <p className="text-1">
                        <strong>Email:</strong>{" "}
                        <a href="mailto:bindalspropertyhub@gmail.com" className="text-color-primary">
                          bindalspropertyhub@gmail.com
                        </a>
                      </p>
                    </div>

                    {/* Section 2 */}
                    <div className="terms-section mb-40">
                      <h3 className="title mb-20">2. Nature of Services</h3>
                      <p className="text-1 mb-16">Bindals Property HUB provides:</p>
                      <ul className="list-style-disc mb-16">
                        <li className="text-1 mb-8">Real estate marketing and brokerage services</li>
                        <li className="text-1 mb-8">Property listings (residential & commercial)</li>
                        <li className="text-1 mb-8">Site visit coordination</li>
                        <li className="text-1 mb-8">Client assistance and consultation</li>
                      </ul>
                      <p className="text-1">
                        We are not a developer, builder, or government authority unless explicitly stated.
                      </p>
                    </div>

                    {/* Section 3 */}
                    <div className="terms-section mb-40">
                      <h3 className="title mb-20">3. Eligibility to Use</h3>
                      <p className="text-1 mb-16">By using this Website, you confirm that:</p>
                      <ul className="list-style-disc">
                        <li className="text-1 mb-8">You are at least 18 years old</li>
                        <li className="text-1 mb-8">You have the legal capacity to enter into a contract</li>
                        <li className="text-1 mb-8">Information provided by you is accurate and truthful</li>
                      </ul>
                    </div>

                    {/* Section 4 */}
                    <div className="terms-section mb-40">
                      <h3 className="title mb-20">4. No Guarantee or Offer</h3>
                      <ul className="list-style-disc mb-16">
                        <li className="text-1 mb-8">
                          Property details, pricing, availability, and specifications are subject to change without notice.
                        </li>
                        <li className="text-1 mb-8">
                          Images, layouts, floor plans, and descriptions are illustrative only.
                        </li>
                        <li className="text-1 mb-8">
                          Website content does not constitute a legal offer, contract, or guarantee.
                        </li>
                      </ul>
                      <p className="text-1">
                        Final transactions are governed by separate agreements between buyers, sellers, developers, or authorities.
                      </p>
                    </div>

                    {/* Section 5 */}
                    <div className="terms-section mb-40">
                      <h3 className="title mb-20">5. User Responsibilities</h3>
                      <p className="text-1 mb-16">You agree:</p>
                      <ul className="list-style-disc">
                        <li className="text-1 mb-8">Not to misuse the Website</li>
                        <li className="text-1 mb-8">Not to submit false or misleading information</li>
                        <li className="text-1 mb-8">Not to attempt unauthorized access or data extraction</li>
                        <li className="text-1 mb-8">Not to use content for unlawful or commercial resale purposes</li>
                      </ul>
                    </div>

                    {/* Section 6 */}
                    <div className="terms-section mb-40">
                      <h3 className="title mb-20">6. Intellectual Property Rights</h3>
                      <p className="text-1 mb-16">All content on this Website, including:</p>
                      <ul className="list-style-disc mb-16">
                        <li className="text-1 mb-8">Text, images, logos, branding</li>
                        <li className="text-1 mb-8">Layouts and design</li>
                      </ul>
                      <p className="text-1 mb-12">
                        is the property of Bindals Property HUB unless otherwise stated.
                      </p>
                      <p className="text-1">Unauthorized copying or reproduction is prohibited.</p>
                    </div>

                    {/* Section 7 */}
                    <div className="terms-section mb-40">
                      <h3 className="title mb-20">7. Third-Party Links</h3>
                      <p className="text-1">
                        The Website may contain links to third-party websites. We do not control or endorse 
                        their content and are not responsible for their policies or services.
                      </p>
                    </div>

                    {/* Section 8 */}
                    <div className="terms-section mb-40">
                      <h3 className="title mb-20">8. Limitation of Liability</h3>
                      <p className="text-1 mb-16">To the maximum extent permitted by law:</p>
                      <ul className="list-style-disc">
                        <li className="text-1 mb-8">We are not liable for inaccuracies, delays, or omissions</li>
                        <li className="text-1 mb-8">
                          We are not responsible for investment decisions made based on Website content
                        </li>
                        <li className="text-1 mb-8">
                          We are not liable for technical errors, downtime, or data loss
                        </li>
                      </ul>
                    </div>

                    {/* Section 9 */}
                    <div className="terms-section mb-40">
                      <h3 className="title mb-20">9. Indemnification</h3>
                      <p className="text-1">
                        You agree to indemnify and hold harmless Bindals Property HUB, its directors, employees, 
                        and partners from any claims, losses, or damages arising from your misuse of the Website 
                        or violation of these Terms.
                      </p>
                    </div>

                    {/* Section 10 */}
                    <div className="terms-section mb-40">
                      <h3 className="title mb-20">10. Advertising & Marketing Compliance</h3>
                      <p className="text-1 mb-16">We use:</p>
                      <ul className="list-style-disc mb-16">
                        <li className="text-1 mb-8">Google Ads</li>
                        <li className="text-1 mb-8">Meta (Facebook & Instagram) Ads</li>
                      </ul>
                      <p className="text-1 mb-16">By submitting your details, you consent to:</p>
                      <ul className="list-style-disc mb-16">
                        <li className="text-1 mb-8">Contact via phone, email, WhatsApp, or SMS</li>
                        <li className="text-1 mb-8">Marketing communication related to properties</li>
                      </ul>
                      <p className="text-1">You may opt out anytime.</p>
                    </div>

                    {/* Section 11 */}
                    <div className="terms-section mb-40">
                      <h3 className="title mb-20">11. Privacy & Cookies</h3>
                      <p className="text-1 mb-16">Your use of the Website is also governed by:</p>
                      <ul className="list-style-disc mb-16">
                        <li className="text-1 mb-8">Privacy Policy</li>
                        <li className="text-1 mb-8">Cookie Policy</li>
                      </ul>
                      <p className="text-1">Please review them carefully.</p>
                    </div>

                    {/* Section 12 */}
                    <div className="terms-section mb-40">
                      <h3 className="title mb-20">12. Termination</h3>
                      <p className="text-1">
                        We reserve the right to restrict or terminate access to the Website at any time 
                        without notice if these Terms are violated.
                      </p>
                    </div>

                    {/* Section 13 */}
                    <div className="terms-section mb-40">
                      <h3 className="title mb-20">13. Governing Law & Jurisdiction</h3>
                      <p className="text-1 mb-12">These Terms are governed by the laws of India.</p>
                      <p className="text-1">Courts of New Delhi shall have exclusive jurisdiction.</p>
                    </div>

                    {/* Section 14 */}
                    <div className="terms-section mb-40">
                      <h3 className="title mb-20">14. Changes to Terms</h3>
                      <p className="text-1">
                        We may modify these Terms at any time. Updates will be posted on this page 
                        with a revised "Last updated" date.
                      </p>
                    </div>

                    {/* Section 15 */}
                    <div className="terms-section mb-40">
                      <h3 className="title mb-20">15. Contact Information</h3>
                      <p className="text-1 mb-12">
                        For any questions regarding these Terms & Conditions:
                      </p>
                      <p className="text-1 mb-12">
                        <strong>Email:</strong>{" "}
                        <a href="mailto:bindalspropertyhub@gmail.com" className="text-color-primary">
                          bindalspropertyhub@gmail.com
                        </a>
                      </p>
                      <p className="text-1">
                        <strong>Contact Page:</strong>{" "}
                        <a href="/contact" className="text-color-primary">
                          https://bindalsproperty.com/contact
                        </a>
                      </p>
                    </div>

                    {/* CTA Box */}
                    <div className="terms-cta-box">
                      <div className="box-icon style-1">
                        <div className="heading d-flex align-items-center gap-16 mb-24">
                          <div className="tf-icon" style={{margin: '0'}}>
                            <i className="icon-phone-2" />
                          </div>
                          <h5 className="title">Have Questions?</h5>
                        </div>
                        <p className="text-1 mb-24" style={{textAlign: 'left'}}>
                          If you have any questions about these Terms & Conditions, please don't hesitate to contact us.
                        </p>
                        <a href="/contact" className="tf-btn bg-color-primary pd-23">
                          Contact Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer1 />
      </div>
    </>
  );
}
