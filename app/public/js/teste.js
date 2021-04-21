var controller = require('../../server/controllers/password');



document.querySelector("#testeButton").onclick = () => {
    controller("GroupTest","", "allanscala", "123456", TesteCallback)
}

function TesteCallback(msg){
    alert(msg);
}