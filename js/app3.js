//logText('before declare')



function logText(text='No Text'){
    // if (!text){
    //     text = 'No Text';
    // }
    //text = text || 'No Text'
    console.log('--------');
    console.log(text);
    console.log('--------');
}

function getFullName(firstName,lastName){
    return firstName + ' ' + lastName;
}



// let xname = 'afshin'
// let yname = 'behboodi';

// let fullName = getFullName('ali','hasani');

// let retLogtext = logText(fullName);
// console.log(retLogtext);

// logText('this is second call');
// logText(123123);
// logText(xname);

function square(x){
    if (x !== 0){
        return x * x;
    }else{
        //console.log('is 0')
    }
}

//console.log(square(0));

//logText(213123)



//console.log( getFullName('ali', getFullName( getFullName('mitra','rezaei') ,'emami') ) )


 
//assign to variable
const ab = function (a,b){
    return a + b * 4;
}

//console.log(ab(2,3));
// console.log((function (a,b){
//     return a + b * 4;
// })(3,2))


// function showNames(fullName1,fullName2){
//     function getName(fullname){
//         return fullname.substr(0,fullname.indexOf(' '))
//     }
//     console.log(getName(fullName1));
//     console.log(getName(fullName2));
// }



// showNames('jabar ahmadi','akbar rezaei');
let newData = 'initialized';

function log(data){
    newData = 'this is a log for : ' + data;
    console.log(fname);
    var fname = 'ali';

    console.log(newData);
}

//log('asdas');

let phoneNumber = '111'

function checkIsValid(phoneNumber){
    phoneNumber = '333'

    function innerFunction(){
        phoneNumber = '444'
        console.log(phoneNumber);
    }
    innerFunction();
    console.log(phoneNumber);
}


//checkIsValid();

// function success(name){
//     console.log('success ::: first > second')
// }

// function error(){
//     console.log('error ::: first <= second')
// }

// function compare(first,second,success,error){

//     if (first>second){
//         success('ali');
//     }else{
//         error();
//     }
// }

// compare(123,42,success,error);

function myfunction(a,b){
    return a * b;
}

const result = (function (a,b){
    return a*b
})(3,4);

const myfunction2 = function (a,b){
    return a*b;
}

//arrow function ES6
const myfunction3 = (a,b) => {
    return a*b;
}

const myfunction4 = a => {
    return a*a;
}

const myfunction5 = a => (a*a)

const myfunction6 = a => a*a;

// console.log(myfunction6(6))

function showResult(a,b,c){
    console.log(c(a,b));
}

// showResult(10,22,(g,r)=>g-r);

// showResult(3,4,(r,e)=>r+12*e);

showResult(54,1,(f)=>f*10);
showResult(54,1,(f)=>(f*10));

// showResult(4,9,f=>{
//     if (f> 5){
//         return f*10
//     }
// });

// showResult(54,1,67);


function aa (a){
    return a* a;
}

aa(12,123,4);

/// تمرین
/// فانکشینی بنویسید که دو عدد را بصورت ورودی دریافت کند و 4 عملی اصلی را روی آن انجام دهید و خروجی را چاپ نمایید
/// این فانکشن را به شکل ساده، بینام در متغیر، بینام اجرای در لحظه، اروفانکشن بنویسید
/// و شکل اجرای اون رو هم بنویسید