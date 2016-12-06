# mru
Most recently used fixes size overflowing array.

## install

```
npm i mru --save
```

## usage

```
const MruArray = require('mru');

// Create a default MruArray with a limit of 10 elements.
let mruArrayLimitedToTen = new MruArray();

// Create an MruArray with a limit of 5 elements.
let mruArrayLimitedToFive = new MruArray(5);

// Add 20 items to a 10 limited MruArray, 0 - 19.

let mruArray = new MruArray();
for(let i = 0; i < 20; i++) {
  mruArray.push(i);
}

// mruArray[0] will equal 10
// mruArray[9] will equal 19
```
