import Hashmap from "./hashmap.mjs";
const test = new Hashmap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

console.log(test);
console.log(test.get("apple"));
console.log(test.get("banana"));
console.log(test.get("storage"));

console.log(test.has("apple"));
console.log(test.has("banana"));
console.log(test.has("storage"));

console.log(test.length());
console.log(test.keys());
