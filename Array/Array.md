# Array

## Create an array

1. Use array constructor `new Array()`

```js
let arr = new Array();
let arr = new Array(Number length);
let arr = new Array(element1,element2,element3,..elementN);
```

be careful when use `new Array()`

```js
let arr = new Array(10); // array of size 10, all element undefined.
let arr = new Array(10, 5); // array of size 2,elements are 10,5
```

2. Declare array directly

it's same way above.

```js
let arr = [];
let arr = [element1,element2,element3,..elementN];
```

3. Array.from()

The `Array.from()` static method creates a new, shallow-copied Array instance from an array-like or iterable object.

```js
Array.from('foo'); //Array ["f", "o", "o"]
Array.from([1, 2, 3], x => x + x)); // Array [2, 4, 6]

// Array from a Set
const set = new Set(['foo', 'bar', 'baz', 'foo']);
Array.from(set); // [ "foo", "bar", "baz" ]

// Array from a Map
const map = new Map([[1, 2], [2, 4], [4, 8]]);
Array.from(map); // [[1, 2], [2, 4], [4, 8]]
```

4. Array.of()

The `Array.of()` method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.

```js
Array.of(1); // [1]
Array.of(1, 2, 3); // [1, 2, 3]
Array.of(undefined); // [undefined]
```

## Array Method

`push()` : The `push()` method adds one or more elements to the end of an array and returns the new length of the array.

`pop()` : The `pop()` method removes the last element from an array and returns that element. This method changes the length of the array.

`unshift()` : The `unshift()` method adds one or more elements to the beginning of an array and returns the new length of the array.

`shift()` : The `shift()` method removes the first element from an array and returns that removed element. This method changes the length of the array.

`map()` : The `map()` method creates a new array populated with the results of calling a provided function on every element in the calling array.

```js
const array1 = [1, 4, 9, 16];
// pass a function to map
const map1 = array1.map(x => x * 2); // Array [2, 8, 18, 32]

// Arrow function
map((element) => { ... } )
map((element, index) => { ... } )
map((element, index, array) => { ... } )
```

`reduce()` : The reduce() method executes a user-supplied “reducer” callback function on each element of the array,return a sigle value.

```js
const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15

// Arrow function
reduce((previousValue, currentValue) => { ... } )
reduce((previousValue, currentValue, currentIndex) => { ... } )
reduce((previousValue, currentValue, currentIndex, array) => { ... } )
reduce((previousValue, currentValue, currentIndex, array) => { ... }, initialValue)
```

## Array practice

### how to remove duplicates from javaScript array?

way 1: Array.prototype.filter()

```js
// var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

// usage example:
var a = ["a", 1, "a", 2, "1"];
var unique = a.filter(onlyUnique);
console.log(unique); // ['a', 1, 2, '1']
```

way 2: Es6 Set

```js
var myArray = ["a", 1, "a", 2, "1"];

let unique = [...new Set(myArray)];

console.log(unique);
```

### How to check if an object is an array?

way 1: Array.isArray

The Array.isArray() method determines whether the passed value is an Array.

```js
console.log(Array.isArray({}));

console.log(Array.isArray([1, 2, 3]));
```

way 2: Object.prototype.toString

```js
function isArray(array) {
  return Object.prototype.toString.call(array) === "[object Array]";
}

console.log(isArray({}));

console.log(isArray([1, 2, 3]));
```
