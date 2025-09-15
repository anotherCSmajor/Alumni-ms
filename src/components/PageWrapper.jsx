import React, { memo } from 'react';
import { useNavbar } from '../contexts/NavbarContext';

const PageWrapper = memo(({ children, className = '' }) => {
  const { isOpen, isMobile } = useNavbar();

  return (
    <div 
      className={`
        transition-transform duration-300 ease-in-out
        ${isOpen && !isMobile ? 'ml-64' : 'ml-0'}
        ${className}
      `}
    >
      {children}
    </div>
  );
});

PageWrapper.displayName = 'PageWrapper';

export default PageWrapper;
