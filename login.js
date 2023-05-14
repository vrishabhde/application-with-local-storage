function login(event) {
    event.preventDefault();
    // console.log();
    // alert("login success");

    // Step:1 get users typed data from html to JSON. = completed.
    // step:2 get all user data into js from ls = completed.
    // step:3 iterate all users

    var uemail = document.getElementById("uemail").value;

    var upassword = document.getElementById("upassword").value;  

    var ls = JSON.parse(localStorage.getItem("user"));
    // console.log(ls, "ls");

    var currentuser;
    var flag = false;
    for (var i = 0; i < ls.length; i++) {
        //  console.log(ls[i]);
        if (ls[i].email == uemail && ls[i].paswword == upassword) {
            // console.log("email matched")
            flag = true;
            currentuser = ls[i];
        }
    }
    if (flag == true) {
        console.log(currentuser, "currentuser");
        localStorage.setItem("currentuser", JSON.stringify(currentuser))
        window.location.href = './home.html';
        alert("login successfull")
    } else {
        alert("credential wrong");
    }

}


// step1: once we got matched Credential, save that user as currentuser in localStorage
// step2: now save this currentuser into localStorage.
// step3: redirect user to homepage. 