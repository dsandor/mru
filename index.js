'use strict';

class MruArray extends Array {
  constructor(limit) {
    super();
    this.limit = limit || 10;
  }

  push(element) {
    if (this.length >= this.limit) {
      super.shift();
    }

    super.push(element);
  }

}

exports = module.exports = MruArray;
