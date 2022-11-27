// Sets constructor

//accept array arguments
const set = new Set([1, 2, 3]);

// Add new item
set.add(4);

// Dosen't accept Duplicate item value
set.add(4);

// Check is item inside set constructor - item value iruka ilayanu check panuvathu iruthe true ilana false
console.log(set.has(3));

// Delete one item
set.delete(2);

// Count total of item size
console.log(set.size);

// Remove total set items
set.clear();

for (const item of set) {
  console.log(item);
}
