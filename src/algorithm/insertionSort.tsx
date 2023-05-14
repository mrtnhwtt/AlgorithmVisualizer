import { delay } from "./utils";
import { toggleSorting, setSelected, setArray } from '../context/rootSlice';
import { Dispatch } from "react";
import { AnyAction } from "@reduxjs/toolkit";

export const InsertionSort = async (array: number[], speed: number, dispatch: Dispatch<AnyAction>) => {
    dispatch(toggleSorting());
    let arr = [...array];
    let len = arr.length;
    for (let i = 1; i < len; i++) {
        let key = arr[i];
        let j = i - 1;
        dispatch(setSelected([arr[j], key]));
        await delay(speed);
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]
            j--;
            dispatch(setSelected([arr[j], key]));
            await delay(speed);
        }
        arr[j + 1] = key;
        dispatch(setArray([...arr]));
        dispatch(setSelected([arr[j], key]));
        await delay(speed);
    }
    dispatch(setSelected([-1, -1]));
    dispatch(toggleSorting());
}