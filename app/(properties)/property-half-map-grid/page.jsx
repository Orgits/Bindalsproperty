import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";

import Properties5 from "@/components/properties/Properties5";
import React from "react";

export const metadata = {
  title: "Property Half Map Grid || Bindals Property Hub - Real Estate .",
  description: "Bindals Property Hub - Real Estate .",
};
export default function page() {
  return (
    <>
      <div id="wrapper">
        <Header1 />

        <div className="main-content">
          <Properties5 />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
