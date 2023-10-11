let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

// Your code here
let typesArray = [];

for (let i = 0; i < mix.length; i++) {
    let type = typeof mix[i];
    typesArray.push(type);
}

console.log(typesArray);