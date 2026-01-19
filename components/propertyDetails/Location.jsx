import React from "react";

export default function Location() {
  return (
    <>
      <div className="wg-title text-11 fw-6 text-color-heading">
        Get Direction
      </div>
      <iframe
        className="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.9739057155216!2d77.07787427979495!3d28.60055962285072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b48898eaaab%3A0x24ae804f51e5bd31!2sMAHADEV%20BUILDER%20AND%20DEVELOPER%20PVT.LTD!5e0!3m2!1sen!2sin!4v1768792477316!5m2!1sen!2sin"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
            
    </>
  );
}
