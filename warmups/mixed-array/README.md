# Mixed Array
---

###### Warmup

Given an array of mixed types, return an object or array with 4 arrays of their own type

[9:04]  
example:

[9:05]  
input - `["cat", [1, 2 ,3], "dog", 1, 4, {name: "john"}, ["pie", "cake"]]`

[9:07]  
output - `[["cat", "dog"],[1, 2, 3]], [1, 4], [{name: "john"}]]` (edited)

[9:07]  
or

[9:09]  
output -
```{
  strings: ["cat", "dog"],
  arrays: [[1, 2, 3], ["pie", "cake"]],
  objects: [{name: "john"}],
  numbers: [1, 4]
}```