window.$ = window.jQuery = require('jquery');
var GROUPS = require('../../server/controllers/groups');


var imgPath = ""

function imgSelected(self){
    imgPath = self;

    $(".groupsSelect").empty()

    var groupSelect = document.querySelector(".groupsSelect");

    var divImg = document.createElement('div');
    divImg.className = "imgSelectedShow";

    var img = document.createElement('img')
    img.src = imgPath
    img.className = "showIcon";

    divImg.appendChild(img);
    groupSelect.appendChild(divImg);

}

function saveGroup(){
    var groupName = document.querySelector("#group_input_name").value;

    function callback(message){
        alert(message);
        $("#app_center").empty()
        $("#app_center").load('./group.html')
    }

    GROUPS.CreateGroup(groupName, imgPath, callback)
}

function clearGroup(){
    $("#app_center").empty()
    $("#app_center").load('./group.html')
}