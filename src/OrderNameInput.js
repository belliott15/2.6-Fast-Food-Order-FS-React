import React from 'react';

export default function OrderNameInput({ setName }) {
  return (
    <div className='name-input'> Please Type your name here:
      <input onChange={(e) => setName(e.target.value)}>
      </input>
    </div>
  );
}
