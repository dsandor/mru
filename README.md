[![Build Status](https://travis-ci.org/dsandor/fauxmojs.svg?branch=master)](https://travis-ci.org/dsandor/mru)
[![dependencies Status](https://david-dm.org/dsandor/mru/status.svg)](https://david-dm.org/dsandor/mru)
[![npm version](https://badge.fury.io/js/mru.svg)](https://badge.fury.io/js/mru)
[![Known Vulnerabilities](https://snyk.io/test/npm/fauxmojs/badge.svg)](https://snyk.io/test/npm/fauxmojs)

# mru
Most recently used fixed size overflowing array.  The last n elements pushed to array last, old ones drop out of the array.

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
