//prototype chain

function Box(width,height){
    this.width = width;
    this.height = height;
    this.calculateArea = function(){
        console.log('inner')
        return this.width * 2 + this.height * 2
    }
}

Box.prototype.calculateArea = function(){
    return this.width * 2 + this.height * 2
}

function Animal(name){
    this.name = name;
}

const newbox1 = new Box(10,20);
const newbox2 = new Box(5,3);
const newbox3 = new Box(9,12);
const babr = new Animal('babr');

console.log(newbox1);
console.log(newbox1.calculateArea());

if (babr instanceof Box){
    console.log('hast')
}


const name1 = new String("ali");
String.prototype.toUpperCase = function(){
    console.log('to upper called');
}
console.log(name1.toUpperCase());


const name2 = new Array([]);
Array.prototype.asd = function(){
    console.log('to upper called');
}
console.log(name2);