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

module.exports = {searchByName};