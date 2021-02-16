const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('2')
        resolve('3'); 
    },3000);
});
console.log('1')
const p2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log('4');
        resolve('6');
    }, 1000);
})
p1.then(ff=>console.log(ff));
p2.then(gg=> console.log('9'));
// Promise.all([p1,p2]).then(([p1value,p2value])=>{
//     console.log(p1value,p2value);
// });
Promise.race([p1,p2]).then((value)=>{
    console.log(value);
});