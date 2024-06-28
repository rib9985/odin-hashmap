# Hashmap & Hashset
## A Hashmap & Hashset implementation in Javascript, using ES6 modules

## Methods

`set(key,value)` -> sets a key and value pair into the hashmap

`get(key)` -> gets the key and value pair from the hashmap

`has(key)` -> returns true if the hashmap has the key

`remove(key)` -> returns true if the hashmap has the key and removes it from the hashmap

`clear()` -> clears the hashmap

`entries()` -> returns the each key,value pair stored in the hashmap

`keys()` -> returns the keys stored in the hashmap

`values()` -> returns the values stored in the hashmap

`length()` -> returns the quantity of items stored in the hashmap

## Testing
 - Clone the repo
 - Make sure node.js is installed at at least version 20.11.00
 - Within the repo directory, run `node testHashmap.mjs` or`node testHashset.mjs`

## Usage
- To use the Hashmap or Hashset class, copy all the dependencies. For example, when using hashmap: `hashmap.mjs`,`hashFunction.mjs`, and the `linkedLists` directories to your desired directory.
- For use in a Javascript file:
```js
import { Hashmap } from "./hashmap.mjs";
const hashmap = new Hashmap();
```

##### Created for The Odin Project
