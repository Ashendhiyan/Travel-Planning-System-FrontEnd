loadTextFieldValues();

var isMatchUserId = false;
var isMatchUserName = false;
var isMatchUserNic = false;
var isMatchUserAge = false;
var isMatchUserEmail = false;
var isMatchUserTelNo = false;
var isMatchUserAddress = false;


var regExUserID = /^(U00-)[0-9]{3,4}$/

$('#userId').keyup(function () {
    var val = $('#userId').val();
    if (regExUserID.test(val)) {
        $('#userId').css('border', '2px solid green')
        $('#userIdError').text("");
        isMatchUserId = true;
    } else {
        $('#userId').css("border", "2px solid red");
        $('#userIdError').text("wrong format : C00-001");
        isMatchUserId = false;
    }
});


var regExUserName = /^[a-zA-Z]{3,15}$/

$("#name").keyup(function () {
    var name = $("#name").val();
    if (regExUserName.test(name)) {
        $("#name").css("border", "2px solid green");
        $("#userNameError").text("");
        isMatchUserName = true;
    } else {
        $("#name").css("border", "2px solid red");
        $("#userNameError").text("wrong format : A-Z or a-z");
        isMatchUserName = false;
    }
});


const regUserNic = /^([0-9]{12}|[0-9V]{10})$/;

$('#nic').keyup(function () {
    let nic = $('#nic').val();
    if (regUserNic.test(nic)) {
        $('#nic').css("border", "2px solid green");
        $('#userNicError').text("");
        isMatchUserNic = true;
    } else {
        $('#nic').css("border", "2px solid red");
        $('#userNicError').text("wrong format : 0-9V or 0-12");
        isMatchUserNic = false;
    }
});


const regUserAge = /^\d+$/;

$('#age').keyup(function () {
    let age = $('#age').val();
    if (regUserAge.test(age)) {
        $('#age').css("border", "2px solid green");
        $('#userAgeError').text("");
        isMatchUserAge = true;
    } else {
        $('#age').css("border", "2px solid red");
        $('#userAgeError').text("wrong format : 0-9");
        isMatchUserAge = false;
    }
});


const regExUserEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
$("#email").keyup(function () {
    var email = $("#email").val();
    if (regExUserEmail.test(email)) {
        $("#email").css("border", "2px solid green");
        $("#userEmailError").text("");
        isMatchUserEmail = true;
    } else {
        $("#email").css("border", "2px solid red");
        $("#userEmailError").text("wrong format : example@gmail.com");
        isMatchUserEmail = false;
    }
});


var regExUserNumber = /^(?:\+94|0)[1-9]\d{8}$/;

$('#number').keyup(function () {
    let num = $('#number').val();
    if (regExUserNumber.test(num)) {
        $('#number').css("border", "2px solid green");
        $('#userNumberError').text("");
        isMatchUserTelNo = true;
    } else {
        $('#number').css("border", "2px solid red");
        $('#userNumberError').text("wrong format : +94769151600 | 0769151600");
        isMatchUserTelNo = false;
    }

});


var regExUserAddress = /^[a-zA-Z]{3,15}$/

$("#address").keyup(function () {
    var address = $("#address").val();
    if (regExUserAddress.test(address)) {
        $("#address").css("border", "2px solid green");
        $("#userAddressError").text("");
        isMatchUserAddress = true;
    } else {
        $("#address").css("border", "2px solid red");
        $("#userAddressError").text("wrong format : A-Z or a-z");
        isMatchUserAddress = false;
    }
});


function save() {

    if (!isMatchUserId) {
    } else if (!isMatchUserName) {
    } else if (!isMatchUserNic) {
    } else if (!isMatchUserAge) {
    } else if (!isMatchUserEmail) {
    } else if (!isMatchUserTelNo) {
    } else if (!isMatchUserAddress) {
    } else {

        let userId = $('#userId').val();
        let name = $('#name').val();
        let nic = $('#nic').val();
        let nicImage = $('#nicImage')[0].files[0];
        let age = $('#age').val();
        let gender = $('#gender').val();
        let email = $('#email').val();
        let number = $('#number').val();
        let address = $('#address').val();

        $.ajax({
            type: "POST",
            url: "http://localhost:8080/userService/api/v1/customer",
            data: {
                userId: userId, name: name, nic: nic, nicImage: nicImage, age: age,
                gender: gender, email: email, number: number, address:address
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




function update(){

    if (!isMatchUserId) {
    } else if (!isMatchUserName) {
    } else if (!isMatchUserNic) {
    } else if (!isMatchUserAge) {
    } else if (!isMatchUserEmail) {
    } else if (!isMatchUserTelNo) {
    } else if (!isMatchUserAddress) {
    } else {

        let userId = $('#userId').val();
        let name = $('#name').val();
        let nic = $('#nic').val();
        let nicImage = $('#nicImage')[0].files[0];
        let age = $('#age').val();
        let gender = $('#gender').val();
        let email = $('#email').val();
        let number = $('#number').val();
        let address = $('#address').val();

        $.ajax({
            type: "PUT",
            url: "http://localhost:8080/userService/api/v1/customer",
            data: {
                userId: userId, name: name, nic: nic, nicImage: nicImage, age: age,
                gender: gender, email: email, number: number, address:address
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
    let userId = $('#userId').val();
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/userService/api/v1/customer" + userId,
        success: function (response) {
            $('#userId').val(response.userId);
            $('#name').val(response.name);
            $('#nic').val(response.nic);
            $('#age').val(response.age);
            $('#gender').val(response.gender);
            $('#email').val(response.email);
            $('#number').val(response.number);
            $('#address').val(response.address);
        },
        error: (error) => {
            console.log(error)
            $('#userId').val("");
            $('#name').val("");
            $('#nic').val("");
            $('#age').val("");
            $('#gender').val("");
            $('#email').val("");
            $('#number').val("");
            $('#address').val("");
            alert("User Not Found..!");
        }
    })
}


function Delete() {
    let userId = $('#userId').val();
    $.ajax({
        type: "DELETE",
        url: "http://localhost:8080/userService/api/v1/customer" + userId,
        success: (response) => {
            alert("Delete Success..!")
            getAll()
        },

        error: function (error) {
            alert("Id not found or can't delete User")
        }
    })
}



function getAll() {
    $('#tBody').empty();
    $.ajax({
        type: "Get",
        url: "http://localhost:8080/userService/api/v1/customer",
        headers:{
            "Authorization":"Bearer "+localStorage.getItem('jwt')
        },
        success: (response) => {
            response?.map(
                (data) => {
                    let row = `<tr><td>${data.userId}</td><td>${data.name}</td><td>${data.nic}</td><td>${data.age}</td><td>${data.gender}</td><td>${data.email}</td>
                                        <td>${data.number}</td><td>${data.address}</td></tr>`;
                    $('#tBody').append(row);
                }
            )
        },

        error: function (error) {
            alert("User Not Found..")
        }
    })
    loadTextFieldValues();
}



function loadTextFieldValues() {
    $("#tBody>tr").on("click", function () {
        let user_id = $(this).children().eq(0).text();
        let user_Name = $(this).children().eq(1).text();
        let user_Nic = $(this).children().eq(2).text();
        let user_Age = $(this).children().eq(3).text();
        let user_Gender = $(this).children().eq(4).text();
        let user_Email = $(this).children().eq(5).text();
        let user_Number = $(this).children().eq(6).text();
        let user_Address = $(this).children().eq(7).text();


        $('#userId').val(user_id);
        $('#name').val(user_Name);
        $('#nic').val(user_Nic);
        $('#age').val(user_Age);
        $('#gender').val(user_Gender);
        $('#email').val(user_Email);
        $('#number').val(user_Number);
        $('#address').val(user_Address);

    });
}