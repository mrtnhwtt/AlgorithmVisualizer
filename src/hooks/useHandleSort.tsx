import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { BubbleSort } from '../algorithm/bubbleSort';
import { SelectionSort } from '../algorithm/selectionSort';
import { InsertionSort } from '../algorithm/insertionSort';
import { QuickSort } from '../algorithm/quickSort';
export const useHandleSort = () => {
    const dispatch = useDispatch();
    let method: string = useSelector((state: RootState) => state.root.method);
    let array: number[] = useSelector((state: RootState) => state.root.array);
    let speed: number = useSelector((state: RootState) => state.root.speed);
    const handleSort = () => {
        switch (method) {
            case "bubble":
                BubbleSort(array, dispatch, speed);
                break;
            case "selection":
                SelectionSort(array, dispatch, speed)
                break;
            case "insertion":
                InsertionSort(array, dispatch, speed)
                break;
            case "quick":
                QuickSort(array, dispatch, speed)
                break;
            default:
                break;
        }
    }

    return handleSort;
};