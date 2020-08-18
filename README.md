# quickSort(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array: any[],<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;getValue? = (element) => element<br>): void

Re-orders `array` using a quick sort algorithm.  Gives best performance if used for  
ordering by numeric values.  The optional callback `getValue(element)` allows you  
to choose what exact value in `element` to use in the comparisons. It must return  
the value to use. By default, it simply returns the passed `element`.  


## Speed

20 million numbers sorted in 5.2 secs.  
(Tested on NodeJS engine, Macbook Pro (2017), 2.3GHz Dual-Core Intel Core i5)


## Examples
```js
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
```

## Installation

```bash
npm i  @writetome51/array-quick-sort
```

## Loading
```js
import {quickSort} from '@writetome51/array-quick-sort';
```
