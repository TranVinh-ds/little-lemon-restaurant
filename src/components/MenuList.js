import React from 'react';
import MenuItem from '../components/MenuItem';

const MenuList = ({ menus }) => {
  return (
    <div className="section-center-item">
      {menus.map((item) => {
        return <MenuItem key={item.id} {...item} />;
      })}
    </div>
  );
};

export default MenuList;
