import React, { useState, useEffect, useRef } from 'react'




function App() {
const [value, setValue] = useState('initial')
  
  return (
    <div>
      <h1>{value}</h1>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        valueP={value}
      />
        
     
    </div>
  );
}

export default App;


// <input className="inputcounter"></input>;