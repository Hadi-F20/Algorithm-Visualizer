
import { Mergesort, Quicksort } from "./Algorithms/SortingAlgorithms.js"
import * as sortingVis from "./Visualizers/SortingAlgorithmVisualizer.js"

const submitButton = document.querySelector("#submit-button")

document.addEventListener("DOMContentLoaded", () => {
    sortingVis.test()
})

submitButton.addEventListener("click", () => {
    Mergesort.mergesort(sortingVis.unsortedArr)
    console.log(sortingVis.unsortedArr)
})