// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";

  let letRichard = "Richard let";
  const constRichard = "Richard const";
  var varRichard = "Richard var";

console.log(letRichard);
console.log(constRichard);
console.log(varRichard);

{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}

// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

//Block Scope
console.log(blockVar);

function show(){
var functionVar = "I'm a block-scoped var";
let functionLet = "I'm a block-scoped let";
const functionConst = "I'm a block-scoped const";
}
show();

//console.log(functionVar); // Throws ReferenceError
//console.log(functionLet); // Throws ReferenceError
console.log(functionConst); // Throws ReferenceError