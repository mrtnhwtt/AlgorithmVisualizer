import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createUnsortedArray } from "../utils/utils";

export type SortMethod = "bubble" | "selection" | "insertion" | "quick" | "merge";
export type RootState = {
    array: number[];
    sorting: boolean;
    method: SortMethod;
    step: number;
    speed: number;
    red: number[];
    blue: number[];
    green: number[];
    subarrayIndex: number[];
}

const initialState: RootState = {
    array: createUnsortedArray(100),
    sorting: false,
    method: "quick",
    red: [],
    blue: [],
    green: [],
    subarrayIndex: [],
    step: 0,
    speed: 1
}


export const rootSlice = createSlice({
    name: "root",
    initialState,
    reducers: {
        setArray: (state, action: PayloadAction<number[]>) => {
            state.array = action.payload;
        },
        toggleSorting: (state) => {
            state.sorting = !state.sorting;
        },
        setMethod: (state, action: PayloadAction<SortMethod>) => {
            state.method = action.payload;
        },
        setRed: (state, action: PayloadAction<number[]>) => {
            state.red = action.payload;
        },
        setBlue: (state, action: PayloadAction<number[]>) => {
            state.blue = action.payload;
        },
        setGreen: (state, action: PayloadAction<number[]>) => {
            state.green = action.payload;
        },
        setSubArrayIndex: (state, action: PayloadAction<number[]>) => {
            state.subarrayIndex = action.payload;
        },
        setStep: (state, action: PayloadAction<number>) => {
            state.step = action.payload;
        },
        setSpeed: (state, action: PayloadAction<number>) => {
            state.speed = action.payload;
        }
    }
});

export const { setArray, toggleSorting, setMethod, setRed, setBlue, setGreen, setSubArrayIndex, setStep, setSpeed } = rootSlice.actions;
export default rootSlice.reducer;