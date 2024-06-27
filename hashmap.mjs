import hashFunction from "./hashFunction.mjs";
import { LinkedList } from "./linkedLists/linkedList.mjs";
export default class Hashmap {
  constructor(size = 16) {
    this.buckets = new Array(size)
      .fill(null)
      .map((element) => new LinkedList());
    this.bucketSize = size;
    this.loadFactor = this.buckets.length / size;
  }

  //Just checking the types for the hash, returns the hash
  hash(key) {
    let keyToHash = key;
    if ((key = !typeof String)) {
      keyToHash = key.toString();
    }
    if (key == typeof null) {
      keyToHash = "null";
    }
    const hash = hashFunction(keyToHash);

    return hash;
  }

  //Returns the index of the data element at current load factor (bucketSize)
  getPosition(key) {
    return this.hash(key) % this.bucketSize;
  }

  set(key, value) {
    const data = {
      key,
      value,
    };

    const position = this.getPosition(key);
    const bucket = this.buckets[position];
    bucket.append(data);
  }

  get(key) {
    const position = this.getPosition(key);
    const bucket = this.buckets[position];
    const data = bucket.findData(key);
    return data;
  }

  has(key) {}

  remove(key) {}

  length() {
    let occupied = 0;
    for (let index = 0; index < this.buckets.length; index++) {
      const element = this.buckets[index];
      if (element == typeof String) {
        occupied++;
      }
    }
    return occupied;
  }

  clear() {
    for (let index = 0; index < this.buckets.length; index++) {
      const element = this.buckets[index];
      element = null;
    }
  }

  keys() {}
  values() {}
  entries() {}
}
