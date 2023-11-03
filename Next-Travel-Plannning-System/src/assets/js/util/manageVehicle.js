// getAll();







function save(){
    let registrationNumber = $('#registrationNumber').val();
    let vehicleBrand = $('#vehicleBrand').val();
    let category = $('#category').val();
    let fuelType = $('#fuelType').val();
    let isHybrid = $('#isHybrid').val();
    let fuelUsage = $('#fuelUsage').val();
    let frontView = $('#frontView')[0].files[0];
    let rearView = $('#rearView')[0].files[0];
    let sideView = $('#sideView')[0].files[0];
    let otherSideView = $('#otherSideView')[0].files[0];
    let seatCapacity = $('#seatCapacity').val();
    let vehicleType = $('#vehicleType').val();
    let transmission = $('#transmission').val();
    let driverName = $('#driverName').val();
    let driverNumber = $('#driverNumber').val();
    let licenseFront = $('#licenseFront')[0].files[0];
    let licenseRear = $('#licenseRear')[0].files[0];

    $.ajax({
        type:"POST",
        url:"http://localhost:8080/vehicleService/api/v1/vehicle",
        data:{registrationNumber:registrationNumber, vehicleBrand:vehicleBrand, category:category, fuelType:fuelType,
        isHybrid:isHybrid, fuelUsage:fuelUsage, frontView:frontView, rearView:rearView, sideView:sideView,
            otherSideView:otherSideView, seatCapacity:seatCapacity, vehicleType:vehicleType, transmission:transmission,
            driverName:driverName, driverNumber:driverNumber, licenseFront:licenseFront, licenseRear:licenseRear
        },
        success:(response) => {
            console.log(response)
            getAll()
        },
        error:(error) => {
            console.log(error)
        }
    })
}



function update(){
    let registrationNumber = $('#registrationNumber').val();
    let vehicleBrand = $('#vehicleBrand').val();
    let category = $('#category').val();
    let fuelType = $('#fuelType').val();
    let isHybrid = $('#isHybrid').val();
    let fuelUsage = $('#fuelUsage').val();
    let frontView = $('#frontView')[0].files[0];
    let rearView = $('#rearView')[0].files[0];
    let sideView = $('#sideView')[0].files[0];
    let otherSideView = $('#otherSideView')[0].files[0];
    let seatCapacity = $('#seatCapacity').val();
    let vehicleType = $('#vehicleType').val();
    let transmission = $('#transmission').val();
    let driverName = $('#driverName').val();
    let driverNumber = $('#driverNumber').val();
    let licenseFront = $('#licenseFront')[0].files[0];
    let licenseRear = $('#licenseRear')[0].files[0];

    $.ajax({
        type:"PUT",
        url:"http://localhost:8080/vehicleService/api/v1/vehicle",
        data:{registrationNumber:registrationNumber, vehicleBrand:vehicleBrand, category:category, fuelType:fuelType,
            isHybrid:isHybrid, fuelUsage:fuelUsage, frontView:frontView, rearView:rearView, sideView:sideView,
            otherSideView:otherSideView, seatCapacity:seatCapacity, vehicleType:vehicleType, transmission:transmission,
            driverName:driverName, driverNumber:driverNumber, licenseFront:licenseFront, licenseRear:licenseRear
        },
        success:(response) => {
            console.log(response)
            getAll()
        },
        error:(error) => {
            console.log(error)
        }
    })
}



function Delete() {
    let registrationNumber = $('#registrationNumber').val();
    $.ajax({
        type: "DELETE",
        url: "http://localhost:8080/vehicleService/api/v1/vehicle" + registrationNumber,
        success: (response) => {
            alert("Delete Success..!")
            getAll()
        },

        error: function (error) {
            alert("Id not found or can't delete Vehicle")
        }
    })
}




function search() {
    let ID = $('#registrationNumber').val();
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/vehicleService/api/v1/vehicle" + ID,
        success: (response) => {
            $('#registrationNumber').val(response.registrationNumber);
            $('#vehicleBrand').val(response.vehicleBrand);
            $('#category').val(response.category);
            $('#fuelType').val(response.fuelType);
            $('#isHybrid').val(response.isHybrid);
            $('#fuelUsage').val(response.fuelUsage);
            $('#seatCapacity').val(response.seatCapacity);
            $('#vehicleType').val(response.vehicleType);
            $('#transmission').val(response.transmission);
            $('#driverName').val(response.driverName);
            $('#driverNumber').val(response.driverNumber);
        },

        error: function (error) {
            console.log(error)
            $('#registrationNumber').val("");
            $('#vehicleBrand').val("");
            $('#category').val("");
            $('#fuelType').val("");
            $('#isHybrid').val("");
            $('#fuelUsage').val("");
            $('#seatCapacity').val("");
            $('#vehicleType').val("");
            $('#transmission').val("");
            $('#driverName').val("");
            $('#driverNumber').val("");
            alert("Vehicle Not Found..!");
        }
    })
}






function getAll() {
    $('#tBody').empty();
    $.ajax({
        type: "Get",
        url: "http://localhost:8080/vehicleService/api/v1/vehicle",
        success: (response) => {
            response?.map(
                (data) => {
                    let row = `<tr><td>${data.registrationNumber}</td><td>${data.vehicleBrand}</td><td>${data.category}</td><td>${data.fuelType}</td><td>${data.isHybrid}</td><td>${data.fuelUsage}</td>
                                        <td>${data.seatCapacity}</td><td>${data.vehicleType}</td><td>${data.transmission}</td><td>${data.driverName}</td>
                                        <td>${data.driverNumber}</td></tr>`;
                    $('#tBody').append(row);
                }
            )
        },

        error: function (error) {
            alert("Vehicle Not Found..")
        }
    })
    loadTextFieldValues();
}




function loadTextFieldValues() {
    $("#tBody>tr").on("click", function () {
        let Vehicle_id = $(this).children().eq(0).text();
        let Vehicle_Brand = $(this).children().eq(1).text();
        let Vehicle_category = $(this).children().eq(2).text();
        let Vehicle_fuelType = $(this).children().eq(3).text();
        let Vehicle_isHybrid = $(this).children().eq(4).text();
        let Vehicle_fuelUsage = $(this).children().eq(5).text();
        let Vehicle_seatCapacity = $(this).children().eq(6).text();
        let Vehicle_Type = $(this).children().eq(7).text();
        let Vehicle_transmission = $(this).children().eq(8).text();
        let Vehicle_driverName = $(this).children().eq(9).text();
        let Vehicle_driverNumber = $(this).children().eq(10).text();



        $('#registrationNumber').val(Vehicle_id);
        $('#vehicleBrand').val(Vehicle_Brand);
        $('#category').val(Vehicle_category);
        $('#fuelType').val(Vehicle_fuelType);
        $('#isHybrid').val(Vehicle_isHybrid);
        $('#fuelUsage').val(Vehicle_fuelUsage);
        $('#seatCapacity').val(Vehicle_seatCapacity);
        $('#vehicleType').val(Vehicle_Type);
        $('#transmission').val(Vehicle_transmission);
        $('#driverName').val(Vehicle_driverName);
        $('#driverNumber').val(Vehicle_driverNumber);

    });
}