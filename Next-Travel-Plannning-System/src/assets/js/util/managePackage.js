loadTextFieldValues();

function save() {
    let packageId = $('#packageId').val();
    let category = $('#category').val();
    let packageFee = $('#packageFee').val();
    let nights = $('#noOfNights').val();
    let day = $('#noOfDay').val();
    let headCount = $('#headCount').val();

    $.ajax({
        type: "POST",
        url: "http://localhost:8080/userService/api/v1/customer",
        data: {
            packageId: packageId, category: category, packageFee: packageFee, nights: nights, day: day,
            headCount: headCount
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


function update() {
    let packageId = $('#packageId').val();
    let category = $('#category').val();
    let packageFee = $('#packageFee').val();
    let nights = $('#noOfNights').val();
    let day = $('#noOfDay').val();
    let headCount = $('#headCount').val();

    $.ajax({
        type: "PUT",
        url: "http://localhost:8080/userService/api/v1/customer",
        data: {
            packageId: packageId, category: category, packageFee: packageFee, nights: nights, day: day,
            headCount: headCount
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


function search() {
    let packageId = $('#packageId').val();
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/userService/api/v1/customer" + packageId,
        success: function (response) {
            $('#packageId').val(response.packageId);
            $('#category').val(response.category);
            $('#packageFee').val(response.packageFee);
            $('#noOfNights').val(response.nights);
            $('#noOfDay').val(response.day);
            $('#headCount').val(response.headCount);
        },
        error: (error) => {
            console.log(error)
            $('#packageId').val();
            $('#category').val();
            $('#packageFee').val();
            $('#noOfNights').val();
            $('#noOfDay').val();
            $('#headCount').val();
            alert("Customer Not Found..!");
        }
    })
}



function Delete() {
    let packageId = $('#packageId').val();
    $.ajax({
        type: "DELETE",
        url: "http://localhost:8080/userService/api/v1/customer" + packageId,
        success: (response) => {
            alert("Delete Success..!")
            getAll()
        },

        error: function (error) {
            alert("Id not found or can't delete Package")
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
                    let row = `<tr><td>${data.packageId}</td><td>${data.category}</td><td>${data.packageFee}</td><td>${data.nights}</td><td>${data.day}</td><td>${data.headCount}</td>
                         </tr>`;
                    $('#tBody').append(row);
                }
            )
        },

        error: function (error) {
            alert("Package Not Found..")
        }
    })
    loadTextFieldValues();
}




function loadTextFieldValues() {
    $("#tBody>tr").on("click", function () {
        let package_id = $(this).children().eq(0).text();
        let package_category = $(this).children().eq(1).text();
        let package_Fee = $(this).children().eq(2).text();
        let package_night = $(this).children().eq(3).text();
        let package_day = $(this).children().eq(4).text();
        let package_headCount = $(this).children().eq(5).text();

        $('#packageId').val(package_id);
        $('#category').val(package_category);
        $('#packageFee').val(package_Fee);
        $('#noOfNights').val(package_night);
        $('#noOfDay').val(package_day);
        $('#headCount').val(package_headCount);
    });
}