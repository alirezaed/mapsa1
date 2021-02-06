
// let x = 10;

// while (x > 1){
//     console.log(x);
//     if (x === 5){
//         x = x - 2;
//         continue;
//     }
//     x = x - 1;
// }

// console.log('-----')
// x = 1;
// do{
//     console.log(x);
//     x = x - 1;
// } while(x > 1)

// break;
// continue;

// *
// **
// *
// ***
// *
// ****
// *
// *****

// const STAR_COUNT = 10;
// const STAR = '%';

// let stars = STAR;
// for(let i = 1;i<=STAR_COUNT;i++){
//     console.log(STAR);
//     stars = stars + STAR;
//     console.log(stars);
// }


// var x = 10;
// let y = 12;

// if (x !==10){
//     let innerX = 120;
//     y = 13;
//     console.log(y);
// }

// console.log(y);

// HOISTING

// var innerX;

// if (x ===10){
//     innerX = 120;
//     console.log('x === 10');
//     console.log(innerX);
// }


//DataType Number,String,Boolean,null,undefined,function, >>>> object (array,date,function,...)
//Number

// let number1 = '-10';
// let number2 = '10a4';
// let number3 = 10e4;

// let x = number1 * 5;
// let x1 = Number(number2);
// let x2 = +number2;
// let x3 = -number1;
// //NaN + - * / ===> NaN    
// //NaN === NaN

// if (NaN === NaN){
//     console.log('yes NaN')
// }

// console.log(x3);
// -Infinity

// if (number3 > -Infinity){
//     console.log('number3 > -Infinity')
// }
//console.log(x);

//string
// let c = String(123123);
// const fname = 'ali';
// let str = "asdasdas" 
// let str2 = 'asdasdasd'
// let str3 = `Hello ${fname}`;
// let str4 = 'Hello ' + fname;
// console.log(str3);
// console.log(str4.toUpperCase());
// console.log(str4.length);

// // \n newline
// // \t tab
// let x = 'This is ali\'s book';

// console.log(x);

// let result = '';
// for (let i = 1;i<=10;i++){
//     for (let j = 1;j<=10;j++){
//         result += (i * j) + '\t'
//     }
//     result += '\n'
// }
// console.log(result);

//Boolean
// let x = -1;
// //همه اعداد به غیر از صفر true هستند
// //همه رشته ها به غیر از رشته خالی true هستند
// //false ===> null,undefined,false,0,'',NaN

// if (x){
//     console.log('this is log');
// }

// console.log(!!x)
// undefined 
// null
// let f = 123123;
// if (f){
//     console.log('f is filled');
// }

// let fname = 'ali';
// fname += 'reza';
// let number1=0;


// console.log(number1--) //pre-increment
// console.log(number1)

// console.log(--number1) //post-increment
// console.log(number1)
// let cc = 30 + 4;
// let x ;
// if (!(x == 10 || x == 15 && x > 1)){
//     console.log('is not true');
// }

// ||

// let fname = 'ali';
// let lname = '';

// let fullname = `${fname || 'noname'} ${lname || 'nolastname'}`

// console.log(fullname);

// &&

// let fname = !!'name';
// // let x = fname && 'reza'

// // console.log(x);


// // if (fname){
// //     fullname=  'fname is initialized'
// // }else{
// //     fullname  = 'fname is empty'
// // }

// let fullname = function(){}

// console.log(typeof fullname);

//Naming
//cameCase   firstName,lastName
//snake_case first_name,last_name
//PascalCase FirstName,LastName

//__internal
// const PI = 3.14;
// const SETERROR = 'SET'
// const s = '10e3'
// console.log(-s);

const name1 = 'mohamad';
// if (!name1){
//     console.log('has name')
// }else{
//     console.log('no name')
// }

// let seconName = name1 && 'hosein'
// // console.log(seconName);

// seconName = 'reza' || seconName;

// if (seconName === 'hosein'){
//     console.log('in the if statement');
// }

let x = 42;
let y = 7;


if (x % y){
    console.log('ok');
}


const ff = '';


if (ff || x % y){
    console.log('ok2');
}
