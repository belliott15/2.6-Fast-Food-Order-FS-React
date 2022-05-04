import React from 'react';

export default function Dropdown({ setFoodID, setDrinkID, setAppetizerID }) {
  return (
    <div>
      <select className='dropdown' onChange={(e) => setAppetizerID(e.target.value)}>
        <option value='1'>Finger Sandwich</option>
        <option value='2'>Artisan Bread</option>
        <option value='3'>Fresh Sushi</option>
      </select>
      <select className='dropdown' onChange={(e) => setFoodID(e.target.value)}>
        <option value='1'>Steak</option>
        <option value='2'>Ramen</option>
        <option value='3'>Spaghetti</option>
      </select>
      <select className='dropdown' onChange={(e) => setDrinkID(e.target.value)}>
        <option value='1'>Pancakes</option>
        <option value='2'>Doughnut</option>
        <option value='3'>Cookie</option>
      </select>
    </div>
  );
}
