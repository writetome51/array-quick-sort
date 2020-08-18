import {quickSort} from './index.js';

console.time('check')

// Sort numbers:
let nums = [1,0,3,2,5,4];
quickSort(nums);
console.log(nums); // '[0, 1, 2, 3, 4, 5]'

// Sort objects by number value of property 'age':
let objects = [{age: 16}, {age: 12}, {age: 8}, {age: 11}];
quickSort(objects, (obj) => obj.age);
console.log(objects); // '[{age: 8}, {age: 11}, {age: 12}, {age: 16}]'

// Sort arrays by length:
let arrs = [ [1], [1,2,3], [], [1,2], [3,4,5], [0,1] ];
quickSort(arrs, (arr) => arr.length);
console.log(arrs); // '[ [], [1], [1,2], [0,1], [1,2,3], [3,4,5] ]'

console.timeEnd('check')
