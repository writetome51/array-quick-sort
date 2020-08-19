/******************************************************
//  Extremely fast at numeric ordering (20 million numbers in 5.2 seconds, on 2.3GHz Dual-Core Intel
//  Core i5). Not as fast at ordering alphabetically (Array.prototype.sort() is much faster).
//  Optional callback `getValue(element)` allows you to choose what exact value in `element` to use
//  in the comparisons. It must return the value to use. By default, it simply returns the passed
//  `element`.
//  Example:  sort objects by the value of 'age' in each:

    quickSort(objects, (obj) => obj.age);

 [1,1,1]
 ***************************************************/
export function quickSort(arr, getValue = (element) => element) {
    __quickSort(arr, 0, arr.length - 1);
    function __quickSort(arr, leftPos, rightPos) {
        let initialLeftPos = leftPos, initialRightPos = rightPos, pivot = rightPos, direction = true;
        while (true) {
            if (pivot - 1 > initialLeftPos) {
                leftPos = initialLeftPos;
                rightPos = pivot - 1;
            }
            else if (pivot + 1 < initialRightPos) {
                leftPos = pivot + 1;
                rightPos = initialRightPos;
            }
            else
                return;
            pivot = rightPos;
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
        }
        function tradePlaces(el1, el2) {
            let element1 = arr[el1];
            arr[el1] = arr[el2];
            arr[el2] = element1;
        }
    }
}
