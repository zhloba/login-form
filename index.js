
function signIn() {

    var host = $("#inputUrl").val();
    $.ajax({
        type: 'POST',
        url: host,
        async: true,
        crossDomain: true,
        xhrFields: {
            withCredentials: true
        },        
        dataType: "json",
        data: { username: $("#inputEmail").val(), password: $("#inputPassword").val() }       
    })
    .done(function (data) {        
        showAlert(data.errorCode);
    })
    .fail(function (error) {       
        showAlert(error.errorCode);
    });
};

function showAlert(message) {
    $("#alertContent").html(message);
    $("#alert").alert();
};