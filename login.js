function validate () {
    const user=document.getElementById("user").value;
    const pwd=document.getElementById("pwd").value;
    if (user == "Raju" && pwd == "Apple" || user == 'Raja' && pwd == "Mango") 
    {
     alert("Login Successfully")
     
    }
    else {
        alert('login failed')
    }
}