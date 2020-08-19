import {quickSort} from './index.js';
import {arraysMatch} from '@writetome51/arrays-match';
import {getArrayFromProperty} from '@writetome51/get-array-from-property';
import {getShuffled} from '@writetome51/array-get-shuffled';
import {getAdjacentAt} from '@writetome51/array-get-adjacent-at';

let testArr = [];
getCopy()
// Sort numbers:
testArr = [1, 0, 3, 2, 1, 4];
quickSort(testArr);
if (arraysMatch(testArr, [0, 1, 1, 2, 3, 4])) console.log('test 1 passed');
else console.log('test 1 FAILED');


// Sort objects by value of property 'age':
testArr = [{age: 16}, {age: 12}, {age: 8}, {age: 11}];
quickSort(testArr, (obj) => obj.age);
testArr = getArrayFromProperty('age', testArr);
if (arraysMatch(testArr, [8, 11, 12, 16])) console.log('test 2 passed');
else console.log('test 2 FAILED');

// Sort arrays by length:

testArr = [[1], [1, 2, 3], [], [1, 2], [3, 4, 5], [0, 1]];
quickSort(testArr, (arr) => arr.length);
if (arraysMatch(testArr, [[], [1], [1, 2], [0, 1], [1, 2, 3], [3, 4, 5]])) console.log('test 3 passed');
else console.log('test 3 FAILED');



// Try string instead of array. Should trigger error because strings are immutable:
let errTriggered = false;
try {
	let str = 'zxvbhqonxgkluipoiancbw';
	quickSort(str);
} catch (e) {
	errTriggered = true;
}
if (errTriggered) console.log('test 5 passed');
else console.log('test 5 FAILED');


// Sort strings so any string with length comes first:
testArr = ['aaaaa', '', 'aa', 'aaa', '', 'a', 'aaaa', 'aa', ''];
quickSort(testArr, (str) => str.length ? 0 : 1);
if (arraysMatch(testArr, ['aa', 'aaa', 'aaaa', 'a', 'aaaaa', 'aa', '', '', '']))
	console.log('test 6 passed');
else console.log('test 6 FAILED');



// test 6: speed test.
let numbers = [];
let i = 20000000; // 20M
let max = i - 1;
while (--i >= 0) numbers.push(i);
numbers = getShuffled(numbers);
let length = numbers.length;
console.log('beginning speed check:')


console.time('speed check');
quickSort(numbers);
console.timeEnd('speed check'); // avg 5.17 seconds (to sort 20 million numbers).
if (numbers.length === length && numbers[0] === 0 && numbers[numbers.length - 1] === max)
	console.log('test 6 passed');
else console.log('test 6 FAILED');



/**********************************************************

// Can it also work for sorting in alphabetical order?

let chars = [
	'z',
	'c',
	'k',
	'1',
	'v',
	'm',
	'a',
	'2',
	'o',
	'r',
	'n',
	'x',
	'zzz',
	'e',
	'q',
	'w',
	'e',
	'z',
	'c',
	'k',
	'1',
	'v',
	'm'
];
i = -1;
while (++i < 10) chars = chars.concat(chars);
let charsCopy = getCopy(chars);
console.time('quickSort');
quickSort(charsCopy);
console.timeEnd('quickSort');
// avg 0.108ms  (small array of 17 chars)
// avg 0.177ms  (small array of 119 chars)
// avg 222.62ms  (large array of 23,552 chars)

console.time('Array.sort');
chars.sort((a, b) => a - b);
console.timeEnd('Array.sort');
// avg. 0.017ms (small array of 17 chars)
// Conclusion:  Array.sort() is faster than quickSort() for small array (17 chars).
// avg 0.035ms (small array of 119 chars)
// Conclusion:  Array.sort() is faster than quickSort() for small array (119 chars).
// avg 1.78ms (large array of 23,552 chars)
// Conclusion:  Array.sort() is faster for alphabetical sorting, no matter the array size.

 ***********************************/


function getCopy(arr){
	return [].concat(arr);
}
