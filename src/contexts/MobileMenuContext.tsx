"use client";

import { MobileMenuContextType } from "@/types";
import React, { createContext, useState } from "react";

export const MobileMenuContext = createContext<MobileMenuContextType>({
  display: false,
  show: () => {},
  hide: () => {},
});

const MobileMenuContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [display, setDisplay] = useState(false);
  const show = () => setDisplay(true);
  const hide = () => setDisplay(false);

  const contextValue: MobileMenuContextType = { display, show, hide };

  return (
    <>
      <MobileMenuContext.Provider value={contextValue}>
        {children}
      </MobileMenuContext.Provider>
    </>
  );
};

export default MobileMenuContextProvider;
