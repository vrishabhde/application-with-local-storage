function login5(event) {
    event.preventDefault();
    // console.log();
    // alert("login success");


    var infoemail = document.getElementById("fifthemail").value;

    var infopassword = document.getElementById("fifthpassword").value;

    var ls = JSON.parse(localStorage.getItem("fifth"));
    console.log(ls, "ls");

    var flag = false;
    for (var i = 0; i < ls.length; i++)
        {  console.log(ls[i]);     
        if (ls[i].email == infoemail && ls[i].paswword == infopassword) {
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