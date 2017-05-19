import {assert} from 'chai';
import getAdjacentIndexes from '../../src/common/getAdjacentIndexes';

it('Should properly find adjacent indexes for every cell in an array 3x3[0]', () => {
  const {top, right, bottom, left} = getAdjacentIndexes(9, 0);

  assert.equal(top, -1);
  assert.equal(right, 1);
  assert.equal(bottom, 3);
  assert.equal(left, -1);
});

it('Should properly find adjacent indexes for every cell in an array 3x3[1]', () => {
  const {top, right, bottom, left} = getAdjacentIndexes(9, 1);

  assert.equal(top, -1);
  assert.equal(right, 2);
  assert.equal(bottom, 4);
  assert.equal(left, 0);
});

it('Should properly find adjacent indexes for every cell in an array 3x3[2]', () => {
  const {top, right, bottom, left} = getAdjacentIndexes(9, 2);

  assert.equal(top, -1);
  assert.equal(right, -1);
  assert.equal(bottom, 5);
  assert.equal(left, 1);
});

it('Should properly find adjacent indexes for every cell in an array 3x3[3]', () => {
  const {top, right, bottom, left} = getAdjacentIndexes(9, 3);

  assert.equal(top, 0);
  assert.equal(right, 4);
  assert.equal(bottom, 6);
  assert.equal(left, -1);
});

it('Should properly find adjacent indexes for every cell in an array 3x3[4]', () => {
  const {top, right, bottom, left} = getAdjacentIndexes(9, 4);

  assert.equal(top, 1);
  assert.equal(right, 5);
  assert.equal(bottom, 7);
  assert.equal(left, 3);
});

it('Should properly find adjacent indexes for every cell in an array 3x3[5]', () => {
  const {top, right, bottom, left} = getAdjacentIndexes(9, 5);

  assert.equal(top, 2);
  assert.equal(right, -1);
  assert.equal(bottom, 8);
  assert.equal(left, 4);
});

it('Should properly find adjacent indexes for every cell in an array 3x3[6]', () => {
  const {top, right, bottom, left} = getAdjacentIndexes(9, 6);

  assert.equal(top, 3);
  assert.equal(right, 7);
  assert.equal(bottom, -1);
  assert.equal(left, -1);
});

it('Should properly find adjacent indexes for every cell in an array 3x3[7]', () => {
  const {top, right, bottom, left} = getAdjacentIndexes(9, 7);

  assert.equal(top, 4);
  assert.equal(right, 8);
  assert.equal(bottom, -1);
  assert.equal(left, 6);
});

it('Should properly find adjacent indexes for every cell in an array 3x3[8]', () => {
  const {top, right, bottom, left} = getAdjacentIndexes(9, 8);

  assert.equal(top, 5);
  assert.equal(right, -1);
  assert.equal(bottom, -1);
  assert.equal(left, 7);
});
