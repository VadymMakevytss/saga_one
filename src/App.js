import React from 'react';
import { useSelector } from 'react-redux';

function App() {
  const store = useSelector(store => store)

 console.log(store)

  return (
    <div>
     <h1>Redux Saga Tutorial</h1>
    </div>
  );
}

export default App;
