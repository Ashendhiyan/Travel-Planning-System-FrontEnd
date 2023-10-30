
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
        },
        error:(error) => {
            console.log(error)
        }
    })
}