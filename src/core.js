export function encode(values) {
  if (values.length === 0) return [];
  const encoded = [values[0]];
  for (let i = 1; i < values.length; i += 1) {
    encoded.push(values[i] - values[i - 1]);
  }
  return encoded;
}

export function decode(deltas) {
  if (deltas.length === 0) return [];
  const values = [deltas[0]];
  for (let i = 1; i < deltas.length; i += 1) {
    values.push(values[i - 1] + deltas[i]);
  }
  return values;
}
