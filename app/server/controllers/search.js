const passwordSearch = require("../models/password");

function searchByName(name, callback){
    if (name){
        passwordSearch.findAll({
            raw: true,
            where: {
                Name: name
            }
        }).then(data => {
            if (data.length > 0){
                callback({"status" : true, "data" : data});
            }
            else{
                callback({"status": false, "message": "Nenhuma senha encontrada."})
            }
            

        }).catch(error => {
            callback({"status": false, "message" : `Erro ao localizar esse password: ${error}`});
        });

    }else{
        passwordSearch.findAll({
            raw: true
        }).then(data => {
            callback({"status": true, "data": data});
        }).catch(error => {
            callback({"status": false, "message": `Erro desconhecido: ${error}`});
        })
    }
}

function searchByID(id, callback){
    if (id){
        passwordSearch.findAll({
            raw: true,
            where: {
                id: id
            }
        }).then(data => {
            if (data.length > 0){
                callback({"status" : true, "data" : data});
            }
            else{
                callback({"status": false, "message": "Nenhuma senha encontrada."})
            }
    
        }).catch(error => {
            callback({"status": false, "message" : `Erro ao localizar esse password: ${error}`});
        });
    }
}

function deletePassword(id, callback){
    if (id){
        passwordSearch.destroy({
            where: {
                id: id
            }
        }).then(data => {
            if (data != 0){
                callback({"message": "Senha deletada com sucesso."})
            }else{
                callback({"message" : "Erro ao deletar a senha, tente novamente."})
            }
        }).catch(error => {
            callback({"message": `Erro desconhecido: ${error}`})
        })
    }else{
        callback({"message": "ID não encontrado."})
    }
}

function editPassword(id, group, name, user, password, callback){
    if (id && group && name && user && password){
        passwordSearch.update({
            Group: group,
            Name: name,
            Login: user,
            Password: password,
            where: {
                id: id
            }
        }).then(data => {
            if (data != 0){
                callback({"message": "Senha atualizada com sucesso."})
            }else{
                callback({"message" : "Erro ao atualizar a senha, tente novamente."})
            }
        }).catch(error => {
            callback({"message": `Erro desconhecido: ${error}`})
        })
    }else{
        callback({"message": "Por favor, preencha todos os campos."})
    }
}

module.exports = {searchByName, searchByID, deletePassword, editPassword};