import React from 'react';

export default function OrderImages({ foodID, drinkID, sideID }) {
  return (
    <div className='order-images'>
      <img src={`./assets/side-${sideID}.png`} />
      <img src={`./assets/food-${foodID}.png`} />
      <img src={`./assets/drink-${drinkID}.png`} />
    </div>
  );
}
