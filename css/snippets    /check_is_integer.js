var source = "http://www.2ality.com/2014/05/is-integer.html";

function isInteger(x) {
  return (typeof x === 'number') && (x % 1 === 0);
}