
//Destructuring

//Object
//Array


const student = {
    firstname:'mehdi',
    lastname:'mahdavi',
    level:2,
    average:20
};

function Student({name,lastname,level}){
    this.name = name;
    this.lastname = lastname;
    this.level = level;
}

function studentCreator(){
    return {
        years:[1399,1400,1404,1401,1402],
        month:12,
        activeYear:1400
    }
}

const { month,...activeYear  } = studentCreator();


console.log(activeYear);
// const { firstname:firstname1, lastname, level, average:avg=12 } = student;

// console.log(firstname1);
// console.log(lastname);
// console.log(level);
// console.log(avg);


console.log(new Student({
    lastname:'hamidi',
    level:8,
    name:'reza',
}));


const std1 = {
    lastname:'hamidi',
    level:8,
    name:'reza',
    address:{
        street:'valiasr',
        number:1
    }
}

const std2 = {
    ...std1,
    fathername:'hesam'
};

std2.name = 'kazem';
//merge
const std3={
    ...std1,
    ...std2,
    name:'uu'
}

console.log(std3.fathername);
console.log(std3.name);


function sum(...args){
    let t = 0;
    args.forEach(item=>{
        t+=item
    })
    const  [,,i] = args;
    console.log(i)
    return t;
}
sum(1,2,5,4,2,23)
//console.log()