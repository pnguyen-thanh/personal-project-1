export function heapSort(array) {
    let animations = [];
    let auxillaryArray = array.slice();
    buildMaxHeap(auxillaryArray, animations);
    for (let endIdx = auxillaryArray.length - 1; endIdx >= 1; endIdx--) {
        animations.push([0, auxillaryArray[endIdx]]);
        animations.push([endIdx, auxillaryArray[0]]);
        swap(auxillaryArray, 0, endIdx);
        siftDown(auxillaryArray, 0, endIdx - 1, animations);
    }
    return animations;
}
    function buildMaxHeap(array, animations) {
        let parentIdx = Math.floor((array.length - 2) / 2);
        for (let idx = parentIdx; idx >= 0; idx--) {
            siftDown(array, idx, array.length - 1, animations)
        }
    }
  
    function siftDown(array, currentIdx, endIdx, animations) {
        let childOne = currentIdx * 2 + 1
        while (childOne <= endIdx) {
            let childTwo = currentIdx * 2 + 2
            if (childTwo > endIdx) {
                childTwo = -1
            }
            let indexToChange;
            if (childTwo !== -1 && array[childOne] < array[childTwo]) {
                indexToChange = childTwo;
            } else {
                indexToChange = childOne;
            }
        
            if (array[currentIdx] < array[indexToChange]){
                animations.push([currentIdx, array[indexToChange]]);
                animations.push([indexToChange, array[currentIdx]]);
                swap(array, currentIdx, indexToChange)
                currentIdx = indexToChange
                childOne = currentIdx * 2 + 1
            } else {
                return
            }
        }
    }

    function swap(array, a, b) {
        let temp = array[a];
        array[a] = array[b];
        array[b] = temp;
    }