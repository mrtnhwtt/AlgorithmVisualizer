import React from 'react';
import './column.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

interface ColumnProps {
    value: number;
    arrayLength: number;
}

const Column: React.FC<ColumnProps> = ({ value, arrayLength }) => {
    let red = useSelector((state: RootState) => state.root.red);
    let blue = useSelector((state: RootState) => state.root.blue);
    let green = useSelector((state: RootState) => state.root.green);
    let subArray = useSelector((state: RootState) => state.root.subarrayIndex);

    let classes = `column ${red.includes(value) ? 'red' : ''} ${blue.includes(value) ? 'blue' : ''} ${subArray.includes(value) ? 'subarray' : ''} ${green.includes(value) ? 'green' : ''}`;
    return (
        <div
            className={classes}
            style={{
                width: 100 / arrayLength + "%",
                height: value / arrayLength * 100 + "%",
            }}>
        </div>
    );
}

export default Column