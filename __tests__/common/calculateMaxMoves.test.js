import {assert} from 'chai';
import calculateMaxMoves from '../../src/common/calculateMaxMoves';

it('Should properly calculate maximum moves in a game', () => {
  assert.equal(calculateMaxMoves(6, 3), 5);
  assert.equal(calculateMaxMoves(7, 3), 6);
  assert.equal(calculateMaxMoves(8, 4), 10);
  assert.equal(calculateMaxMoves(9, 5), 14);
  assert.equal(calculateMaxMoves(10, 6), 19);
  assert.equal(calculateMaxMoves(20, 8), 51);
});
