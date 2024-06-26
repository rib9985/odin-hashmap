// Hash function based on Donald E Knuth hash -> Art of Programming
export default function hashFunction(string) {
  let length = string.length;
  let hash = length;
  let i = 0;

  for (i = 0; i < length; i++) {
    hash = (hash << 5) ^ (hash >> 27) ^ string[i] % 16;
  }
  return hash;
}

/* Testing for the hash function

console.log(hashFunction("hello123"));
console.log(hashFunction("123"));
console.log(hashFunction("hello"));
console.log(hashFunction("123"));

*/
console.log(hashFunction("hello12asdfasdfasdf12341"));
console.log(hashFunction("123"));
console.log(hashFunction("hello"));
console.log(hashFunction("123"));
console.log(hashFunction("12312"));
