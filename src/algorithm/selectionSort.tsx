import { updateArrayDisplay } from "./utils";
import { toggleSorting } from '../context/rootSlice';
import { Dispatch } from "react";
import { AnyAction } from "@reduxjs/toolkit";

export const SelectionSort = async (array: number[], dispatch: Dispatch<AnyAction>, speed: number) => {
    dispatch(toggleSorting());
    let arr = [...array];
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let min_index = i;
        for (let j = i + 1; j < len; j++) {
            await updateArrayDisplay({ dispatch, speed, red: [arr[min_index]], blue: [arr[j]] })
            if (arr[min_index] > arr[j]) {
                await updateArrayDisplay({ dispatch, speed, red: [arr[min_index]], blue: [arr[j]] })
                min_index = j;
            }
        }
        let tmp = arr[i];
        arr[i] = arr[min_index];
        arr[min_index] = tmp
        await updateArrayDisplay({ dispatch, speed, arr, red: [arr[i]] })
    }
    await updateArrayDisplay({ dispatch, speed, red: [], blue: [], wait: false })
    dispatch(toggleSorting());
};