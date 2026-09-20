# Delta Encoding

Encodes and decodes a sequence of integers as the differences between consecutive values for compact storage.

## Usage

```js
import { encode, decode } from './src/index.js';

const original = [100, 101, 103, 102];
const encoded = encode(original);
// encoded === [100, 1, 2, -1]

const restored = decode(encoded);
// restored === [100, 101, 103, 102]
```

## Why This Exists

When storing long sequences of integers that change slowly, such as timestamps or sensor readings, the raw values repeat many high-order bits. Delta encoding stores the first value, then only the difference from one value to the next. If the differences are small, they compress much better with a later entropy coder. The trade-off is that decoding becomes sequential: to recover a value near the end you must first decode all previous deltas.

## Edge Cases

The empty sequence encodes to an empty array and decodes back to an empty array. A single value is stored as the value itself with no deltas.
