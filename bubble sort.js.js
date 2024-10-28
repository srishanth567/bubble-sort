function bubbleSort() {
    let array = document.getElementById("arrayInput").value.split(',').map(Number);
    let n = array.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }

    document.getElementById('sortedLabel').innerText = 'Sorted Array: ' + array.join(', ');
}

function resetInput() {
    document.getElementById("arrayInput").value = '';
    document.getElementById("sortedLabel").innerText = '';
}