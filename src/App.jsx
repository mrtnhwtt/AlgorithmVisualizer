import React, { useState, useEffect } from 'react';
import './App.css';
import ArrayBit from './components/ArrayBit/ArrayBit'
import Button from './components/Button/Button'
import { Slider, MenuItem, Select } from '@mui/material';

function App() {

    const [r_array, setRArray] = useState([]);
    const [rangeValue, setRangeValue] = useState(35);
    const [isRunning, setIsRunning] = useState(false);
    const [sortMethod, setSortMethod] = useState(0);
    const [steps, setSteps] = useState(0);
    const sliderLabel = [
        {
            value: 20,
            label: 'Fast'
        },
        {
            value: 200,
            label: 'Slow'
        }
    ]
    const createUnsortedArray = () => {
        setSteps(0)
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

    const delay = () => {
        return new Promise(
            resolve => setTimeout(resolve, 0.00001)
        );
    }

    const BubbleSort = async () => {
        let arr = [...r_array]
        let step = 0
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                await delay()
                if (arr[j] > arr[j + 1]) {
                    step++
                    setSteps(step)
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    setRArray([...arr]);
                }
            }
        }
        console.log('done')
        setIsRunning(false)
    }

    const handleSort = () => {
        setIsRunning(true)
        switch (sortMethod) {
            case 0:
                BubbleSort()
                break;

            default:
                break;
        }
    }

    const handleSelectSort = (event) => {
        setSortMethod(event.target.value)
    }

    const regenerateArray = () => {
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

    // console.log('rendering');

    return (
        <div className="App" >
            <header className="App-header" >
                <div className="nav-container" >
                    <div className="App-title" > Pretty Array Visualisation </div>
                    <div className="settings-container" >
                        <div className="opt-container" >
                            <Slider aria-label="ArraySize"
                                defaultValue={35}
                                valueLabelDisplay="auto"
                                step={5}
                                min={20}
                                max={200}
                                onChange={handleSliderUpdate}
                                sx={{
                                    width: 180,
                                    color: '#282625',
                                  }}
                            />
                            <div className="button-container">
                                <Button onClickAction={regenerateArray} desactivated={isRunning}>Regenerate</Button> </div> <div className="button-container" >
                            </div>
                        </div>
                        <div className='opt-container'>
                            <Select
                                id="sort-select"
                                value={sortMethod}
                                onChange={handleSelectSort}
                                sx={{
                                    width: 180,
                                    color: '#282625',
                                  }}
                            >
                                <MenuItem value={0}>Bubble Sort</MenuItem>
                            </Select>
                        <div className="button-container">
                            <Button onClickAction={handleSort} desactivated={isRunning} >Launch Sort</Button>
                        </div>
                        </div>
                    </div>
                </div >
            </header>
            <main>
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
                </div>
            </main >
            <div>
                Steps: {steps}
            </div>
        </div>
    );
}

export default App;