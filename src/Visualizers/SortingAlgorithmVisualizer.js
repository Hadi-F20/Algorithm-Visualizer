
import * as qs from "../Algorithms/SortingAlgorithms.js"

const barContainer = document.querySelector("#algorithm-output-div")
const containerWidth = barContainer.offsetWidth
const containerHeight = barContainer.offsetHeight

export let unsortedArr = []

function createBar(height) {
    const bar = document.createElement("div")
    bar.classList.add("bar")
    bar.style.height = `${height}px`
    bar.style.width = `${containerWidth/90}px`
    return bar
}

export function createBars(arr) {
    arr.forEach(height => {
        const bar = createBar(height)
        barContainer.appendChild(bar)
    })
}

export function test() {
    

    console.log(containerWidth)
    console.log(containerHeight)

    console.log(Math.floor(containerHeight / 10) * 10)

    for (let i = 10; i < Math.floor(containerHeight / 10) * 10; i += containerHeight / 60) {
        unsortedArr.push(Math.floor(i))
    }

    //Randomize array by selecting random index and swapping it with current element
    let n = unsortedArr.length
    for (let i = 0; i < n; i++) {
        let swapIndex = Math.floor(Math.random() * n)
        let temp = unsortedArr[swapIndex]
        unsortedArr[swapIndex] = unsortedArr[i]
        unsortedArr[i] = temp
    }

    unsortedArr.forEach(height => {
        const bar = createBar(height);
        barContainer.appendChild(bar);
    })

    console.log("Test")

}

export function clearDiv() {
    while (barContainer.firstChild) {
        barContainer.removeChild(barContainer.firstChild);
    }
}

export function updateOutput(arr) {
    clearDiv();
    createBars(arr)
}