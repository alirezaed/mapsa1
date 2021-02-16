// function createAppendLine(defaultValue){

//     let result = defaultValue.map((item,index)=>({id:index+1,title:item}));
//     function add(str){
//         const lastIndex = result.sort((a,b)=>b.id-a.id)[0].id;
//         result.push({id:lastIndex + 1,title:str})
//         return result.sort((a,b)=>{
//             var nameA = a.title.toUpperCase(); // ignore upper and lowercase
//             var nameB = b.title.toUpperCase(); // ignore upper and lowercase
//             if (nameA < nameB) {
//                 return -1;
//             }
//             if (nameA > nameB) {
//                 return 1;
//             }

//             // names must be equal
//             return 0;
//         });
//     }
//     function remove(id){
//         const i = result.findIndex(c=> c.id === id);
//         result.splice(i,1);
//         return result;
//     }
//     return [add,remove]
// }


// const [add,remove] = createAppendLine(['ali','reza']);

// const r1 = add('hosein');
// const r2 = add('maryam');
// const r3 = remove(3);

// console.log(r1);
// console.log(r2);


// function ff(){

//     let ret=0;

//     function adder(){
//         ret++
//     }

//     function remover(){
//         ret--;
//     }

//     function getValue(){
//         return ret;
//     }

//     return [adder,remover,getValue]

// }

// const [add,remove,get] = ff();

// add();
// add();
// add();

// console.log(get());

// remove();
// remove();
// console.log(get());

// String.prototype.byby=function(){
//     console.log('byby');
//     return this;
// }
// const nam ="ali"
// const s = 12;



// console.log(s.byby())

class Car{
    constructor(){

    }

    static ddd(){
        
    }

    hi(){
        console.log('hi')
    }
}

const ss = new Car();

console.log(ss);