// import React from 'react';

// const SideMenu = ({ categories, onSelectCategory }) => {
//   return (
//     <div className="side-menu">
//       <ul>
//         {categories.map(category => (
//           <li key={category.id} onClick={() => onSelectCategory(category.id)}>
//             {category.name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SideMenu;
import React from 'react';
import { useRouter } from 'next/router';

const SideMenu = ({ categories }) => {
  const router = useRouter();

  const handleCategoryClick = (categoryId) => {
    router.push(`/category/${categoryId}`); // Navigate to the category page
  };

  return (
    <div className="side-menu">
      <ul>
        {categories.map(category => (
          <li key={category.id} onClick={() => handleCategoryClick(category.id)}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;
