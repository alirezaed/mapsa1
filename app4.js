// function showResult(a,b,c,d){
//     if (d){
//         console.log(d(b,a));
//     }else{
//         console.log(c(b*a));
//     }
// }


// showResult(2,4,r=>r*r,(h,d)=>h+d);

// showResult(6,7,(h,d)=>h/d);

// const f1 = (h,d)=>h/d;
// const f2 = (e,x)=>e * 2 + x;
// showResult(6,7,f1,f2);

//DataType : Primitive
//Number
//String
//boolean
//null
//undefined
//symbol

//Value Type
//Reference Type

// let firstName  = "maryam"
// let firstName2 = firstName
// firstName = "fateme"


// console.log(firstName);
// console.log(firstName2);


// let a = 10;
// a = 11;


// //else object

// //property
// type
// color

// //method
// run
// sleep

//new Object();.
// console.log('--------------------------new Object()')

// const nameIdentifier = 'name'

// const student = new Object();
// student.nameIdentifier = 'Mina Hasannejad';
// student.level = 8;
// student.average = 18.75;
// student.logHello = function(){
//     console.log('Hello student');
// }

// console.log(student);
// student.logHello();

// const student2 = new Object();
// student2[nameIdentifier] = 'Mina Hasannejad';
// student2['level'] = 8;
// student2['average'] = 18.75;
// student2['logHello'] = function(){
//     console.log('hello')
// }
// console.log(student2[nameIdentifier]);
// student2['logHello']();

// //object initilizer
// console.log('--------------------------initilizer')
// const student3 = {
//     fullname: 'Reza Gholizade',
//     level: 8,
//     average: 17,
//     logHello:() => console.log('hello arrow'),
//     sayhello(){

//     }
// };
// console.log(student3);
// student3.logHello();

// const student4 = {
//     'full name': 'Reza Gholizade',
//     level: 8,
//     [nameIdentifier]: 17
// };
// console.log(student4);

// //
// console.log('--------------------------constructor')

// //constructor
// function Student(fullname,level,average){
//     this.fullname = fullname;
//     this.level = level;
//     this.average = average;
//     this.logHello = () => console.log(`hello arrow in cons ${this.fullname}`)
// }
// const student5 = new Student('jahan azimi',9,16);
// student5.fullname = 'mojtaba rezvani';
// console.log(student5);
// student5.logHello();

// const student6 = new Student('jahan azimi',16);
// const student7 = new Student('meysam azimzade',12,20);
// console.log(student6);
// console.log(student7);

// console.log('--------------------------factory')
// //factory
// function creatStudent(fullname,level,average){
//     return {
//         fullname:fullname,
//         level,
//         average,
//         logHello: function(){
//             console.log(`hello arrow factory ${this.fullname}`)
//         } 
//     }
// }

// const student8 = creatStudent('mohsen moradi',4,19);
// student8.fullname = 'morteza ahmadi';
// console.log(student8);
// student8.logHello();

const student9 ={
    fullname:'mitra rezaei',
    address :{
        country:'Iran',
        city:'Tehran',
        street:'Shariati'
    }
}

const student10 = student9;
student9.fullname = 'narges karimi'
student10.fullname = 'leila'
console.log(student9);
console.log(student10);

const person1 = 'Hamid'
const person2 = 'Hamid';

if (person1 === person2){
    console.log('Is Equal')
}else{
    console.log('Is not Equal')
}

//function object call 

// const prop1 = 'firstName';
// const prop2 = 'lastName';
// const prop3 = 'fatherName';

// const person={
//     [prop1] : 'reza',
//     [prop2]:'hoseini',
//     [prop3]:'nader'
// }

// console.log(person.lastName);

// if (person.fatherName === 'nader' ){
//     //here
// }
// person = "adsasd"
// person.firstName = 'mohamad';
// console.log(person);
// const numbers = new Object();
// let i = 0
// while(i < 5){
//     numbers[i] = i*i*i;
//     i++;
// }
// console.log(numbers);
// console.log(numbers[2]);

//Array
// const array1 = ['ali','reza',123,true,{a:'a'},[3,54,2],false];

// for(let i = 0;i< array1.length;i++){
//     console.log(array1[i]);
// }


// function calculateAverage(arr){
//     let sum=0;
//     let count = 0;
//     for(let i=0;i< arr.length;i++){
//         if (typeof arr[i] === 'number'){
//             sum += arr[i];
//             count++;
//         }
//     }
//     return sum / count;
// }

// console.log(calculateAverage([4,6,10,'asd']));



const array1 = ['ali','reza',123,true,{a:'a'},[3,54,2],false];

// const ff = array1.push({asd:'ads'});

// console.log(array1);
// console.log(ff);

// const lastadded = array1.pop({asd:'ads'});

// console.log(array1);
// console.log(lastadded);
  

//تمرین اول
// function getDuplicated(arr){
//    const duplicateds=[];
//    for(let i = 0;i<arr.length;i++){
//         for(let j = i+1;j<arr.length;j++){
//             if (arr[i] == arr[j]){
//                 duplicateds.push(arr[i]);
//             }
//         }
//    }
//    return duplicateds;
// }

// console.log(getDuplicated([1,2,4,3,2,1,2]));

// const arrayToString = array1.join(' /// ')
// console.log(arrayToString);
// console.log(array1.toString());

// const ss = '1,3,4,5,6,65,23234,23,42,3,4234'
// console.log(ss.split(','))

// const result = array1.indexOf('rezaas');

// console.log(result);
// const deletds = array1.splice(1,2,'hamid','jabar',2);
// console.log(array1);
// console.log(deletds);

//shift,unshift

console.log(array1.shift())
console.log(array1.unshift('ii'))
console.log(array1);


//فانکشنی بنویسید که مقادیر زوج و فرد از یک آرایه ورودی را از هم تفکیک کند
 //و در یک آبجکت شامل دو فیلد زوح و فرد برگرداند.

 //فانکشنی بنویسید که بزرگترین مقدار یک آرائه از اعداد را پیدا کند