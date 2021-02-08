const rootElement = document.getElementById('root');
rootElement.style.width="200px"
rootElement.style.height="200px"
rootElement.style.backgroundColor="red"
const level1 = document.getElementById('level1');
const level2 = document.getElementById('level2');


rootElement.addEventListener('click',(e)=>{
    e.stopPropagation();
    console.log('root');
});
level1.addEventListener('click',(e)=>{
    
    console.log('level1');
});
level2.addEventListener('click',(e)=>{
    console.log('level2');
});
