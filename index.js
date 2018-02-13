
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
        data: JSON.stringify(
            {
                username: $("#inputEmail").val(),
                password: $("#inputPassword").val()
            }
        ),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
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