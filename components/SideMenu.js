
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const SideMenu = ({ categories }) => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
   
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCategoryClick = (categoryId) => {
    router.push(`/category/${categoryId}`);
    setDropdownOpen(false); // Close dropdown on selection
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="side-menu">
      {isMobile ? (
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            onClick={toggleDropdown}
          >
            Categories
          </button>
          <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
            {categories.slice(0,40).map(category => (
              <button 
                key={category.id} 
                className="dropdown-item" 
                onClick={() => handleCategoryClick(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <ul style={{ maxHeight: '900px', overflowY: 'auto', padding: '0', margin: '0' }}>
          {categories.slice(0, 39).map(category => (
            <li 
              key={category.id} 
              onClick={() => handleCategoryClick(category.id)} 
              style={{ cursor: 'pointer', padding: '10px 20px', listStyleType: 'none' }}
            >
              {category.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SideMenu;
