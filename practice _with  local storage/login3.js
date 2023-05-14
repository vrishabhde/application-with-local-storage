function login3(event) {
    event.preventDefault();
    // console.log();
    // alert("login success");


    var thirdemail = document.getElementById("useremail").value;

    var thirdpassword = document.getElementById("userpassword").value;

    var ls = JSON.parse(localStorage.getItem("third"));
    console.log(ls, "ls");

    var flag = false;
    for (var i = 0; i < ls.length; i++)
        {  console.log(ls[i]);     
        if (ls[i].email == thirdemail && ls[i].paswword == thirdpassword) {
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