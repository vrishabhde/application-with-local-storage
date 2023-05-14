function second(event) {
    // alert("success")

    event.preventDefault()

    var contact = document.getElementById("mobile").value;

    var number = document.getElementById("age").value;

    var birth = document.getElementById("date").value;

    if (contact && number && birth) {
        if (contact.length >= 10) {

            var userdata = { mobile: contact, age: number, date: birth }
            console.log(userdata);

            localStorage.setItem("user", JSON.stringify(userdata));
            JSON.parse("user")
        }
        else {
            console.log("pass length shoild not less than 10 digit");
        }
    }
    else {
        console.log("all fields are mandatory")
    }
}

