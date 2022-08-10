export function quickSort(array) {
    let animations = [];
    let auxillaryArray = array.slice();
    quickSortHelper(auxillaryArray, 0, array.length - 1, animations)
    // check the algorithm work perfectly or not.
    const isSorted = array.slice().sort((a, b) => a - b);
    return animations;
    }

    function quickSortHelper(auxillaryArray, start, end, animations) {
        if (start >= end) {
            return
        }
        let index = partition(auxillaryArray, start, end, animations);
        quickSortHelper(auxillaryArray, start, index - 1, animations);
        quickSortHelper(auxillaryArray, index + 1, end, animations);
    }

    function partition(auxillaryArray, start, end, animations) {
        let pivotIndex = start;
        let pivotValue = auxillaryArray[end];
        for (let i = start; i < end; i ++) {
            // animations.push(["comparision1", i, end]);
            // animations.push(["comparision2", i, end]);
            if (auxillaryArray[i] < pivotValue) {
                // animations.push(["comparision1", i, pivotIndex]);
                animations.push([i, auxillaryArray[pivotIndex]]); // [9, 3, 4, 6, 5] => [1, 9]; 
                animations.push([pivotIndex, auxillaryArray[i]]); // [0, 3]
                // animations.push(["comparision2", i, pivotIndex]);
                swap(auxillaryArray, i ,pivotIndex);
                pivotIndex ++;
            }
        }
        // animations.push(["comparision1", pivotIndex, end]);
        animations.push([end, auxillaryArray[pivotIndex]]); // [3, 4, 9, 6, 5] => [4, index = 2, val = 9]
        animations.push([pivotIndex, auxillaryArray[end]]); // [2, 5]
        // animations.push(["comparision2", pivotIndex, end]); 
        swap(auxillaryArray, pivotIndex, end);
        return pivotIndex;
    }

    function swap(array, a, b) {
        let temp = array[a];
        array[a] = array[b];
        array[b] = temp;
    }
