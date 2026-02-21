import React from "react";
import Link from "next/link";
export default function Breadcumb({ pageName, items }) {
  if (items) {
    return (
      <section className="flat-title">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-inner">
                <ul className="breadcrumb">
                  {items.map((item, i) =>
                    item.href ? (
                      <li key={i}>
                        <Link className="home fw-6 text-color-3" href={item.href}>
                          {item.label}
                        </Link>
                      </li>
                    ) : (
                      <li key={i}>{item.label}</li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="flat-title">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-inner">
              <ul className="breadcrumb">
                <li>
                  <Link className="home fw-6 text-color-3" href={`/`}>
                    Home
                  </Link>
                </li>
                <li>{pageName || "Property Listing"}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
