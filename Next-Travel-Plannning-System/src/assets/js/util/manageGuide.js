getAll();

var isMatchGuideId = false;
var isMatchGuideName = false;
var isMatchGuideAddress = false;
var isMatchGuideTelNo = false;
var isMatchGuideExperience = false;
var isMatchGuideManDayValue = false;



var regExGuideID = /^(G00-)[0-9]{3,4}$/

$('#guideId').keyup(function () {
    var val = $('#guideId').val();
    if (regExGuideID.test(val)) {
        $('#guideId').css('border', '2px solid green')
        $('#idError').text("");
        isMatchGuideId = true;
    } else {
        $('#guideId').css("border", "2px solid red");
        $('#idError').text("wrong format : G00-001");
        isMatchGuideId = false;
    }
});


var regExGuideName = /^[a-zA-Z]{3,15}$/

$("#guideName").keyup(function () {
    var name = $("#guideName").val();
    if (regExGuideName.test(name)) {
        $("#guideName").css("border", "2px solid green");
        $("#nameError").text("");
        isMatchGuideName = true;
    } else {
        $("#guideName").css("border", "2px solid red");
        $("#nameError").text("wrong format : A-Z or a-z");
        isMatchGuideName = false;
    }
});


var regExAddress = /^[a-zA-Z]{3,25}$/;
$('#address').keyup(function (){
    let address = $('#address').val();
    if (regExAddress.test(address)){
        $('#address').css("border", "2px solid green");
        $('#addressError').text("");
        isMatchGuideAddress=true;
    }else {
        $('#address').css("border", "2px solid red");
        $('#addressError').text("wrong format : a-z or A-Z");
        isMatchGuideAddress=false;
    }

});


var regExGuideNumber = /^(?:\+94|0)[1-9]\d{8}$/;

$('#number').keyup(function (){
    let num = $('#number').val();
    if (regExGuideNumber.test(num)){
        $('#number').css("border", "2px solid green");
        $('#telNoError').text("");
        isMatchGuideTelNo=true;
    }else {
        $('#number').css("border", "2px solid red");
        $('#telNoError').text("wrong format : +94769151600 | 0769151600");
        isMatchGuideTelNo=false;
    }

});



var regExGuideExperience = /^[A-z ]{3,20}$/;
$('#experience').keyup(function (){
    let exp = $('#experience').val();
    if (regExGuideExperience.test(exp)){
        $('#experience').css("border", "2px solid green");
        $('#ExpError').text("");
        isMatchGuideExperience=true;
    }else {
        $('#experience').css("border", "2px solid red");
        $('#ExpError').text("wrong format : a-z or A-Z");
        isMatchGuideExperience=false;
    }

});


var regExManDayValue = /^[0-9.]{2,10}$/;
$('#manDayValue').keyup(function (){
    let value = $('#manDayValue').val();
    if (regExManDayValue.test(value)){
        $('#manDayValue').css("border", "2px solid green");
        $('#manDayValueError').text("");
        isMatchGuideManDayValue=true;
    }else {
        $('#manDayValue').css("border", "2px solid red");
        $('#manDayValueError').text("wrong format : 100.00 or 100");
        isMatchGuideManDayValue=false;
    }

});






/* Save */

function save(){

    if (!isMatchGuideId) {
    } else if (!isMatchGuideName){
    } else if (!isMatchGuideAddress) {
    } else if (!isMatchGuideTelNo) {
    } else if (!isMatchGuideExperience){
    } else if (!isMatchGuideManDayValue){
    }else {

        let guideId = $('#guideId').val();
        let guideName = $('#guideName').val();
        let address = $('#address').val();
        let gender = $('#gender').val();
        let number = $('#number').val();
        let experience = $('#experience').val();
        let manDayValue = $('#manDayValue').val();
        let guideImage = $('#guideImage')[0].files[0];
        let nicImage = $('#nicImage')[0].files[0];


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
}


/*Update*/

function update() {

    if (!isMatchGuideId) {
    } else if (!isMatchGuideName){
    } else if (!isMatchGuideAddress) {
    } else if (!isMatchGuideTelNo) {
    } else if (!isMatchGuideExperience){
    } else if (!isMatchGuideManDayValue){
    }else {

        let guideId = $('#guideId').val();
        let guideName = $('#guideName').val();
        let address = $('#address').val();
        let gender = $('#gender').val();
        let number = $('#number').val();
        let experience = $('#experience').val();
        let manDayValue = $('#manDayValue').val();
        let guideImage = $('#guideImage')[0].files[0];
        let nicImage = $('#nicImage')[0].files[0];

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
                                <td>${data.manDayValue}</td></tr>`;
                    $('#tBody').append(row);
                }
            )
        },

        error: function (error) {
            alert("Guide Not Found..")
        }
    })
    loadTextFieldValues()
};


function loadTextFieldValues(){
    $("#tBody>tr").on("click",function (){
        let guide_id = $(this).children().eq(0).text();
        let guide_Name = $(this).children().eq(1).text();
        let guide_Address = $(this).children().eq(2).text();
        let guide_Gender = $(this).children().eq(3).text();
        let guide_Number = $(this).children().eq(4).text();
        let guide_Experience = $(this).children().eq(5).text();
        let guide_Day_Value = $(this).children().eq(6).text();


        $("#guideId").val(guide_id);
        $("#guideName").val(guide_Name);
        $("#address").val(guide_Address);
        $("#gender").val(guide_Gender);
        $("#number").val(guide_Number);
        $("#experience").val(guide_Experience);
        $("#manDayValue").val(guide_Day_Value);
    });

}
