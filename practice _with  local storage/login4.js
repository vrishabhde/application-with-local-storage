function login4(event) {
    event.preventDefault();
    // console.log();
    // alert("login success");


    var femail = document.getElementById("forthemail").value;

    var fpassword = document.getElementById("forthpassword").value;

    var ls = JSON.parse(localStorage.getItem("forth"));
    console.log(ls, "ls");

    var flag = false;
    for (var i = 0; i < ls.length; i++)
        {  console.log(ls[i]);     
        if (ls[i].email == femail && ls[i].paswword == fpassword) {
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