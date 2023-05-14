import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createUnsortedArray } from "../utils/utils";
// import { createUnsortedArray } from "./utils/utils";

export type SortMethod = "bubble" | "selection" | "insertion";
export interface RootState {
    array: number[];
    sorting: boolean;
    method: SortMethod;
    selected: number[];
    step: number;
    speed: number;
}

const initialState: RootState = {
    array: createUnsortedArray(25),
    sorting: false,
    method: "bubble",
    selected: [-1, -1],
    step: 0,
    speed: 50
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
        setSelected: (state, action: PayloadAction<number[]>) => {
            state.selected = action.payload;
        },
        setStep: (state, action: PayloadAction<number>) => {
            state.step = action.payload;
        },
        setSpeed: (state, action: PayloadAction<number>) => {
            state.speed = action.payload;
        }
    }
});

export const { setArray, toggleSorting, setMethod, setSelected, setStep, setSpeed } = rootSlice.actions;
export default rootSlice.reducer;