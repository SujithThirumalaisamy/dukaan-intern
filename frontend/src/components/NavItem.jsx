import React from "react";
import DynamicIconRenderer from "../utils/DynamicIconRenderer.jsx";
export default function NavItem({ name, isSelected, toggleSelect}) {
  return (
    <div className={`${(isSelected?'selected':'')+' nav-item'}`} onClick={()=>toggleSelect(name)}>
      <div className="ni-icon">{<DynamicIconRenderer itemName={name}/>}</div>
      <div className="ni-text">{name}</div>
    </div>
  );
}
