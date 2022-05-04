import React from 'react';

export default function OrderImages({ foodID, drinkID, appetizerID }) {
  return (
    <div className='order-images'>
      <div className='order-column'>Appetizer
        <img src={`./assets/side-${appetizerID}.png`} />  
      </div>
      <div className='order-column'>Main
        <img src={`./assets/food-${foodID}.png`} />
      </div>
      <div className='order-column'>Desert
        <img src={`./assets/drink-${drinkID}.png`} /> 
      </div>
    </div>
  );
}
