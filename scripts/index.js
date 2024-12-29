const api="";
const signupBtn =document.getElementById('signup-btn');
const loginBtn=document.getElementById('login-btn');
signupBtn.addEventListener('click',()=>{
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    fetch(api,{
        method:'POST',
        headers:{
            'Content-Type':
            'application/json'
        },
        body:JSON.stringify({email,password}),
    }).then(response=>
        response.json()).then(data=>
            alert('Signup Successful!'));
});
loginBtn.addEventListener('click',()=>{
    const email=document.getElementById('login-email').value;
    const password=document.getElementById('login-password').value;
     fetch(api).then(response=>response.json())
     .then(users=>{
        const user=users.find(user=>
            user.email ===email &&
            user.password===password);
            if(user){
                alert('Login Successful!');
                localStorage.setItem('user',JSON.stringify(user));
                window.location.href='dashboard.html';
            }
            else{
                alert('Invalid Credentials!');
            }
        
     });
});