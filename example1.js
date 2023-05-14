function register(event) {
    event.preventDefault();

    var name = document.getElementById("username").value;

    var email = document.getElementById("useremail").value;

    var password = document.getElementById("userpassword").value;

    var cpassword = document.getElementById("userconfirmpasswoed").value;


    if (name && email && password && cpassword) {
        if (password.length >= 8 && cpassword.length >= 8) {
            if (password == cpassword) {
                var ls = JSON.parse(localStorage.getItem("users")) || [];
                var flag = false;
                for (var i = 0; i < ls.length; i++) {
                    if (ls[i].useremail == email) {
                        flag = true;
                    }
                }

                if (!flag) {
                    var userdata = { username: name, useremail: email, userpassword: password, userconfirmpassword: cpassword }
                    ls.push(userdata);
                    localStorage.setItem("users", JSON.stringify(ls));
                    alert("registration successfull")
                    document.getElementById("username").value = "";
                    document.getElementById("useremail").value = "";
                    document.getElementById("userpasword").value = "";
                    document.getElementById("userconfirmpassword").value = "";

                }
                 else {
                    alert("email already present")
                }

            } else {
                ("password not matched")
            }
        }

        else {
            ("password should br 8 or more digit")
        }

    } else {
        ("all fiels are mandatory")
    }
}
