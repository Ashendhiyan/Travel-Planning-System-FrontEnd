let guideId = $('#guideId').val();
let guideName = $('#guideName').val();
let address = $('#address').val();
let gender = $('#gender').val();
let number = $('#number').val();
let experience = $('#experience').val();
let manDayValue = $('#manDayValue').val();
let guideImage = $('#guideImage').val();
let nicImage = $('#nicImage').val();
let guideIDImage = $('#guideIDImage').val();

let formData = new FormData;

formData.append("guideId", guideId);
formData.append("guideName", guideName);
formData.append("address", address);
formData.append("gender", gender);
formData.append("number", number);
formData.append("experience", experience);
formData.append("manDayValue", manDayValue);
formData.append("guideImage", guideImage);
formData.append("nicImage", nicImage);
formData.append("guideIDImage", guideIDImage);


/* Save */

$('#saveGuide').click(function () {
    $.ajax({
        type: "POST",
        url: "http://localhost:8080/guideService/api/v1/guide",
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

$('#updateGuide').click(function () {
    $.ajax({
        type: "PUT",
        url: "http://localhost:8080/guideService/api/v1/guide",
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

$('#searchGuide').click(function () {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/guideService/api/v1/guide" + guideId,
        async: true,
        success: (response) => {
            $('#guideId').val(response.guideId);
            $('#guideName').val(response.guideName);
            $('#address').val(response.address);
            $('#gender').val(response.gender);
            $('#number').val(response.number);
            $('#experience').val(response.experience);
            $('#manDayValue').val(response.manDayValue);
            $('#guideImage').val(response.guideImage);
            $('#nicImage').val(response.nicImage);
            $('#guideIDImage').val(response.guideIDImage);
        },

        error: function (error) {
            console.log(error)
            $('#guideId').val(" ");
            $('#guideName').val(" ");
            $('#address').val(" ");
            $('#gender').val(" ");
            $('#number').val(" ");
            $('#experience').val(" ");
            $('#manDayValue').val(" ");
            $('#guideImage').val(" ");
            $('#nicImage').val(" ");
            $('#guideIDImage').val(" ");
            alert("Guide Not Found..!");
        }
    })
});


/* Delete*/

$('#deleteGuide').click(function () {
    $.ajax({
        type: "DELETE",
        url: "http://localhost:8080/guideService/api/v1/guide" + guideId,
        success: (response) => {
            alert("Delete Success..!")
            getAll()
        },

        error: function (error) {
            alert("Id not found or can't delete Guide")
        }
    })
});


/* Get All*/

function getAll(){
    $('#tBody').empty();
    $.ajax({
        type: "Get",
        url: "http://localhost:8080/guideService/api/v1/guide",
        success: (response) => {
            response?.map(
                (data) => {
                    let row = `<tr><td>${data.guideId}</td><td>${data.guideName}</td><td>${data.address}</td><td>${data.gender}</td><td>${data.number}</td><td>${data.experience}</td>
                                <td>${data.manDayValue}</td><td>${data.guideImage}</td><td>${data.nicImage}</td><td>${data.guideIDImage}</td></tr>`;
                    $('#tBody').append(row);
                }
            )
        },

        error: function (error) {
            alert("Guide Not Found..")
        }
    })
};