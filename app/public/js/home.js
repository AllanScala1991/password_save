window.$ = window.jQuery = require('jquery');
var GROUPS = require('../../server/controllers/groups');


$(document).ready(() => {
   GROUPS.searchAllGroup(searchAllGroup);
})


function searchAllGroup(data, dataLength){
    if(dataLength <= 0){
        alert(data) // MENSAGEM EXIBIDA QUANDO NAO EXISTE GRUPO CADASTRADO
    }
    else if (dataLength > 0){
        var container = document.querySelector(".center_container");
        data.forEach(function (group, index){
            var box_result = document.createElement('div');
            box_result.className = "box_result";

            var internalBox1 = document.createElement('div');
            internalBox1.className = 'internalBox';

            var img = document.createElement('img');
            img.src = group.Icon;
            img.className = 'imgBox';

            var internalBox2 = document.createElement('div');
            internalBox2.className = 'internalBox';

            var label = document.createElement('label');
            label.className = 'totalText'
            label.textContent = group.Name 

            internalBox1.appendChild(img);
            internalBox2.appendChild(label);
            box_result.appendChild(internalBox1);
            box_result.appendChild(internalBox2);
            container.appendChild(box_result);
        })
    }
}