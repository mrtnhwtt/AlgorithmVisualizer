import { delay } from "./utils";
import { toggleSorting, setArray, setSelected } from '../context/rootSlice';
import { Dispatch } from "react";
import { AnyAction } from "@reduxjs/toolkit";

export const QuickSort = async (array: number[], speed: number, dispatch: Dispatch<AnyAction>) => {
    dispatch(toggleSorting());
    let arr = [...array];
    let len = arr.length;
    await quickSort(arr, 0, len - 1, speed, dispatch);
    dispatch(setSelected([-1, -1]));
    dispatch(toggleSorting());
}

const partition = async (arr: number[], low: number, high: number, speed: number, dispatch: Dispatch<AnyAction>) => {
    let pivot = arr[high];
    let i = low - 1;
    console.log(low, i)
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            let tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
            dispatch(setSelected([arr[i], arr[j]]))
            dispatch(setArray([...arr]))
            await delay(speed);
        }
    }
    dispatch(setSelected([arr[high], arr[i + 1]]))
    await delay(speed);
    let tmp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = tmp;
    dispatch(setSelected([arr[high], arr[i + 1]]))
    dispatch(setArray([...arr]))
    await delay(speed);
    return i + 1;
}

const quickSort = async (arr: number[], low: number, high: number, speed: number, dispatch: Dispatch<AnyAction>) => {
    if (low < high) {
        let pi = await partition(arr, low, high, speed, dispatch);
        await quickSort(arr, low, pi - 1, speed, dispatch);
        await quickSort(arr, pi + 1, high, speed, dispatch);
    }
}