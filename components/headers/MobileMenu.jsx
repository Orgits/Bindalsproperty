"use client";
import { blogMenu, homes, otherPages, propertyLinks } from "@/data/menu";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function MobileMenu() {
  const pathname = usePathname();
  const isParentActive = (menus) =>
    menus.some((menu) =>
      menu.submenu
        ? menu.submenu.some((item) =>
            item.submenu
              ? item.submenu.some(
                  (item) => item.href.split("/")[1] === pathname.split("/")[1]
                )
              : item.href.split("/")[1] === pathname.split("/")[1]
          )
        : menu.href.split("/")[1] === pathname.split("/")[1]
    );
  return (
    <div
      className="offcanvas offcanvas-start mobile-nav-wrap"
      tabIndex={-1}
      id="menu-mobile"
      aria-labelledby="menu-mobile"
    >
      <div className="offcanvas-header top-nav-mobile">
        <div className="offcanvas-title">
          <Link href={`/`}>
            <Image
              alt=""
              src="/images/logo/logo@2x.png"
              width={272}
              height={84}
            />
          </Link>
        </div>
        <div data-bs-dismiss="offcanvas" aria-label="Close">
          <i className="icon-close" />
        </div>
      </div>
      <div className="offcanvas-body inner-mobile-nav">
        <div className="mb-body">
          <ul id="menu-mobile-menu">
            
          
            <li
              className={`menu-item ${
                "/" == pathname ? "current-item" : ""
              }`}
            >
              <Link href={`/`} className="tem-menu-mobile">
                {" "}
                Home
              </Link>
            </li>
            <li
              className={`menu-item ${
                "/property-detail-v1/1" == pathname ? "current-item" : ""
              }`}
            >
              <Link href={`/property-detail-v1/1`} className="tem-menu-mobile">
                {" "}
                Listings
              </Link>
            </li>
           <li
              className={`menu-item ${
                "/faq" == pathname ? "current-item" : ""
              }`}
            >
              <Link href={`/faq`} className="tem-menu-mobile">
                {" "}
                FAQs
              </Link>
            </li>
            <li
              className={`menu-item ${
                "/blog-grid" == pathname ? "current-item" : ""
              }`}
            >
              <Link href={`/blog-grid`} className="tem-menu-mobile">
                {" "}
                Blogs
              </Link>
            </li>
            <li
              className={`menu-item ${
                "/contact" == pathname ? "current-item" : ""
              }`}
            >
              <Link href={`/contact`} className="tem-menu-mobile">
                {" "}
                Contact
              </Link>
            </li>
          </ul>
          <div className="support">
            <a href="#" className="text-need">
              {" "}
              Need help?
            </a>
            <ul className="mb-info">
              <li>
                Call Us Now: <span className="number">+91 9873940835</span>
              </li>
              <li>
                Support 24/7: <a href="#">bindalspropertyhub@gmail.com</a>
              </li>
              <li>
                <div className="wrap-social">
                  <p>Follow us:</p>
                  <ul className="tf-social style-2">
                    <li>
                      <a href="https://www.facebook.com/Bindalspropertyhub/">
                        <i className="icon-fb" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/bindalspropertyhub/">
                        <i className="icon-X" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-linked" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-ins" />
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
