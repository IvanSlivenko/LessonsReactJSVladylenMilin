import React, { useState, useEffect } from 'react'




function App() {
  const [type, setType] = useState('users');
  
  return (
    <div className="totalBox">
      <h1> Реcурс {type}</h1>
      <button onClick={() => setType('users')}>Користувачі</button>
      <button onClick={() => setType('todo')}>Todo</button>
      <button onClick={() => setType('posts')}>Пости</button>
    </div>
  );
}

export default App;


// <input className="inputcounter"></input>;