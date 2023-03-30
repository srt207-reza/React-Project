import React from "react";
import { Button } from "primereact/button";
import "./my_button.css";

function MyButton({
  label,
  icon,
  iconPos,
  onClick,
  type,
  haveRadius = false,
  fullSize = false,
}) {
  return (
    <Button
      label={label}
      icon={icon}
      iconPos={iconPos}
      onClick={onClick}
      className={
        (type === "Secondary"
          ? "p-button-secondary"
          : type === "Success"
          ? "p-button-success"
          : type === "Info"
          ? "p-button-info"
          : type === "Warning"
          ? "p-button-warning"
          : type === "Danger"
          ? "p-button-danger"
          : "color") +
        (haveRadius ? " radius" : "") +
        (fullSize ? " btn_full" : "")
      }
    />
  );
}

export default MyButton;
