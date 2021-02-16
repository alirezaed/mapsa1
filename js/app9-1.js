// function Student(name){
//     this.name = name;
// }

// Student.prototype.sayHelo=function(){
//     console.log('Hii')
// }

// Array.prototype.push = function(){

// }

// const std1 = new Student('Armin');
// std1.sayHelo();
// console.log(std1)

// //const fullname = "alireza hoseini";
// const ss = 21.652151;
// console.log(ss.toFixed(2));
// //String,Boolean,Number

// const fullname = new String("alireza hoseini")
// console.log(fullname);

// function Student1(name){ //Object / class
//     this.name  = name;
//     this.sayHello=function(){

//     }
// }
// const st1 = new Student1('akbar')///instance
// console.log(st1);

// const asdas={
//     name:'asda'
// }

// const f = {
//     ...asdas,
//     fathername:'adas'
// }

class Person{
    constructor(name,lastname){
        console.log('constructor Person')
        this.name = name;
        this.lastname = lastname;
    }
    showInfo(){
        console.log(`${this.name} ${this.lastname}`)
    }
}

class Student2 extends Person {
    constructor(name,lastname,level){
        super(name,lastname)
        console.log('constructor Student2')
        this.level = level;
    }

    showInfo(){
        console.log(`${this.name} ${this.lastname} in level ${this.level}`)
    }

    static showClassInfo(){
        console.log('This is a student.');
    }

}


const st2 = new Student2('akbar','miladi',8)
st2.showInfo();
Student2.showClassInfo();


console.log(st2);
