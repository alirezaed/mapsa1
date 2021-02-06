const rootElement = document.getElementById('root');
rootElement.style.width="200px"
rootElement.style.height="200px"
rootElement.style.backgroundColor="red"
const level1 = document.getElementById('level1');
level1.style.width="200px"
level1.style.height="200px"
const level2 = document.getElementById('level2');
level2.style.width="200px"
level2.style.height="200px"

rootElement.addEventListener('click',(e)=>{
    console.log('root');
});
level1.addEventListener('click',(e)=>{
    
    console.log('level1');
});
level2.addEventListener('click',(e)=>{
    console.log('level2');
});
