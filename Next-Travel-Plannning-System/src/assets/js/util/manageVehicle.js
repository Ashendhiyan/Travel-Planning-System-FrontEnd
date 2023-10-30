
function save(){
    let registrationNumber = $('#registrationNumber').val();
    let vehicleBrand = $('#vehicleBrand').val();
    let category = $('#category').val();
    let fuelType = $('#fuelType').val();
    let isHybrid = $('#isHybrid').val();
    let fuelUsage = $('#fuelUsage').val();
    let frontView = $('#frontView').val();
    let rearView = $('#rearView').val();
    let sideView = $('#sideView').val();
    let otherSideView = $('#otherSideView').val();
    let seatCapacity = $('#seatCapacity').val();
    let vehicleType = $('#vehicleType').val();
    let transmission = $('#transmission').val();
    let driverName = $('#driverName').val();
    let driverNumber = $('#driverName').val();
    let licenseFront = $('#licenseFront').val();
    let licenseRear = $('#licenseRear').val();

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
    let frontView = $('#frontView').val();
    let rearView = $('#rearView').val();
    let sideView = $('#sideView').val();
    let otherSideView = $('#otherSideView').val();
    let seatCapacity = $('#seatCapacity').val();
    let vehicleType = $('#vehicleType').val();
    let transmission = $('#transmission').val();
    let driverName = $('#driverName').val();
    let driverNumber = $('#driverName').val();
    let licenseFront = $('#licenseFront').val();
    let licenseRear = $('#licenseRear').val();

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





function getAll() {
    $('#tBody').empty();
    $.ajax({
        type: "Get",
        url: "http://localhost:8080/vehicleService/api/v1/vehicle",
        success: (response) => {
            response?.map(
                (data) => {
                    let row = `<tr><td>${data.registrationNumber}</td><td>${data.vehicleBrand}</td><td>${data.category}</td><td>${data.fuelType}</td><td>${data.isHybrid}</td><td>${data.fuelUsage}</td>
                                        <td>${data.frontView}</td><td>${data.rearView}</td><td>${data.sideView}</td><td>${data.otherSideView}</td>
                                        <td>${data.seatCapacity}</td><td>${data.vehicleType}</td><td>${data.transmission}</td><td>${data.driverName}</td>
                                        <td>${data.driverNumber}</td><td>${data.licenseFront}</td><td>${data.licenseRear}</td></tr>`;
                    $('#tBody').append(row);
                }
            )
        },

        error: function (error) {
            alert("Vehicle Not Found..")
        }
    })
}