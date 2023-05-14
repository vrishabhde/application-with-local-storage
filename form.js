function register(event){
    // alert("registration success")
    event.preventDefault();
    var text = document.getElementById("text").value;
    console.log(text, "name here")
    
    var email = document.getElementById("email").value;
    console.log(email, "email here")

    var number = ducument.getElementById("number").value;
    console.log(number, "number here")

    var password = document.getElementById("password").value;
    console.log(password, "password here")

    var confirmpassword = document.getElementById("confirm password").value;
    console.log(confirmpassword, "confirm password here")
}

    // if(text, email, number, password, confirmpassword){
    //     console.log()
    // }
    // if(password.length >= 8 && confirmpassword >=8){
    //     if(password == confirmpassword){
    //         var userdata = {"text":"text here", "email":"email here", "password": "password here", "confirmpassword":"confirmpassword here" }
    //             console.log(userdata,"userdata")
                // localstorage.setItem("text",JSON.stringify(userdata))
                // JSON.stringify();convert = objects into JSON
                // JSON.parse();conver = Json into objects


        
//         console.log("password here")
//     }
// } 

// }
