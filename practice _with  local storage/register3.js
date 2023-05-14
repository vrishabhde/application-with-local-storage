function register3(event) {
    // alert("registered successfully");
    event.preventDefault();

    var thirdname = document.getElementById("username").value;

    var thirdemail = document.getElementById("useremail").value;

    var thirdpassword = document.getElementById("userpassword").value;

    var thirdconfirmpassword = document.getElementById("usercpassword").value;

    if (thirdname && thirdemail && thirdpassword && thirdconfirmpassword) {
        if (thirdpassword.length >= 8 && thirdconfirmpassword.length >= 8) {
            if (thirdpassword == thirdconfirmpassword) {

                var ls = JSON.parse(localStorage.getItem("third")) || [];
                var flag = false;
                for (var i = 0; i < ls.length; i++) {
                    if (ls[i].email == thirdemail) {
                        flag = true;
                    }
                }

                if (flag == false) {
                    var thirdlist = { name: thirdname, email: thirdemail, paswword: thirdpassword, cpassword: thirdconfirmpassword }
                    ls.push(thirdlist);

                    localStorage.setItem("third", JSON.stringify(ls));
                    alert("registration successfull")
                    document.getElementById("username").value = "";
                    document.getElementById("useremail").value = "";
                    document.getElementById("userpassword").value = "";
                    document.getElementById("usercpassword").value = "";
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