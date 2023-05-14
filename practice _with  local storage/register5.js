function register5(event) {
    // alert("registered successfully");
    event.preventDefault();

    var infoname = document.getElementById("fifthname").value;

    var infoemail = document.getElementById("fifthemail").value;

    var infopassword = document.getElementById("fifthpassword").value;

    var infoconfirmpassword = document.getElementById("fifthcpassword").value;

    if (infoname && infoemail && infopassword && infoconfirmpassword) {
        if (infopassword.length >= 8 && infoconfirmpassword.length >= 8) {
            if (infopassword == infoconfirmpassword) {

                var ls = JSON.parse(localStorage.getItem("fifth")) || [];
                var flag = false;
                for (var i = 0; i < ls.length; i++) {
                    if (ls[i].email == infoemail) {
                        flag = true;
                    }
                }

                if (flag == false) {
                    var userinfo = { name: infoname, email: infoemail, paswword: infopassword, cpassword: infoconfirmpassword }
                    ls.push(userinfo);

                    localStorage.setItem("fifth", JSON.stringify(ls));
                    alert("registration successfull")
                    document.getElementById("fifthname").value = "";
                    document.getElementById("fifthemail").value = "";
                    document.getElementById("fifthpassword").value = "";
                    document.getElementById("fifthcpassword").value = "";
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