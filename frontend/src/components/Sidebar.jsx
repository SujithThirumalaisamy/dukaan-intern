import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import NavItem from "./NavItem";
import DynamicIconRenderer from "../utils/DynamicIconRenderer";
export default function Sidebar() {
  const NavItems = [
    "Home",
    "Orders",
    "Products",
    "Delivery",
    "Marketing",
    "Analytics",
    "Payouts",
    "Tools",
    "Discounts",
    "Audience",
    "Appearance",
    "Plugins",
  ];
  const [selectedNav, setSelectedNav] = useState("Home")
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sh-logo"></div>
        <div className="sh-store">
          <div className="sh-store-name">Nishyan</div>
          <a className="sh-store-link" href="#">
            Visit store
          </a>
        </div>
        <DynamicIconRenderer itemName="DropDown" />
      </div>
      <div className="nav-items">
        {NavItems.map((Item) => {
          return <NavItem name={Item} key={Item} isSelected={selectedNav === Item} toggleSelect={setSelectedNav}/>;
        })}
      </div>
      <div className="nav-bottom">
        <span className="nb-icon">
            <DynamicIconRenderer itemName="Credits" />
        </span>
        <div className="nb-text">
            <span className="credits-header">Available credits</span>
            <span className="credits">222.10</span>
        </div>
      </div>
    </div>
  );
}
