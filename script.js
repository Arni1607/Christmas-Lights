// javascript 

const circle = document.getElementsByClassName('circle')
const onBtn = document.getElementById('on')
const offBtn = document.getElementById('off')
var len = circle.length;
const title = document.getElementById('title')

const on = function on(){
    for(var i =0; i<len; i++){
        circle[i].removeAttribute("style")
        circle[i].style.animationPlayState = "running";
    }
}

const off = function off(){
        title.style.animation = "none";
        for(var i=0; i<len; i++){
            circle[i].style.animation = "none";
            circle[i].style.background="rgb(79, 20, 99)";
        }
}

onBtn.addEventListener('click', on);
offBtn.addEventListener('click', off);