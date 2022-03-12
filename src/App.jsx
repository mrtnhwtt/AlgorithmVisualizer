import React, { useState, useEffect, useReducer } from 'react';
import './App.css';
import ArrayBit from './components/ArrayBit/ArrayBit'
import Button from './components/Button/Button'
import { Slider } from '@mui/material';

function App() {

    const [r_array, setRArray] = useState([]);
    const [rangeValue, setRangeValue] = useState(20);

    const createUnsortedArray = () => {
        for (var array = [], i = 0; i < rangeValue; ++i) array[i] = i;
        var tmp, current, top = array.length;
        if (top)
            while (--top) {
                current = Math.floor(Math.random() * (top + 1));
                tmp = array[current];
                array[current] = array[top];
                array[top] = tmp;
            }
        array = array.map((val) => {
            return ++val;
        });
        setRArray(array);
    };

    const BubbleSort = () => {
        let arr = [...r_array]
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                setTimeout(() => {
                    if (arr[j] > arr[j + 1]) {
                        let temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                    }
                    setRArray([...arr]);
                }, 0.0001)
            }
        }
    }

    const regenerateArray = () => {
        console.log('regenerating')
        createUnsortedArray()
    };

    const handleSliderUpdate = (event, newValue) => {
        setRangeValue(newValue)
    }

    useEffect(() => {
        if (r_array.length === 0) {
            createUnsortedArray()
        }
    }, [r_array]);

    console.log('rendering');

    return (
        <div className="App" >
            <header className="App-header" >
                <div className="nav-title" >
                    <div className="App-title" > Pretty Array Visualisation </div>
                    <div className="array-settings-container" >
                        <div className="slider-container" >
                            <Slider aria-label="ArraySize"
                                defaultValue={20}
                                valueLabelDisplay="auto"
                                step={1}
                                min={5}
                                max={100}
                                onChange={handleSliderUpdate}
                            /> </div> <div className="button-container">
                            <Button onClickAction={regenerateArray} > Regenerate Array </Button> </div> <div className="button-container" >
                            <Button onClickAction={BubbleSort} > Launch Sort </Button> </div > </div> </div > </header> <main>
                <div className="arrayHolder" > {
                    r_array.length !== 0 ? (

                        r_array.map((val) => {
                            return <ArrayBit key={val}
                                index={val}
                                arrayLength={r_array.length}
                            />
                        })
                    ) : < div className='center-loading' > Loading... </div>
                }

                </div> </main > </div>
    );
}

export default App;