// console.log('this is first line');

// const promise = new Promise((resolve,reject)=>{

//     setTimeout(() => {
//         console.log('start timeout function');
//         reject('error sample');
//     }, 3000);

//     console.log('promise body');
    
// });
// console.log('this is after promis');

// // setTimeout(() => {
// //     console.log('start outer timeout function');
// // }, 3000);

// promise
//     .then(data=> console.log('then' , data))
//     .catch(error => console.log('error' , error))
//     .finally(()=>console.log('finnaly'));

// fetch()

//string ==> object js
//js object ==> string

// const data={
//     pageIndex:1,
//     pageSize:20
// }

// const datastr = JSON.stringify(data);
// console.log(datastr);

// const backtoobj = JSON.parse(datastr);
// console.log(backtoobj);

// const strinput = '{"name:"ahmadreza","age":90,"date":"2020-2-20"}';
// const newobj = JSON.parse(strinput);
// console.log(newobj);

//api: getPagedListPhotos (datastr)
console.log('before fetch')
fetch('https://jsonplaceholder.typicode.com/photos')
    .then(data=>{
        console.log('first then')
        console.log(data);
        return data.json();
    }).then(data2=>{
        console.log('second then')
        const root = document.getElementById('root');
        data2.forEach((item,index)=>{
            const container = document.createElement('div');
            const image = document.createElement('img');
            image.src = item.thumbnailUrl;
            container.appendChild(image)
            root.appendChild(container);
            
        })

        
    }).catch(err => console.log(err))
console.log('after fetch')


//Request Method
//Get
//Post
//Put
//Patch
//Delete
//..