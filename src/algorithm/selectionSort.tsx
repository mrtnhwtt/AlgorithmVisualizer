import { delay, incrementStep } from "./utils";
import { toggleSorting, setArray, setStep } from '../context/rootSlice';
import { Dispatch } from "react";
import { AnyAction } from "@reduxjs/toolkit";

export const SelectionSort = async (array: number[], dispatch: Dispatch<AnyAction>) => {
    dispatch(toggleSorting());
    let arr = [...array];
    let stepCount = 0;
    dispatch(setStep(stepCount));
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        stepCount = incrementStep(stepCount, dispatch);
        let min_index = i;
        await delay(50)
        for (let j = i + 1; j < len; j++) {
            stepCount = incrementStep(stepCount, dispatch);

            if (arr[min_index] > arr[j]) {
                stepCount = incrementStep(stepCount, dispatch);
                min_index = j;
            }
        }
        let tmp = arr[i];
        arr[i] = arr[min_index];
        arr[min_index] = tmp
        stepCount = incrementStep(stepCount, dispatch);
        dispatch(setArray([...arr]))
        await delay(50)
    }
};