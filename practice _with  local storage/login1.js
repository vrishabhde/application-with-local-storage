function login(event) {
    event.preventDefault();
    // console.log();
    // alert("login success");


    var uemail = document.getElementById("email").value;

    var upassword = document.getElementById("password").value;

    var ls = JSON.parse(localStorage.getItem("user"));
    console.log(ls, "ls");

    var flag = false;
    for (var i = 0; i < ls.length; i++)
        {  console.log(ls[i]);     
        if (ls[i].email == uemail && ls[i].paswword == upassword) {
            console.log("email matched")
            flag=true;  
        }

    }

    if (flag == true) {
        alert("login successfull")
    }else{
       alert ("credential wrong");
    }

}