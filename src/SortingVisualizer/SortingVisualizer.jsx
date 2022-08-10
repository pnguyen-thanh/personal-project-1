import React from "react";
import {quickSort} from '../sortingAlgorithm/quickSort';
import { selectionSort } from "../sortingAlgorithm/selectionSort";
import { insertionSort } from "../sortingAlgorithm/insertionSort";
import { bubbleSort } from "../sortingAlgorithm/bubbleSort";
import { heapSort } from "../sortingAlgorithm/heapSort";
import './SortingVisualizer.css';


const PRIMARY_COLOR = '#FFFFFFFF';;
const NUMBERS_OF_ARRAY_BARS = 320;
const ANIMATION_SPEED_MS = 2.5;

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
        };
    }

    resetArray() {
        const array=[];
        for(let i = 0; i < NUMBERS_OF_ARRAY_BARS; i++) {
            array.push(getRandomInt(5, 500));
        }
        this.setState({array});
    }

    insertionSort() {
        const animations = insertionSort(this.state.array);
        this.animationHelper(animations);
    }

    selectionSort() {
        const animations = selectionSort(this.state.array)
        this.animationHelper(animations);
    }

    mergeSort() {

    }

    quickSort() {
        const animations = quickSort(this.state.array);
        this.animationHelper(animations);
    }

    bubbleSort() {
        const animations = bubbleSort(this.state.array);
        this.animationHelper(animations);
    }

    headSort() {
        const animations = heapSort(this.state.array);
        this.animationHelper(animations);
    }

    animationHelper(animations) {
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const [barIndex, newHeight] = animations[i]; 
                const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
                },i * ANIMATION_SPEED_MS); 
        }
    }

    render() {
        const {array} = this.state;
        return (
            <div>
                <button onClick={() => this.resetArray()}>Generate New Array</button>
                <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
                <button onClick={() => this.selectionSort()}>Selection Sort</button>
                <button onClick={() => this.insertionSort()}>Insertion Sort</button>
                <button onClick={() => this.quickSort()}>Quick Sort</button>
                <button onClick={() => this.headSort()}>Heap Sort</button>
                <button onClick={() => this.mergeSort()}>Merge Sort</button>
                <div className="array-container">
                    {array.map((value ,idx) => (
                        <div 
                            className="array-bar" 
                            key={idx}
                            style={{
                                backgroundColor: PRIMARY_COLOR,
                                height: `${value}px`
                            }}
                            >
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.resetArray();
    }
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}