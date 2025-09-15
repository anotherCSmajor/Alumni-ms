import React, { memo } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useNavbar } from '../../contexts/NavbarContext';

const NavbarToggle = memo(() => {
  const { isOpen, isMobile, toggleNavbar } = useNavbar();

  return (
    <button
      onClick={toggleNavbar}
      className={`
        fixed z-50 p-3 rounded-lg shadow-md bg-white hover:bg-amber-300 
        transition-transform duration-300 ease-in-out border border-gray-200
        hover:shadow-lg active:scale-95 cursor-pointer
        ${isMobile 
          ? 'top-4 left-4' 
          : isOpen 
            ? 'top-4 left-64' 
            : 'top-4 left-4'
        }
        ${isOpen && !isMobile ? 'transform translate-x-2' : ''}
      `}
      aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
    >
      {isOpen ? (
        <ChevronLeftIcon 
          sx={{ 
            fontSize: 24, 
            color: '#374151',
            transition: 'transform 0.3s ease-in-out'
          }} 
        />
      ) : (
        <MenuIcon 
          sx={{ 
            fontSize: 24, 
            color: '#374151',
            transition: 'transform 0.3s ease-in-out'
          }} 
        />
      )}
    </button>
  );
});

NavbarToggle.displayName = 'NavbarToggle';

export default NavbarToggle;
