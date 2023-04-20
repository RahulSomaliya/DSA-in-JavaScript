let user = {
  age: 54,
  name: 'Kylie',
  magic: true,
  scream() {
    console.log('ahhhhhh!');
  },
};

user.age; // O(1)
user.spell = 'abra kadabra'; // O(1)
user.scream(); // O(1)

// Maps are also hash tables in javascript, with the difference being;
// 1. Insertion order is maintained (Object keys are unordered)
// 2. Any datatype is allowed for keys too (Objects only allow strings as keys (numbers are stringified))

const a = new Map();
