import React, { useState } from 'react';
// import Special from '../components/Special';
import { menu } from '../data';
import Title from '../components/Title';
import Categories from '../components/Categories';
import MenuList from '../components/MenuList';

const allCategories = ['all', ...new Set(menu.map((item) => item.category))];

const Menu = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories] = useState(allCategories);

  const filteredItem = (category) => {
    if ('all' === category) {
      setMenuItems(menu);
      return;
    }
    const newItem = menu.filter((item) => item.category === category);
    setMenuItems(newItem);
  };

  return (
    <main>
      <section className="item-menu">
        <Title title="our menu" />
        <Categories categories={categories} filteredItem={filteredItem} />
        <MenuList menus={menuItems} />
      </section>
    </main>
  );
};

export default Menu;
