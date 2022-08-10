export function mergeSort(array) {
    let animations = [];
    let auxillaryArray = array.slice();
    mergeSortHelper(auxillaryArray, 0, auxillaryArray.length - 1, animations);
    return animations;
}
    function mergeSortHelper(auxillaryArray, start, end, animations) {
        if (start === end){
            return
        }
        let midPoint = Math.floor((start + end) / 2);
        mergeSortHelper(auxillaryArray, start, midPoint, animations);
        mergeSortHelper(auxillaryArray, midPoint + 1, end, animations);
        Merge(auxillaryArray, start, end, animations);
    }

    function Merge(auxillaryArray, start, end, animations) {
        console.log()
    }