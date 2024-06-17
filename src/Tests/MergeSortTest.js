
class Mergesort {

    static mergesort(arr) {
        let n = arr.length
        this.sort(arr, 0, n - 1)
    }

    static sort(arr, firstIndex, lastIndex) {
        if (firstIndex < lastIndex) {

            //Get midpoint and split array at that point
            let mid = Math.floor((firstIndex + lastIndex) / 2)
            this.sort(arr, firstIndex, mid)
            this.sort(arr, mid + 1, lastIndex)
            
            //Merge both halfs
            this.merge(arr, mid, firstIndex, lastIndex)
        }
    }

    static merge(arr, m, firstIndex, lastIndex) {

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
        }
    }

}

class Tests {

    static sortTestOnRandomArray() {

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
        Mergesort.mergesort(testArr2)

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

Tests.sortTestOnRandomArray()