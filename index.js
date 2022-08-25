

// let a = [
//     { id: 1, title: 'ddsads' },
//     { id: 2, title: 'ddsads' },
//     { id: 3, title: 'ddsads' },
//     { id: 4, title: 'ddsads' },
//     { id: 5, title: 'ddsads' },
//     { id: 6, title: 'ddsads' },
//     { id: 7, title: 'ddsads' },
// ]

// let result = JSON.stringify(a)
// console.log(JSON.parse(result));


// function number(num) {
//    s = num
//     return s.map((val,ind,arr)=>val[ind+1]==arr)
// }
// console.log(number([1,2,4,5,12,2,21,1,324,'',34]));

// function solution(str){
//  b = str.split('')
//  return  b.reverse().join('')
// }
// console.log(solution('world'))

//  const  solution = (str) =>  str.split('').reverse().join('') 

//  console.log(solution('world'));

function billboard(name, price = 30) {
    
return name.split('').map((value,ind)=>ind)

} 

console.log(billboard("Jeong-Ho Aristotelis")); 
