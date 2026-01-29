import React from "react";

// Helper function to format price in Indian currency format
function formatPrice(price) {
  if (price >= 10000000) {
    return `₹${(price / 10000000).toFixed(2)} Cr.`;
  } else if (price >= 100000) {
    return `₹${(price / 100000).toFixed(2)} Lacs.`;
  }
  return `₹${price.toLocaleString("en-IN")}`;
}

export default function ExtraInfo({ property }) {
  return (
    <>
      <div className="wg-title text-11 fw-6 text-color-heading">
        Property Details
      </div>
      <div className="content">
        <p className="description text-1">
          {property.description ||
            `${property.title}, developed by Bindals Property Hub, offers ready-to-move-in ${property.beds} BHK apartments. Price: ${formatPrice(property.price)}.`}
        </p>
        <a href="#" className="tf-btn-link style-hover-rotate">
        </a>
      </div>
      <div className="box">
        <ul>
          <li className="flex">
            <p className="fw-6">Booking amount</p>
            <p>{property.bookingAmount || "5-10 Lakh"}</p>
          </li>
          <li className="flex">
            <p className="fw-6">Possession</p>
            <p>{property.possession || "READY TO MOVE IN"}</p>
          </li>
          <li className="flex">
            <p className="fw-6">Rera number</p>
            <p>{property.reraNumber || "NOT APPLICABLE"}</p>
          </li>
          <li className="flex">
            <p className="fw-6">Rooms</p>
            <p>{property.beds}</p>
          </li>
          <li className="flex">
            <p className="fw-6">Baths</p>
            <p>{property.baths}</p>
          </li>
        </ul>
        <ul>
          <li className="flex">
            <p className="fw-6">Beds</p>
            <p>{property.beds}</p>
          </li>
          <li className="flex">
            <p className="fw-6">Year built</p>
            <p>{property.yearBuilt || "2025"}</p>
          </li>
          <li className="flex">
            <p className="fw-6">Type</p>
            <p>{property.categories?.[0] || "Flats"}</p>
          </li>
          <li className="flex">
            <p className="fw-6">Status</p>
            <p>{property.status || "For sale"}</p>
          </li>
          <li className="flex">
            <p className="fw-6">Parking</p>
            <p>{property.parking || "Available"}</p>
          </li>
        </ul>
      </div>
    </>
  );
}
