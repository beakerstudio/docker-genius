import React from "react";
import services from "../styles/Service.module.css";

export default function Service({
  children,
  errors,
  isActive = false,
  register,
  title,
  toggleIsActive = null,
}) {
  return (
    <div
      className={services.Service + (isActive ? ` ${services['-active']}` : '')}
      onClick={isActive || !toggleIsActive ? null : toggleIsActive}
    >
      <div className={services.Service_title}>{title}</div>
      <button className={services.Service_toggle} onClick={toggleIsActive}>
        {isActive ? "Remove" : "Add"}
      </button>
      <div className={services.Service_fields}>
        {React.Children.map(children, (child, index) => (
          React.cloneElement(child, {
            errors,
            key: index,
            register,
          })
        ))}
      </div>
    </div>
  );
}
