import React from "react";
import Header1 from "@/components/headers/Header1";
import Footer1 from "@/components/footers/Footer1";
import Breadcumb from "@/components/common/Breadcumb";
import "./privacy.css";

export const metadata = {
  title: "Privacy Policy || Bindals Property Hub",
  description: "Privacy Policy for Bindals Property Hub - Real Estate Services",
};

export default function PrivacyPolicy() {
  return (
    <>
      <div id="wrapper">
        <Header1 />
        <div className="main-content">
          <Breadcumb pageName="Privacy Policy" />
          
          <section className="" style={{paddingBottom: '60px'}}>
            <div className="tf-container">
              <div className="row justify-center">
                <div className="col-lg-10">
                  <div className="privacy-content">
                    {/* Header */}
                    <div className="privacy-header mb-40">
                      <p className="text-1 mb-16">Last updated: December 24, 2025</p>
                      <p className="text-1">
                        This Privacy Policy describes how Bindals Property HUB ("Company", "we", "our", or "us") 
                        collects, uses, discloses, and protects your information when you visit or interact with 
                        our website{" "}
                        <a href="https://bindalsproperty.com" className="text-color-primary">
                          https://bindalsproperty.com
                        </a>{" "}
                        (the "Website" or "Service").
                      </p>
                      <p className="text-1 mt-16">
                        By using this Website, you consent to the practices described in this Privacy Policy.
                      </p>
                    </div>

                    {/* Section 1 */}
                    <div className="privacy-section mb-40">
                      <h3 className="title mb-20">1. Company Information</h3>
                      <p className="text-1 mb-12"><strong>Company Name:</strong> Bindals Property HUB</p>
                      <p className="text-1 mb-8"><strong>Registered Address:</strong></p>
                      <p className="text-1 mb-8">RZD-193/192A, Street No. 9,</p>
                      <p className="text-1 mb-8">Mahavir Enclave, Dashrath Puri,</p>
                      <p className="text-1 mb-12">New Delhi 110045, India</p>
                      <p className="text-1 mb-12">
                        <strong>Email:</strong>{" "}
                        <a href="mailto:info@bindalsproperty.com" className="text-color-primary">
                          info@bindalsproperty.com
                        </a>
                      </p>
                      <p className="text-1">
                        <strong>Website:</strong>{" "}
                        <a href="https://bindalsproperty.com" className="text-color-primary">
                          https://bindalsproperty.com
                        </a>
                      </p>
                    </div>

                    {/* Section 2 */}
                    <div className="privacy-section mb-40">
                      <h3 className="title mb-20">2. Information We Collect</h3>
                      
                      <h5 className="fw-6 mb-16">2.1 Personal Information</h5>
                      <p className="text-1 mb-16">
                        We may collect the following personal information when you voluntarily submit it via forms, calls, or messages:
                      </p>
                      <ul className="list-style-disc mb-24">
                        <li className="text-1 mb-8">Full name</li>
                        <li className="text-1 mb-8">Email address</li>
                        <li className="text-1 mb-8">Phone number / WhatsApp number</li>
                        <li className="text-1 mb-8">Property preferences and budget</li>
                        <li className="text-1 mb-8">Location details</li>
                        <li className="text-1 mb-8">Any other information you choose to provide</li>
                      </ul>

                      <h5 className="fw-6 mb-16">2.2 Automatically Collected Information</h5>
                      <p className="text-1 mb-16">When you visit our Website, we automatically collect:</p>
                      <ul className="list-style-disc">
                        <li className="text-1 mb-8">IP address</li>
                        <li className="text-1 mb-8">Browser type and version</li>
                        <li className="text-1 mb-8">Device information</li>
                        <li className="text-1 mb-8">Pages visited and time spent</li>
                        <li className="text-1 mb-8">Referring URLs</li>
                        <li className="text-1 mb-8">Cookies and tracking data</li>
                      </ul>
                    </div>

                    {/* Section 3 */}
                    <div className="privacy-section mb-40">
                      <h3 className="title mb-20">3. How We Use Your Information</h3>
                      <p className="text-1 mb-16">We use your information to:</p>
                      <ul className="list-style-disc">
                        <li className="text-1 mb-8">Provide real estate services and respond to inquiries</li>
                        <li className="text-1 mb-8">Contact you regarding properties, site visits, or deals</li>
                        <li className="text-1 mb-8">Run advertising campaigns (Google & Meta)</li>
                        <li className="text-1 mb-8">Improve website performance and user experience</li>
                        <li className="text-1 mb-8">Conduct analytics and marketing optimization</li>
                        <li className="text-1 mb-8">Comply with legal obligations</li>
                      </ul>
                    </div>

                    {/* Section 4 */}
                    <div className="privacy-section mb-40">
                      <h3 className="title mb-20">4. Cookies & Tracking Technologies</h3>
                      <p className="text-1 mb-16">
                        We use cookies, pixels, tags, and similar technologies, including but not limited to:
                      </p>
                      <ul className="list-style-disc mb-24">
                        <li className="text-1 mb-8">Google Analytics</li>
                        <li className="text-1 mb-8">Google Ads Conversion Tracking</li>
                        <li className="text-1 mb-8">Meta (Facebook & Instagram) Pixel</li>
                      </ul>

                      <p className="text-1 mb-16">These help us:</p>
                      <ul className="list-style-disc mb-24">
                        <li className="text-1 mb-8">Measure traffic and conversions</li>
                        <li className="text-1 mb-8">Run remarketing/retargeting ads</li>
                        <li className="text-1 mb-8">Improve ad relevance</li>
                      </ul>

                      <h5 className="fw-6 mb-16">Managing Cookies</h5>
                      <p className="text-1">
                        You can control or disable cookies through your browser settings. Disabling cookies may affect website functionality.
                      </p>
                    </div>

                    {/* Section 5 */}
                    <div className="privacy-section mb-40">
                      <h3 className="title mb-20">5. Google Ads & Meta Ads Compliance</h3>
                      
                      <h5 className="fw-6 mb-16">Advertising & Remarketing</h5>
                      <p className="text-1 mb-16">We use:</p>
                      <ul className="list-style-disc mb-24">
                        <li className="text-1 mb-8">Google Ads</li>
                        <li className="text-1 mb-8">Meta Ads (Facebook & Instagram)</li>
                      </ul>
                      <p className="text-1 mb-24">
                        These platforms may collect or receive information from our Website to provide targeted advertisements.
                      </p>

                      <h5 className="fw-6 mb-16">No Sensitive Data Collection</h5>
                      <p className="text-1 mb-16">We do not collect or share:</p>
                      <ul className="list-style-disc mb-24">
                        <li className="text-1 mb-8">Health data</li>
                        <li className="text-1 mb-8">Financial data</li>
                        <li className="text-1 mb-8">Government IDs</li>
                        <li className="text-1 mb-8">Biometric data</li>
                      </ul>

                      <h5 className="fw-6 mb-16">Opt-Out Options</h5>
                      <ul className="list-style-disc">
                        <li className="text-1 mb-8">
                          <strong>Google Ads Settings:</strong>{" "}
                          <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-color-primary">
                            https://adssettings.google.com
                          </a>
                        </li>
                        <li className="text-1 mb-8">
                          <strong>Facebook Ad Preferences:</strong>{" "}
                          <a href="https://www.facebook.com/adpreferences" target="_blank" rel="noopener noreferrer" className="text-color-primary">
                            https://www.facebook.com/adpreferences
                          </a>
                        </li>
                      </ul>
                    </div>

                    {/* Section 6 */}
                    <div className="privacy-section mb-40">
                      <h3 className="title mb-20">6. Sharing of Information</h3>
                      <p className="text-1 mb-16">We may share your data with:</p>
                      <ul className="list-style-disc mb-16">
                        <li className="text-1 mb-8">Advertising platforms (Google, Meta)</li>
                        <li className="text-1 mb-8">Analytics providers</li>
                        <li className="text-1 mb-8">CRM and lead management tools</li>
                        <li className="text-1 mb-8">Legal or regulatory authorities (if required by law)</li>
                      </ul>
                      <p className="text-1 fw-6">We do not sell personal data.</p>
                    </div>

                    {/* Section 7 */}
                    <div className="privacy-section mb-40">
                      <h3 className="title mb-20">7. Data Retention</h3>
                      <p className="text-1 mb-16">We retain personal data only as long as necessary for:</p>
                      <ul className="list-style-disc mb-16">
                        <li className="text-1 mb-8">Business operations</li>
                        <li className="text-1 mb-8">Legal compliance</li>
                        <li className="text-1 mb-8">Marketing and analytics</li>
                      </ul>
                      <p className="text-1">You may request deletion at any time.</p>
                    </div>

                    {/* Section 8 */}
                    <div className="privacy-section mb-40">
                      <h3 className="title mb-20">8. Your Rights Under GDPR (EU Users)</h3>
                      <p className="text-1 mb-16">If you are located in the EU, you have the right to:</p>
                      <ul className="list-style-disc mb-16">
                        <li className="text-1 mb-8">Access your personal data</li>
                        <li className="text-1 mb-8">Rectify incorrect data</li>
                        <li className="text-1 mb-8">Request data deletion</li>
                        <li className="text-1 mb-8">Restrict or object to processing</li>
                        <li className="text-1 mb-8">Data portability</li>
                      </ul>
                      <p className="text-1">To exercise these rights, contact us using the details below.</p>
                    </div>

                    {/* Section 9 */}
                    <div className="privacy-section mb-40">
                      <h3 className="title mb-20">9. Your Rights Under CCPA / CPRA (California Residents)</h3>
                      <p className="text-1 mb-16">California residents have the right to:</p>
                      <ul className="list-style-disc mb-16">
                        <li className="text-1 mb-8">Know what personal data is collected</li>
                        <li className="text-1 mb-8">Request deletion of personal data</li>
                        <li className="text-1 mb-8">Opt out of data selling (we do not sell data)</li>
                        <li className="text-1 mb-8">Non-discrimination for exercising rights</li>
                      </ul>
                      <p className="text-1">
                        <strong>Request method:</strong> Email us at{" "}
                        <a href="mailto:info@bindalsproperty.com" className="text-color-primary">
                          info@bindalsproperty.com
                        </a>
                      </p>
                    </div>

                    {/* Section 10 */}
                    <div className="privacy-section mb-40">
                      <h3 className="title mb-20">10. Data Security</h3>
                      <p className="text-1">
                        We use reasonable technical and organizational safeguards to protect your data. 
                        However, no online transmission is 100% secure.
                      </p>
                    </div>

                    {/* Section 11 */}
                    <div className="privacy-section mb-40">
                      <h3 className="title mb-20">11. Children's Privacy</h3>
                      <p className="text-1">
                        Our Website is not intended for children under 13 years of age, and we do not 
                        knowingly collect data from minors.
                      </p>
                    </div>

                    {/* Section 12 */}
                    <div className="privacy-section mb-40">
                      <h3 className="title mb-20">12. Third-Party Links</h3>
                      <p className="text-1">
                        Our Website may contain links to third-party websites. We are not responsible 
                        for their privacy practices.
                      </p>
                    </div>

                    {/* Section 13 */}
                    <div className="privacy-section mb-40">
                      <h3 className="title mb-20">13. Changes to This Privacy Policy</h3>
                      <p className="text-1">
                        We may update this Privacy Policy periodically. Updates will be posted on this 
                        page with a revised "Last Updated" date.
                      </p>
                    </div>

                    {/* Section 14 */}
                    <div className="privacy-section mb-40">
                      <h3 className="title mb-20">14. Contact Us</h3>
                      <p className="text-1 mb-16">
                        If you have any questions or requests regarding this Privacy Policy:
                      </p>
                      <p className="text-1 mb-12">
                        📧 <strong>Email:</strong>{" "}
                        <a href="mailto:info@bindalsproperty.com" className="text-color-primary">
                          info@bindalsproperty.com
                        </a>
                      </p>
                      <p className="text-1">
                        🌐 <strong>Contact Page:</strong>{" "}
                        <a href="/contact" className="text-color-primary">
                          https://bindalsproperty.com/contact
                        </a>
                      </p>
                    </div>

                    {/* Compliance Badge */}
                    <div className="privacy-section mb-40">
                      <h3 className="title mb-20">This Privacy Policy Is Compliant With:</h3>
                      <ul className="list-style-disc">
                        <li className="text-1 mb-8">Google Ads policies</li>
                        <li className="text-1 mb-8">Meta Ads policies</li>
                        <li className="text-1 mb-8">GDPR</li>
                        <li className="text-1 mb-8">CCPA / CPRA</li>
                        <li className="text-1 mb-8">Indian IT Act & DPDP principles</li>
                      </ul>
                    </div>

                    {/* CTA Box */}
                    <div className="privacy-cta-box">
                      <div className="box-icon style-1">
                        <div className="heading d-flex align-items-center gap-16 mb-24">
                          <div className="tf-icon" style={{margin: '0'}}>
                            <i className="icon-shield" />
                          </div>
                          <h5 className="title">Your Privacy Matters</h5>
                        </div>
                        <p className="text-1 mb-24">
                          We are committed to protecting your personal information. If you have any concerns 
                          or questions about how we handle your data, please reach out to us.
                        </p>
                        <a href="/contact" className="tf-btn bg-color-primary pd-23" style={{alignContent: 'center'}}>
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
