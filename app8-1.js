//this
//closure
//function
//promise
//class

//nodejs

var name = 'hasan';
var level = 9;

function print() {
    console.log(`this is : ${this.name} level: ${this.level}`)
}

function Student(name,level){
    this.name = name;
    this.level = level;

    this.printStd = () => {
        console.log(`this is : ${this.name} level: ${this.level}`)
    }
    this.printStd2 = function(input){
        console.log(`2 : ${this.name}`)
    }
}

const std1={
    name:'ahmad',
    level:1,
    printme:print,
    printme2:(name)=>{
        console.log(name);
    }
}

const student1 = new Student('Ali',7);
const student2 = new Student('Reza',2);

std1.printme.call(this);
std1.printme.bind(student2)();
std1.printme2.apply(student1,['neda']);
student2.printStd2('kazem');
//call
//apply

//bind


// console.log('--normal call');
// print();
// student1.printStd();
// student2.printStd();

// console.log('--call');
// print.call(student1,2,3,4,1);

// console.log('--apply');
// print.apply(student1,[2,3,4,1]);


// console.log('--bind');
// const newPrint = print.bind(student2,1,1,3,123);
// newPrint();