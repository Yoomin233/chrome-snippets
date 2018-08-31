// https://www.codewars.com/kata/best-travel/train/javascript
var fibonacci = (function() {
    const cache = [0, 1]
    return function recursion (n) {
      if (cache[n] === undefined) cache[n] = recursion(n - 1) + recursion(n - 2)
      return cache[n]
    }
})()