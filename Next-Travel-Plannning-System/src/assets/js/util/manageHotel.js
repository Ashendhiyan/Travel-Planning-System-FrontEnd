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
let image = $('#image').val();


let formData = new FormData;

formData.append("hotelId",hotelId);
formData.append("hotelLocation",hotelLocation);
formData.append("hotelName",hotelName);
formData.append("coordinates",coordinates);
formData.append("roomType",roomType);
formData.append("starRate",starRate);
formData.append("packageCategory",packageCategory);
formData.append("hotelContactNumber",hotelContactNumber);
formData.append("cancelCriteria",cancelCriteria);
formData.append("remarks",remarks);
formData.append("hotelFee",hotelFee);
formData.append("email",email);
formData.append("image",image);



/* Save */

$('#saveHotel').click(function () {
    $.ajax({
        type: "POST",
        url: "http://localhost:8080/hotelService/api/v1/hotel",
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
});


/*Update*/

$('#updateHotel').click(function () {
    $.ajax({
        type: "PUT",
        url: "http://localhost:8080/hotelService/api/v1/hotel",
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
});


/*Search*/

$('#searchHotel').click(function () {
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
            $('#image').val(response.image);
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
            $('#remarks').val(" ");
            $('#hotelFee').val("");
            $('#email').val(" ");
            $('#image').val(" ");
            alert("Guide Not Found..!");
        }
    })
});


/* Delete*/

$('#deleteHotel').click(function () {
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
});


/* Get All*/

function getAll(){
    $('#tBody').empty();
    $.ajax({
        type: "Get",
        url: "http://localhost:8080/hotelService/api/v1/hotel",
        success: (response) => {
            response?.map(
                (data) => {
                    let row = `<tr><td>${data.hotelId}</td><td>${data.hotelLocation}</td><td>${data.hotelName}</td><td>${data.coordinates}</td><td>${data.roomType}</td><td>${data.starRate}</td>
                                <td>${data.packageCategory}</td><td>${data.hotelContactNumber}</td><td>${data.cancelCriteria}</td><td>${data.remarks}</td><td>${data.hotelFee}</td><td>${data.email}</td><td>${data.image}</td></tr>`;
                    $('#tBody').append(row);
                }
            )
        },

        error: function (error) {
            alert("Hotel Not Found..")
        }
    })
};