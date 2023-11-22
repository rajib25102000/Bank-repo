document.getElementById('btn-submite').addEventListener('click',function(){
    const userEmail = document.getElementById('user-email');
    const email = userEmail.value;
    userEmail.value="";
    const userPassword = document.getElementById('user-password');
    const pass = userPassword.value;
    userPassword.value='';
    
    if(email ==='rajibmia1025@gmail.com' && pass ==='rajib'){
        window.location.href='bank.html'
    }else{
        alert('Please enter the valide information');
    }
})