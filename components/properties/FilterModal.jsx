"use client";
import React, { useState, useRef } from "react";

export default function FilterModal({ filters = {}, onApply }) {
  const [beds, setBeds] = useState(filters.beds || "");
  const [baths, setBaths] = useState(filters.baths || "");
  const modalRef = useRef(null);

  const closeModal = () => {
    if (typeof window !== "undefined" && window.bootstrap && modalRef.current) {
      const modal = window.bootstrap.Modal.getInstance(modalRef.current);
      if (modal) modal.hide();
    }
  };

  const handleApply = () => {
    if (onApply) {
      onApply({
        beds: beds ? Number(beds) : null,
        baths: baths ? Number(baths) : null,
      });
    }
    closeModal();
  };

  const handleReset = () => {
    setBeds("");
    setBaths("");
    if (onApply) {
      onApply({ beds: null, baths: null });
    }
    closeModal();
  };

  return (
    <div className="modal modal-filter fade" id="modalFilter" ref={modalRef}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="wd-search-form style-3">
            <div className="title-box">
              <h4>Filter Properties</h4>
              <span
                className="close-modal icon-close"
                data-bs-dismiss="modal"
              />
            </div>
            <div className="group-select">
              <div className="box-select">
                <label className="text-4 fw-6" style={{ marginBottom: 8, display: "block" }}>
                  Minimum Beds
                </label>
                <select
                  className="form-select"
                  value={beds}
                  onChange={(e) => setBeds(e.target.value)}
                  style={{ width: "100%", padding: "10px 12px", border: "1px solid #ddd", borderRadius: 4 }}
                >
                  <option value="">Any</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                </select>
              </div>
              <div className="box-select">
                <label className="text-4 fw-6" style={{ marginBottom: 8, display: "block" }}>
                  Minimum Baths
                </label>
                <select
                  className="form-select"
                  value={baths}
                  onChange={(e) => setBaths(e.target.value)}
                  style={{ width: "100%", padding: "10px 12px", border: "1px solid #ddd", borderRadius: 4 }}
                >
                  <option value="">Any</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                </select>
              </div>
            </div>
            <div className="flex gap-8" style={{ marginTop: 20 }}>
              <button
                className="tf-btn bg-color-primary w-full"
                type="button"
                onClick={handleApply}
              >
                Apply Filters
              </button>
              <button
                className="tf-btn style-border w-full"
                type="button"
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
