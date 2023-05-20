import { updateArrayDisplay } from "./utils";
import { toggleSorting } from '../context/rootSlice';
import { Dispatch } from "react";
import { AnyAction } from "@reduxjs/toolkit";

export const InsertionSort = async (array: number[], dispatch: Dispatch<AnyAction>, speed: number) => {
    dispatch(toggleSorting());
    let arr = [...array];
    let len = arr.length;
    for (let i = 1; i < len; i++) {
        let key = arr[i];
        let j = i - 1;
        await updateArrayDisplay({ dispatch, speed, red: [key], blue: [arr[j]] });
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]
            j--;
            await updateArrayDisplay({ dispatch, speed, red: [key], blue: [arr[j]] });
        }
        arr[j + 1] = key;
        await updateArrayDisplay({ dispatch, speed, arr, red: [key], blue: [arr[j]] });
    }
    await updateArrayDisplay({ dispatch, speed, red: [], blue: [], wait: false })
    dispatch(toggleSorting());
}