import { useDispatch, useSelector } from 'react-redux';
import { setArray, toggleSorting, setSelected, setStep } from '../rootSlice';
import { RootState } from '../store';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const useHandleSort = () => {
    const dispatch = useDispatch();
    let method: string = useSelector((state: RootState) => state.root.method);
    let array: number[] = useSelector((state: RootState) => state.root.array);

    const BubbleSort = async () => {
        dispatch(toggleSorting());
        let arr = [...array];
        let stepCount = 0;

        let len = arr.length;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len - i - 1; j++) {
                dispatch(setSelected([arr[j], arr[j + 1]]));
                if (arr[j] > arr[j + 1]) {
                    stepCount++;
                    dispatch(setStep(stepCount));

                    await delay(200);
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    dispatch(setArray([...arr]));
                    await delay(200);
                }
            }
        }
        dispatch(setSelected([0, 0]));
        dispatch(toggleSorting());
    };

    const handleSort = () => {
        switch (method) {
            case "bubble":
                BubbleSort();
                break;
            default:
                break;
        }
    }

    return handleSort;
};
