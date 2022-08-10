export function selectionSort(array) {
    let animations = [];
    let auxillaryArray = array.slice();
    selectionSortHelper(auxillaryArray, animations);
    console.log(animations)
    return animations;
}

    function selectionSortHelper(auxillaryArray, animations) {
        for (let i = 0; i < auxillaryArray.length - 1; i++) {
            let mini_Index_Value = i;
            let j = i;
            for (j = j + 1; j < auxillaryArray.length; j++) {
                if (auxillaryArray[j] < auxillaryArray[mini_Index_Value]) {
                    mini_Index_Value = j
                }
            }
            if (mini_Index_Value !== i) {
                animations.push([i, auxillaryArray[mini_Index_Value]]); // [0, 1]
                animations.push([mini_Index_Value, auxillaryArray[i]]); // [6, 2]
                swap(auxillaryArray, i, mini_Index_Value);
            };
        };
    };

    function swap(array, a, b) {
        let temp = array[a];
        array[a] = array[b];
        array[b] = temp;
    }