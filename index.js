

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

// function solution(p){
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
   
// }


// console.log(name('Web5Brain aca123de my2'));

// const  Students=function (callback){
//  new Promise ((resolve)=>{
//      setTimeout(() => {
//          resolve('1-qadam')
//      }, 1000);
//  })
// .then(console.log)
// setTimeout(callback,1000);
// console.log('2-qadam');
// }
// const addStudent =function () {
//     console.log('3-qadam');
// }
// Students(addStudent);
// function one(p) {

//   for (let i = 0; i < p.length; i++) {
      
//     if(p[i] === "A" || p[i] === "a" || p[i] === "E" || p[i] === "e" || p[i] === "I" || p[i] === "i" || p[i] === "O" || p[i] === "o" || p[i] === "U" || p[i] === "u");{
//     }
//   }



// }

// console.log(one("This website is for losers LOL!"));



// assert.strictEqual(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!")
// assert.strictEqual(disemvowel("No offense but,\nYour writing is among the worst I've ever read"), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
// assert.strictEqual(disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?")

// function validatePIN(pin) {

//     if (pin.length ==4) {
//         return true
//     }
//     else if (pin.length==6){
//         return true
//     } 
//     else  return false
// }
// console.log(validatePIN("-fd1.234"));

// Test.assertEquals(validatePIN("1234"), true, "Wrong output for '1234'");
// Test.assertEquals(validatePIN("0000"), true, "Wrong output for '0000'");
// Test.assertEquals(validatePIN("1111"), true, "Wrong output for '1111'");
// Test.assertEquals(validatePIN("123456"), true, "Wrong output for '123456'");
// Test.assertEquals(validatePIN("098765"), true, "Wrong output for '098765'");
// Test.assertEquals(validatePIN("000000"), true, "Wrong output for '000000'");
// Test.assertEquals(validatePIN("123456"), true, "Wrong output for '123456'");
// Test.assertEquals(validatePIN("090909"), true, "Wrong output for '090909'");
// 8 kyu
// Convert number to reversed array of digits
// JavaScript:
// function digitize(n) {
//     b = String(n).split("").reverse().map(Number);
//     return b

// }

// 8 kyu
// Reversed Strings
// JavaScript:

// const solution = (str) => str.split('').reverse().join('') 
8 kyu
Is the string uppercase ?
    JavaScript :
    String.prototype.isUpperCase = function () {
        return this.toString() === this.toUpperCase()
    }