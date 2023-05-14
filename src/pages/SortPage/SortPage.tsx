import React from 'react';
import { useSelector } from 'react-redux';
import Canvas from '../../components/Canvas/Canvas'
import './SortPage.css';
import { RootState } from '../../store';
import Menu from '../../components/Menu/Menu';

const SortPage: React.FC = () => {
    let array: number[] = useSelector((state: RootState) => state.root.array);
    return (
        <div className='container'>
            <div className="canvas-container">
                <Canvas array={array} />
            </div >
            <Menu />
        </div>
    );
};

export default SortPage;
