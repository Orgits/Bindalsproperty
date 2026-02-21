"use client";
import React, { useState, useMemo } from "react";
import PropertyGridItems from "./PropertyGridItems";
import PropertyListItems from "./PropertyListItems";
import LayoutHandler from "./LayoutHandler";
import FilterModal from "./FilterModal";
import { properties } from "@/data/properties";

const parsePrice = (p) => {
  const s = String(p).toLowerCase();
  if (s.includes("cr")) return parseFloat(s) * 10000000;
  if (s.includes("lac")) return parseFloat(s) * 100000;
  return parseFloat(s) || 0;
};

export default function Properties1({ defaultGrid = false }) {
  const [sortOption, setSortOption] = useState("default");
  const [filters, setFilters] = useState({ beds: null, baths: null });

  const filteredProperties = useMemo(() => {
    let result = [...properties];

    if (filters.beds) {
      result = result.filter((p) => p.beds >= filters.beds);
    }
    if (filters.baths) {
      result = result.filter((p) => p.baths >= filters.baths);
    }

    if (sortOption === "low") {
      result.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    } else if (sortOption === "high") {
      result.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    }

    return result;
  }, [filters, sortOption]);

  return (
    <>
      <section className="section-property-layout">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="box-title">
                <h2>Property listing</h2>
                <div className="right">
                  <div
                    className="filter-popup"
                    data-bs-toggle="modal"
                    href="#modalFilter"
                    role="button"
                  >
                    Filter
                    <div className="icons">
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M21 4H14" stroke="#C5A34F" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10 4H3" stroke="#C5A34F" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21 12H12" stroke="#C5A34F" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8 12H3" stroke="#C5A34F" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21 20H16" stroke="#C5A34F" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 20H3" stroke="#C5A34F" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M14 2V6" stroke="#C5A34F" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8 10V14" stroke="#C5A34F" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16 18V22" stroke="#C5A34F" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <ul className="nav-tab-filter group-layout" role="tablist">
                    <LayoutHandler defaultGrid={defaultGrid} />
                  </ul>

                  <select
                    className="nice-select select-filter list-sort"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    style={{ cursor: "pointer" }}
                  >
                    <option value="default">Sort by (Default)</option>
                    <option value="low">Price: Low to High</option>
                    <option value="high">Price: High to Low</option>
                  </select>
                </div>
              </div>
              <div className="flat-animate-tab">
                <div className="tab-content">
                  <div
                    className={`tab-pane ${defaultGrid ? " active show" : ""}`}
                    id="gridLayout"
                    role="tabpanel"
                  >
                    <div className="tf-grid-layout lg-col-3 md-col-2">
                      <PropertyGridItems properties={filteredProperties} />
                    </div>
                  </div>
                  <div
                    className={`tab-pane ${!defaultGrid ? " active show" : ""}`}
                    id="listLayout"
                    role="tabpanel"
                  >
                    <div className="tf-grid-layout lg-col-2">
                      <PropertyListItems properties={filteredProperties} />
                    </div>
                  </div>
                </div>
              </div>
              {filteredProperties.length === 0 && (
                <p className="text-center text-1" style={{ padding: "40px 0" }}>
                  No properties match your filters.
                </p>
              )}
              <div className="wrap-pagination">
                <p className="text-1">Showing {filteredProperties.length} of {properties.length} results.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FilterModal filters={filters} onApply={setFilters} />
    </>
  );
}
