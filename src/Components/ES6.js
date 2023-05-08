//Map Method: Create a new array by doing something with each item in an array
const numbers= [1,2,3,4,5,6,7,8]
let double= (x)=>{
   return x*2
}
let triple= (x)=>{
   return x*3
}
const arrayOfDouble= numbers.map(double)
const arrayOfTriple= numbers.map(triple)
console.log(`Example of Map Method for double: ${arrayOfDouble}`)
console.log(`Example of Map method for triple: ${arrayOfTriple}`)

// For Each Method to complete the above task:
const forEachDoubleNum=[]
const doubleForEach=(x)=>{
   forEachDoubleNum.push(x*2)
} 
numbers.forEach(doubleForEach)
console.log(`Example of ForEach: ${forEachDoubleNum}`)

// Filter Method: Create a new array by keeping only the items that return true.
const filteredNum= numbers.filter((num)=>num<5)
console.log(`Example of Filter Method: ${filteredNum}`)
// Doing the above task using for each:
let newNumbers= []
numbers.forEach((num)=>{
   if (num<5){
      newNumbers.push(num)
   }
})
console.log(`Getting the same result using for each method: ${newNumbers}`)

// Reduce: Accumulate a value by doing something to each item in an array. 
const ReduceNum=numbers.reduce((accumulator, currentNumber)=>{
   console.log(`Accumulator: ${accumulator}`)
   console.log(`Current Number: ${currentNumber}`)
   return  accumulator+currentNumber
})
console.log(`Sum of all the numbers: ${ReduceNum}`)

// Find: 