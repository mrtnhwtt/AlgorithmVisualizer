import React, { useState, useEffect } from 'react';
import './App.css';
import ArrayBit from './components/ArrayBit/ArrayBit'
import Button from './components/Button/Button'

function App() {

  const [r_array, setRArray] = useState([]);

  const createUnsortedArray = () => {
    for (var array = [], i = 0; i < 1000; ++i) array[i] = i;
    var tmp, current, top = array.length;
    if (top) while (--top) {
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
    if (r_array.length === 0) {
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
          <div className="array-settings-container">
            <input type="range" name='array-length' min='20' max='1000'/>
            <Button onClick={regenerateArray}>Regenerate Array</Button>
          </div>
        </div>
      </header>
      <main>
        <div className="arrayHolder">
          {r_array.map((val) => {
            return <ArrayBit index={val} arrayLength={r_array.length} />
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
