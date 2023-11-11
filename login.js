const username =document.querySelector(".input-user");
const password= document.querySelector(".input-pass");
const btnlogin=document.querySelector(".button__box");

btnlogin.addEventListener("click",(e) =>{
    e.preventDefault();
    if(
        username.value===""||password.value===""
    ){
        alert("khong duoc de trong");
    }
    else{
        const user=JSON.parse(localStorage.getItem(username.value));
        if(
            user.username===username.value &&
            user.password===password.value )
            {
                alert("Dang nhap thanh cong");
                window.location.href="index.html";
            }
            else{
                alert("Dang nhap that bai");
            }
    
    }
});