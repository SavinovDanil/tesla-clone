import React from 'react';
import './MenuItem.css';

function MenuItem({ title }) {
  return (
    <div className="menuItem">
      <span>{title}</span>
    </div>
  );
}

export default MenuItem;
