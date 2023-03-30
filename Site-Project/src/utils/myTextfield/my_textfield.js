import React from "react";
import { InputText } from "primereact/inputtext";

function MyTextfield({ label,icon }) {
  return (
    <span className="p-input-icon-right custom_TextField">
      <i className={icon} />
      <InputText placeholder={label} />
    </span>
  );
}

export default MyTextfield;
