import React from "react";

export default function NavChild({ name, notificationCount, isSelected }) {
  return (
    <div
      className={`nav-item-child ${isSelected ? "selected" : ""}`}
    >{`${name} ${notificationCount ? "(" + notificationCount + ")" : ""}`}</div>
  );
}
