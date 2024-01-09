import React from "react";
import DropDown from "../components/DropDown";
import DynamicIconRenderer from "../utils/DynamicIconRenderer";

export default function Payments() {
  const [currentRange, setCurrentRange] = React.useState("Last Month");
  return (
    <div className="page">
      <div className="header">
        <div className="heading">
          <span className="ph-title">Overview</span>
          <DropDown
            options={["Last Month", "Last 3 Months", "Last Year"]}
            currentRange={currentRange}
            setCurrentRange={setCurrentRange}
          />
        </div>
        <div className="order-details">
          <div className="od-left">
            <div className="od-head">Online Orders</div>
            <div className="od-value">231</div>
          </div>
          <div className="od-right">
            <div className="od-head">Amount Receiveds</div>
            <div className="od-value">₹23,92,312.19</div>
          </div>
        </div>
      </div>
      <div className="page-body">
        <div className="pb-header">Transactions | {currentRange}</div>
        <div className="pb-table">
          <div className="pb-toolbar">
            <div className="pbt-left pbt-search">
              <DynamicIconRenderer itemName="Search" />
              <input
                type="text"
                className="feature-search search-box"
                placeholder="Search by order ID..."
              />
            </div>
            <div className="pbt-right">
              <div className="pbt-sort">
                <button className="btn">
                  Sort <DynamicIconRenderer itemName={"Sort"} />
                </button>
              </div>
              <div className="pbt-download">
                <button className="btn">
                  <DynamicIconRenderer itemName={"Sort"} />
                </button>
              </div>
            </div>
          </div>
          <div className="table-header">
            <div className="th-item">Order ID</div>
            <div className="th-item">
              Order date
              <DynamicIconRenderer itemName={"DropDownTriangle"} />
            </div>
            <div className="th-item">Order amount</div>
            <div className="th-item">
              Transaction fees
              <DynamicIconRenderer itemName={"Info"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
