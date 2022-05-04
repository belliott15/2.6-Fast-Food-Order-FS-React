import React from 'react';

export default function Instruction({ instruction }) {
  return (
    <div className='instruction-list'>
      <ul>
        <li>{instruction}</li>
      </ul>
      
    </div>
  );
}
