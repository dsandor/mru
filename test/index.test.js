'use strict';

const expect   = require('chai').expect,
      MruArray = require('../index');

describe('MruArray', () => {
  it('should have a default limit of 10', () => {
    let mruArray = new MruArray();

    expect(mruArray.limit).to.equal(10);
  });

  it('should keep only 10 elements in list', () => {
    let mruArray = new MruArray();

    for(let i = 0; i < 20; i++) {
      mruArray.push(i);
    }

    expect(mruArray.length).to.equal(10);
  });

  it('should keep the last 10 elements in list', () => {
    let mruArray = new MruArray();

    for(let i = 0; i < 20; i++) {
      mruArray.push(i);
    }

    expect(mruArray.length).to.equal(10);
    expect(mruArray[0]).to.equal(10);
    expect(mruArray[9]).to.equal(19);
  });

  it('should allow a user specified limit', () => {
    let mruArray = new MruArray(99);

    for(let i = 0; i < 99; i++) {
      mruArray.push(i);
    }

    expect(mruArray.limit).to.equal(99);
    expect(mruArray.length).to.equal(99);
  });
});
