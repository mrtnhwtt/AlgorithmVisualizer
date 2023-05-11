import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { BubbleSort } from '../algorithm/bubbleSort';
import { SelectionSort } from '../algorithm/selectionSort';

export const useHandleSort = () => {
    const dispatch = useDispatch();
    let method: string = useSelector((state: RootState) => state.root.method);
    let array: number[] = useSelector((state: RootState) => state.root.array);
    const handleSort = () => {
        switch (method) {
            case "bubble":
                BubbleSort(array, dispatch);
                break;
            case "selection":
                SelectionSort(array, dispatch)
                break;
            default:
                break;
        }
    }

    return handleSort;
};