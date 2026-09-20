import test from 'node:test';
import assert from 'node:assert/strict';
import { encode, decode } from '../src/index.js';

test('encode empty', () => {
  assert.deepEqual(encode([]), []);
});

test('decode empty', () => {
  assert.deepEqual(decode([]), []);
});

test('encode single value', () => {
  assert.deepEqual(encode([42]), [42]);
});

test('decode single value', () => {
  assert.deepEqual(decode([42]), [42]);
});

test('encode ascending values', () => {
  assert.deepEqual(encode([1, 3, 6, 10]), [1, 2, 3, 4]);
});

test('decode ascending deltas', () => {
  assert.deepEqual(decode([1, 2, 3, 4]), [1, 3, 6, 10]);
});

test('round-trip mixed signs', () => {
  const input = [10, 8, 9, 0, -3];
  assert.deepEqual(decode(encode(input)), input);
});

test('encode equal consecutive values', () => {
  assert.deepEqual(encode([5, 5, 5]), [5, 0, 0]);
});

test('decode equal consecutive deltas', () => {
  assert.deepEqual(decode([5, 0, 0]), [5, 5, 5]);
});

test('round-trip large jump', () => {
  const input = [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];
  assert.deepEqual(decode(encode(input)), input);
});
