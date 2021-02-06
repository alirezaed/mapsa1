//DOM 
const el1 = document.getElementById('first');

el1.innerHTML = "this is a first div in html";


const tagNames = document.getElementsByTagName('div');
console.log(tagNames);
tagNames[2].innerHTML = "FIRST"

const byclass = document.getElementsByClassName('second-class');
byclass[0].id = "11";
byclass[0].style.border = "2px solid blue";
byclass[1].style.border = "2px solid red";

byclass[1].setAttribute('havij','yyy');

const selector = document.querySelectorAll('.asd > div');

const span = document.createElement('span');
span.style.backgroundColor = 'lightblue';
span.textContent = "HI <br /> Everyone"
byclass[1].appendChild(span);

byclass[1].removeChild(span);

document.write('asdasd<br/>asd')


////
const data = [
    {name:'alireza',likeCount:12,postCount:1},
    {name:'hamidreza',likeCount:2,postCount:2},
    {name:'mohamadreza',likeCount:120,postCount:10},
    {name:'gholamreza',likeCount:1,postCount:34},
];