import React from 'react';

const Categories = ({ categories, filteredItem }) => {
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return (
          <button
            type="button"
            className="menu-2-btn"
            key={category}
            onClick={() => filteredItem(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
