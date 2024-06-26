import hashFunction from "./hashFunction.mjs";
export default class Hashmap {
  constructor(size) {
    this.buckets = [];
    this.bucketSize = size;
    this.loadFactor = Math.ceil(this.buckets.length / size);
  }

  accessBucket(index) {
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access an index out of bound");
    }
    return index;
  }

  hash(key) {
    let keyToHash = key;
    if ((key = !typeof String)) {
      keyToHash = key.toString();
    }
    if (key == typeof null) {
      keyToHash = "null";
    }
    const hash = hashFunction(keyToHash);
    return hash % 16;
  }

  set(key, value) {
    const position = this.accessBucket(key);
    if (position) {
      this.buckets[position] = value;
    }
  }

  get(key) {}
}
