// Implementing hash table from scratch

class HashTable {
  #data;

  constructor(size) {
    this.#data = new Array(size);
    // the data will store object's key-value pair as [['grapes', 10000], ['a', 2000]...]
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.#data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);

    if (!this.#data[address]) {
      this.#data[address] = [];
    }

    this.#data[address].push([key, value]);
    return this.#data;
  }

  get(key) {
    const currentBucket = this.#data[this._hash(key)];
    if (currentBucket) {
      return currentBucket.find(pair => pair[0] === key)?.[1];
    }
    return undefined;
  }

  seeFullObject() {
    console.log(`💎 this.#data: `, this.#data);
  }

  #getAllPairs() {
    return this.#data.flatMap(pair => {
      if (pair) {
        return pair;
      }
    });
  }

  keys() {
    return this.#getAllPairs().map(pair => pair[0]);
  }

  values() {
    return this.#getAllPairs().map(pair => pair[1]);
  }
}

const fruits = new HashTable(2);
fruits.set('grapes', 10000);
fruits.set('apples', 500);

console.log(fruits.get('grapes'));
console.log(`💎 fruits.get('apples'): `, fruits.get('apples'));

fruits.seeFullObject();

console.log(`💎 fruits.keys(): `, fruits.keys());
console.log(`💎 fruits.values(): `, fruits.values());
