import { updateArrayDisplay } from "./utils";
import { toggleSorting } from '../context/rootSlice';
import { Dispatch } from "react";
import { AnyAction } from "@reduxjs/toolkit";

export const BubbleSort = async (array: number[], dispatch: Dispatch<AnyAction>, speed: number) => {
    dispatch(toggleSorting());
    let arr = [...array];
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            await updateArrayDisplay({ dispatch, speed, red: [arr[j]], blue: [arr[j + 1]] })
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                await updateArrayDisplay({ dispatch, speed, arr, red: [arr[j + 1]], blue: [arr[j]] })

            }
        }
    }
    await updateArrayDisplay({ dispatch, speed, red: [], blue: [], wait: false })
    dispatch(toggleSorting());
};