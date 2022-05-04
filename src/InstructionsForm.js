import React from 'react';
import { useState } from 'react';

export default function InstructionsForm({ instructions, setInstructions }) {
  const [formInstructions, setFormInstructions] = useState([]);

  function handleSubmit(e){
    e.preventDefault();
    setInstructions([...instructions, formInstructions]);
    setFormInstructions('');
  }
  return (
    <div className='instruction-input'>
        Instructions
      <form onSubmit={handleSubmit}>
        <input value={formInstructions} onChange={(e) => setFormInstructions(e.target.value)}></input>
        <button>Submit</button>
      </form>
    </div>
  );
}
