"use client";

export default function MapComponent() {
  return (
    <div
      className="wrap-map"
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.97406271681!2d77.07787428127531!3d28.60055491298049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b48898eaaab%3A0x24ae804f51e5bd31!2sMAHADEV%20BUILDER%20AND%20DEVELOPER%20PVT.LTD!5e0!3m2!1sen!2sin!4v1768766856522!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{
          border: 0,
          borderRadius: "12px",
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}