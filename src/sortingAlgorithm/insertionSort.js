export function insertionSort(array) {
    let animations = [];
    let auxillaryArray = array.slice();
    insertionSortHelper(auxillaryArray, animations);
    return animations;
}

    function insertionSortHelper(auxillaryArray, animations) {
        for(let i = 1; i < auxillaryArray.length; i++) {
            let j = i;
            while (j > 0 && auxillaryArray[j - 1] > auxillaryArray[j]) {
                animations.push([j, auxillaryArray[j - 1]]);
                animations.push([j - 1, auxillaryArray[j]]);
                swap(auxillaryArray, j, j - 1);
                j -= 1;
            }
        }
    }

    function swap(array, a, b) {
        let temp = array[a];
        array[a] = array[b];
        array[b] = temp;
    }