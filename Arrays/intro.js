const strings = ['a', 'b', 'c', 'd'];
// 4 items * 8 bytes (as I've 64 bit system (1byte = 8bits)) = 32bytes
// So... this `strings` array is using 32 bytes of storage.

// accessing
console.log(`💎 strings[2]: `, strings[2]); // O(1)

// push
strings.push('e'); // Time Complexity: O(1)* (or could be O(n))

// JS is high-level language, so it provides dynamic arrays only (I don't have to allocate and disallocate space for array definition and stuff). So When the strings array was defined, it had 4 characters, so x amount of minimum storage that is required would be allocated to the strings variable. Now when I keep pushing new elements into strings, there will be a point where the memory pre-allocated by language will be out of space. For that, the standard procedure is - creating a new memory location with usually double size of the original array, copying the items of original array and pasting it into the new bigger array, and then finally pushing the new requested item to that array. This process's time complexity is O(n). Although this is just a minor low level detail.

// pop
strings.pop(); // O(1)
strings.pop();

// unshift
strings.unshift('x'); // O(n)

// splice
strings.splice(2, 0, 'alien', 'another alien'); // O(n)

console.log(`💎 strings: `, strings);
