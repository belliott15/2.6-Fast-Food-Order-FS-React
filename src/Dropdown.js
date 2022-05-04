import React from 'react';

export default function Dropdown({ setFoodID, setDrinkID, setSideID }) {
  return (
    <div>
      <select className='dropdown' onChange={(e) => setSideID(e.target.value)}>
        <option value='1'>Option 1</option>
        <option value='2'>Option 2</option>
        <option value='3'>Option 3</option>
      </select>
      <select onChange={(e) => setFoodID(e.target.value)}>
        <option value='1'>Option 1</option>
        <option value='2'>Option 2</option>
        <option value='3'>Option 3</option>
      </select>
      <select onChange={(e) => setDrinkID(e.target.value)}>
        <option value='1'>Option 1</option>
        <option value='2'>Option 2</option>
        <option value='3'>Option 3</option>
      </select>
    </div>
  );
}
