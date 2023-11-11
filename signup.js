const username = document. querySelector(".input-username");
const email= document.querySelector(".input-email");
const password= document.querySelector(".input-password");
const btn= document.querySelector(".submit");


btn.addEventListener("click",(e)=>{
    e.preventDefault();
    if(
        username.value=== ""||
        email.value===""||
        password.value===""
    ){
        alert("Vui long khong de trong");
    }
    else{
        const user={
            username:username.value,
            password:password.value,
            email:email.value,
        };
        let json =JSON.stringify(user);
        localStorage.setItem(username.value,json);
        alert("Dang ki thanh cong");
        window.location.href="login.html";
    }
});

