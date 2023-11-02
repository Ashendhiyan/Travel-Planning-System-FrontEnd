getAll();

var isMatchCustomerId = false;
var isMatchCustomerName = false;
var isMatchCustomerEmail = false;
var isMatchCustomerAddress = false;
var isMatchCustomerNic = false;
var isMatchCustomerUserName = false;
var isMatchCustomerPassword = false;


var regExCustomerID = /^(C00-)[0-9]{3,4}$/

$('#customerId').keyup(function () {
    var val = $('#customerId').val();
    if (regExCustomerID.test(val)) {
        $('#customerId').css('border', '2px solid green')
        $('#customerIdError').text("");
        isMatchCustomerId = true;
    } else {
        $('#customerId').css("border", "2px solid red");
        $('#customerIdError').text("wrong format : C00-001");
        isMatchCustomerId = false;
    }
});



var regExCustomerName = /^[a-zA-Z]{3,15}$/

$("#name").keyup(function () {
    var name = $("#name").val();
    if (regExCustomerName.test(name)) {
        $("#name").css("border", "2px solid green");
        $("#customerNameError").text("");
        isMatchCustomerName = true;
    } else {
        $("#name").css("border", "2px solid red");
        $("#customerNameError").text("wrong format : A-Z or a-z");
        isMatchCustomerName = false;
    }
});


const regExCustomerEmail=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
$("#email").keyup(function () {
    var email = $("#email").val();
    if (regExCustomerEmail.test(email)) {
        $("#email").css("border", "2px solid green");
        $("#customerEmailError").text("");
        isMatchCustomerEmail = true;
    } else {
        $("#email").css("border", "2px solid red");
        $("#customerEmailError").text("wrong format : example@gmail.com");
        isMatchCustomerEmail = false;
    }
});



var regExCustomerAddress = /^[a-zA-Z]{3,25}$/;
$('#address').keyup(function (){
    let address = $('#address').val();
    if (regExCustomerAddress.test(address)){
        $('#address').css("border", "2px solid green");
        $('#customerAddressError').text("");
        isMatchCustomerAddress=true;
    }else {
        $('#address').css("border", "2px solid red");
        $('#customerAddressError').text("wrong format : a-z or A-Z");
        isMatchCustomerAddress=false;
    }

});



const regCustomerNic=/^([0-9]{12}|[0-9V]{10})$/;

$('#nic').keyup(function (){
    let nic = $('#nic').val();
    if (regCustomerNic.test(nic)){
        $('#nic').css("border", "2px solid green");
        $('#customerNicError').text("");
        isMatchCustomerNic=true;
    }else {
        $('#nic').css("border", "2px solid red");
        $('#customerNicError').text("wrong format : 0-9V or 0-12");
        isMatchCustomerNic=false;
    }

});




var regExCustomerUserName = /^[a-zA-Z]{3,15}$/

$("#username").keyup(function () {
    var name = $("#username").val();
    if (regExCustomerUserName.test(name)) {
        $("#username").css("border", "2px solid green");
        $("#customerUserNameError").text("");
        isMatchCustomerUserName = true;
    } else {
        $("#username").css("border", "2px solid red");
        $("#customerUserNameError").text("wrong format : A-Z or a-z");
        isMatchCustomerUserName = false;
    }
});



var regExCustomerPassword = /^([A-Z a-z]{5,15}[0-9]{1,10})$/;

$("#password").keyup(function () {
    var password = $("#password").val();
    if (regExCustomerPassword.test(password)) {
        $("#password").css("border", "2px solid green");
        $("#customerPassWordError").text("");
        isMatchCustomerPassword = true;
    } else {
        $("#password").css("border", "2px solid red");
        $("#customerPassWordError").text("wrong format : example123  or EXAMPLE123");
        isMatchCustomerPassword = false;
    }
});



function save() {

    if (!isMatchCustomerId) {
    } else if (!isMatchCustomerName) {
    } else if (!isMatchCustomerEmail) {
    } else if (!isMatchCustomerAddress){
    } else if (!isMatchCustomerNic){
    }else if (!isMatchCustomerUserName){
    }else if (!isMatchCustomerPassword){
    }else {

        let customerId = $('#customerId').val();
        let name = $('#name').val();
        let email = $('#email').val();
        let address = $('#address').val();
        let nic = $('#nic').val();
        let username = $('#username').val();
        let password = $('#password').val();
        let profilePic = $('#profilePic')[0].files[0];

        $.ajax({
            type: "POST",
            url: "http://localhost:8080/userService/api/v1/customer",
            data: {customerId: customerId, name: name, email: email, address:address, nic: nic,
                username: username, password: password, profilePic: profilePic
            },
            success: (response) => {
                console.log(response)
                getAll()
            },

            error: function (error) {
                console.log(error)
            }
        })
    }
}


function update() {

    if (!isMatchCustomerId) {
    } else if (!isMatchCustomerName) {
    } else if (!isMatchCustomerEmail) {
    } else if (!isMatchCustomerAddress){
    } else if (!isMatchCustomerNic){
    }else if (!isMatchCustomerUserName){
    }else if (!isMatchCustomerPassword){
    }else {
        let customerId = $('#customerId').val();
        let name = $('#name').val();
        let email = $('#email').val();
        let address = $('#address').val();
        let nic = $('#nic').val();
        let username = $('#username').val();
        let password = $('#password').val();
        let profilePic = $('#profilePic')[0].files[0];


        $.ajax({
            type: "PUT",
            url: "http://localhost:8080/userService/api/v1/customer",
            data: {customerId: customerId, name: name, email: email, address:address, nic: nic,
                username: username, password: password, profilePic: profilePic
            },
            success: (response) => {
                console.log(response)
                getAll()
            },

            error: function (error) {
                console.log(error)
            }
        })
    }
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
                                        <td>${data.username}</td><td>${data.password}</td></tr>`;
                    $('#tBody').append(row);
                }
            )
        },

        error: function (error) {
            alert("Customer Not Found..")
        }
    })
    loadTextFieldValues();
}



function loadTextFieldValues() {
    $("#tBody>tr").on("click", function () {
        let customer_id = $(this).children().eq(0).text();
        let customer_Name = $(this).children().eq(1).text();
        let customer_Email = $(this).children().eq(2).text();
        let customer_Address = $(this).children().eq(3).text();
        let customer_Nic = $(this).children().eq(4).text();
        let customer_Username = $(this).children().eq(5).text();
        let customer_Password = $(this).children().eq(6).text();


        $("#customerId").val(customer_id);
        $("#name").val(customer_Name);
        $("#email").val(customer_Email);
        $("#address").val(customer_Address);
        $("#nic").val(customer_Nic);
        $("#username").val(customer_Username);
        $("#password").val(customer_Password);
    });
}