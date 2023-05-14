function register4(event) {
    // alert("registered successfully");
    event.preventDefault();

    var fname = document.getElementById("forthname").value;

    var femail = document.getElementById("forthemail").value;

    var fpassword = document.getElementById("forthpassword").value;

    var fconfirmpassword = document.getElementById("forthcpassword").value;

    if (fname && femail && fpassword && fconfirmpassword) {
        if (fpassword.length >= 8 && fconfirmpassword.length >= 8) {
            if (fpassword == fconfirmpassword) {

                var ls = JSON.parse(localStorage.getItem("forth")) || [];
                var flag = false;
                for (var i = 0; i < ls.length; i++) {
                    if (ls[i].email == femail) {
                        flag = true;
                    }
                }

                if (flag == false) {
                    var listuser = { name: fname, email: femail, paswword: fpassword, cpassword: fconfirmpassword }
                    ls.push(listuser);

                    localStorage.setItem("forth", JSON.stringify(ls));
                    alert("registration successfull")
                    document.getElementById("forthname").value = "";
                    document.getElementById("forthemail").value = "";
                    document.getElementById("forthpassword").value = "";
                    document.getElementById("forthcpassword").value = "";
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