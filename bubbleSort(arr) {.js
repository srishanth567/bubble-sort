function bubbleSort(arr) {
    const n = arr.length;

    // Bubble sort algorithm
    for (let i = 0; i < n - 1; i++) {
        let swapped = false; // Flag to check if a swap occurred
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true; // Set the flag
            }
        }
        // If no swaps occurred, the array is sorted
        if (!swapped) break;
    }

    return arr;
}

// Example usage
const numbers = [5, 3, 8, 1, 2];
const sortedNumbers = bubbleSort(numbers);
console.log("Sorted numbers:", sortedNumbers);
