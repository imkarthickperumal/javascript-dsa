// Map constructor

const map = new Map([
  ["a", 1],
  ["b", 2],
]);

// Add a key value
map.set("c,3");

// Delete a key
map.delete("c");

// Check true are false
console.log(map.has("a"));

// Size count
console.log(map.size);

// delete all keys and value
map.clear();

for (const [key, value] of map) {
  console.log(`${key}:${value}`);
}
