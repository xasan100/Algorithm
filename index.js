

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

// function billboard(name, price = 30) {

// return name.split('').length*30

// } 

// console.log(billboard("Jeong-Ho Aristotelis"));

// function digitize(n) {
//    b = n+' '
//  a=b.split('').sort((a, b) => b - a).map(Number)
//  return a

// }

// console.log(digitize(1234)); 

// function makeNegative(num) {

// if (num ==9) {
//     return num
// }
// else if (num)   
// return -num
// }
// console.log(makeNegative(9));

// const boolToWord = (bool) => bool  ? "Yes" : "False"

// function positiveSum(arr) {

// b= arr.filter((val)=>val >=0)
// return b.reduce((prev,ind)=>prev+ind,0)
// }
// console.log(positiveSum([-1, -2, 3, 4, -5]));


// function getCount(str) {

//    return  str.match(/['a','e','i','o','u']/gi)



// }
// console.log(getCount('This website is for losers LOL!'));
//     

// function squareDigits(num) {
//    b=num+''

//     return b.split('').map((val)=>+val.Math.pow(val,2))

// }
// console.log(squareDigits(3212));



// function name(num) {
//   b=num+''   
// return b.split(' ').map((val,ind,arr)=>ind)
// }
// console.log(name(10));

// function highAndLow(numbers) {
//  s= numbers.split(' ')
//   max = Math.max(...s)
//     min = Math.min(...s)

// return `'${max} ${min}'`
// }
// console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));


// function getMiddle(s) {
//  b= s.split('').length /2 
//   return  a =  Math.ceil(b)
// }
// console.log(getMiddle("testing"));

// function filter_list(l) {
//     return l.filter(Number.isInteger)

// }
// console.log(filter_list([1, 2, 'aasf', 0, '123', 123]));


// function name(str) {
//     return str.replace(/[^0-9]/g,"")
// }


// console.log(name('Web5Brain aca123de my2'));