import React, { useState } from 'react'

interface Props {
    setLocation: (name:string) => void;
}

function Search({setLocation}: Props) {
const [input,setInput] = useState("");

const handleInputChange = () => {
    setLocation(input);
    setInput("");
}

  return (
    <div>
        <input 
         type='text'
         value={input}
         placeholder='Enter a city'
         onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleInputChange}>Search</button>
    </div>
  )
}

export default Search