import React, { useContext, useEffect, useState } from "react";

const ResponsiveWidth = React.createContext();
const ResponsiveHeight = React.createContext();
const ResponsiveIsDesktop = React.createContext();
const ResponsinveIsMobileAndTablet = React.createContext();

export function UseWidth() {
  return useContext(ResponsiveWidth);
}

export function UseHeight() {
  return useContext(ResponsiveHeight);
}

export function IsMobile() {
  return useContext(ResponsinveIsMobileAndTablet);
}

export function IsDesktop() {
  return useContext(ResponsiveIsDesktop);
}

export function ResponsiveProvider({ children }) {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  const MobileAndTabletSize = 1100;
  const [isMobile, setIsMobile] = useState(
    windowSize[0] <= MobileAndTabletSize
  );
  const [isDesktop, setIsDesktop] = useState(
    windowSize[0] > MobileAndTabletSize
  );
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
      setIsMobile(windowSize[0] <= MobileAndTabletSize);
      setIsDesktop(windowSize[0] > MobileAndTabletSize);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <ResponsiveWidth.Provider value={windowSize[0]}>
      <ResponsiveHeight.Provider value={windowSize[1]}>
        <ResponsinveIsMobileAndTablet.Provider value={isMobile}>
          <ResponsiveIsDesktop.Provider value={isDesktop}>
            {children}
          </ResponsiveIsDesktop.Provider>
        </ResponsinveIsMobileAndTablet.Provider>
      </ResponsiveHeight.Provider>
    </ResponsiveWidth.Provider>
  );
}
