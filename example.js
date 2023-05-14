function register(event) {
    event.preventDefault();

    var name = document.getElementById("userName").value;

    var email = document.getElementById("userEmail").value;

    var password = document.getElementById("userPassword").value;

    var confirmPassword = document.getElementById("userConfirmPassword").value;


    var userData = { username: name, email: email, password: password, confirmPassword: confirmPassword }



    var ls = JSON.parse(localStorage.getItem("users")) || [];
    console.log(ls);   
    // ls.push(userData)
    // localStorage.setItem("users", JSON.stringify(ls))
    // var flag = false;
    //  for (var i = 0; i < ls.length; i++) {
    //     console.log(ls[i])
    //     if (email == ls[i].email) {
    //         flag = true;
    //         console.log("Matcghed")
    //     }
    // }
    // console.log(flag,"vrushabh")


    // if (name && email && password && confirmPassword) {
    //     if (password.length >= 8 && confirmPassword.length >= 8) {
    //         if (password == confirmPassword) {
    //             // var userData = { username: name, email: email, password: password, confirmPassword: confirmPassword };
    //             // console.log(userData);
    //             // localStorage.setItem("users", JSON.stringify(userData));
    //             var ls = JSON.parse(localStorage.getItem("users")) || [];
    //             flag = false;

    //         }
    //         else {
    //             console.log("Passwords do not match");
    //         }
    //     }
    //     else {
    //         console.log("There should be more than 8 characters");
    //     }
    // }
    // else {
    //     console.log("Please Fill All the fields");
    // }
}

