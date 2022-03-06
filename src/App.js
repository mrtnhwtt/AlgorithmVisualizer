import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [r_array, setRArray] = useState([]);

  const createUnsortedArray = () => {
    for (var array=[],i=0;i<1000;++i) array[i]=i;
    var tmp, current, top = array.length;
    if(top) while(--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
    }
    console.log(array)
    setRArray(array);
  };

  const regenerateArray = () => {
    createUnsortedArray()
  };

  useEffect(() => {
    if(r_array.length === 0) {
      createUnsortedArray()
    } else {
      console.log(r_array)
    }
  }, [r_array]);


  console.log('rendering');


  return (
    <div className="App">
      <header className="App-header">
        <div className="nav-title">
          <div className="App-title">Pretty Array Visualisation</div>
          <div className="button-container">
            <button onClick={regenerateArray}>Regenerate Array</button>
          </div>
        </div>
      </header>
        <main>
          Array 
        </main>
    </div>
  );
}

export default App;
