
/* Save */

function save(){
    let guideId = $('#guideId').val();
    let guideName = $('#guideName').val();
    let address = $('#address').val();
    let gender = $('#gender').val();
    let number = $('#number').val();
    let experience = $('#experience').val();
    let manDayValue = $('#manDayValue').val();
    let guideImage = $('#guideImage').val();
    let nicImage = $('#nicImage').val();


    $.ajax({
        type: "POST",
        url: "http://localhost:8080/guideService/api/v1/guide",
        data: {guideId:guideId, guideName:guideName, address:address, gender:gender, number:number,
            experience:experience, manDayValue:manDayValue , guideImage:guideImage ,  nicImage
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


/*Update*/

function update() {

    let guideId = $('#guideId').val();
    let guideName = $('#guideName').val();
    let address = $('#address').val();
    let gender = $('#gender').val();
    let number = $('#number').val();
    let experience = $('#experience').val();
    let manDayValue = $('#manDayValue').val();
    let guideImage = $('#guideImage').val();
    let nicImage = $('#nicImage').val();

    $.ajax({
        type: "PUT",
        url: "http://localhost:8080/guideService/api/v1/guide",
        data: {guideId:guideId, guideName:guideName, address:address, gender:gender, number:number,
            experience:experience, manDayValue:manDayValue , guideImage:guideImage ,  nicImage
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


/*Search*/

function search() {
    let guideId = $('#guideId').val();
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
            alert("Guide Not Found..!");
        }
    })
}


/* Delete*/

function Delete() {
    let guideId = $('#guideId').val();
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
}


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
                                <td>${data.manDayValue}</td><td>${data.guideImage}</td><td>${data.nicImage}</td></tr>`;
                    $('#tBody').append(row);
                }
            )
        },

        error: function (error) {
            alert("Guide Not Found..")
        }
    })
};