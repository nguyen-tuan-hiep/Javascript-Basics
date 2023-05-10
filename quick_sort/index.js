let arr = [6,4,3,0,9,10,1,20,5,7,8,11];

function printArray(arr) {  
    for(var i = 0; i < arr.length; i++) {
        process.stdout.write(String(arr[i]) + " ");     // print without newlines
    }
    console.log();
    return;
}

function quickSort(arr, left, right) {
    if (left < right) {
        let pivot = partition(arr, left, right);
        quickSort(arr, left, pivot - 1);
        quickSort(arr, pivot + 1, right);
    }
} 

function partition(arr, left, right) {
    let pivot = arr[right];
    let i = left - 1;
    for (let j = left; j < right; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j)
        }
    }
    swap(arr, i + 1, right);
    return i + 1;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

printArray(arr);
quickSort(arr, 0, arr.length - 1);
printArray(arr);