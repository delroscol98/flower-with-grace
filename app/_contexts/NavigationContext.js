"use client";

import { createContext, useContext, useState } from "react";

const NavigationContext = createContext();

function NavigationProvider({ children }) {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNavMenu = () => {
    setNavOpen((navOpen) => !navOpen);
  };

  return (
    <NavigationContext.Provider value={{ navOpen, setNavOpen, toggleNavMenu }}>
      {children}
    </NavigationContext.Provider>
  );
}

function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context)
    throw new Error(
      "Navigation context is used outside of navigation provider"
    );

  return context;
}

export { NavigationProvider, useNavigation };
