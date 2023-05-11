import { Dispatch } from 'react';
import { setStep } from '../context/rootSlice';
import { AnyAction } from '@reduxjs/toolkit';

export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const incrementStep = (stepCount: number, dispatch: Dispatch<AnyAction>): number => {
    stepCount++;
    dispatch(setStep(stepCount));
    return stepCount;
};