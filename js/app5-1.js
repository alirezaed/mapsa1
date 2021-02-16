//const myarray = [123,35,351,995,412,43,15]
//ShallowCopy
//const newarray = myarray.slice();

//newarray[3].name = "zahra";
//newarray[6][1] = "LG"

//console.log(myarray[6]);
//console.log(newarray);


//console.log(myarray.reverse());

// function comparer1(a,b){
//     return a-b;
// }

// function comparer2(a,b){
//     return b-a;
// }

// myarray.sort((a,b)=>a-b);

// console.log(myarray);
// myarray.sort(comparer2) ;
// console.log(myarray);

// const array2 = [55,66,77];

// const array3 = myarray.concat(array2);

// console.log(myarray);
// console.log(array3);
 const myarray0 = [123,35,351,995,412,43,15]
// const filteredData = myarray.filter((element,index)=>true);
// console.log(filteredData);

// const filteredData2 = myarray.filter((element,index)=>index===3);
// console.log(filteredData2);

// const filteredData3 = myarray.filter((element,index)=> element < 100);
// console.log(filteredData3);


// const s  = NaN < 18;
// console.log( s )

// function filterkon(element,index){
//     return element < 18;
// }

// for(let i = 0;i< myarray.length;i++)
//     console.log(filterkon(myarray[i]))


// const filteredData4 = myarray.filter(filterkon);
// console.log(filteredData4);

// const newarray = myarray0.includes(123);
// console.log(newarray);

// const somesample = myarray.some(data => data.age > 20)
// console.log(somesample);

// const everySample = myarray.every(data => data.age > 15)
// console.log(everySample);

// const findSample = myarray.find(element=>element.age > 12);
// const filterSample = myarray.filter(element=>element.age > 12);
// console.log(findSample);
// console.log(filterSample);


'taher 20 sale'
// const findIndex = myarray.findIndex(item=> item.id === 224);
// myarray[findIndex].age = 16;

// console.log(myarray);

//myarray.forEach(item=>item.name = 'Mr ' + item.name);
// let totalAge= 0;
// myarray.forEach(item=>{
//     totalAge += item.age;
// });

// console.log(totalAge / myarray.length);
const myarray = [
    {
        id:223,
        name:'ali',
        age:12
    },{
        id:221,
        name:'reza',
        age:15
    },{
        id:224,
        name:'kamran',
        age:15
    },{
        id:225,
        name:'taher',
        age:20
    }
];

// const mapresult = myarray.map(item=>item.name + ' ' + item.age + ' sale');
// console.log(mapresult);

function convertToNewObject(item,index){
    
        return {
            id:index,
            name:item.name
        }
    
}

//const newmapresult= myarray.map(convertToNewObject).filter(i=> !!i);
// const newmapresult= myarray.filter(item=>item.age > 15).map(convertToNewObject);
// console.log(newmapresult);

const reduceresult = myarray0.reduce((pre,curr)=> pre+curr,0);
console.log(reduceresult);