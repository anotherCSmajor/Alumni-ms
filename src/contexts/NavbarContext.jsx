import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';

const NavbarContext = createContext();

export const useNavbar = () => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error('useNavbar must be used within a NavbarProvider');
  }
  return context;
};

export const NavbarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile on mount and resize
  useEffect(() => {
    const checkIsMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      
      // On mobile, default to closed
      if (mobile && isOpen) {
        setIsOpen(false);
      }
    };

    checkIsMobile();
    
    // Throttle resize events for better performance
    let timeoutId;
    const throttledResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkIsMobile, 100);
    };
    
    window.addEventListener('resize', throttledResize);

    return () => {
      window.removeEventListener('resize', throttledResize);
      clearTimeout(timeoutId);
    };
  }, [isOpen]);

  const toggleNavbar = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const closeNavbar = useCallback(() => {
    setIsOpen(false);
  }, []);

  const openNavbar = useCallback(() => {
    setIsOpen(true);
  }, []);

  const contextValue = useMemo(() => ({
    isOpen,
    isMobile,
    toggleNavbar,
    closeNavbar,
    openNavbar
  }), [isOpen, isMobile, toggleNavbar, closeNavbar, openNavbar]);

  return (
    <NavbarContext.Provider value={contextValue}>
      {children}
    </NavbarContext.Provider>
  );
};
