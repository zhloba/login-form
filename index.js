
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
                login: $("#inputEmail").val(),
                password: $("#inputPassword").val()
            }
        ),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    .done(function (data) {        
        showAlert(data);
    })
    .fail(function (error) {       
        showAlert(error);
    });
};

function showAlert(message) {
    $("#alertContent").html(message);
    $("#alert").alert();
};