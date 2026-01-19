import React from "react";

export default function ExtraInfo() {
  return (
    <>
      <div className="wg-title text-11 fw-6 text-color-heading">
        Property Details
      </div>
      <div className="content">
        <p className="description text-1">
        Mahadev Apartment, developed by Bindals Property Hub, offers ready-to-move-in 2, 3 & 4 BHK apartments and premium penthouses with multiple size options. Prices start from ₹60 lakh and go up to ₹1.30 crore, with a booking amount of ₹5–10 lakh. 
        </p>
        <a href="#" className="tf-btn-link style-hover-rotate">
          {/* <span>Read More </span> */}
          {/* <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2348_5612)">
              <path
                d="M1.66732 9.99999C1.66732 14.6024 5.39828 18.3333 10.0007 18.3333C14.603 18.3333 18.334 14.6024 18.334 9.99999C18.334 5.39762 14.603 1.66666 10.0007 1.66666C5.39828 1.66666 1.66732 5.39762 1.66732 9.99999Z"
                stroke="#C5A34F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 6.66666L10 13.3333"
                stroke="#C5A34F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.66732 10L10.0007 13.3333L13.334 10"
                stroke="#C5A34F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_2348_5612">
                <rect
                  width={20}
                  height={20}
                  fill="white"
                  transform="translate(20) rotate(90)"
                />
              </clipPath>
            </defs>
          </svg> */}
        </a>
      </div>
      <div className="box">
        <ul>
          <li className="flex">
            <p className="fw-6">Booking amount</p>
            <p>5-10 Lakh</p>
          </li>
          <li className="flex">
            <p className="fw-6">Possession</p><p>READY TO MOVE IN</p>
          </li>
          <li className="flex">
            <p className="fw-6">Rera number  </p>
            <p>NOT APPLICABLE</p>
          </li>
          <li className="flex">
            <p className="fw-6">Rooms</p>
            <p>2</p>
          </li>
          <li className="flex">
            <p className="fw-6">Baths</p>
            <p>2</p>
          </li>
        </ul>
        <ul>
          <li className="flex">
            <p className="fw-6">Beds</p>
            <p>2</p>
          </li>
          <li className="flex">
            <p className="fw-6">Year buit</p>
            <p>2025</p>
          </li>
          <li className="flex">
            <p className="fw-6">Type</p>
            <p>Flats</p>
          </li>
          <li className="flex">
            <p className="fw-6">Status</p>
            <p>For sale</p>
          </li>
          <li className="flex">
            <p className="fw-6">Parking</p>
            <p>Availible</p>
          </li>
        </ul>
      </div>
    </>
  );
}
