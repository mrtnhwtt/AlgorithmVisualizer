import { delay, incrementStep } from "./utils";
import { toggleSorting, setSelected, setArray, setStep } from '../context/rootSlice';
import { Dispatch } from "react";
import { AnyAction } from "@reduxjs/toolkit";

export const BubbleSort = async (array: number[], dispatch: Dispatch<AnyAction>) => {
    dispatch(toggleSorting());
    let arr = [...array];
    let stepCount = 0;
    dispatch(setStep(stepCount));
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        stepCount = incrementStep(stepCount, dispatch);
        for (let j = 0; j < len - i - 1; j++) {
            stepCount = incrementStep(stepCount, dispatch);
            dispatch(setSelected([arr[j + 1], arr[j]]));
            await delay(50);
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                stepCount = incrementStep(stepCount, dispatch);
                dispatch(setSelected([arr[j], arr[j + 1]]));
                dispatch(setArray([...arr]));
                await delay(50);
            }
        }
    }
    dispatch(setSelected([0, 0]));
    dispatch(toggleSorting());
};