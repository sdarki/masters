import React from 'react';

const SideMenu = ({ menuItems, onSelectProduct }) => {
  return (
    <div className="side-menu">
      <ul>
        {menuItems.map(item => (
          <li key={item.id} onClick={() => onSelectProduct(item.id)}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;
