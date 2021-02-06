let name1 = 'ali';
let age = "18";
const month = 44;
const error = `This is an error. asd asd asdasda asd asdasdasdasdasdasdasd`;
name1 = "asdas";

// console.log((age === 25 || age == 24) && name == 'ali');
// if ((age === 25 || age == 24) && name == 'ali'){
//     console.log('age is 24 or 25 and name is ali');
// }else if (age === 24) {
//     console.log('age is 24');
// }else{
//     console.log('age is not 24,25');
// }

// if (age <= 18 && name1 != "ali"){
//     console.log('under 18 and is not ali')
// }

// let monthName = "";

// switch(month){
//     case 1:
//         monthName = "Farvardin";
//         break;
//     case 2:
//         monthName = "Ordibehesht";
//         break;
//     case 3:
//         monthName = 'Khordad';
//         break;
//     default:
//         monthName = 'Hichkodam';
//         break;
// }
// console.log(monthName);

//type
//string
//Number
//boolean
//array
//null undefined
//object

//loop
//for
//while
//do while


// if (name1 === "ali"){
//     console.log('name is ali');
// }else
//     console.log('name is not ali');

//console.log(error);

// const mynumber = 91;
// //به ما بگه که این عدد اول هست یا خیر

// let isPrime = true;
// for (let i = 2;i < mynumber;i++){
//     if (mynumber % i === 0){
//         isPrime = false;
//     }
// }

// console.log(isPrime);



// const starCount = 9;
// *
// **
// *
// ***
// *
// ****
// *
// *****
// *
// ******

// const factoriel = 6;
// //5!  = 5 * 4 * 3 * 2 * 1
// let retfactoriel = 1;
// for (let i=factoriel;i > 0;i--){
//     retfactoriel = retfactoriel * i;
// }
// console.log(retfactoriel);


// const untilNumber = 8;


// for (let i = 1;i <= untilNumber;i++){
//     console.log(i * i);
// }

// //اعداد بین 100 تا 200 که بر سه بخش پذیر هستند رو لاگ کنیم

// for (let i = 100; i<= 200; i++){
//    if (i % 5 == 0){
//        console.log(i);
//    }
// }

//یک عدد رندم بین 350 تا 444 چاپ کنید
let randomNumber = Math.random();

randomNumber = Math.floor(randomNumber * 94) + 350;
console.log(randomNumber);

//   1   2   3   4   5   6   7
//2  2   4   6
// 1*1 = 1
// 1*2 = 2