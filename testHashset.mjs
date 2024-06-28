import Hashset from "./hashset.mjs";
const test = new Hashset();

test.set("lion");
test.set("peter");
test.set("apple");
test.set("banana");
test.set("carrot");
test.set("dog");
test.set("elephant");
test.set("frog");
test.set("grape");
test.set("hat");
test.set("ice cream");
test.set("jacket");
test.set("kite");
console.log(test.length()); //should be 13
console.log(test.entries());
test.set("hat");
console.log(test.entries());
console.log(test.length()); //should be 13

console.log(test.get("apple"));
console.log(test.get("banana"));
console.log(test.get("storage"));
console.log(test.has("apple"));
console.log(test.has("banana"));
console.log(test.has("storage"));
// //
console.log(test.remove("apple"));
console.log(test.remove("banana"));
console.log(test.remove("storage"));
//
console.log(test.length()); //should be 11
console.log(test.entries());
console.log(test.keys());
