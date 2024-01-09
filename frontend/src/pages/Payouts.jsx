import React from "react";
import DropDown from "../components/DropDown";
import DynamicIconRenderer from "../utils/DynamicIconRenderer";
import ArrowLeftIcon from "../assets/ArrowLeftIcon";
import ArrowRightIcon from "../assets/ArrowRightIcon";

export default function Payments() {
  const [currentRange, setCurrentRange] = React.useState("Last Month");
  const orders = [
    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderAmount: 1278.23,
      transactionFee: 22,
    },
    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderAmount: 1278.23,
      transactionFee: 22,
    },
    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderAmount: 1278.23,
      transactionFee: 22,
    },
    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderAmount: 1278.23,
      transactionFee: 22,
    },
    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderAmount: 1278.23,
      transactionFee: 22,
    },
    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderAmount: 1278.23,
      transactionFee: 22,
    },
    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderAmount: 1278.23,
      transactionFee: 22,
    },
  ];
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
                  <DynamicIconRenderer itemName={"Download"} />
                </button>
              </div>
            </div>
          </div>
          <table className="table-auto payout-table">
            <thead className="table-header">
              <tr>
                <th className="th-item">Order ID</th>
                <th className="th-item">Order date</th>
                <th className="th-item">Order amount</th>
                <th className="th-item">Transaction fees</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => {
                return (
                  <tr key={Math.random()}>
                    <td className="ti orderID">{order.orderId}</td>
                    <td className="ti orderDate">{order.orderDate}</td>
                    <td className="ti orderAmount">₹{order.orderAmount}</td>
                    <td className="ti trans-fee">₹{order.transactionFee}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="table-footer">
            <div className="tf-left">
              <button>
                <ArrowLeftIcon />
                Previous
              </button>
            </div>
            <div className="tf-center">
              <span className="pg-no">1</span>
              <span className="pg-no">2</span>
              <span className="pg-no">3</span>
              <span className="pg-no active">4</span>
              <span className="pg-no">5</span>
              <span className="pg-no">6</span>
              <span className="pg-no">7</span>
              <span className="pg-no">8</span>
              <span className="pg-no">9</span>
              <span className="pg-no">10</span>
              <span className="pg-no">11</span>
              <span className="pg-no">12</span>
              <span className="pg-no">13</span>
            </div>
            <div className="tf-right">
              <button>
                Next
                <ArrowRightIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
