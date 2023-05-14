function register2(event) {
    // alert("registered successfully");
    event.preventDefault();

    var uname = document.getElementById("name").value;

    var uemail = document.getElementById("email").value;

    var upassword = document.getElementById("password").value;

    var uconfirmpassword = document.getElementById("cpassword").value;

    if (uname && uemail && upassword && uconfirmpassword) {
        if (upassword.length >= 8 && uconfirmpassword.length >= 8) {
            if (upassword == uconfirmpassword) {

                var ls = JSON.parse(localStorage.getItem("users")) || [];
                var flag = false;
                for (var i = 0; i < ls.length; i++) {
                    if (ls[i].email == uemail) {
                        flag = true;
                    }
                }

                if (flag == false) {
                    var userlist = { name: uname, email: uemail, paswword: upassword, cpassword: uconfirmpassword }
                    ls.push(userlist);

                    localStorage.setItem("users", JSON.stringify(ls));
                    alert("registration successfull")
                    document.getElementById("name").value = "";
                    document.getElementById("email").value = "";
                    document.getElementById("password").value = "";
                    document.getElementById("cpassword").value = "";
                }else{
                    console.log("user already exist")
                }
            } else {
                console.log("password not matched")
            }
        } else {
            console.log("password should contain 8 digit")
        }
    } else {
        console.log("all fields are mandatory")
    }
}