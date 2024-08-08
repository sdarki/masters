import React from 'react';

const SideMenu = ({ categories, onSelectCategory }) => {
  return (
    <div className="side-menu">
      <ul>
        {categories.map(category => (
          <li key={category.id} onClick={() => onSelectCategory(category.id)}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;
