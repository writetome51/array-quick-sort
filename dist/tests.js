import {getShuffled} from '@writetome51/array-get-shuffled';

import {getAdjacentAt} from '@writetome51/array-get-adjacent-at';
import {getInNumericOrder} from '@writetome51/get-in-numeric-order';
import {quickSort} from './index.js';

let numbers = [1,2,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1];

console.time('speed check');
quickSort(numbers);
console.timeEnd('speed check'); //
console.log(numbers);

// test 6: speed test.
numbers = [];
let i = -1; // 20M
let max = i - 1;
while (++i < 1000000) numbers.push(i);
//console.log(getAdjacentAt(5000,20,numbers));
let length = numbers.length;
console.log('beginning speed check:')


console.time('speed check');
quickSort(numbers);
console.timeEnd('speed check'); // avg 5.17 seconds (to sort 20 million numbers).
if (numbers.length === length && numbers[0] === 0 && numbers[numbers.length - 1] === max)
	console.log('test 6 passed');
else console.log('test 6 FAILED');
console.log(numbers.length)
