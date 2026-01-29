"use client";
import Image from "next/image";
import { useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";

// Default images if property doesn't have images array
const defaultImages = [
  "/images/section/sl/1.jpeg",
  "/images/section/sl/2.jpeg",
  "/images/section/sl/3.jpeg",
  "/images/section/sl/4.jpeg",
  "/images/section/sl/5.jpeg",
  "/images/section/sl/6.jpeg",
];

export default function Slider1({ property }) {
  // Use property images if available, otherwise use default images
  const images = property?.images?.length > 0 ? property.images : defaultImages;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [thumbStartIndex, setThumbStartIndex] = useState(0);
  const visibleThumbs = 4;

  const handlePrevThumb = () => {
    if (thumbStartIndex > 0) {
      setThumbStartIndex(thumbStartIndex - 1);
    }
    // Also move to previous image
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextThumb = () => {
    if (thumbStartIndex + visibleThumbs < images.length) {
      setThumbStartIndex(thumbStartIndex + 1);
    }
    // Also move to next image
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleThumbClick = (index) => {
    setCurrentIndex(index);
  };

  const visibleImages = images.slice(thumbStartIndex, thumbStartIndex + visibleThumbs);

  return (
    <section id="gallery-swiper-started" className="section-property-image">
      <div className="tf-container">
        <Gallery>
          <div className="property-slider-wrapper">
            {/* Vertical Thumbnails */}
            <div className="thumbnail-carousel">
              <button
                className="thumb-nav thumb-nav-up"
                onClick={handlePrevThumb}
                disabled={thumbStartIndex === 0 && currentIndex === 0}
                aria-label="Previous image"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 15L12 9L6 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div className="thumbnail-list">
                {visibleImages.map((img, idx) => {
                  const actualIndex = thumbStartIndex + idx;
                  return (
                    <div
                      key={actualIndex}
                      className={`thumbnail-item ${actualIndex === currentIndex ? "active" : ""}`}
                      onClick={() => handleThumbClick(actualIndex)}
                    >
                      <Image
                        src={img}
                        alt={`Property image ${actualIndex + 1}`}
                        width={120}
                        height={90}
                        className="thumbnail-img"
                      />
                    </div>
                  );
                })}
              </div>

              <button
                className="thumb-nav thumb-nav-down"
                onClick={handleNextThumb}
                disabled={thumbStartIndex + visibleThumbs >= images.length && currentIndex >= images.length - 1}
                aria-label="Next image"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* Main Image */}
            <div className="main-image-container">
              <Item
                original={images[currentIndex]}
                thumbnail={images[currentIndex]}
                width={1095}
                height={771}
              >
                {({ ref, open }) => (
                  <a
                    onClick={open}
                    data-fancybox="gallery"
                    className="main-image-wrap"
                  >
                    <Image
                      ref={ref}
                      src={images[currentIndex]}
                      alt={`${property?.title || "Property"} - Image ${currentIndex + 1}`}
                      width={1095}
                      height={771}
                      className="main-image"
                      priority
                    />
                  </a>
                )}
              </Item>
              <div className="tag-property">
                <div className="icon">
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.875 13.125L6.17417 8.82583C6.34828 8.65172 6.55498 8.51361 6.78246 8.41938C7.00995 8.32515 7.25377 8.27665 7.5 8.27665C7.74623 8.27665 7.99005 8.32515 8.21754 8.41938C8.44502 8.51361 8.65172 8.65172 8.82583 8.82583L13.125 13.125M11.875 11.875L13.0492 10.7008C13.2233 10.5267 13.43 10.3886 13.6575 10.2944C13.885 10.2001 14.1288 10.1516 14.375 10.1516C14.6212 10.1516 14.865 10.2001 15.0925 10.2944C15.32 10.3886 15.5267 10.5267 15.7008 10.7008L18.125 13.125M3.125 16.25H16.875C17.2065 16.25 17.5245 16.1183 17.7589 15.8839C17.9933 15.6495 18.125 15.3315 18.125 15V5C18.125 4.66848 17.9933 4.35054 17.7589 4.11612C17.5245 3.8817 17.2065 3.75 16.875 3.75H3.125C2.79348 3.75 2.47554 3.8817 2.24112 4.11612C2.0067 4.35054 1.875 4.66848 1.875 5V15C1.875 15.3315 2.0067 15.6495 2.24112 15.8839C2.47554 16.1183 2.79348 16.25 3.125 16.25ZM11.875 6.875H11.8817V6.88167H11.875V6.875ZM12.1875 6.875C12.1875 6.95788 12.1546 7.03737 12.096 7.09597C12.0374 7.15458 11.9579 7.1875 11.875 7.1875C11.7921 7.1875 11.7126 7.15458 11.654 7.09597C11.5954 7.03737 11.5625 6.95788 11.5625 6.875C11.5625 6.79212 11.5954 6.71263 11.654 6.65403C11.7126 6.59542 11.7921 6.5625 11.875 6.5625C11.9579 6.5625 12.0374 6.59542 12.096 6.65403C12.1546 6.71263 12.1875 6.79212 12.1875 6.875Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="text-16 text_white fw-6 lh-20">
                  {currentIndex + 1}/{images.length} Photos
                </div>
              </div>
            </div>
          </div>
        </Gallery>
      </div>
    </section>
  );
}
