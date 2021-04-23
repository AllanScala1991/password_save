const passwordSearch = require("./password");

function searchByName(name, callback){
    if (name){
        passwordSearch.findAll({
            raw: true,
            where: {
                Name: name
            }
        }).then(data => {
            callback({"status" : true, "data" : data});

        }).catch(error => {
            callback({"status": false, "message" : `Erro ao localizar esse password: ${error}`});
        });

    }else{
        callback({"status": false, "message": "Preencha o campo selecionado."})
    }
}

module.exports = {searchByName};