const passwordModel = require('../models/password');

function CreatePassword (group, name, login, password,callback) {
    if (group && name && login && password){
        passwordModel.create({
            Group : group,
            Name: name,
            Login : login,
            Password : password
        }).then(data => {
            if (data === 0){
                callback("Erro ao cadastrar nova senha.");
            }else{
                callback("Senha cadastrada com sucesso.")
            }
        }).catch(error => {
            callback(`Ops, algo deu errado: ${error}`);
        })
    }

    else {
        callback("Por favor, preencha todos os campos.");
    }
}

module.exports = {CreatePassword};