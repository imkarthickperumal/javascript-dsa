const obj = {
  name: "karthick",
  age: 25,
  "key-value": true,
  SayMyName: function () {
    console.log(this.name);
  },
};

// Add new key and value
obj.hobby = "Cricket";

// Remove key
delete obj["key-value"];

console.log(obj.age);
console.log(obj.hobby);
console.log(obj.SayMyName);
console.log(obj["key-value"]);
