import React from 'react';
import Instruction from './Instruction';

export default function InstructionsList({ instructions, name }) {
  return (
    <div>
      Instructions for {name} order
      {instructions.map((instruction, i) => <Instruction key={instruction + i} instruction={instruction}/>)}
    </div>
  );
}
