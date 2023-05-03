// dynamic programming meaning nothing more than caching some sub-problem of an program that has already been processed once, and avoid repetitive processing

// memoization is the word used for the term cachine the results

// we can do it simply with declaring a global variable and storing the results that we're processed once, but here, coach has used closure to its best use for caching results without using global scope space!

function addEighty(n) {
  // hypothetically a long processing problem
  console.log('... processing big computation');
  return n + 80;
}

// without caching
console.log(`💎 addEighty(5): `, addEighty(5));
console.log(`💎 addEighty(5): `, addEighty(5));
console.log(`💎 addEighty(5): `, addEighty(5));

console.log(`\n --- using caching --- \n`);
// caching using closure (we could have made it simpler by keeping cache object simply outside the scope, but that would add to our global space which we ideally want to keep clean)

function memoizedAddEighty() {
  let cache = {};
  return function (n) {
    if (n in cache) {
      // ☝🏻 ES6 way of checking if prop. exists within an object, coool
      return cache[n];
    }
    console.log('... processing big computation');
    cache[n] = n + 80;
    return cache[n];
  };
}
const memoized = memoizedAddEighty();

console.log(`💎 memoized(2): `, memoized(2));
console.log(`💎 memoized(2): `, memoized(2));
console.log(`💎 memoized(2): `, memoized(2));
