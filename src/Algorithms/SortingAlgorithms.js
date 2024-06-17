
import { clearDiv, createBars, updateOutput } from "../Visualizers/SortingAlgorithmVisualizer.js";

//Quicksort class, sorts in place
export class Quicksort {

    static quicksort(arr) {
        this.sort(arr, 0, arr.length - 1)
    }

    static async sort(arr, firstIndex, lastIndex) {
        if (firstIndex < lastIndex) {
            //Choose partition index to be median of first, middle and last item
            let mid = Math.floor((firstIndex + lastIndex) / 2)
            let partitionIndex;
            if ((arr[firstIndex] > arr[mid] && arr[firstIndex] < arr[lastIndex]) || (arr[firstIndex] < arr[mid] && arr[firstIndex] > arr[lastIndex])) {
                //First item is median of the 3
                partitionIndex = firstIndex
            } else if ((arr[lastIndex] > arr[mid] && arr[lastIndex] < arr[firstIndex]) || (arr[lastIndex] < arr[mid] && arr[lastIndex] > arr[firstIndex])) {
                //Last item is median of the 3
                partitionIndex = lastIndex
            } else {
                //Middle item is the median of the 3
                partitionIndex = mid
            }
            
            //Where partitionIndex ended after partitioning
            let partitionEndIndex = await this.partition(arr, partitionIndex, firstIndex, lastIndex)
            //Recurse on left and right side of partition
            this.sort(arr, firstIndex, partitionEndIndex - 1)
            this.sort(arr, partitionEndIndex + 1, lastIndex)
            updateOutput(arr)
        }
    }

    static async partition(arr, partitionIndex, lo, hi) {
        
        //Swap partition element with last element
        let temp = arr[partitionIndex]
        arr[partitionIndex] = arr[hi]
        arr[hi] = temp
        
        //Loop until we reach partition index
        for (let i = lo; i < hi; i++) {
            if (arr[i] < arr[hi]) {
                temp = arr[i]
                arr[i] = arr[lo]
                arr[lo++] = temp
                await new Promise(resolve => setTimeout(resolve, 30))
                updateOutput(arr)
            }
        }

        //Swap partition element with element after last swap
        temp = arr[hi]
        arr[hi] = arr[lo]
        arr[lo] = temp
        updateOutput(arr)
        return lo
        
    }
}

export class Mergesort {

    static mergesort(arr) {
        let n = arr.length
        this.sort(arr, 0, n - 1)
    }

    static async sort(arr, firstIndex, lastIndex) {
        if (firstIndex < lastIndex) {

            //Get midpoint and split array at that point
            let mid = Math.floor((firstIndex + lastIndex) / 2)
            await this.sort(arr, firstIndex, mid)
            await this.sort(arr, mid + 1, lastIndex)
            
            //Merge both halfs
            await this.merge(arr, mid, firstIndex, lastIndex)
            
            updateOutput(arr)
        }
    }

    static async merge(arr, m, firstIndex, lastIndex) {

        let i = firstIndex
        let j = m + 1
        let tempArr = []
        
        //Hold items in order in a temporary array
        for (let k = firstIndex; k <= lastIndex; k++) {
            if (j > lastIndex) {
                tempArr[k] = arr[i++]
            } else if (i > m) {
                tempArr[k] = arr[j++]
            } else if (arr[i] < arr[j]) {
                tempArr[k] = arr[i++]
            } else {
                tempArr[k] = arr[j++]
            }
        }
        
        //Place tempArr in original array
        for (let k = firstIndex; k <= lastIndex; k++) {
            arr[k] = tempArr[k]
            await new Promise(resolve => setTimeout(resolve, 10))
            updateOutput(arr)
        }
        
    }

}


class Tests {

    static sortTestOnRandomArray(sortingAlgo) {

        //Get random array length
        let n = Math.floor(Math.random() * 100)
        let testArr1 = []
        let testArr2 = []

        //Get random number, push to both test arrays
        for (let i = 0; i < n; i++) {
            let num = Math.floor(Math.random() * 1000)
            testArr1.push(num)
            testArr2.push(num)
        }
        
        //Run JS built in sort and quicksort
        testArr1.sort((a, b) => a - b)
        sortingAlgo(testArr2)

        if (testArr1.length !== testArr2.length) {
            console.log("Different lengths")
            return
        }

        //Check if each element is same in both arrays
        for (let i = 0; i < n; i++) {
            if (testArr1[i] !== testArr2[i]) {
                console.log("Different Elements")
                return false
            }
        }
        return true
    }

}

//If module ran directly run tests
/*
if (!module.parent) {
    Tests.sortTestOnRandomArray(Quicksort.quicksort)
    Tests.sortTestOnRandomArray(Mergesort.mergesort)
}
*/