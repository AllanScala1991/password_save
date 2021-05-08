const groupModel = require("../models/groups");

function CreateGroup (name, icon, callback) {

    if (name && icon){
        groupModel.create({
            Name: name,
            Icon: icon
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

function searchAllGroup (callback) {
    
    groupModel.findAll({
        raw: true,
    }).then(data => {
        if (data.length > 0){
            callback(data, data.length);
        }else{
            callback("Nenhum grupo foi registrado.", data.length);
        }
    }).catch(err => {
        callback(`Ocorreu um erro desconhecido: ${err}`, 0);
    })

}

module.exports = {CreateGroup, searchAllGroup};
