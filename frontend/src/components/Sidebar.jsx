import React, { useState } from "react";
import NavItem from "./NavItem";
import DynamicIconRenderer from "../utils/DynamicIconRenderer";
export default function Sidebar({ selectedNav, setSelectedNav }) {
  const NavItems = [
    {
      item: "Home",
      notificationCount: 0,
      children: [],
    },
    {
      item: "Orders",
      notificationCount: 3,
      children: [
        {
          item: "All orders",
          notificationCount: 303,
          isSelected: true,
        },
        {
          item: "Returns",
          notificationCount: 2,
          isSelected: false,
        },
        {
          item: "Abandoned",
          notificationCount: 103,
          isSelected: false,
        },
      ],
    },
    {
      item: "Products",
      notificationCount: 0,
      children: [
        {
          item: "All products",
          notificationCount: 133,
          isSelected: true,
        },
        {
          item: "Categories",
          notificationCount: 13,
          isSelected: false,
        },
        {
          item: "Inventory ",
          notificationCount: 0,
          isSelected: false,
        },
      ],
    },
    {
      item: "Delivery",
      notificationCount: 0,
      children: [],
    },
    {
      item: "Marketing",
      notificationCount: 0,
      children: [],
    },
    {
      item: "Analytics",
      notificationCount: 0,
      children: [],
    },
    {
      item: "Payouts",
      notificationCount: 0,
      children: [],
    },
    {
      item: "Tools",
      notificationCount: 0,
      children: [],
    },
    {
      item: "Discounts",
      notificationCount: 0,
      children: [],
    },
    {
      item: "Audience",
      notificationCount: 0,
      children: [],
    },
    {
      item: "Appearance",
      notificationCount: 0,
      children: [
        {
          item: "Themes",
          notificationCount: 0,
          isSelected: true,
        },
        {
          item: "Pages",
          notificationCount: 0,
          isSelected: false,
        },
        {
          item: "Menus",
          notificationCount: 0,
          isSelected: false,
        },
        {
          item: "Blog",
          notificationCount: 0,
          isSelected: false,
        },
        {
          item: "Media",
          notificationCount: 0,
          isSelected: false,
        },
      ],
    },
    {
      item: "Plugins",
      notificationCount: 0,
      children: [],
    },
  ];
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sh-logo">
          <DynamicIconRenderer itemName={"Nishyan"} />
        </div>
        <div className="sh-store">
          <div className="sh-store-name">Nishyan</div>
          <a className="sh-store-link" href="#">
            Visit store
          </a>
        </div>
        <div style={{ cursor: "pointer" }}>
          <DynamicIconRenderer itemName="DropDown" />
        </div>
      </div>
      <div className="nav-items">
        {NavItems.map((Item) => {
          return (
            <NavItem
              key={Item.item}
              Item={Item}
              toggleSelect={setSelectedNav}
              isSelected={selectedNav === Item.item}
            />
          );
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
