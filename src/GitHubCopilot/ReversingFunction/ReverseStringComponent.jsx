import React, { useState } from "react";

const ReverseStringComponent = () => {
  const [input, setInput] = useState('');
  const [reversed, setReversed] = useState('');

  const reverseString = (str) => {
    return str.split('').reverse().join('@');
  };
  
    const handleInputChange = (e) => {
      const newValue = e.target.value;
      setInput(newValue);
      setReversed(reverseString(newValue));
  };


  return (
    <div className="flex justify-center items-center flex-col text-blue-600">
        <h1>Reverse String</h1>
        <input className="text-center"
            type="text" 
            value={input} 
            onChange={handleInputChange} 
            placeholder="Enter a string" 
        />
        <p>Reversed: {reversed}</p>
    </div>


  );
};

export default ReverseStringComponent;
