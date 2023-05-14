function login2(event) {
    event.preventDefault();
    // console.log();
    // alert("login success");


    var useremail = document.getElementById("uemail").value;

    var userpassword = document.getElementById("upassword").value;

    var ls = JSON.parse(localStorage.getItem("users"));
    console.log(ls, "ls");

    var flag = false;
    for (var i = 0; i < ls.length; i++)
        {  console.log(ls[i]);     
        if (ls[i].email == useremail && ls[i].paswword == userpassword) {
            console.log("email matched here")
            flag=true;  
        }

    }

    if (flag == true) {
        alert("login successfull")
    }else{
       alert ("credential wrong");
    }

}