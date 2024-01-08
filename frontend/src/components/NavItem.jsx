import React from "react";
import DynamicIconRenderer from "../utils/DynamicIconRenderer.jsx";
import NavChild from "./NavChild.jsx";

export default function NavItem({ Item, isSelected, toggleSelect }) {
  const { notificationCount, item, children } = Item;
  return (
    <>
      <div
        className={`${(isSelected ? "selected" : "") + " nav-item"}`}
        onClick={() => toggleSelect(item)}
      >
        <div className="ni-icon">{<DynamicIconRenderer itemName={item} />}</div>
        <div className="ni-text">{Item.item}</div>
        {notificationCount ? (
          <div className="noti-circle">{notificationCount}</div>
        ) : (
          ""
        )}
      </div>
      <div className="nav-item-children">
        {isSelected && children
          ? children.map((child) => {
              return <NavChild name={child.item} notificationCount={child.notificationCount} isSelected={child.isSelected}/>;
            })
          : ""}
      </div>
    </>
  );
}
