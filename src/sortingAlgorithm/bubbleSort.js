export function bubbleSort(array) {
    let animations = [];
    bubbleSortHelper(array, animations);
    return animations;
}

    function bubbleSortHelper(array, animations) {
        let pointerA = 0;
        let pointerB = 1;
        let arrLen = array.length;
        let isSwap = true;

        while (isSwap) {
            if (pointerA < arrLen - 1 && pointerB < arrLen) {
                if (array[pointerA] > array[pointerB]) {
                    animations.push([pointerA, array[pointerB]]);
                    animations.push([pointerB, array[pointerA]]);
                    swap(array, pointerA, pointerB);
                }
                pointerA ++;
                pointerB ++;
            }
            else {
                arrLen --;
                pointerA = 0;
                pointerB = 1;
            }

            if(arrLen === 1) {
                isSwap = false;
            }
        }
        return array;
    }

    function swap(array, a, b) {
        let temp = array[a];
        array[a] = array[b];
        array[b] = temp;
    }