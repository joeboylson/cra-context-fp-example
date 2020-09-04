import { curry } from 'lodash';

const tap = curry((fn, value) => {
  fn(value);
  return value;
});

const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

export { pipe, tap }
