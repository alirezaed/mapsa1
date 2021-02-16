// const student={
//     fathername:'gholamreza',
//     age:22
// }

// const success = delete student.age;
// console.log(student);


// // for(propery in student){
// //     console.log(propery + ':' + student[propery]);
// // }


const arr=['golabi','shalil','kivi']

// for(mive of arr){
//     console.log(mive);
// }


try{
    console.log('start try')
    arr();
    console.log('end try')
}catch(e){

    console.log('catch')
    console.log(e)

}finally{
    console.log('finaly')
}


function ff(){
    try{
        console.log('start try')
        console.log('end try')
        return 2;
    }catch(e){
    
        console.log('catch')
        console.log(e)
    
    }finally{
        console.log('finaly')
    }
}
console.log(ff());
console.log('after error');