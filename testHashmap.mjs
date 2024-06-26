import Hashmap from "./hashmap.mjs";
const test = new Hashmap();

test.set("lion", "golden");
test.set("peter", "pan");
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
console.log(test.length()); //should be 13
console.log(test.entries());
test.set("hat", "silly");
console.log(test.entries());
console.log(test.length()); //should be 13

// console.log(test.get("apple"));
// console.log(test.get("banana"));
// console.log(test.get("storage"));
// console.log(test.has("apple"));
// console.log(test.has("banana"));
// console.log(test.has("storage"));
// //
// console.log(test.remove("apple"));
// console.log(test.remove("banana"));
// console.log(test.remove("storage"));
//
// console.log(test.length()); //should be 11
// console.log(test.entries());
// console.log(test.keys());
// console.log(test.values());
//
// test.set("apple", "red");
// test.set("banana", "yellow");
// test.set("carrot", "orange");
// test.set("dog", "brown");
// test.set("elephant", "gray");
// test.set("frog", "green");
// test.set("grape", "purple");
// test.set("hat", "black");
// test.set("ice cream", "white");
// test.set("jacket", "blue");
// test.set("kite", "pink");
// test.set("lion", "golden");
// test.set("peter", "pan");
//
// console.log(test.length()); //should be 13
// console.log(test.entries());
