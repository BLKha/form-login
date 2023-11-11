const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const comment = document.querySelector('#list-comment');
const commentItem = document.querySelectorAll('#list-comment .item');

var translateY =0;
var count = commentItem.length;


next.addEventListener('click',function (event) {
    event.preventDefault()
    if(count==1){
        return false;
    }
    translateY += -350
    comment.style.transform = `translateY(${translateY}px)`;
    count--
})
prev.addEventListener('click',function (event) {
    event.preventDefault()
    if(count==3){
        return false;
    }
    translateY += +350
    comment.style.transform = `translateY(${translateY}px)`;
    count++;
})
const user = document.querySelector('.item1');
const login = document.querySelector('#login-box');
const overlay = document.querySelector("#overlay");
 user.addEventListener("click", ()=>{
    user.classList.toggle("open");
    login.classList.toggle("login__open");
    overlay.classList.toggle("show");
});

overlay.addEventListener("click", ()=>{
    user.classList.toggle("open");
    login.classList.toggle("login__open");
    overlay.classList.toggle("show");
});
function changeTypePass(){
let password = document.getElementById('password');
password.type = password.type == 'text' ? 'password' : 'text';
}
// box-SIGUP

const login2 = document.querySelector('#signup');
const signup = document.querySelector('#sign-up');
 login2.addEventListener("click", ()=>{
    login2.classList.toggle("open");
    signup.classList.toggle("signup-open");
});