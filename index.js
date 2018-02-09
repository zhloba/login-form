
function signIn() {

    var host = $("#inputUrl").val();
    $.ajax({
        type: 'GET',
        url: host,
        async: true,
        crossDomain: true
        //,
        //data: JSON.stringify(d),
        //dataType: "json",
        // headers: {
        //     'Content-Type': 'application/json',
        //     'Accept': 'application/json'
        // }
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