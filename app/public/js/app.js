window.$ = window.jQuery = require('jquery');


$(document).ready(() => {
    //$("#app_center").load('./home.html');
})


function homeLoad(){
    $("#app_center").empty();
    $("#app_center").load('./home.html');
}

function newPasswordLoad(){
    $("#app_center").empty();
    $("#app_center").load('./new_password.html');
}

function newGroupLoad() {
    $("#app_center").empty();
    $("#app_center").load('./group.html');
}