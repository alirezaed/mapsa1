// console.log('2');
// console.log('3');
// setTimeout(()=>console.log('5'), 5000);
// console.log('1');
// setTimeout(()=>console.log('4'), 2000);
// console.log('6');


//lexical scope

// console.log('global')
// let z=9;

// function gg(){
//     let x = 5;
//     function logFunc(){
//         let y = 2;
//         console.log('function')
//         console.log(x * y * z)
//         return 2;
//     }


//     return logFunc;
// }


// const logsample = gg();

// logsample();

// function appendLineCreator(){
//     let result='';
//     function f(input){
//         result += '\n' + input;
//         return result;
//     }
//     return f;
// }

// const appendLine = appendLineCreator();

// appendLine('this is first line')
// appendLine('this is second line')
// appendLine('this is third line')
// const r = appendLine('this is forth line');
// console.log(r);

function counterCreator(startValue){
    let counter=startValue;
    function add(){
        counter++;
        return counter;
    }
    function remove(){
        counter--;
        return counter;
    }
    return [add,remove]
}

const [add,remove] = counterCreator(5);

add();
add();
add();

console.log(add());

remove();
remove();
console.log(remove());






//تمرین: فانکشنی داشته باشیم که سه فانکشن بده بیرون
//یک آرایه از ابجکت ها
//ابجکت شامل عنوان و ای دی
//یکی برای اضافه کردن با ورودی عنوان
//یکی برای حذف کردن با ورودی ای دی
//یکی برای دریافت همه مقادیر شامل لیستی از آبجکتهای با عنوان و آی دی مرتب شده با عنوان


//یک پروتوتایپ اضافه کنید به آرایه که جمع اعداد آرایه را برگرداند و اگر آرایه از اعداد نیست 
// یک NaN برگرداند
