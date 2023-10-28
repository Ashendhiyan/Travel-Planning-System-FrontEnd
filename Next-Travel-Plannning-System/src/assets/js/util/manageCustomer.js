let customerId = $('#customerId').val();
let name = $('#name').val();
let email = $('#email').val();
let address = $('#address').val();
let nic = $('#nic').val();
let username = $('#username').val();
let password = $('#password').val();
let profilePic = $('#profilePic').val();

let formData = new FormData;

formData.append("customerId",customerId);
formData.append("name",name);
formData.append("email",email);
formData.append("address",address);
formData.append("nic",nic);
formData.append("username",username);
formData.append("password",password);
formData.append("profilePic",profilePic);

function save(){
    $.ajax({
        type: "POST",
        url: "http://localhost:8080/userService/api/v1/customer",
        data: formData,
        contentType: false,
        processData: false,
        success: (response) => {
            console.log(response)
            getAll()
        },

        error: function (error) {
            console.log(error)
        }
    })
}


function update(){
    $.ajax({
        type: "PUT",
        url: "http://localhost:8080/userService/api/v1/customer",
        data: formData,
        contentType: false,
        processData: false,
        success: (response) => {
            console.log(response)
            getAll()
        },

        error: function (error) {
            console.log(error)
        }
    })
}


function search(){
    $.ajax({
        type:"GET",
        url: "http://localhost:8080/userService/api/v1/customer"+customerId,
        success:(response) => {
            $('#customerId').val(response.get(customerId));
            $('#name').val(response.get(name));
            $('#email').val(response.get(email));
            $('#address').val(response.get(address));
            $('#nic').val(response.get(nic));
            $('#username').val(response.get(username));
            $('#password').val(response.get(password));
            $('#profilePic').val(response.get(profilePic));
        },
        error:(error) => {
            console.log(error)
            $('#customerId').val("");
            $('#name').val("");
            $('#email').val("");
            $('#address').val("");
            $('#nic').val("");
            $('#username').val("");
            $('#password').val("");
            $('#profilePic').val("");
            alert("Customer Not Found..!");
        }
    })
}