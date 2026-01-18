import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Faqs() {
  return (
    <section className="section-faq">
      <div className="tf-container">
        <div className="row">
          <div className="col-xl-8 col-lg-7">
            <div className="heading-section mb-48">
              <h2 className="title">Frequently Asked Questions</h2>
            </div>
            <div className="tf-faq mb-49">
              <h3 className="fw-8 title mb-24">Overview</h3>
              <ul className="box-faq" id="wrapper-faq">
                <li className="faq-item">
                  <a
                    href="#accordion-faq-one"
                    className="faq-header h6 collapsed"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="accordion-faq-one"
                  >
                    How do you help clients find the right property?
                    <i className="icon-CaretDown" />
                  </a>
                  <div
                    id="accordion-faq-one"
                    className="collapse"
                    data-bs-parent="#wrapper-faq"
                  >
                    <p className="faq-body">
                      We work with a wide network of trusted vendors and real estate agents to present verified property options that match our clients’ needs, budget, and preferences.
                    </p>
                  </div>
                </li>
                <li className="faq-item active">
                  <a
                    href="#accordion-faq-two"
                    className="faq-header h6"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="accordion-faq-two"
                  >
                   Do you represent buyers, sellers, or both?
                    <i className="icon-CaretDown" />
                  </a>
                  <div
                    id="accordion-faq-two"
                    className="collapse show"
                    data-bs-parent="#wrapper-faq"
                  >
                    <p className="faq-body">
                      We assist both buyers and sellers by connecting them with experienced agents and quality listings, ensuring a smooth and transparent transaction process.
                    </p>
                  </div>
                </li>
                <li className="faq-item">
                  <a
                    href="#accordion-faq-three"
                    className="faq-header h6 collapsed"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="accordion-faq-three"
                  >
                    How do real estate agents benefit from working with you?
                    <i className="icon-CaretDown" />
                  </a>
                  <div
                    id="accordion-faq-three"
                    className="collapse"
                    data-bs-parent="#wrapper-faq"
                  >
                    <p className="faq-body">
                      Agents gain increased visibility, qualified leads, and access to a wider audience actively searching for properties, helping them close deals more efficiently.
                    </p>
                  </div>
                </li>
                
                
              </ul>
            </div>
            <div className="tf-faq mb-49">
              <h3 className="fw-8 title mb-24"> DUBAI REAL ESTATE INVESTOR-FAQs</h3>
              <ul className="box-faq" id="wrapper-faq-2">
                <li className="faq-item">
                  <a
                    href="#accordion2-faq-one"
                    className="faq-header h6 collapsed"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="accordion2-faq-one"
                  >
                    What are the regulations for owning property in Dubai as a foreigner?
                    <i className="icon-CaretDown" />
                  </a>
                  <div
                    id="accordion2-faq-one"
                    className="collapse"
                    data-bs-parent="#wrapper-faq-2"
                  >
                    <p className="faq-body">
                      Foreign nationals are allowed to purchase and fully own property in designated freehold areas across Dubai. This enables expatriates and international buyers—even those not residing in the UAE—to enjoy full ownership rights, without leasehold or usage restrictions, for long-term security. <br /> <b>Key points to know:</b>
                      <br />
                      • Property ownership is officially registered and issued through the Dubai Land Department. <br />
                      • There are no age restrictions for owning property. <br />
                      •	Popular freehold locations include Business Bay, Downtown Dubai, Discovery Gardens, Palm Jumeirah, and DIFC. <br />
                      <b>Dubai’s real estate laws</b> are widely considered more flexible and investor-friendly compared to many other emirates, making it a preferred destination for international property buyers.

                    </p>
                  </div>
                </li>
                <li className="faq-item active">
                  <a
                    href="#accordion2-faq-two"
                    className="faq-header h6 collapsed"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="accordion2-faq-two"
                  >
                    What property ownership options are available to foreign buyers in the UAE?
                    <i className="icon-CaretDown" />
                  </a>
                  <div
                    id="accordion2-faq-two"
                    className="collapse"
                    data-bs-parent="#wrapper-faq-2"
                  >
                    <p className="faq-body">
                     Foreign buyers in the UAE can own property primarily in designated freehold zones, where full ownership rights are granted without time limitations. These properties may include apartments, villas, townhouses, and select commercial units. Outside freehold areas, ownership may be structured as long-term leasehold or usufruct rights, depending on local regulations. Ownership rules vary by emirate, so buyers should always confirm eligibility, property type, and registration requirements before proceeding with a purchase.
                    </p>
                  </div>
                </li>
                <li className="faq-item">
                  <a
                    href="#accordion2-faq-three"
                    className="faq-header h6 collapsed"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="accordion2-faq-three"
                  >
                    How is Dubai’s property purchase process different from other UAE emirates?
                    <i className="icon-CaretDown" />
                  </a>
                  <div
                    id="accordion2-faq-three"
                    className="collapse"
                    data-bs-parent="#wrapper-faq-2"
                  >
                    <p className="faq-body">
                      Dubai offers one of the most structured and transparent property buying processes in the UAE. Transactions are regulated by the Dubai Land Department, ensuring secure title registration and clear legal procedures. Compared to other emirates, Dubai provides a wider range of freehold areas for foreign buyers, faster transaction timelines, and a more mature real estate ecosystem. This clarity and accessibility make Dubai especially attractive to international investors and first-time buyers.
                    </p>
                  </div>
                </li>
                <li className="faq-item">
                  <a
                    href="#accordion2-faq-four"
                    className="faq-header h6 collapsed"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="accordion2-faq-four"
                  >
                    Why is Dubai or the UAE considered a strong destination for real estate investment?
                    <i className="icon-CaretDown" />
                  </a>
                  <div
                    id="accordion2-faq-four"
                    className="collapse"
                    data-bs-parent="#wrapper-faq-2"
                  >
                    <p className="faq-body">
                      Dubai and the UAE are viewed as strong real estate investment destinations due to their stable economy, world-class infrastructure, and global connectivity. The market benefits from high rental demand, investor-friendly regulations, and long-term growth driven by tourism and expatriate populations. Additionally, the absence of annual property taxes in many emirates, combined with strong legal frameworks, enhances overall returns and investor confidence.
                    </p>
                  </div>
                </li>
                <li className="faq-item">
                  <a
                    href="#accordion2-faq-five"
                    className="faq-header h6 collapsed"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="accordion2-faq-five"
                  >
                    What costs or taxes should property owners expect in Dubai or the UAE?
                    <i className="icon-CaretDown" />
                  </a>
                  <div
                    id="accordion2-faq-five"
                    className="collapse"
                    data-bs-parent="#wrapper-faq-2"
                  >
                    <p className="faq-body">
                      Property owners in Dubai and the UAE generally do not pay annual property taxes or capital gains tax on residential real estate. However, buyers should budget for one-time costs such as registration fees, developer charges, agent commissions, and ongoing service or maintenance fees. These costs vary by property type and location but are clearly defined, allowing buyers to plan their investment with transparency and confidence.
                    </p>
                  </div>
                </li>
               
              </ul>
            </div>
            {/* <div className="tf-faq">
              <h3 className="fw-8 title mb-24">Safety and Security</h3>
              <ul className="box-faq" id="wrapper-faq-3">
                <li className="faq-item">
                  <a
                    href="#accordion3-faq-one"
                    className="faq-header h6 collapsed"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="accordion3-faq-one"
                  >
                    What Languages Does Your Service Support?
                    <i className="icon-CaretDown" />
                  </a>
                  <div
                    id="accordion3-faq-one"
                    className="collapse"
                    data-bs-parent="#wrapper-faq-3"
                  >
                    <p className="faq-body">
                      We work with a wide network of trusted vendors and real estate agents to present verified property options that match our clients’ needs, budget, and preferences.
                    </p>
                  </div>
                </li>
                <li className="faq-item active">
                  <a
                    href="#accordion3-faq-two"
                    className="faq-header h6 collapsed"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="accordion3-faq-two"
                  >
                    How Do I Integrate Your Service Into My System?
                    <i className="icon-CaretDown" />
                  </a>
                  <div
                    id="accordion3-faq-two"
                    className="collapse"
                    data-bs-parent="#wrapper-faq-3"
                  >
                    <p className="faq-body">
                      We work with a wide network of trusted vendors and real estate agents to present verified property options that match our clients’ needs, budget, and preferences.
                    </p>
                  </div>
                </li>
                <li className="faq-item">
                  <a
                    href="#accordion3-faq-three"
                    className="faq-header h6 collapsed"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="accordion3-faq-three"
                  >
                    What Are The Safety Features Of Your System?
                    <i className="icon-CaretDown" />
                  </a>
                  <div
                    id="accordion3-faq-three"
                    className="collapse"
                    data-bs-parent="#wrapper-faq-3"
                  >
                    <p className="faq-body">
                      We work with a wide network of trusted vendors and real estate agents to present verified property options that match our clients’ needs, budget, and preferences.
                    </p>
                  </div>
                </li>
                <li className="faq-item">
                  <a
                    href="#accordion3-faq-four"
                    className="faq-header h6 collapsed"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="accordion3-faq-four"
                  >
                    How Can I Request New Features?
                    <i className="icon-CaretDown" />
                  </a>
                  <div
                    id="accordion3-faq-four"
                    className="collapse"
                    data-bs-parent="#wrapper-faq-3"
                  >
                    <p className="faq-body">
                      We work with a wide network of trusted vendors and real estate agents to present verified property options that match our clients’ needs, budget, and preferences.
                    </p>
                  </div>
                </li>
                <li className="faq-item">
                  <a
                    href="#accordion3-faq-five"
                    className="faq-header h6 collapsed"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="accordion3-faq-five"
                  >
                    Is My Data Protected?
                    <i className="icon-CaretDown" />
                  </a>
                  <div
                    id="accordion3-faq-five"
                    className="collapse"
                    data-bs-parent="#wrapper-faq-3"
                  >
                    <p className="faq-body">
                      We work with a wide network of trusted vendors and real estate agents to present verified property options that match our clients’ needs, budget, and preferences.
                    </p>
                  </div>
                </li>
                <li className="faq-item">
                  <a
                    href="#accordion3-faq-six"
                    className="faq-header h6 collapsed"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="accordion3-faq-six"
                  >
                    How Do I Report A Technical Issue?
                    <i className="icon-CaretDown" />
                  </a>
                  <div
                    id="accordion3-faq-six"
                    className="collapse"
                    data-bs-parent="#wrapper-faq-3"
                  >
                    <p className="faq-body">
                      We work with a wide network of trusted vendors and real estate agents to present verified property options that match our clients’ needs, budget, and preferences.
                    </p>
                  </div>
                </li>
              </ul>
            </div> */}
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="tf-sidebar sticky-sidebar">
              <form className="form-contact-seller mb-30">
                <h4 className="heading-title mb-30">Contact Sellers</h4>
                <div className="seller-info">
                  <div className="avartar">
                    <Image
                      alt=""
                      width={200}
                      height={200}
                      src="/images/avatar/bindals.png"
                    />
                  </div>
                  <div className="content">
                    <h6 className="name">Jeetender Bindal</h6>
                    <ul className="contact">
                      <li>
                        <i className="icon-phone-1" />
                        <span><a href="tel:09873940835">098739 40835</a></span>
                      </li>
                      <li>
                        <i className="icon-mail" />
                        <a href="Mailto:bindalspropertyhub@gmail.com">bindalspropertyhub@gmail.com</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <fieldset className="mb-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                    name="name"
                    id="name"
                    required=""
                  />
                </fieldset>
                <fieldset className="mb-30">
                  <textarea
                    name="message"
                    cols={30}
                    rows={10}
                    placeholder="How can an agent help"
                    id="message"
                    required=""
                    defaultValue={""}
                  />
                </fieldset>
                <a href="#" className="tf-btn bg-color-primary w-full">
                  Send message
                </a>
              </form>
              <div className="sidebar-ads">
                <div className="image-wrap">
                  <Image
                    className="lazyload"
                    data-src="/images/blog/ads.jpg"
                    alt=""
                    width={400}
                    height={470}
                    src="/images/blog/ads.jpg"
                  />
                </div>
                <div className="logo relative z-5">
                  <Image
                    alt=""
                    width={272}
                    height={85}
                    src="/images/logo/logo-2@2x.png"
                  />
                </div>
                <div className="box-ads relative z-5">
                  <div className="content">
                    <h4 className="title">
                      <Link href={`/property-detail-v1`}>
                        We can help you find a local real estate agent
                      </Link>
                    </h4>
                    <div className="text-addres">
                      <p>
                        Connect with a trusted agent who knows the market inside
                        out - whether you’re buying or selling.
                      </p>
                    </div>
                  </div>
                  <a href="#" className="tf-btn fw-6 bg-color-primary w-full">
                    Connect with an agent
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
