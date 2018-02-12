
function signIn() {

    var host = $("#inputUrl").val();
    $.ajax({
        type: 'GET',
        url: host,
        async: true,
        crossDomain: true,
        xhrFields: {
            withCredentials: true
        },        
        dataType: "json"
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