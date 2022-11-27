const arr = [1, 2, 3, "karthick"];

//Check index value 1
console.log(arr[1]);

// Add last index of value
arr.push(4);

// Remove last index
arr.pop();

// Add beginning of index value
arr.unshift(5);

// Remove beginning of the index value
arr.shift();

for (const item of arr) {
  console.log(item);
}



