//strings
console.log("ksjef swkefjbnwakeb 343543 %$#")
console.log('ksjef swkefjbnwakeb 343543 %$#')
console.log("1000")
console.log('1000')

// numbers
console.log(1000)
console.log(-1000.34534)

// boolean
console.log(true)
console.log(false)

// variables
var a = 10
var b = 20
var sum = a + b
console.log("Sum is :", a - b)

let s = "Kelvin"
console.log("My name is :", s)


let boolValue = true
console.log("Is the truthy value", boolValue)

// Arrays
let arr = [1, 4, 6, 32, 6]
console.log("Array value is ", arr)
console.log("Array value is at index 3", arr[3])
// let arrB = arr
let arrB = [...arr]

arr[1] = 400
console.log("Array value is ", arr)
console.log("Array value of arrB is ", arrB)


// Objects
let objValue = {
  key: "value 0",
  key1: 20,
  name: "kelvin",
  arr0: ["a", "abc", "abcd", 48, [3, 4, [5, 6, 7]]],
  3: false,
  sumFN: function(a, b) {
    let data = a + b
    return {
      dataValue: data
    }
  }
}

let keyName = "key"
objValue.key = "kelvin"
console.log("objValue.key value is ", objValue.key)

console.log("objValue[keyName] value is ", objValue[keyName])

console.log("objValue.arr0[2] value is ", objValue.arr0[4][2][1])

console.log("objValue.sumFN(10,20) value is ", objValue.sumFN(a, b))


function findSum(x, y) {
  let data = x + y
  return {
    dataValue: data
  }
}

/* let findSum = function mySum(x,y){
 let data = x+y
 return { dataValue: data}
}
 */

let ans = findSum(10, 20)
console.log("function sum return value", ans)


// If-Else
let time = "10"
let greeting;
if (time === 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

console.log("greeting:", greeting)
