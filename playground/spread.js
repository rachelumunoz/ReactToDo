// function add (a,b){
//   return a + b
// }

// console.log(add(3, 1))

// var toAdd = [9, 5]

// console.log(add(...toAdd))

// var groupA = ["rachel", "jordan"]

// var groupB = ["anika"]

// var final = [3, ...groupA, ...groupB]

// // console.log(final)
var person = ['Rachel', 26]
var person2 = ['Jordan', 45]
function usingSpread (name, age){
  return "Hello " + name + " you are " + age + "."
}

console.log(usingSpread(...person))
console.log(usingSpread(...person2))

var names = ["mike", "ben"]
var final = ["rachel", ...names]

// for (var i = 0; i < final.length; i++){
//   console.log("Hi", final[i])
// }

final.forEach((name)=>{
  console.log("Hi", name)
})