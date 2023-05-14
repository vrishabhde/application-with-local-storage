function second(event) {
    // alert("success")

    event.preventDefault()

    var mail = document.getElementById("email").value;

    var p = document.getElementById("password").value;

    var cp = document.getElementById("cpassword").value;

    var contact = document.getElementById("mobile").value;

    var number = document.getElementById("age").value;

    var birth = document.getElementById("date").value;

    if (mail && p && cp && contact && number && birth) {
        if (p.length >= 10 && cp.length >= 10) {
            if (p == cp) {
                if (contact.length >= 10) {
                    var userdata = { mail: mail, p: p, cp: cp, mobile: contact, age: number, date: birth }
                    console.log(userdata);

                    localStorage.setItem("user3", JSON.stringify(userdata));
                    JSON.parse("user")
                }
                else {
                    console.log("contact number should have 10 digit");
                }
            }
            else {
                console.log("password not match");

            }
        }
        else {
            console.log("password should have 10 digit");

        }
    }
    else {
        console.log("all fields are mandatory");

    }
}
