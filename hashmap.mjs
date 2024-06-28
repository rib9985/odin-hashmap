import hashFunction from "./hashFunction.mjs";
import { LinkedList } from "./linkedLists/linkedList.mjs";
export default class Hashmap {
  constructor(size = 16) {
    this.buckets = new Array(size)
      .fill(null)
      .map((element) => new LinkedList());
    this.bucketSize = size;
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
    if (bucket.findData(key)) {
      return;
    } else {
      bucket.append(data);
    }
  }

  get(key) {
    const position = this.getPosition(key);
    const bucket = this.buckets[position];
    const data = bucket.findData(key);
    if (data) {
      return data;
    } else {
      return null;
    }
  }

  has(key) {
    const position = this.getPosition(key);
    const bucket = this.buckets[position];
    const data = bucket.findData(key);
    if (data) {
      return true;
    } else {
      return false;
    }
  }

  remove(key) {
    const position = this.getPosition(key);
    const bucket = this.buckets[position];
    const linkedListIndex = bucket.findIndex(key);
    if (linkedListIndex != null) {
      bucket.removeAt(linkedListIndex);
      return true;
    } else {
      return false;
    }
  }

  length() {
    let count = 0;
    for (let index = 0; index < this.buckets.length; index++) {
      const bucketToCheck = this.buckets[index];
      if (bucketToCheck.head != null) {
        count += bucketToCheck.size();
      }
    }
    return count;
  }

  clear() {
    this.buckets.map((element) => null).map((element) => new LinkedList());
  }

  keys() {
    return this.entries().map((element) => element.key);
  }

  values() {
    return this.entries().map((element) => element.value);
  }

  entries() {
    let dataArray = [];
    for (let index = 0; index < this.buckets.length; index++) {
      const bucketToCheck = this.buckets[index];
      if (bucketToCheck.head != null) {
        dataArray.push(...bucketToCheck.dataToArray());
      }
    }
    return dataArray;
  }

  rehash() {
    const loadFactor = this.length() / this.bucketSize;
    if (loadFactor >= 0.75) {
      console.log("Rehashing required");
      const currentEntries = this.entries();
      this.bucketSize = this.bucketSize * 2;
      this.clear();
      this.buckets = new Array(this.bucketSize)
        .fill(null)
        .map((element) => (element = new LinkedList()));
      for (let index = 0; index < currentEntries.length; index++) {
        this.set(currentEntries[index].key, currentEntries[index].value);
      }
      return true;
    } else {
      return false;
    }
  }
}
