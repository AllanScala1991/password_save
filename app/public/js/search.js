window.$ = window.jQuery = require('jquery');

var searchController = require("../../server/controllers/search");


function SearchCallback(response){
    if (response.status){
        var box = document.createElement("div");
        box.className = "boxResult";

        var groupColumn = document.createElement("div")
        groupColumn.className = "boxColumn boxTitle"
        groupColumn.innerText = "Grupo"

        var nameColumn = document.createElement("div")
        nameColumn.className = "boxColumn boxTitle"
        nameColumn.innerText = "Nome"

        var loginColumn = document.createElement("div")
        loginColumn.className = "boxColumn boxTitle"
        loginColumn.innerText = "Login"

        var passwordColumn = document.createElement("div")
        passwordColumn.className = "boxColumn boxTitle"
        passwordColumn.innerText = "Password"

        var actionsColumn = document.createElement("div")
        actionsColumn.className = "boxColumn boxTitle"
        actionsColumn.innerText = "Ações"

        box.appendChild(groupColumn);
        box.appendChild(nameColumn);
        box.appendChild(loginColumn);
        box.appendChild(passwordColumn);
        box.appendChild(actionsColumn);

        var resultFilter = document.querySelector(".resultFilter");

        resultFilter.appendChild(box)

        for (var i = 0; i < response.data.length; i++){
            var boxResult = document.createElement("div");
            boxResult.className = "boxResult";

            var boxGroup = document.createElement("div");
            boxGroup.className = "boxColumn"
            boxGroup.innerHTML =  response.data[i].Group

            var boxName = document.createElement("div");
            boxName.className = "boxColumn"
            boxName.innerHTML = response.data[i].Name

            var boxLogin = document.createElement("div");
            boxLogin.className = "boxColumn"
            boxLogin.innerHTML = response.data[i].Login

            var boxPassword = document.createElement("div");
            boxPassword.className = "boxColumn"
            boxPassword.innerHTML = response.data[i].Password

            var boxEdit = document.createElement("div");
            boxEdit.className = "boxColumn"

            var imgEdit = document.createElement("img");
            imgEdit.src = "../img/edit-32.png";
            imgEdit.className = "searchIcon" ;
            imgEdit.setAttribute("onclick", `editPassword(${response.data[i].id})`)

            var imgDelete = document.createElement("img");
            imgDelete.src = "../img/delete-32.png";
            imgDelete.className = "searchIcon"
            imgDelete.setAttribute("onclick", `deletePassword(${response.data[i].id})`)

            boxEdit.appendChild(imgEdit);
            boxEdit.appendChild(imgDelete)
            boxResult.appendChild(boxGroup);
            boxResult.appendChild(boxName);
            boxResult.appendChild(boxLogin);
            boxResult.appendChild(boxPassword);
            boxResult.appendChild(boxEdit);
            resultFilter.appendChild(boxResult);
        }
    }else{
        if (response.message == undefined){
            $('.resultFilter').empty()
        }else{
            alert(response.message)
        }
        
    }
}

function Search(){
    var name = document.querySelector("#searchName").value;
    searchController.searchByName(name, SearchCallback);
    $('.resultFilter').empty()
}

function fillEdit(data){
    // ABRIR O MODAL DE EDITAR E PREENCHER OS CAMPOS COM OS DADOS RECEBIDOS DO BACKEND
}

function editPassword(id){
    searchController.searchByID(id, fillEdit)
}



function deletePassword(id){
    function reponseDelete(data){
        alert(data.message);
        Search();
    }

    searchController.deletePassword(id, reponseDelete);
}
