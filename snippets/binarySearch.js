function binarySearch(target, arr, start = 0, end = arr.length - 1) {
    const midIndex = ~~(start + (end - start) / 2)
    const midNum = arr[midIndex]
    if (start > end || start < 0) {
        return -1
    }
    if (midNum === target) {
        console.log('found!')
         return midIndex
    } else if (midNum > target) {
        return binarySearch(target, arr, 0, midIndex - 1)
    } else {
        return binarySearch(target, arr, midIndex + 1, end)
    }

}
function binarySearch2(target,arr,start,end) {
    var start   = start || 0;
    var end     = end || arr.length-1;

    var mid = parseInt(start+(end-start)/2);
    if(target==arr[mid]){
        return mid;
    }else if(target>arr[mid]){
        return binarySearch2(target,arr,mid+1,end);
    }else{
        return binarySearch2(target,arr,start,mid-1);
    }
    return -1;
}
function binarySearch3(target, arr) {
    let low = 0, high = arr.length - 1, middle
    while (low <= high) {
        middle = ~~((high + low) / 2)
        if (target < arr[middle]) {
            high = middle - 1
        } else if (target > arr[middle]) {
            low = middle + 1
        } else {
            return middle
        }
    }
    return -1
}