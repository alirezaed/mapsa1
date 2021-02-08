//Arrow function : const return2 = ()=>2

//Destructuring

//Object
//Array
const names = ['zahra','fateme','mohamd','reza'];

function xx (){
    const names = ['zahra','fateme','mohamd','reza'];
    return names.splice(1);
}

// const girlName1 = names[0]
// const girlName2 = names[1]

// const boyName1 = names[2]
// const boyName2 = names[3]

let [girlName1,girlName2,boyName2,boyName3='noname'] = names;
//console.log(girlName1,girlName2,boyName1,boyName2);

//const [girlName1,girlName2,...boys] = names;

[girlName1,girlName2,...boys] = [girlName2,boyName3,boyName2,girlName1];

girlName1 = girlName2;
girlName2 = boyName3;
boys=[boyName2,girlName1];



//console.log(girlName2);
//console.log(boys[0]);

//spread ...

const names2 = names.slice();
const names3 = names;

names3[0] = 'hamid';
console.log(names3)
console.log(names)