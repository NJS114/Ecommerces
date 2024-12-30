import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><a href="/categories">Catégories</a></li>
        <li><a href="/offers">Offres spéciales</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
