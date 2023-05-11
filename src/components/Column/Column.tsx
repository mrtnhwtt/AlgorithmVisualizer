import React from 'react';
import './column.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

interface ColumnProps {
    value: number;
    arrayLength: number;
}

const Column: React.FC<ColumnProps> = ({ value, arrayLength }) => {
    let selected = useSelector((state: RootState) => state.root.selected);

    if (selected[0] === value) {
        return (
            <div
                className="column blue"
                style={{
                    width: 100 / arrayLength + "%",
                    height: value / arrayLength * 100 + "%",
                }}>
            </div>
        );
    } else if (selected[1] === value) {
        return (
            <div
                className="column red"
                style={{
                    width: 100 / arrayLength + "%",
                    height: value / arrayLength * 100 + "%",
                }}>
            </div>
        );
    }
    return (
        <div
            className="column"
            style={{
                width: 100 / arrayLength + "%",
                height: value / arrayLength * 100 + "%",
            }}>
        </div>
    );
}

export default Column