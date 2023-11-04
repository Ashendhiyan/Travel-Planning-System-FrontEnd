getAll();


var isMatchHotelId = false;
var isMatchHotelName = false;
var isMatchHotelTelNo = false;
var isMatchHotelCancel = false;
var isMatchHotelFee = false;
var isMatchHotelEmail = false;


var regExHotelID = /^(H00-)[0-9]{3,4}$/

$('#hotelId').keyup(function () {
    var val = $('#hotelId').val();
    if (regExHotelID.test(val)) {
        $('#hotelId').css('border', '2px solid green')
        $('#HotelIdError').text("");
        isMatchHotelId = true;
    } else {
        $('#hotelId').css("border", "2px solid red");
        $('#HotelIdError').text("wrong format : H00-001");
        isMatchHotelId = false;
    }
});


var regExHotelName = /^[a-zA-Z]{3,15}$/

$("#hotelName").keyup(function () {
    var name = $("#hotelName").val();
    if (regExHotelName.test(name)) {
        $("#hotelName").css("border", "2px solid green");
        $("#HotelNameError").text("");
        isMatchHotelName = true;
    } else {
        $("#hotelName").css("border", "2px solid red");
        $("#HotelNameError").text("wrong format : A-Z or a-z");
        isMatchHotelName = false;
    }
});


var regExHotelNumber = /^(?:\+94|0)[1-9]\d{8}$/;

$('#hotelContactNumber').keyup(function () {
    let num = $('#hotelContactNumber').val();
    if (regExHotelNumber.test(num)) {
        $('#hotelContactNumber').css("border", "2px solid green");
        $('#HotelTelNoError').text("");
        isMatchHotelTelNo = true;
    } else {
        $('#hotelContactNumber').css("border", "2px solid red");
        $('#HotelTelNoError').text("wrong format : +94769151600 | 0769151600");
        isMatchHotelTelNo = false;
    }

});


var regExHotelCancel = /^[a-zA-Z]{3,15}$/

$("#cancelCriteria").keyup(function () {
    var name = $("#cancelCriteria").val();
    if (regExHotelCancel.test(name)) {
        $("#cancelCriteria").css("border", "2px solid green");
        $("#HotelCancelError").text("");
        isMatchHotelCancel = true;
    } else {
        $("#cancelCriteria").css("border", "2px solid red");
        $("#HotelCancelError").text("wrong format : A-Z or a-z");
        isMatchHotelCancel = false;
    }
});


const HotelFee = /^[0-9.]{2,10}$/;
$("#hotelFee").keyup(function () {
    var fee = $("#hotelFee").val();
    if (HotelFee.test(fee)) {
        $("#hotelFee").css("border", "2px solid green");
        $("#HotelFeeError").text("");
        isMatchHotelFee = true;
    } else {
        $("#hotelFee").css("border", "2px solid red");
        $("#HotelFeeError").text("wrong format :  100.00 or 100");
        isMatchHotelFee = false;
    }
});


const regExHotelEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
$("#email").keyup(function () {
    var email = $("#email").val();
    if (regExHotelEmail.test(email)) {
        $("#email").css("border", "2px solid green");
        $("#HotelEmailError").text("");
        isMatchHotelEmail = true;
    } else {
        $("#email").css("border", "2px solid red");
        $("#HotelEmailError").text("wrong format : example@gmail.com");
        isMatchHotelEmail = false;
    }
});


/* Save */

function save() {

    if (!isMatchHotelId) {
    } else if (!isMatchHotelName) {
    } else if (!isMatchHotelTelNo) {
    } else if (!isMatchHotelCancel) {
    } else if (!isMatchHotelFee) {
    } else if (!isMatchHotelEmail) {
    } else {

        let hotelId = $('#hotelId').val();
        let hotelLocation = $('#hotelLocation').val();
        let hotelName = $('#hotelName').val();
        let coordinates = $('#coordinates').val();
        let roomType = $('#roomType').val();
        let starRate = $('#starRate').val();
        let packageCategory = $('#packageCategory').val();
        let hotelContactNumber = $('#hotelContactNumber').val();
        let cancelCriteria = $('#cancelCriteria').val();
        let remarks = $('#remarks').val();
        let hotelFee = $('#hotelFee').val();
        let email = $('#email').val();
        let image = $('#image')[0].files[0];


        $.ajax({
            type: "POST",
            url: "http://localhost:8080/hotelService/api/v1/hotel",
            data: {
                hotelId: hotelId,
                hotelLocation: hotelLocation,
                hotelName: hotelName,
                coordinates: coordinates,
                roomType: roomType,
                starRate: starRate,
                packageCategory: packageCategory,
                hotelContactNumber: hotelContactNumber,
                cancelCriteria: cancelCriteria,
                remarks:remarks,
                hotelFee: hotelFee,
                email: email,
                image: image
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


/*Update*/

function update() {

    if (!isMatchHotelId) {
    } else if (!isMatchHotelName) {
    } else if (!isMatchHotelTelNo) {
    } else if (!isMatchHotelCancel) {
    } else if (!isMatchHotelFee) {
    } else if (!isMatchHotelEmail) {
    } else {
        let hotelId = $('#hotelId').val();
        let hotelLocation = $('#hotelLocation').val();
        let hotelName = $('#hotelName').val();
        let coordinates = $('#coordinates').val();
        let roomType = $('#roomType').val();
        let starRate = $('#starRate').val();
        let packageCategory = $('#packageCategory').val();
        let hotelContactNumber = $('#hotelContactNumber').val();
        let cancelCriteria = $('#cancelCriteria').val();
        let remarks = $('#remarks').val();
        let hotelFee = $('#hotelFee').val();
        let email = $('#email').val();
        let image = $('#image')[0].files[0];

        $.ajax({
            type: "PUT",
            url: "http://localhost:8080/hotelService/api/v1/hotel",
            data: {
                hotelId: hotelId,
                hotelLocation: hotelLocation,
                hotelName: hotelName,
                coordinates: coordinates,
                roomType: roomType,
                starRate: starRate,
                packageCategory: packageCategory,
                hotelContactNumber: hotelContactNumber,
                cancelCriteria: cancelCriteria,
                remarks:remarks,
                hotelFee: hotelFee,
                email: email,
                image: image
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


/*Search*/

function search() {
    let hotelId = $('#hotelId').val();
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/hotelService/api/v1/hotel" + hotelId,
        success: (response) => {
            $('#hotelId').val(response.hotelId);
            $('#hotelLocation').val(response.hotelLocation);
            $('#hotelName').val(response.hotelName);
            $('#coordinates').val(response.coordinates);
            $('#roomType').val(response.roomType);
            $('#starRate').val(response.starRate);
            $('#packageCategory').val(response.packageCategory);
            $('#hotelContactNumber').val(response.hotelContactNumber);
            $('#cancelCriteria').val(response.cancelCriteria);
            $('#remarks').val(response.remarks);
            $('#hotelFee').val(response.hotelFee);
            $('#email').val(response.email);
        },

        error: function (error) {
            console.log(error)
            $('#hotelId').val(" ");
            $('#hotelLocation').val(" ");
            $('#hotelName').val(" ");
            $('#coordinates').val(" ");
            $('#roomType').val(" ");
            $('#starRate').val(" ");
            $('#packageCategory').val(" ");
            $('#hotelContactNumber').val(" ");
            $('#cancelCriteria').val(" ");
            $("#remarks").val("");
            $('#hotelFee').val("");
            $('#email').val(" ");
            alert("Hotel Not Found..!");
        }
    })
}


/* Delete*/

function Delete() {
    let hotelId = $('#hotelId').val();
    $.ajax({
        type: "DELETE",
        url: "http://localhost:8080/hotelService/api/v1/hotel" + hotelId,
        success: (response) => {
            alert("Delete Success..!")
            getAll()
        },

        error: function (error) {
            alert("Id not found or can't delete Hotel")
        }
    })
}


/* Get All*/

function getAll() {
    $('#tBody').empty();
    $.ajax({
        type: "Get",
        url: "http://localhost:8080/hotelService/api/v1/hotel",
        success: (response) => {
            response?.map(
                (data) => {
                    let row = `<tr><td>${data.hotelId}</td><td>${data.hotelLocation}</td><td>${data.hotelName}</td><td>${data.coordinates}</td><td>${data.roomType}</td><td>${data.starRate}</td>
                                <td>${data.packageCategory}</td><td>${data.hotelContactNumber}</td><td>${data.cancelCriteria}</td><td>${data.hotelFee}</td><td>${data.email}</td></tr>`;
                    $('#tBody').append(row);
                }
            )
        },

        error: function (error) {
            alert("Hotel Not Found..")
        }
    })
    loadTextFieldValues()
}


function loadTextFieldValues() {
    $("#tBody>tr").on("click", function () {
        let Hotel_id = $(this).children().eq(0).text();
        let Hotel_Location = $(this).children().eq(1).text();
        let Hotel_Name = $(this).children().eq(2).text();
        let Hotel_Coordinates = $(this).children().eq(3).text();
        let Hotel_RoomType = $(this).children().eq(4).text();
        let Hotel_StarRate = $(this).children().eq(5).text();
        let Hotel_PackageCategory = $(this).children().eq(6).text();
        let Hotel_ContactNumber = $(this).children().eq(7).text();
        let Hotel_CancelCriteria = $(this).children().eq(8).text();
        let Hotel_Fee = $(this).children().eq(9).text();
        let Hotel_Email = $(this).children().eq(10).text();


        $('#hotelId').val(Hotel_id);
        $('#hotelLocation').val(Hotel_Location);
        $('#hotelName').val(Hotel_Name);
        $('#coordinates').val(Hotel_Coordinates);
        $('#roomType').val(Hotel_RoomType);
        $('#starRate').val(Hotel_StarRate);
        $('#packageCategory').val(Hotel_PackageCategory);
        $('#hotelContactNumber').val(Hotel_ContactNumber);
        $('#cancelCriteria').val(Hotel_CancelCriteria);
        $('#hotelFee').val(Hotel_Fee);
        $('#email').val(Hotel_Email);
    });
}