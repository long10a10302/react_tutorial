import React, { useState } from 'react';

function SumInput() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [sum, setSum] = useState(0);

  const handleChange = (setter) => (event) => setter(Number(event.target.value));

  const calculateSum = () => {
    setSum(Number(value1) + Number(value2));
  };

  return (
    <div>
      <input 
        type="number" 
        value={value1} 
        onChange={handleChange(setValue1)} 
        placeholder="Enter the first number" 
      />
      <br />
      <input 
        type="number" 
        value={value2} 
        onChange={handleChange(setValue2)} 
        placeholder="Enter the second number" 
      />
      <br />
      <button onClick={calculateSum}>Add Two Numbers</button>
      <br />
      <p>Total: {sum}</p>
    </div>
  );
}

export default SumInput;