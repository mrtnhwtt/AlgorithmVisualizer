import { updateArrayDisplay } from "./utils";
import { toggleSorting } from '../context/rootSlice';
import { Dispatch } from "react";
import { AnyAction } from "@reduxjs/toolkit";


export const QuickSort = async (array: number[], dispatch: Dispatch<AnyAction>, speed: number) => {
    dispatch(toggleSorting());
    let arr = [...array];
    let len = arr.length;
    await quickSort(speed, arr, 0, len - 1, dispatch);
    await updateArrayDisplay({ dispatch, speed, arr, red: [], blue: [], green: [], subarrayIndex: [], wait: false });
    dispatch(toggleSorting());
}

const partition = async (speed: number, arr: number[], low: number, high: number, dispatch: Dispatch<AnyAction>) => {
    // highlight the subarray on which the sort is ran
    await updateArrayDisplay({ dispatch, speed, subarrayIndex: arr.slice(low, high + 1), wait: false });
    let pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        await updateArrayDisplay({ dispatch, speed, red: [pivot], blue: [arr[i]], green: [arr[j]] });
        if (arr[j] < pivot) {
            i++;
            let tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
            await updateArrayDisplay({ dispatch, speed, arr, red: [pivot], blue: [arr[j]], green: [arr[i]] });
        }
    }
    let tmp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = tmp;
    await updateArrayDisplay({ dispatch, speed, arr, red: [pivot], blue: [arr[i + 1]], green: [arr[high]] });
    return i + 1;
}

const quickSort = async (speed: number, arr: number[], low: number, high: number, dispatch: Dispatch<AnyAction>) => {
    if (low < high) {
        let pi = await partition(speed, arr, low, high, dispatch);
        await quickSort(speed, arr, low, pi - 1, dispatch);
        await quickSort(speed, arr, pi + 1, high, dispatch);
    }
}