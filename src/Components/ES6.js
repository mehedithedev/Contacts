//Map Method: 
const numbers= [1,2,3,4,5,6,7,8]
let double= (x)=>{
   return x*2
}
const arrayOfDouble= numbers.map(double)
console.log(`Example of Map Method: ${arrayOfDouble}`)

// For Each Method:
const forEachDoubleNum=[]
const doubleForEach=(x)=>{
   forEachDoubleNum.push(x*2)
} 
numbers.forEach(doubleForEach)
console.log(`Example of ForEach: ${forEachDoubleNum}`)
