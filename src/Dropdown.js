import React from 'react';

export default function Dropdown({ setFoodID, setDrinkID, setSideID }) {
  return (
    <div>
      <select onChange={(e) => setSideID(e.target.value)}>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
      </select>
      <select onChange={(e) => setFoodID(e.target.value)}>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
      </select>
      <select onChange={(e) => setDrinkID(e.target.value)}>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
      </select>
    </div>
  );
}
