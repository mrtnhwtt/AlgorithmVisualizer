export const createUnsortedArray = (length: number) => {
    for (var array = [], i = 0; i < length; ++i) array[i] = i;
    var tmp, current, top = array.length;
    if (top)
        while (--top) {
            current = Math.floor(Math.random() * (top + 1));
            tmp = array[current];
            array[current] = array[top];
            array[top] = tmp;
        }
    array = array.map((val) => {
        return ++val;
    });
    return array;
};

