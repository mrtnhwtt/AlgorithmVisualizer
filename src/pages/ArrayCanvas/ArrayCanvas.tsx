import React from 'react';
import { useSelector } from 'react-redux';
import Canvas from '../../components/Canvas/Canvas'
import './ArrayCanvas.css';
import { RootState } from '../../store';
import { useHandleSort } from '../../hooks/useHandleSort';

const ArrayCanvas: React.FC = () => {
    const handleSort = useHandleSort();
    let array: number[] = useSelector((state: RootState) => state.root.array);

    return (
        <div className="arrayCanvas">
            <Canvas array={array} />
            <div>
                <button onClick={handleSort}>Sort</button>
            </div>
            <div>
                <p>Steps: {useSelector((state: RootState) => state.root.step)}</p>
            </div>
        </div >
    );
};

export default ArrayCanvas;
