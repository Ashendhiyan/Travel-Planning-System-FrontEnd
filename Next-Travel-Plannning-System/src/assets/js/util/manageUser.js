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




const regUserNic=/^([0-9]{12}|[0-9V]{10})$/;

$('#nic').keyup(function (){
    let nic = $('#nic').val();
    if (regUserNic.test(nic)){
        $('#nic').css("border", "2px solid green");
        $('#userNicError').text("");
        isMatchUserNic=true;
    }else {
        $('#nic').css("border", "2px solid red");
        $('#userNicError').text("wrong format : 0-9V or 0-12");
        isMatchUserNic=false;
    }

});