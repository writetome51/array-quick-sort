//  Extremely fast at numeric ordering (20 million numbers in 5.2 seconds, on 2.3GHz intel core i5).
//  Not as fast at ordering alphabetically.  Array.prototype.sort() is much faster at that.
//  Sorts elements by using `<` comparison operator.
//  `getValue(arr[n])` allows you to choose what exact value in `arr[n]` to use in the comparisons.
//  By default, it simply returns the passed array element.
//  Example:  sort an array of objects by the value of property 'age' in each: 
//  
//  quickSort(objects, (obj) => obj.age);
export function quickSort(arr, getValue = (element) => element) {
    __quickSort(arr, 0, arr.length - 1);
    function __quickSort(arr, leftPos, rightPos) {
        let initialLeftPos = leftPos, initialRightPos = rightPos, pivot = rightPos, direction = true;
        while ((leftPos - rightPos) < 0) {
            if (direction) {
                if (getValue(arr[pivot]) < getValue(arr[leftPos])) {
                    tradePlaces(pivot, leftPos);
                    pivot = leftPos;
                    --rightPos;
                    direction = !(direction);
                }
                else
                    ++leftPos;
            }
            else {
                if (getValue(arr[pivot]) <= getValue(arr[rightPos]))
                    --rightPos;
                else {
                    tradePlaces(pivot, rightPos);
                    pivot = rightPos;
                    ++leftPos;
                    direction = !(direction);
                }
            }
        }
        if (pivot - 1 > initialLeftPos)
            __quickSort(arr, initialLeftPos, pivot - 1);
        if (pivot + 1 < initialRightPos)
            __quickSort(arr, pivot + 1, initialRightPos);
        function tradePlaces(el1, el2) {
            let element1 = arr[el1];
            arr[el1] = arr[el2];
            arr[el2] = element1;
        }
    }
}
