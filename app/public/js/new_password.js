window.$ = window.jQuery = require('jquery');
const GROUPS = require('../../server/controllers/groups');
const PASSWORDS = require('../../server/controllers/password');


$(document).ready(() => {
    GROUPS.searchAllGroup(fillSelectGroups);
 })


 function fillSelectGroups(data, dataLength){
    if(dataLength > 0){
        var select = document.querySelector("#pass_group_select")
        data.forEach(function (group, index) {
            var new_option = document.createElement('option');
            new_option.value = group.Name;
            new_option.text = group.Name;

            select.appendChild(new_option);
        })

    }
 }

 function saveNewPassword(){
    var groupName = document.querySelector("#pass_group_select").value;
    var name = document.querySelector("#pass_name").value;
    var user = document.querySelector("#pass_user").value;
    var password = document.querySelector("#pass_password").value;

    function callback(message){
        if (message == "Senha cadastrada com sucesso."){
            document.querySelector("#pass_group_select").value = "Sem Grupo";
            document.querySelector("#pass_name").value = "";
            document.querySelector("#pass_user").value = "";
            document.querySelector("#pass_password").value = "";
        }

        document.querySelector("#pass_message_label").innerHTML = message

        function clearMessage(){
            document.querySelector("#pass_message_label").innerHTML = ""
        }

        setTimeout(clearMessage, 3000);
    }

    PASSWORDS.CreatePassword(groupName, name, user, password, callback)
 }  

 function clearInputs(){
    document.querySelector("#pass_group_select").value = "Sem Grupo";
    document.querySelector("#pass_name").value = "";
    document.querySelector("#pass_user").value = "";
    document.querySelector("#pass_password").value = "";
 }