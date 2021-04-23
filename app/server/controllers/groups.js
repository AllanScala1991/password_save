const groupModel = require("../models/groups");

function CreateGroup (name, callback) {

    if (name){
        groupModel.create({
            Name: name
        }).then(data => {

            if(data === 0){
                callback("Erro ao criar um novo grupo.");

            }else {
                callback("Grupo salvo com sucesso.");

            }
        }).catch(error => {
            callback(`Ops, algo deu errado: ${error}`);

        })
    }else{

        callback("Por favor, preencha todos os campos.");
    }
    
}

module.exports = CreateGroup;