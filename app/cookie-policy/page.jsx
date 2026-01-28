import React from "react";
import Header1 from "@/components/headers/Header1";
import Footer1 from "@/components/footers/Footer1";
import Breadcumb from "@/components/common/Breadcumb";
import "./cookie.css";

export const metadata = {
  title: "Cookie Policy || Bindals Property Hub",
  description: "Cookie Policy for Bindals Property Hub - Real Estate Services",
};

export default function CookiePolicy() {
  return (
    <>
      <div id="wrapper">
        <Header1 />
        <div className="main-content">
          <Breadcumb pageName="Cookie Policy" />
          
          <section className="" style={{paddingBottom: '60px'}}>
            <div className="tf-container">
              <div className="row justify-center">
                <div className="col-lg-10">
                  <div className="cookie-content">
                    {/* Header */}
                    <div className="cookie-header mb-40">
                      <p className="text-1 mb-16">Last updated: December 24, 2025</p>
                      <p className="text-1">
                        This Cookie Policy explains how Bindals Property HUB ("Company", "we", "our", or "us") 
                        uses cookies and similar technologies when you visit{" "}
                        <a href="https://bindalsproperty.com" className="text-color-primary">
                          https://bindalsproperty.com
                        </a>{" "}
                        (the "Website").
                      </p>
                      <p className="text-1 mt-16">
                        This Cookie Policy should be read together with our Privacy Policy.
                      </p>
                    </div>

                    {/* Section 1 */}
                    <div className="cookie-section mb-40">
                      <h3 className="title mb-20">1. What Are Cookies?</h3>
                      <p className="text-1">
                        Cookies are small text files that are stored on your device (computer, mobile phone, or tablet) 
                        when you visit a website. Cookies help websites function properly, improve performance, and 
                        provide personalized experiences.
                      </p>
                    </div>

                    {/* Section 2 */}
                    <div className="cookie-section mb-40">
                      <h3 className="title mb-20">2. Types of Cookies We Use</h3>
                      
                      <h5 className="fw-6 mb-16">2.1 Strictly Necessary Cookies</h5>
                      <p className="text-1 mb-16">
                        These cookies are essential for the Website to function correctly and cannot be disabled.
                      </p>
                      <p className="text-1 mb-16"><strong>Examples:</strong></p>
                      <ul className="list-style-disc mb-32">
                        <li className="text-1 mb-8">Security cookies</li>
                        <li className="text-1 mb-8">Session cookies</li>
                        <li className="text-1 mb-8">Form submission cookies</li>
                      </ul>

                      <h5 className="fw-6 mb-16">2.2 Performance & Analytics Cookies</h5>
                      <p className="text-1 mb-16">
                        These cookies help us understand how visitors interact with our Website by collecting anonymous information.
                      </p>
                      <p className="text-1 mb-12"><strong>Tools used:</strong></p>
                      <ul className="list-style-disc mb-16">
                        <li className="text-1 mb-8">Google Analytics</li>
                      </ul>
                      <p className="text-1 mb-12"><strong>Purpose:</strong></p>
                      <ul className="list-style-disc mb-32">
                        <li className="text-1 mb-8">Track page views and traffic</li>
                        <li className="text-1 mb-8">Improve website performance</li>
                        <li className="text-1 mb-8">Understand user behavior</li>
                      </ul>

                      <h5 className="fw-6 mb-16">2.3 Advertising & Marketing Cookies</h5>
                      <p className="text-1 mb-16">
                        These cookies are used to deliver relevant advertisements and measure ad performance.
                      </p>
                      <p className="text-1 mb-12"><strong>Tools used:</strong></p>
                      <ul className="list-style-disc mb-16">
                        <li className="text-1 mb-8">Google Ads Conversion Tracking</li>
                        <li className="text-1 mb-8">Meta (Facebook & Instagram) Pixel</li>
                      </ul>
                      <p className="text-1 mb-12"><strong>Purpose:</strong></p>
                      <ul className="list-style-disc mb-32">
                        <li className="text-1 mb-8">Show relevant property ads</li>
                        <li className="text-1 mb-8">Measure ad conversions</li>
                        <li className="text-1 mb-8">Enable remarketing and retargeting</li>
                      </ul>

                      <h5 className="fw-6 mb-16">2.4 Functionality Cookies</h5>
                      <p className="text-1 mb-16">
                        These cookies remember your preferences to enhance your experience.
                      </p>
                      <p className="text-1 mb-12"><strong>Examples:</strong></p>
                      <ul className="list-style-disc">
                        <li className="text-1 mb-8">Language preferences</li>
                        <li className="text-1 mb-8">Location-based property suggestions</li>
                      </ul>
                    </div>

                    {/* Section 3 */}
                    <div className="cookie-section mb-40">
                      <h3 className="title mb-20">3. Third-Party Cookies</h3>
                      <p className="text-1 mb-16">
                        Some cookies may be placed by third-party services we use, including:
                      </p>
                      <ul className="list-style-disc mb-16">
                        <li className="text-1 mb-8">Google LLC</li>
                        <li className="text-1 mb-8">Meta Platforms, Inc.</li>
                      </ul>
                      <p className="text-1">
                        These third parties may use cookies according to their own privacy policies.
                      </p>
                    </div>

                    {/* Section 4 */}
                    <div className="cookie-section mb-40">
                      <h3 className="title mb-20">4. Consent Management</h3>
                      <p className="text-1 mb-16">
                        When you visit our Website for the first time, you will see a cookie consent banner allowing you to:
                      </p>
                      <ul className="list-style-disc mb-16">
                        <li className="text-1 mb-8">Accept all cookies</li>
                        <li className="text-1 mb-8">Reject non-essential cookies</li>
                        <li className="text-1 mb-8">Manage cookie preferences</li>
                      </ul>
                      <p className="text-1">
                        By continuing to use our Website, you consent to the use of cookies as described in this 
                        policy unless you change your preferences.
                      </p>
                    </div>

                    {/* Section 5 */}
                    <div className="cookie-section mb-40">
                      <h3 className="title mb-20">5. How to Control or Delete Cookies</h3>
                      <p className="text-1 mb-16">
                        You can control or delete cookies through your browser settings:
                      </p>
                      <ul className="list-style-disc mb-16">
                        <li className="text-1 mb-8">
                          <strong>Google Chrome:</strong> Settings → Privacy & Security → Cookies
                        </li>
                        <li className="text-1 mb-8">
                          <strong>Mozilla Firefox:</strong> Settings → Privacy & Security
                        </li>
                        <li className="text-1 mb-8">
                          <strong>Safari:</strong> Preferences → Privacy
                        </li>
                        <li className="text-1 mb-8">
                          <strong>Microsoft Edge:</strong> Settings → Cookies and site permissions
                        </li>
                      </ul>
                      <p className="text-1">
                        Disabling cookies may affect some features of the Website.
                      </p>
                    </div>

                    {/* Section 6 - Cookie Table */}
                    <div className="cookie-section mb-40">
                      <h3 className="title mb-20">6. Cookies Used on This Website</h3>
                      <div className="cookie-table-wrapper">
                        <table className="cookie-table">
                          <thead>
                            <tr>
                              <th>Cookie Type</th>
                              <th>Purpose</th>
                              <th>Duration</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td><strong>Necessary</strong></td>
                              <td>Website functionality</td>
                              <td>Session / Persistent</td>
                            </tr>
                            <tr>
                              <td><strong>Analytics</strong></td>
                              <td>Traffic & performance analysis</td>
                              <td>Up to 24 months</td>
                            </tr>
                            <tr>
                              <td><strong>Marketing</strong></td>
                              <td>Advertising & remarketing</td>
                              <td>Up to 24 months</td>
                            </tr>
                            <tr>
                              <td><strong>Functionality</strong></td>
                              <td>User preferences</td>
                              <td>Persistent</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Section 7 */}
                    <div className="cookie-section mb-40">
                      <h3 className="title mb-20">7. Compliance With Laws</h3>
                      <p className="text-1 mb-16">This Cookie Policy complies with:</p>
                      <ul className="list-style-disc">
                        <li className="text-1 mb-8">GDPR (EU)</li>
                        <li className="text-1 mb-8">CCPA / CPRA (California, USA)</li>
                        <li className="text-1 mb-8">Digital Personal Data Protection Act (India)</li>
                        <li className="text-1 mb-8">Google Ads & Meta Ads policies</li>
                      </ul>
                    </div>

                    {/* Section 8 */}
                    <div className="cookie-section mb-40">
                      <h3 className="title mb-20">8. Updates to This Cookie Policy</h3>
                      <p className="text-1">
                        We may update this Cookie Policy from time to time. Any changes will be posted on this 
                        page with an updated "Last updated" date.
                      </p>
                    </div>

                    {/* Section 9 */}
                    <div className="cookie-section mb-40">
                      <h3 className="title mb-20">9. Contact Us</h3>
                      <p className="text-1 mb-16">
                        If you have any questions about our Cookie Policy or your data rights, contact us at:
                      </p>
                      <p className="text-1 mb-12">
                        <strong>Email:</strong>{" "}
                        <a href="mailto:info@bindalsproperty.com" className="text-color-primary">
                          info@bindalsproperty.com
                        </a>
                      </p>
                      <p className="text-1">
                        <strong>Website:</strong>{" "}
                        <a href="/contact" className="text-color-primary">
                          https://bindalsproperty.com/contact
                        </a>
                      </p>
                    </div>

                    {/* CTA Box */}
                    <div className="cookie-cta-box">
                      <div className="box-icon style-1">
                        <div className="heading d-flex align-items-center gap-16 mb-24">
                          <div className="tf-icon">
                            <i className="icon-file" />
                          </div>
                          <h5 className="title">Manage Your Cookie Preferences</h5>
                        </div>
                        <p className="text-1 mb-24">
                          You have control over the cookies we use. Adjust your browser settings or contact us 
                          if you have any questions about our cookie usage.
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
