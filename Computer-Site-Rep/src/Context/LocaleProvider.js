import React, { useContext, useState } from "react";
import Cookies from "js-cookie";

const DirectionContext = React.createContext();
const ChangeDirectionContext = React.createContext();

export function UseDirection() {
  return useContext(DirectionContext);
}

export function ChangeDirection() {
  return useContext(ChangeDirectionContext);
}

export function DirectionProvider({ children }) {
  const CurrentLanguageCode = Cookies.get("i18next") || "fa";
  const [direction, SetDirection] = useState(
    CurrentLanguageCode === "fa" ? "ltr" : "rtl"
  );

  function changeDirection() {
    // if (!(CurrentLanguageCode === "ar" && direction === "rtl")) {
    // }
    SetDirection(direction === "ltr" ? "rtl" : "ltr");
  }

  return (
    <DirectionContext.Provider value={direction}>
      <ChangeDirectionContext.Provider value={changeDirection}>
        {children}
      </ChangeDirectionContext.Provider>
    </DirectionContext.Provider>
  );
}
