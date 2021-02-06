// const rootNode  = document.getElementById('root');

// const level1 = document.getElementById('level1');

// const level2 = document.createElement('div');
// level2.id='level2';

// rootNode.replaceChild(level2,level1);

// rootNode.removeChild(level2);

// const data = [
//     {name:'alireza',likeCount:12,postCount:1},
//     {name:'hamidreza',likeCount:2,postCount:2},
//     {name:'mohamadreza',likeCount:120,postCount:10},
//     {name:'gholamreza',likeCount:1,postCount:34},
// ];

// const x = data.indexOf(data[1])
// console.log(x);


// const rootNode = document.getElementById('root');
// //rootNode.onclick = handleRootClick;
// rootNode.addEventListener('click',handleRootClick);
// rootNode.addEventListener('click',handleRootClick2);

// function handleRootClick(){
//     console.log('clicked');
// }

// function handleRootClick2(){
//     console.log('clicked2');
// }


const inputNode = document.getElementById('inputNode');
const buttonNode = document.getElementById('btnSearch');

function mouseOverHandler(){
    inputNode.style.backgroundColor = 'yellow';
}

inputNode.addEventListener('mouseover',mouseOverHandler);

inputNode.addEventListener('mouseout',function(){
    inputNode.style.backgroundColor = 'unset';
});

inputNode.addEventListener('focus',function(){
    inputNode.style.backgroundColor = 'lightblue';
});

buttonNode.addEventListener('click',function(){
    const newNode = document.createElement('div');
    newNode.innerText = inputNode.value;
    document.body.appendChild(newNode);
    if (inputNode.value === "rm"){
        inputNode.removeEventListener('mouseover',mouseOverHandler)
    }
    inputNode.value = "";
})

inputNode.addEventListener('change',function(e){
    console.log(e.target.value);
});

inputNode.addEventListener('keypress',function(e){
    console.log(e.target.value);
});