function binarySearch(sortedArray, key, start, end) {
    if (start > end) {
        return -1;
    }

    let mid = Math.floor((start + end) / 2);

    if (sortedArray[mid] === key) {
        return mid;
    }

    if (sortedArray[mid] > key) {
        return binarySearch(sortedArray,key,start,mid - 1);
    }else{
        return binarySearch(sortedArray,key,mid + 1, end);
    }
}