
function save() {

    let customerId = $('#customerId').val();
    let name = $('#name').val();
    let email = $('#email').val();
    let address = $('#address').val();
    let nic = $('#nic').val();
    let username = $('#username').val();
    let password = $('#password').val();
    let profilePic = $('#profilePic').val();

    $.ajax({
        type: "POST",
        url: "http://localhost:8080/userService/api/v1/customer",
        data: {customerId: customerId, name: name, email: email, address:address, nic: nic,
            username: username, password: password, profilePic: profilePic
        },
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


function update() {

    let customerId = $('#customerId').val();
    let name = $('#name').val();
    let email = $('#email').val();
    let address = $('#address').val();
    let nic = $('#nic').val();
    let username = $('#username').val();
    let password = $('#password').val();
    let profilePic = $('#profilePic').val();


    $.ajax({
        type: "PUT",
        url: "http://localhost:8080/userService/api/v1/customer",
        data: {customerId: customerId, name: name, email: email, address:address, nic: nic,
            username: username, password: password, profilePic: profilePic
        },
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


function search() {
    let customerId = $('#customerId').val();
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/userService/api/v1/customer" + customerId,
        success: function (response) {
            $('#customerId').val(response.customerId);
            $('#name').val(response.name);
            $('#email').val(response.email);
            $('#address').val(response.address);
            $('#nic').val(response.nic);
            $('#username').val(response.username);
            $('#password').val(response.password);
            $('#profilePic').val(response.profilePic);
        },
        error: (error) => {
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

function Delete() {
    let customerId = $('#customerId').val();
    $.ajax({
        type: "DELETE",
        url: "http://localhost:8080/userService/api/v1/customer" + customerId,
        success: (response) => {
            alert("Delete Success..!")
            getAll()
        },

        error: function (error) {
            alert("Id not found or can't delete Customer")
        }
    })
}


function getAll() {
    $('#tBody').empty();
    $.ajax({
        type: "Get",
        url: "http://localhost:8080/userService/api/v1/customer",
        success: (response) => {
            response?.map(
                (data) => {
                    let row = `<tr><td>${data.customerId}</td><td>${data.name}</td><td>${data.address}</td><td>${data.email}</td><td>${data.address}</td><td>${data.nic}</td>
                                        <td>${data.username}</td><td>${data.password}</td><td>${data.profilePic}</td></tr>`;
                    $('#tBody').append(row);
                }
            )
        },

        error: function (error) {
            alert("Guide Not Found..")
        }
    })
}
