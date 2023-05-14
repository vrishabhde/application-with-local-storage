function register1(event) {
    // alert("registered successfully");
    event.preventDefault();

    var name = document.getElementById("uname").value;

    var email = document.getElementById("uemail").value;

    var password = document.getElementById("upassword").value;

    var confirmpassword = document.getElementById("ucpassword").value;

    if (name && email && password && confirmpassword) {
        if (password.length >= 8 && confirmpassword.length >= 8) {
            if (password == confirmpassword) {

                var ls = JSON.parse(localStorage.getItem("user")) || [];
                var flag = false;
                for (var i = 0; i < ls.length; i++) {
                    if (ls[i].email == email) {
                        flag = true;
                    }
                }

                if (flag == false) {
                    var userdata = { name: name, email: email, paswword: password, cpassword: confirmpassword }
                    ls.push(userdata);

                    localStorage.setItem("user", JSON.stringify(ls));
                    alert("registration successfull")
                    document.getElementById("uname").value = "";
                    document.getElementById("uemail").value = "";
                    document.getElementById("upassword").value = "";
                    document.getElementById("ucpassword").value = "";
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