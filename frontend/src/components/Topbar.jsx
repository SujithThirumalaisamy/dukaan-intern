import React from "react";
import DynamicIconRenderer from "../utils/DynamicIconRenderer";

export default function Topbar() {
  return (
    <div className="top-bar">
      <div className="tb-left">
        <div className="page-title">Payments</div>
        <div className="page-hint">
          <DynamicIconRenderer itemName="Question" />
          How it works
        </div>
      </div>
      <div className="tb-center">
        <DynamicIconRenderer itemName="Search" />
        <input
          type="text"
          className="feature-search search-box"
          placeholder="Search features, tutorials, etc."
        />
      </div>
      <div className="tb-right">
        <div className="tb-announcement tb-icon-wrapper">
          <DynamicIconRenderer itemName="Announcement" />
        </div>
        <div className="tb-dropdown tb-icon-wrapper">
          <DynamicIconRenderer itemName="DropDownTriangle" />
        </div>
      </div>
    </div>
  );
}
