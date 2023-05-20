import { Dispatch } from 'react';
import { setStep } from '../context/rootSlice';
import { AnyAction } from '@reduxjs/toolkit';
import { setArray, setRed, setBlue, setGreen, setSubArrayIndex } from '../context/rootSlice';

export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const incrementStep = (stepCount: number, dispatch: Dispatch<AnyAction>): number => {
    stepCount++;
    dispatch(setStep(stepCount));
    return stepCount;
};
type UADType = {
    dispatch: Dispatch<AnyAction>,
    speed: number,
    arr?: number[],
    red?: number[],
    blue?: number[],
    green?: number[],
    subarrayIndex?: number[],
    wait?: boolean,
};
export const updateArrayDisplay = async ({ dispatch, speed, arr, red, blue, green, subarrayIndex, wait = true }: UADType) => {
    if (red !== undefined) {
        dispatch(setRed(red));
    };
    if (blue !== undefined) {
        dispatch(setBlue(blue));
    };
    if (green !== undefined) {
        dispatch(setGreen(green));
    };
    if (subarrayIndex !== undefined) {
        dispatch(setSubArrayIndex(subarrayIndex));
    };
    if (arr !== undefined) {
        dispatch(setArray([...arr]));
    }
    if (wait) {
        await delay(speed);
    }
};